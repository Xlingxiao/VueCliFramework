import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

const routers = new Router({
    // mode: 'hash',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'hello',
            component: () => import('../components/HelloWorld')
        },
    ]
})


export default routers;