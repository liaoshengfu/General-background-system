<!-- template -->
<template>
    <div class="">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>拖拽弹框</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <p>通过指令 v-dialogDrag 使 Dialog 对话框具有可拖拽的功能。</p>
            <br>
            <el-button type="primary" @click="dialogVisible = true;">点我弹框</el-button>
        </div>
        <el-dialog v-dialogDrag title=" 拖曳弹框" :visible.sync="dialogVisible" center width="30%"  >
            <span>点击我可以拖动我！</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    export default {
        name: "",
        data() {
            return {
                 dialogVisible: false
            }
        },
        components: {},
        methods: {
            
        }
    }
</script>

<!-- style -->
<style lang="less" scoped>

</style>