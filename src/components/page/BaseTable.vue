<!-- template -->
<template>
    <div class>
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 基础表格
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div>
                <el-button type="primary" icon="el-icon-delete">批量删除</el-button>
                <el-button type="primary" icon="el-icon-circle-plus-outline">增加</el-button>
                <el-button type="success" icon="el-icon-download" @click="exportExcel">导出</el-button>
                <div class="search">
                    <el-input placeholder="请输入内容" v-model="input" clearable class="handle-input"></el-input>
                    <el-button type="primary" icon="el-icon-search" class="searchbtn">搜索</el-button>
                </div>
            </div>
            <div style="margin-top:30px;border:1px solid #EBEEF5">
                <el-table border v-loading="loading" element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" stripe
                    highlight-current-row :header-cell-style="{background:'#BBFFEE',color:'#606266'}" :data="tableData"
                    style="width: 100%">
                    <el-table-column type="index" label="序号" width="60" align="center">
                        <template slot-scope="scope">
                            <span>{{scope.$index+(paginations.pageIndex - 1) * paginations.pageSize + 1}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column prop="date" label="日期" width="120"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                    <el-table-column prop="province" label="省份"></el-table-column>
                    <el-table-column prop="city" label="市区"></el-table-column>
                    <el-table-column prop="address" label="地址" width="300"></el-table-column>
                    <el-table-column prop="zip" label="邮编"></el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template>
                            <el-button type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!--分页-->
                <el-row>
                    <el-col :span="24">
                        <div class="pagination">
                            <el-pagination v-if="paginations.total > 0" :current-page="currentPage4"
                                :page-sizes="paginations.pageSizes" :page-size="paginations.pageSize"
                                :layout="paginations.layout" :total="paginations.total" @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"></el-pagination>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    import {
        getlist
    } from "../../api/basetablerequest";
    export default {
        name: "basetable",
        data() {
            return {
                input: "",
                currentPage4: 4,
                //需要给分页组件传的信息
                tableData: [],
                loading: true,
                paginations: {
                    total: 0, // 总数
                    pageIndex: 1, // 当前页
                    pageSize: 10, // 1页显示多少条
                    pageSizes: [10, 20, 30, 50, 100,1000], //每页显示多少条
                    layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
                }
            };
        },
        components: {},
        methods: {
            // 每页多少条切换
            handleSizeChange(pageSize) {
                this.paginations.pageSize = pageSize;
                this.gettablelist();
            },
            // 上下分页
            handleCurrentChange(page) {
                this.paginations.pageIndex = page;
                this.gettablelist();
            },
            gettablelist() {
                // 先准备两个传送给后台的参数，当前页，当前页显示的条数
                let pagedata = {
                    limit: this.paginations.pageSize,
                    currentpage: this.paginations.pageIndex
                };
                getlist(pagedata).then(res => {
                    this.loading = false;
                    let tabletotal = res.data.data.total;
                    let tabledata = res.data.data.tablelist;
                    this.paginations.total = tabletotal;
                    this.tableData = tabledata;
                    //  debugger
                });
            },
            //导出的方法
            exportExcel() {
                require.ensure([], () => {
                    const {
                        export_json_to_excel
                    } = require('../../excel/Export2Excel');
                    const tHeader = ['序号', '日期', '姓名','省份', '市区', '地址','邮编'];
                    // 上面设置Excel的表格第一行的标题
                    const filterVal = ['sortnum', 'date', 'name','province', 'city', 'address','zip'];
                    // 上面的index、nickName、name是tableData里对象的属性
                    const list = this.tableData; //把data里的tableData存到list
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '列表excel');
                })
            },

            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
        },
        mounted() {
            this.gettablelist();
        }
    };
</script>

<!-- style -->
<style lang="less">
    .search {
        float: right;
    }

    1 .el-input--small .el-input__inner {
        height: 32px;
        line-height: 32px;
        width: 300px;
    }

    .el-button {
        padding: 9px 15px;
        font-size: 12px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }

    .el-input__inner {
        padding-right: 30px;
        height: 33px;
        line-height: 33px;
        margin-left: 10px;
    }

    .searchbtn {
        margin-left: 20px;
    }

    /*表格对齐*/
    body .el-table th.gutter {
        display: table-cell !important;
    }

    /*表格字体居中*/
    .el-table td,
    .el-table th {
        text-align: center !important;
    }

    /*表格边框颜色*/
    .el-table td,
    .el-table th.is-leaf,
    .el-table--border,
    .el-table--group {
        border-color: 1px solid #ebeef5;
        border-left: none;
    }

    /*表格边框颜色*/
    .el-table--border::after,
    .el-table--group::after,
    .el-table::before {
        background-color: #ebeef5;
    }

    // 解决element-ui的表格设置固定栏后，边框线消失的bug
    .el-table {

        th,
        td:not(.is-hidden):last-child {
            right: -1px;
        }
    }
</style>