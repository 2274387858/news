import Vue from "vue"
// + 导入App.vue
import App from "./App.vue"
import Router from 'vue-router'
import Login from "@/pages/Login"
import VueRouter from "vue-router"
Vue.use(Router)
const routes = [
    { path:"/login",component:Login }
]
const router = new VueRouter({
    routes
})
new Vue({
    el: "#app",

    // - 删除该data
    // data: {
    //     message: "hello webpack and vue!"
    // }
    router,
    render: function(createElement){
        return createElement(App)
    },
    
})