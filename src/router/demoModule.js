// 构建菜单路由
const demoMenu = {
    path: '/demoMenu',
    component: () => import('@/views/modules/demoModule/demoMenu/demoItem'),
    children: [
        {
            path: '/demoItem/list',
            component: () => import('@/views/modules/demoModule/demoMenu/demoItem/list')
        }
    ]
}
// 构建模块路由
export default [
    {
        path: '/demoModule',
        component: () => import('@/views/modules/demoModule'),
        children: [
            demoMenu
        ]
    }
]
