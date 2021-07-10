<template>
    <div class="container">
        <navbar :watchScrollStyle="true"></navbar>
        <section class="life">
            <h1 class="title">组织生活</h1>
            <hoverShowBox :details="hoverShowBoxDetails"></hoverShowBox>
        </section>
        <section class="introduction">
            <h1 class="title">方向介绍</h1>
        </section>
        <section class="member">
            <h1 class="title">成员介绍</h1>
        </section>
    </div>
</template>

<script>
    import hoverShowBox from "@/components/hoverShowBox.vue"
    export default {
        components:{hoverShowBox},
        props:{},
        data(){
            return{
               
            }
        },
        computed: {
           hoverShowBoxDetails(){
               return this.$store.state.orgShow.hoverShowBoxDetails
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
    .container{
        overflow: hidden;
        section{
            padding:20px 0;
            margin-top:80px;
        }
        .title{
            width:1280px;
            margin:0 auto;
        }
    }
</style>