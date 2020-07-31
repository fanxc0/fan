<template>
    <div id="app1">

        <input type="text" v-bind:value="msg" />
        <p>msg:  {{msg}}</p>
        <p>reverseMsg:  {{reverseMsg}}</p>
        <ur id="cc">
            <li v-for="(item,i) in items" :key="item"  >
                {{i}}:{{item}}
            </li>
        </ur>
        <a v-if="msg" :href="url">跳转</a>
    </div>
</template>

<script>
    export default {
        name: "base1",
        data () {
            return {
                msg: '消息123',
                code: true,
                url: 'www.baidu.com',
                items: [1,2,3,4]
            }
        },
        props: {
            mac: String
        },
        computed: {
            reverseMsg: {
                get: function(){
                    return this.msg.split('').reverse().join('');
                },
                set: function(){

                }
            }
        },
        watch: {

        }
    }


</script>

<style scoped>
a{
    color: blue;
}
</style>