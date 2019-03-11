import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // 设置属性
    menuItems:{}
  },
  getters: {
    // 获取属性的状态
  },
  mutations:{
    // 改变属性的状态
    setMenuItems(state, data) {
      state.menuItems = data
    },
    // 将匹配到的对象，在menuItems中删除
    removeMenuItems(state, data) {
      state.menuItems.forEach((item, index) => {
        if(item == data) {
          state.menuItems.splice(index,1)
        }
      })
    },
    pushMenuItems(state, data) {
      state.menuItems.push(data)
    }
  },
  actions:{
    // 应用mutations
  }
})
