<!-- template -->
<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
        <div class="logo">后台管理系统</div>

        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <!--el-tooltip提示信息  -->
                    <el-tooltip effect="light" :content="fullscreen?`取消全屏`:`全屏`" placement="left-start">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>

                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <!-- 跳转到tabs -->
                        <router-link to="/tabs">
                            <!-- 点击这个图标就会跳转，没有这个图标将什么都不会显示 -->
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <!-- 有消息就会显示 没有消息将不会显示 -->
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>

                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../../assets/img/img.jpg" />
                </div>
                <!-- 用户名下拉菜单 -->
                <!--trigger：触发下拉的行为是点击-->
                <!--@command点击菜单项 触发的事件-->
                <!-- 默认情况下hover状态下就能显示下拉菜单的内容，这里设置了trigger的触发下拉的行为为click -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{loginusername}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>

                    <el-dropdown-menu slot="dropdown">
                        <a href="https://element.eleme.cn/2.0/#/zh-CN" target="_blank">
                            <el-dropdown-item>使用UI库</el-dropdown-item>
                        </a>
                        <a href="https://www.baidu.com/" target="_blank">
                            <el-dropdown-item divided>项目仓库</el-dropdown-item>
                        </a>
                        <!-- divided显示分割线，command点击菜单项触发的事件回调 -->
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    import bus from "../common/bus";

    export default {
        name: "",
        data() {
            return {
                collapse: false,
                fullscreen: false,
                message: 2,
                username: "默认名字"
            };
        },
        components: {},
        mounted() {
            //   如果页面的宽度小于1500就折叠
            if (document.body.clientWidth < 1500) {
                this.collapseChage();
            }
        },
        computed: {
            loginusername() {
                // 得到登陆的username，如果username为空就是username，否则就是默认值
                let username = localStorage.getItem('username');
                return username ? username : this.username;
            }
        },
        methods: {
            // 侧边栏折叠
            collapseChage() {
                this.collapse = !this.collapse;
                //（事件名称、参数）
                bus.$emit("collapse", this.collapse);
            },

            // 全屏事件
            handleFullScreen() {
                // 得到所有的document
                let element = document.documentElement;
                // 如果不是全屏
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.oRequestFullscreen) {
                        document.oCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                    // 进入全屏
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.oRequestFullscreen) {
                        element.oRequestFullscreen();
                        // IE11
                    } else if (element.msRequestFullscreen) {
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            },

            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if (command == "loginout") {
                    localStorage.removeItem("username");
                    this.$router.push("/login");
                }
            }
        }
    };
</script>

<!-- style -->
<style lang="less" scoped>
    .header {
        // 背景色
        background-color: #242f42;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }

    // 折叠按钮
    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;

    }

    // 后台管理系统
    .header .logo {
        float: left;
        width: 250px;
        line-height: 70px;
    }

    // 右侧div
    .header-right {
        float: right;
        padding-right: 50px;
    }

    // 所有图标
    .header-user-con {
        display: flex;
        height: 70px;
        align-items: center;
    }

    // 全屏和消息图标
    .btn-bell,
    .btn-fullscreen {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }

    // message提示消息
    .btn-bell-badge {
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 50px;
        background: #f56c6c;
        color: #fff;
    }

    // message图标的颜色
    .btn-bell .el-icon-bell {
        color: #fff;
    }

    // 用户名字
    .user-name {
        margin-left: 10px;
    }

    // 用户头像
    .user-avator {
        margin-left: 20px;
    }

    // 头像图片
    .user-avator img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    // 用户名
    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }
</style>