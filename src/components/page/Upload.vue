<!-- template -->
<template>
    <div class="upload">
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="#"><i class="el-icon-lx-tag"></i> 表单相关</a></el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-lx-tag"></i> 文件上传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                <span style="font-weight:bold;">支持拖拽：</span>Element UI自带上传组件。
                访问地址：<a href="http://element.eleme.io/#/zh-CN/component/upload" target="_blank">Element UI Upload</a>
            </div>
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>

            <div class="plugins-tips" style="margin-top:40px">
                <span style="font-weight:bold;">支持裁剪：</span> vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。
                访问地址：<a href="https://github.com/Agontuk/vue-cropperjs" target="_blank">vue-cropperjs</a>
            </div>

            <div class="crop-demo">
                <img :src="cropImg" class="pre-img">
                <div class="crop-demo-btn">选择图片
                    <!-- accept：只支持图片格式 -->
                    <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage" />
                </div>
            </div>

            <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
                <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage"
                    style="width:100%;height:300px;"></vue-cropper>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelCrop">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';
    export default {
        name: "upload",
        data() {
            return {
                defaultSrc: require('../../assets/img/img.jpg'),
                fileList: [],
                imgSrc: '',
                cropImg: '',
                dialogVisible: false,
            }
        },
        components: {
            VueCropper
        },
        methods: {
            setImage(e) {
            //    console.log(e)
                //得到选择图片的文件类型
                const file = e.target.files[0];
                // 如果不是图片类型就中断
                if (!file.type.includes('image/')) {
                    return;
                }
                // 如果是图片类型
                // FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件内容
                const reader = new FileReader();
                // FileReader.onload   处理load事件。该事件在读取操作完成时触发。
                reader.onload = (event) => {
                    // console.log(event)
                    // 打开弹窗
                    this.dialogVisible = true;
                    // 获取图片信息
                    this.imgSrc = event.target.result;
                    // 把裁剪好的图片信息替换在裁剪区
                    this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
                };
                // 将读取到图片信息以字符串形式展示
                reader.readAsDataURL(file);
            },
            cropImage() {
                // 获取canvas绘制的剪裁图像。
                // toDataURL方法获取图像的数据链接
                this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
            },
            cancelCrop() {
                this.dialogVisible = false;
                this.cropImg = this.defaultSrc;
            },
        },
        created() {
            this.cropImg = this.defaultSrc;
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

    .crop-demo {
        display: flex;
        align-items: flex-end;
    }

    .crop-demo-btn {
        position: relative;
        width: 100px;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        margin-left: 30px;
        background-color: #409eff;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .pre-img {
        width: 100px;
        height: 100px;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 5px;
    }

    .crop-input {
        position: absolute;
        width: 100px;
        height: 40px;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
    }
</style>