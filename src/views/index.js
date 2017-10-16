import Hello from './Hello/Hello.vue'
import Home from './Home/Home.vue'
import Users from './Users/Users.vue'

const options = {
    Home,
    Hello,
    Users
}

let install = function(Vue) {
    for (let c in options) {
        let component = options[c]
        Vue.component(component.name, Vue.extend(component))
    }
}

export default {
    ...options,
    install
}