<!-- template -->
<template>
    <div class="markdown">
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="#"><i class="el-icon-lx-tag"></i> 表单相关</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="#"><i class="el-icon-lx-tag"></i> 三级菜单</a></el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-lx-tag"></i> Markdown编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="container">
            <div class="plugins-tips">
                mavonEditor：基于Vue的markdown编辑器。
                访问地址：<a href="https://github.com/hinesboy/mavonEditor" target="_blank">mavonEditor</a>
            </div>
            <!--:subfield="false" 单栏显示，  -->
            <mavon-editor v-model="content" :subfield="false"/>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
               <div>{{content}}</div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    import {
        mavonEditor
    } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "markdown",
        data() {
            return {
                content: ''
            }
        },
        components: {
            mavonEditor
        },
        methods: {
            submit() {
                console.log(this.content);
                // console.log(this.html);
                this.$message.success('提交成功！');
            }
        }
    }
</script>

<!-- style -->
<style lang="less" scoped>
    .plugins-tips {
        background: #eef1f6;
    }

    .plugins-tips a {
        color: #20a0ff;
    }

    .editor-btn {
        margin-top: 20px;
    }
</style>