import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: () => import( /* webpackChunkName: "layout" */ '../components/common/Layout.vue'),
            meta: {
                title: '自述文件'
            },  
            children: [{
                    path: '/home',
                    component: () => import( /* webpackChunkName: "home" */ '../components/page/Home.vue'),
                    meta: {
                        title: '系统首页'
                    }
                }, {
                    path: '/tabs',
                    component: () => import( /* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: {
                        title: 'tab选项卡'
                    }
                }, {
                    path: '/icon',
                    component: () => import( /* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: {
                        title: '自定义图标'
                    }
                }, {
                    path: '/other',
                    component: () => import( /* webpackChunkName: "other" */ '../components/page/Other.vue'),
                    meta: {
                        title: '其他组件'
                    }
                }, {
                    path: '/infinitescroll',
                    component: () => import( /* webpackChunkName: "infinitescroll" */ '../components/page/InfiniteScroll.vue'),
                    meta: {
                        title: '无限滚动'
                    }
                },
                {
                    path: '/basetable',
                    component: () => import( /* webpackChunkName: "basetable" */ '../components/page/BaseTable.vue'),
                    meta: {
                        title: '基础表格'
                    }
                },
                {
                    path: '/baseform',
                    component: () => import( /* webpackChunkName: "baseform" */ '../components/page/BaseForm.vue'),
                    meta: {
                        title: '基础表单'
                    }
                },
                {
                    path: '/vueeditor',
                    component: () => import( /* webpackChunkName: "vueeditor" */ '../components/page/VueEditor.vue'),
                    meta: {
                        title: '富文本编辑器'
                    }
                },
                {
                    path: '/markdown',
                    component: () => import( /* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: {
                        title: 'Markdown编辑器'
                    }
                },
                {
                    path: '/upload',
                    component: () => import( /* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: {
                        title: '文件上传'
                    }
                },
                {
                    path: '/basecharts',
                    component: () => import( /* webpackChunkName: "basecharts" */ '../components/page/BaseCharts.vue'),
                    meta: {
                        title: 'charts图表'
                    }
                },
                {
                    path: '/othercharts',
                    component: () => import( /* webpackChunkName: "othercharts" */ '../components/page/OtherCharts.vue'),
                    meta: {
                        title: '其他图表'
                    }
                },
                {
                    path: '/draglist',
                    component: () => import( /* webpackChunkName: "draglist" */ '../components/page/DragList.vue'),
                    meta: {
                        title: '拖曳列表'
                    }
                },
                {
                    path: '/dragdialog',
                    component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: {
                        title: '拖曳弹窗'
                    }
                },
                {
                    path: '/i18n',
                    component: () => import( /* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: {
                        title: '国际化功能'
                    }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
            ]
        },
        {
            path: '/login',
            component: () => import( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: {
                title: '登录页'
            }
        }
    ]
});