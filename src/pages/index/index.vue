<template>
    <div class="container">
        <navbar :watchTopStyle="true"></navbar>
        <Parallax class="parallax" :speedFactor="0.25" direction="down" fixedClass="is-fixed">
            <img class="bannerImg" :src="bannerImg">
        </Parallax>
        <triD></triD>
        <div class="bigTitle">
            <div>
                <p>学生创新实践中心</p>
                <p>Student Innovation and Practice center</p>
                <p>——TUT SCSE</p>
            </div>
        </div>
        <div class="section">
            <div class="introduction">
                <h1>{{introduction.title}}</h1>
                <p v-for="(item,index) in introduction.content" :key=index>
                    {{item}}
                </p>
            </div>
        </div>
        <div class="section">
            <timeline></timeline>
        </div>
        <triD :top="false"></triD>
        <indexBottomBar></indexBottomBar>
    </div>
</template>

<script>
    import Parallax from 'vue-parallaxy'
    import triD from '@/layout/triDecoration.vue'
    import timeline from '@/components/timeline.vue'
    //静态图片
    import bannerImg from '@/assets/banner.jpg'
    import indexBottomBar from '@/layout/indexBottomBar.vue'
    export default {
        components:{Parallax,triD,timeline,indexBottomBar},
        props:{},
        data(){
            return{
                changeNavbar:true
            }
        },
        computed: {
            banners(){
                return this.$store.state.bannerImgList;
            },
            bannerImg(){
                return bannerImg;
            },
            introduction(){
                return this.$store.state.introduction;
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
        width:100%;
        position: relative;
        overflow: hidden;
        min-height:100vh;
        .bigTitle{
            position:absolute;
            top:0;
            width:100%;
            height:100vh;
            display:flex;
            user-select: none;
            >div{
                margin:auto;
                p:nth-child(1){
                    width:100%;
                    text-align: center;
                    margin-top:-60px;
                    font-size: 10rem;
                    color:white;
                }
                p:nth-child(2){
                    width:100%;
                    text-align: center;
                    margin:auto;
                    font-size: 5rem;
                    color:white;
                }
                p:nth-child(3){
                    width:100%;
                    text-align: right;
                    margin:auto;
                    font-size: 3rem;
                    color:white;
                }
            }
            
        }
        .banner{
            width:100%;
            height:auto;
            position: relative;
            z-index:-999;
            vertical-align: middle;
            // display: table-cell;
            // text-align: center;
            >img{
                width:100%;
                height:100%;
            }
        }
        .bannerImg{
            width:100%;
        }
        .introduction{
            width:1280px;
            margin:auto;
            padding:30px 0 50px;
            >h1{
                padding-left:300px;
            }
            >p{
                text-indent:2rem;
                padding:10px 300px;
            }
        }
    }
    .parallax{
        height:100vh !important;
    }
    .section{
        position:relative;
        width:100%;
    }
    // .box{
    //     width:100%;
    //     height:100vh;
    //     background-color: red;
    // }
    // .box2{
    //     width:100%;
    //     height:100vh;
    //     background-color: blue;
    // }
</style>