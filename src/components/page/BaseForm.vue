<!-- template -->
<template>
    <div class="baseform">
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 基础表格
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="表单名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="选择器">
                        <el-select v-model="form.region" placeholder="请选择手机品牌">
                            <el-option label="苹果" value="苹果"></el-option>
                            <el-option label="华为" value="华为"></el-option>
                            <el-option label="小米" value="小米"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="日期时间">
                        <el-col :span="11">
                            <!-- @JSON(format="yyyy-MM-dd HH:mm:ss")//加上这句处理页面显示时带T的问题。   -->
                            <!-- format输入框的显示格式，绑定值的输出格式 -->
                            <el-date-picker type="date" placeholder="请选择日期" v-model="form.date1" style="width: 100%;" 
                            format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd" >
                            </el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"
                            format="HH 时 mm 分 ss 秒"  value-format="HH-mm-ss" >
                            </el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="城市级联">
                        <el-cascader placeholder="请选择城市" :options="options" v-model="form.options">
                        </el-cascader>
                    </el-form-item>
                    <el-form-item label="选择开关">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="复选框">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="苹果" name="type"></el-checkbox>
                            <el-checkbox label="华为" name="type"></el-checkbox>
                            <el-checkbox label="小米" name="type"></el-checkbox>
                            <el-checkbox label="OPPO" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="单选框">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="文本框">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">表单提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    export default {
        name: "baseform",
        data() {
            return {
                options: [{
                        value: 'guangdong',
                        label: '广东省',
                        children: [{
                                value: 'guangzhou',
                                label: '广州市',
                                children: [{
                                        value: 'tianhe',
                                        label: '天河区'
                                    },
                                    {
                                        value: 'haizhu',
                                        label: '海珠区'
                                    }
                                ]
                            },
                            {
                                value: 'dongguan',
                                label: '东莞市',
                                children: [{
                                        value: 'changan',
                                        label: '长安镇'
                                    },
                                    {
                                        value: 'humen',
                                        label: '虎门镇'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'hunan',
                        label: '湖南省',
                        children: [{
                            value: 'changsha',
                            label: '长沙市',
                            children: [{
                                value: 'yuelu',
                                label: '岳麓区'
                            }]
                        }]
                    }
                ],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    options: [],
                    delivery: true,
                    type: [],
                    resource: '',
                    desc: '',

                }
            };
        },
        methods: {
            submitForm() {
                let formData = [];
                for (var key in this.form) {
                    formData.push(this.form[key])
                }
                console.log(formData)
                // console.log(JSON.stringify(formData))
                this.$message.success('提交成功！');
            }
        }
    }
</script>

<!-- style -->
<style lang="less" scoped>
    .form-box {
        width: 600px;
    }
</style>