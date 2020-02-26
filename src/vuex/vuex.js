import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/**
 * VueX 使用方法：
 * 1. 将变量在下面的state中声明
 * 2. 在mutation中定义修改vuex中数据的方法
 * 3. 获取Vuex数据通过在组件中使用：this.$store.state.变量名获取
 *      例：this.$store.state.value
 * 4. 更新VueX数据通过在组件中调用：this.$store.commit("调用的方法名",传入方法的参数)
 *      例: this.$store.commit("updateTestValue","Updated Success!")
 */

const store =  new Vuex.Store({
    state: {
        testValue:"Test Store Value"
    },
    mutations: {
        // 通过外界的新值来修改仓库中共享数据的值
        updateTestValue(state, new_value) {
            console.log(state);
            console.log(new_value);
            state.testValue = new_value;
        },
    },
    actions: {}
})

export default store;