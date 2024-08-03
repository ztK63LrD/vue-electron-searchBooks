// 对外暴露路由(常量路由)
export const constantRoute = [
    {
        path: '/',
        name: 'home',
        component: () => import('@renderer/views/home/index.vue'),
        meta: {
            title: '后台页面',
        },
    }
]