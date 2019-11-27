/**
* 添加动态(菜单)路由
* @param {*} list 一维数组 数据 
* @param {*} parent 父级id
*/

export const routesData = (list, parent=null) => {
    let tree = [];
    let temp;
    for (let i = 0; i < list.length; i++) {
        if (list[i].parent == parent) {
            let route;
            if (list[i].parent == null) {
                // if (!list[i].children) {
                //     route = {
                //         path: list[i].menu_href,
                //         component: resolve => require([`@/views${list[i].menu_href}`], resolve),
                //         name: list[i].menu_href,
                //         alwaysShow: false,
                //         meta: {
                //             icon: list[i].menu_icon,
                //             index: list[i].id,
                //             title: list[i].menu_name,
                //             roles: list[i].roles,
                //         }
                //     }
                // } else {
                    route = {
                        path: '/' + list[i].menu_href,
                        component: resolve => require([`@/layout/index`], resolve),
                        name: list[i].menu_href,
                        alwaysShow: false,
                        id: list[i].id,
                        meta: {
                            icon: list[i].menu_icon,
                            index: list[i].id,
                            title: list[i].menu_name,
                            roles: list[i].roles, 
                        }
                    }
                // }
            } else {
                route = {
                    path: list[i].menu_href,
                    component: resolve => require([`@/views${list[i].menu_href}`], resolve),
                    name: list[i].menu_href,
                    alwaysShow: false,
                    parentId: list[i].parent,
                    meta: {
                        icon: list[i].menu_icon,
                        index: list[i].id,
                        title: list[i].menu_name,
                        roles: list[i].roles,
                    }
                }
            }

            temp = routesData(list, list[i].id);
            if (temp.length > 0) {
                route.children = temp;
            }
            tree.push(route);
        }
    }
    //最后添加 通配404页面
    // tree.push({ path: '*', redirect: '/404', hidden: true })
    return tree;
}


export const customAddRoutes = (list, parent) => {
    let tree = routesData(list, parent)
    console.log(tree)
    tree.push({ path: '*', redirect: '/404', hidden: true })
    return tree
}