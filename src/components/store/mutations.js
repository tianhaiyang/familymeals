// export const setMenuItems = (state, data) => {
//       state.menuItems = data
//     }
//     // 将匹配到的对象，在menuItems中删除
// export const removeMenuItems = (state, data) => {
//       state.menuItems.forEach((item, index) => {
//         if(item == data) {
//           state.menuItems.splice(index,1)
//         }
//       })
//     }
// export const pushMenuItems = (state, data) => {
//       state.menuItems.push(data)
//     }

// export const userStatus = (state,user) => {
//       if(user) {
//         state.currentUser = user
//         state.isLogin = true
//       }else {
//         state.currentUser = null
//         state.isLogin = false
//       }
// }