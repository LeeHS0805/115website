<template>
    <div class="navbar" ref="navbar" 
    :class="
    watchScrollStyle?
    {
        isShow:!isUp,
        noShow:isUp
    }:
    {
        topStyle:changeStyle,
        noTopStyle:!changeStyle,
    }"
    >
        <img class="logo" :src="logo">
        <div class="list" v-show="!changeStyle">
            <a>
                <router-link to ="/">关于我们</router-link>
            </a>
            <a>
                <router-link to ="/">产品展示</router-link>
            </a>
            <a>
                <router-link to ="/orgShow">组织展示</router-link>
            </a>
            <a>
                <router-link to ="/">关于我们</router-link>
            </a>
            <a>
                <router-link to ="/">加入我们</router-link>
            </a>
        </div>
    </div>
</template>

<script>
    import logo from "../assets/sipc.jpg"
    export default {
        components:{},
        props:{
            watchTopStyle:Boolean,
            watchScrollStyle:Boolean
        },
        data(){
            return{
                logo:logo,
                changeStyle:false,
                isUp:true
            }
        },
        computed: {
           
        },
        watch: {
           watchTopStyle:function(newV,oldV){
            //    console.log(newV);
            //    if(oldV===true){
            //        this.changeStyle = false;
            //        window.addEventListener('scroll',this.watchNavbar);
            //    }
           }
        },
        methods: {
            watchNavbar(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop<=200){
                    this.changeStyle = true;
                } else {
                    this.changeStyle = false;
                }
            },
            watchScroll(e){
                e = e || window.event;
                if(e.wheelDelta){
                    if(e.wheelDelta>=0){
                        this.isUp = true;
                    } else {
                        this.isUp = false;
                    }
                } else {
                     console.log(e.detail);
                    if(e.detail>=0){
                        this.isUp = true;
                    } else {
                        this.isUp = false;
                    }
                }
            }
        },
        created() {
            
        },
        mounted() {
           if(this.watchTopStyle){
               this.changeStyle = true;
               window.addEventListener('scroll',this.watchNavbar);
           } else {
               this.changeStyle = false;
           }
           if(this.watchScrollStyle){
               if(document.attachEvent) document.attachEvent('onmousewheel',this.watchScroll);
               if(document.addEventListener) document.addEventListener('DOMMouseScroll', this.watchScroll, false);
               window.onmousewheel = document.onmousewheel = this.watchScroll; 
           }
        },
};
</script>

<style lang='scss' scoped>
    .topStyle{
        transition:.3s linear;
        background-color: rgba(255,255,255,0);
        height:60px;
    }
    .isShow{
        height:80px;
        transform:translateY(0px);
        transition:.3s linear;
        background-color: white;
        box-shadow:0 0 10px #666;
    }
    .noShow{
        height:80px;
        transform:translateY(-80px);
        background-color: rgba(255,255,255,0);
        transition:.3s linear;
    }
    .noTopStyle{
        transition:.3s linear;
        background-color: white;
        box-shadow:0 0 10px #666;
        height:80px;
    }
    .navbar{
        position: fixed;
        z-index:999;
        width:100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        >.logo{
            width:60px;
            height:60px;
            background-color: black;
            margin-left:40px;
        }
        >.list{
            height:40px;
            line-height: 40px;
            margin-right:40px;
            >a{
                font-size:18px;
                margin:0 60px 0 0;
                font-weight:500;
                transition:.3s linear;
            }
            >a:hover{
                // color:#87CEFA;
                color:#386EB4;
                transition:.3s linear;
            }
        }
    }
</style>