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
                <el-input placeholder="请输入内容" v-model="input" clearable class="handle-input"></el-input>
                <el-button type="primary" icon="el-icon-search" class="searchbtn">搜索</el-button>
            </div>
            <div style="margin-top:30px;border:1px solid #EBEEF5">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column fixed prop="date" label="日期" width="120"></el-table-column>
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
            </div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    export default {
        name: "basetable",
        data() {
            return {
                input: "",
                tableData: [{
                        date: "2016-05-02",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-04",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1517 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-01",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1519 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1516 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-04",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1517 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-01",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1519 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1516 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-04",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1517 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-01",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1519 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1516 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-04",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1517 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-01",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1519 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1516 弄",
                        zip: 200333
                    }
                ]
            };
        },
        components: {},
        methods: {
            handleClick(row) {
                console.log(row);
            }
        }
    };
</script>

<!-- style -->
<style lang="less">
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