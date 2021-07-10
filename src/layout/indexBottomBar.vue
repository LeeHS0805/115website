<template>
    <div class="indexBottomBar">
        <div class="box">
            <h1 class="contact">联系我们</h1>
            <p class="contact">联系地址:{{contactAddress}}</p>
            <p class="contact">联系邮箱:{{contactEmail}}</p>
            <p class="bottom">学生创新实践中心©2010-{{nowYear}}</p>
        </div>    
    </div>
</template>

<script>
    export default {
        components:{},
        props:{},
        data(){
            return{
               nowYear:new Date().getFullYear()
            }
        },
        computed: {
           contactAddress(){
               return this.$store.state.contactAddress;
           },
           contactEmail(){
               return this.$store.state.contactEmail;
           }
        },
        watch: {
           
        },
        methods: {
           
        },
        created() {
           
        },
        mounted() {
           
        },
};
</script>

<style lang='scss' scoped>
    .indexBottomBar{
        padding:20vh 50px 50px 50px;
        background-color:#434343;
        color:white;
        position:relative;
        z-index:-1;
        >div{
            width:1280px;
            >.contact{
                margin:10px;
            }
            >.bottom{
                position:absolute;
                right:60px;
                bottom:20px;
                font-weight:600;
                letter-spacing: 2px;
            }
        }
    }
</style>