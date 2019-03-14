const state = {
    currentUser: null,
    isLogin: false
}

const getters = {
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
}

const mutations = {
    userStatus(state,user){
      if(user) {
        console.log('ccc'+user)
        state.currentUser = user
        state.isLogin = true
      }else {
        console.log('ddd')
        state.currentUser = null
        state.isLogin = false
      }
}
}

const actions = {
    setUser({commit}, user) {
        console.log('bbb')
        commit("userStatus",user)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}