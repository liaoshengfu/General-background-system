<!-- template -->
<template>
    <div class="vueeditor">
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="#"><i class="el-icon-lx-tag"></i> 表单相关</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="#"><i class="el-icon-lx-tag"></i> 三级菜单</a></el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-lx-tag"></i> 富文本编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用。
                访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
            </div>
            <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
            </quill-editor>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
            <div v-html="content">{{content}}</div>
        </div>

    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import {quillEditor} from 'vue-quill-editor'
    export default {
        name: "vueeditor",
        data() {
            return {
                content: '',
                editorOption: {
                    // some quill options
                     placeholder: '从这里开始编辑。。。'
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
            // 失去焦点
            onEditorBlur(quill) {
                console.log('editor blur!', quill)
            },
            // 获取焦点开始编辑
            onEditorFocus(quill) {
                console.log('editor focus!', quill)
            },
            // 初始化
            onEditorReady(quill) {
                console.log('editor ready!', quill)
            },
            // 提交
             submit(){
                console.log(this.content);
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

      .editor-btn{
        margin-top: 20px;
    }
</style>