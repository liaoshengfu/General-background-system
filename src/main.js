import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './components/common/directives'
// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'small' })

// 自定义图标
import './assets/css/icon.css';

// 引入国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // 通过插件的形式挂载,写在下面这段内容的前面
import { messages } from './components/common/i18n';
const i18n = new VueI18n({
    locale: 'zh',
    messages
});


// 防止生产环境的消息提示
Vue.config.productionTip = false;

//使用钩子函数beforeEach对路由进行权限跳转,每个路由改变得时候都会执行beforeEach和afterEach
router.beforeEach((to, from, next) => {
    console.log("to:", to)
    // console.log("from:",from)
    // console.log("next:",next)
    // 设置的浏览器的标题栏，去什么页面就显示什么标题。
    document.title = `后台管理系统--${to.meta.title}`;
    // 得到登录的用户信息
    const role = localStorage.getItem('username');
    // 需要两个条件，如果只是(to.path!=="/login")这个条件的话，用户登录成功后将不会跳转，因为条件始终是(to.path!=="/login")
    // 条件是!role &&to.path!=="/login"时，用户登录成功之后，将会执行next，进行管道中的下一个钩子函数、路由，执行跳转
    if (!role && to.path !== "/login") {
        // 中断导航跳转到指定的导航去
        next("/login")
    }else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
       // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        //navigator.userAgent用户声明浏览器用于声明http请求的用户代理头的值
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            // 调用next(),否则钩子函数将不会执行
            next();
        }
    }
})


new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')