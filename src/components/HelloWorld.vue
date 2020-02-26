<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <el-button type="primary" @click="testGet">测试发GET请求</el-button>
        <el-button type="primary" @click="testUpdateStore">更新vuex数据</el-button>
        <p>store.state.testValue: {{$store.state.testValue}}</p>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: {
            String,
            default: "Vue-router 已启用"
        }
    },
    data() {
        return {
            storeValue: ""
        };
    },
    mounted() {},
    methods: {
        testGet() {
            let url = "/test/getInfo?name=2";
            this.http.get(url);
        },
        testGetStore() {
            console.log(this.$store.state.testValue);
        },
        testUpdateStore() {
            this.$store.commit("updateTestValue", "Changed Test Store Value");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
