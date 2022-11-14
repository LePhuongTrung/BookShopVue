import axios from 'axios';
const state = {
    token: null,
};  

const getters = {
    isAuthenticated: state => !!state.token,    
    StateToken: state => state.token,
};

const actions = {
    async Register({dispatch}, formRegister) {
        await axios.post('users/register', formRegister)
        let UserForm = new FormData()
        UserForm.append('email', formRegister.email)
        UserForm.append('password', formRegister.password)
        await dispatch('/auth', UserForm)
    },
    async LogIn({dispatch}, formLogin) {
        await axios.post('users/login', formLogin)
        await dispatch('/about')
    },
    async LogOut({commit}){
        let user = null
        commit('logout', user)
    }
      
};
const mutations = {
    setUser(state, token){
        state.token = token
    },
    LogOut(state){
        state.token = null
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};
