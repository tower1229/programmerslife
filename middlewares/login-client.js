// login-client.js
export default function ({store, redirect, route}) {
    // 查看 store 中的登录状态，前端路由跳转不会重置 store 中的值
    let isLogin = store.state.common.login;

    
}