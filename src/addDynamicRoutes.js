/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
// export function addDynamicRoutes(menuList = [], routes = []) {
//     var temp = []
//     for (var i = 0; i < menuList.length; i++) {
//         if (menuList[i].children && menuList[i].children.length >= 1) {
//             temp = temp.concat(menuList[i].children)
//         } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
//             //menuList[i].url = menuList[i].url.replace(/^\//, '')
//             menuList[i].url = menuList[i].url.substring(0);
//             try {
//                 // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
//                 // 如url="sys/user"，则组件路径应是"@/views/sys/user.vue",否则组件加载不到
//                 let array = menuList[i].url.split('/')
//                 let url = ''
//                 for (let i = 0; i < array.length; i++) {
//                     url += array[i].substring(0, 1).toUpperCase() + array[i].substring(1) + '/'
//                 }
//                 url = url.substring(0, url.length - 1)
//                 console.log(url)
//                 var route = {
//                     path: '/' + menuList[i].url,
//                     component: resolve => require([`@/views/${url}`], resolve),
//                     name: menuList[i].url,
//                     meta: {
//                         icon: menuList[i].icon,
//                         index: menuList[i].id,
//                         title: menuList[i].name
//                     }
//                 }
//             } catch (e) { }
//             // }
//             routes.push(route)
//         }
//     }
//     if (temp.length >= 1) {
//         addDynamicRoutes(temp, routes)
//     } else {
//         // console.log('动态路由加载...')
//         // console.log('动态路由加载完成.')
//     }
//     return routes
// }


// export const tree = (Morkroutes) => {
//     let arr = addDynamicRoutes(Morkroutes)
//     let Sarr
//     arr.forEach(item => {
//         if (item.path.indexOf('/') !== -1) {
//             if (!Sarr.includes(item.path.split('/')[0])) {
//                 Sarr.push(item.path.split('/')[0])
//             }
//         }
//     });

// }

 /**
  * 添加动态(菜单)路由
  * @param {*} list 一维数组 数据 
  * @param {*} parent 父级id
  */

 export const customAddRoutes = (list, parent) => {
    let tree = [];
    let temp;
    for (let i = 0; i < list.length; i++) {
        if (list[i].parent == parent) {
            let route;
            if (list[i].parent == null) {
                route = {
                    path: '/' + list[i].menu_href,
                    component: resolve => require([`@/layout/index`], resolve),
                    name: list[i].menu_href,
                    meta: {
                        icon: list[i].menu_icon,
                        index: list[i].id,
                        title: list[i].menu_name,
                        roles: list[i].roles,
                    }
                }
            } else {
                route = {
                    path: list[i].menu_href,
                    component: resolve => require([`@/views${list[i].menu_href}`], resolve),
                    name: list[i].menu_href,
                    meta: {
                        icon: list[i].menu_icon,
                        index: list[i].id,
                        title: list[i].menu_name,
                        roles: list[i].roles,
                    }
                }
            }

            temp = customAddRoutes(list, list[i].id);
            if (temp.length > 0) {
                route.children = temp;
            }
            tree.push(route);
        }
    }
    return tree;
}
// export const filterArray = (data, parent) => {
//     let tree = [];
//     let temp;
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].parent == parent) {
//             let obj = data[i];

//             temp = filterArray(data, data[i].id);
//             if (temp.length > 0) {
//                 obj.subs = temp;
//             }
//             tree.push(obj);
//         }
//     }
//     return tree;
// }
