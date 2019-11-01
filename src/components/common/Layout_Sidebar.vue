<template>

    <div class="sidebar">

        <!--default-active当前激活的状态是系统首页  -->
        <!--collapse是否水平折叠收起菜单  -->
        <!-- unique-opened是否只保持一个子菜单的展开，默认为false -->
        <!-- router：是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>

                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>

                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}</el-menu-item>
                            </el-submenu>

                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>

        </el-menu>
    </div>
</template>

<script>
    import bus from "../common/bus";
    export default {
        data() {
            return {
                collapse: false,
                items: [{
                        icon: "el-icon-lx-home",
                        index: "home",
                        title: "系统首页"
                    },
                    {
                        icon: "el-icon-lx-tag",
                        index: "2",
                        title: "其他组件",
                        subs: [{
                            index: 'other',
                            title: '组件集合'
                        },{
                            index: 'infinitescroll',
                            title: '无限滚动'
                        }]
                    },
                    {
                        icon: "el-icon-lx-cascades",
                        index: "basetable",
                        title: "基础表格"
                    },
                    {
                        icon: "el-icon-lx-copy",
                        index: "tabs",
                        title: "tab选项卡"
                    },
                    {
                        icon: "el-icon-lx-calendar",
                        index: "5",
                        title: "表单相关",
                        subs: [{
                                index: "baseform",
                                title: "基础表单"
                            },
                            {
                                index: "3-2",
                                title: "三级菜单",
                                subs: [{
                                        index: "vueeditor",
                                        title: "富文本编辑器"
                                    },
                                    {
                                        index: "markdown",
                                        title: "markdown编辑器"
                                    }
                                ]
                            },
                            {
                                index: "upload",
                                title: "文件上传"
                            }
                        ]
                    },
                    {
                        icon: "el-icon-lx-emoji",
                        index: "icon",
                        title: "自定义图标"
                    },
                    {
                        icon: "el-icon-pie-chart",
                        index: "7",
                        title: "schart图表",
                         subs: [{
                                index: "basecharts",
                                title: "一般图表"
                            },
                            {
                                index: "othercharts",
                                title: "其他图表"
                            }
                        ]
                    },
                    {
                        icon: "el-icon-rank",
                        index: "8",
                        title: "拖拽组件",
                        subs: [{
                                index: "draglist",
                                title: "拖拽列表"
                            },
                            {
                                index: "dragdialog",
                                title: "拖拽弹框"
                            }
                        ]
                    },
                    {
                        icon: "el-icon-lx-global",
                        index: "i18n",
                        title: "国际化功能"
                    },
                    {
                        icon: "el-icon-lx-warn",
                        index: "9",
                        title: "错误处理",
                        subs: [{
                                index: "permission",
                                title: "权限测试"
                            },
                            {
                                index: "404",
                                title: "404页面"
                            }
                        ]
                    },
                    {
                        icon: "el-icon-lx-redpacket_fill",
                        index: "/donate",
                        title: "支持作者"
                    }
                ]
            };
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace("/", "");
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on("collapse", msg => {
                this.collapse = msg;
                bus.$emit("collapse-content", msg);
            });
        }
    };
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    /* 不是el-menu--collapse所有sidebar-el-menu宽度为250px */
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar>ul {
        height: 100%;
    }
</style>