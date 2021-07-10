<template>
    <div class="timeline">
        <div class="banner">
            <img :src="timelineImg">
            <h1>成就</h1>
            <hr>
            <div class="line">
                <div class="arrowCircle" @click="prev">
                    <!-- <svg t="1604930647492" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5451" width="48" height="48"><path d="M204.8 506.667l472.064-512 142.336 153.6-330.752 358.4 330.752 358.4-142.336 153.6-472.064-512z" p-id="5452" fill="#dbdbdb"></path></svg> -->
                </div>
                <div class="circle" 
                v-for="(item,index) in selectedItem" 
                :key="index"
                :class="{'selected':index==selectedIndex}"
                @click="changeItem(index)"
                >
                    <p class="date">{{item.date}}</p>
                </div>
                <div class="arrowCircle" @click="next">
                    <!-- <svg t="1604930714734" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1600" width="48" height="48"><path d="M819.2 512l-472.064 512L204.8 870.4 535.552 512 204.8 153.6 347.136 0 819.2 512z" p-id="1601" fill="#dbdbdb"></path></svg> -->
                </div>
            </div>
        </div>
        <div 
        ref="detailsBox"
        class="showDetails animate__animated" 
        :class="{
            animate__bounceInRight:showAnmRIn,
            animate__bounceInLeft:showAnmLIn,
            animate__bounceOutRight:showAnmROut,
            animate__bounceOutLeft:showAnmLOut
        }"
        >
            <h1>{{detailsTitle}}</h1>
            <p v-for="(item,index) in detailsContent" :key="index">
                {{item}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        components:{},
        props:{
            amounts:{
                default:3
            },
            index:{
                default:0
            }
        },
        data(){
            return{
               isLock:false,
               detailsHeight:0,
               selectedIndex:0,
               details:[],
               selectedItem:[{
                   date:"",
                   title:"",
                   content:""
               }],
               showAnmRIn:false,
               showAnmLIn:false,
               showAnmROut:false,
               showAnmLOut:false,
               itemsAll:[
                   {
                       date:"2020-07",
                       title:"2020-07奖项",
                       content:['标签1','标签2','标签3','标签4','标签3']
                    },
                   {
                       date:"2020-06",
                       title:"2020-06奖项",
                       content:['标签3','标签4']
                    },
                   {
                       date:"2020-05",
                       title:"2020-05奖项",
                       content:['标签5','标签6']
                    },
                   {
                       date:"2020-04",
                       title:"2020-04奖项",
                       content:['标签7','标签8']
                    },
                   {
                       date:"2020-03",
                       title:"2020-03奖项",
                       content:['标签9','标签10']
                    },
               ]
            }
        },
        computed: {
           timelineImg(){
               return this.$store.state.timelineImg;
           },
           detailsTitle(){
               return this.selectedItem[this.selectedIndex].title;
           },
           detailsContent(){
               return this.selectedItem[this.selectedIndex].content;
           }
        },
        watch: {
           
        },
        methods: {
           changeItem(index){
               if(this.selectedIndex<index&&!this.isLock){
                   this.changeAnmDetail(false,()=>{
                       this.selectedIndex = index;
                   },()=>{
                       this.isLock =false;
                   });
                   
               } else if(this.selectedIndex>index&&!this.isLock) {
                   this.changeAnmDetail(true,()=>{
                       this.selectedIndex = index;
                   },()=>{
                       this.isLock =false;
                   });  
               }
           },
           async changeAnmDetail(isLeft=true,cb,cb2){
                // this.showDetails=false;
                // alert(1);
                if(isLeft){
                    this.showAnmROut = true;
                    await this.sleep(500);
                    this.showAnmROut = false;
                    if(typeof cb ==='function') cb();
                    this.showAnmLIn=true;
                    await this.sleep(1000);
                    this.showAnmLIn=false;
                } else {
                    this.showAnmLOut = true;
                    let res = await this.sleep(500);
                    this.showAnmLOut = false;
                    if(typeof cb ==='function') cb();
                    this.showAnmRIn=true;
                    await this.sleep(1000);
                    this.showAnmRIn=false;
                }
                if(typeof cb2 ==='function') cb2();
           },
           prev(){
               if(this.isLock){
               } else {
                   this.isLock = true;
                   if(this.selectedIndex!=0){
                        this.changeAnmDetail(true,()=>{
                            this.selectedIndex--;
                        },()=>{
                            this.isLock = false;
                        });                     
                    } else {
                        let indexInAll = this.itemsAll.findIndex(item=>item.date===this.selectedItem[this.selectedIndex].date);
                        if(indexInAll!=0){
                            this.changeAnmDetail(true,()=>{
                                this.selectedItem.pop();
                                this.selectedItem.unshift(this.itemsAll[indexInAll-1]);
                            },()=>{
                                this.isLock = false;
                            });
                        } else {
                            this.isLock = false;
                        }
                        
                    }
               }
               
           },
           next(){
               if(this.isLock){
               } else {
                   this.isLock = true;
                   if(this.selectedIndex!=this.selectedItem.length-1){
                        this.changeAnmDetail(false,()=>{
                            this.selectedIndex++;
                        },()=>{
                            this.isLock = false;
                        });
                    } else {
                        let indexInAll = this.itemsAll.findIndex(item=>item.date===this.selectedItem[this.selectedIndex].date);
                        if(indexInAll!=this.itemsAll.length-1){
                            this.changeAnmDetail(false,()=>{
                                this.selectedItem.shift();
                                this.selectedItem.push(this.itemsAll[indexInAll+1]);
                            },()=>{
                                this.isLock = false;
                            });
                            
                        } else {
                            this.isLock = false;
                        }
                        
                    }
               }
               
           }
        },
        created() {
           this.selectedIndex = this.index;
           this.selectedItem = [];
           for(let i=0;i<this.amounts;i++){
                this.selectedItem.push(this.itemsAll[i]);
            }
        },
        mounted() {
            
        },
};
</script>

<style lang='scss' scoped>
    .detail-enter-active, .detail-leave-active {
        transition: opacity .5s;
    }
    .detail-enter, .detail-leave-to {
        opacity: 0;
    }
    .showDetails{
        transition:1.5s linear all;
        padding:80px 0;
        >h1{
            text-align: center;
            margin:10px auto;
        }
        >p{
            text-align: center;
            font-size:20px;
            margin:10px auto;
        }
    }
    .banner{
        width:100%;
        position:relative;
        >img{
            width:100%;
            opacity: 0.6;
            position:relative;
        }
        >h1{
            position:absolute;
            color:white;
            text-align: center;
            top:100px;
            width:100%;
        }
        >hr{
            color:#dbdbdb;
            background-color:#dbdbdb;
            width:760px;
            height:5px;
            position:absolute;
            top:240px;
            left:0;
            right:0;
            bottom:0;
            margin-left:auto;
            margin-right:auto;
            text-align: center;
        }
        >.line{
            position:absolute;
            color:white;
            text-align: center;
            top:205px;
            left:0;
            right:0;
            bottom:0;
            display:flex;
            margin:0 auto;
            width:800px;
            height:80px;
            align-items: center;
            justify-content: space-between;
            >.circle{
                width:25px;
                height:25px;
                background-color: #dbdbdb;
                border-radius: 50%;
                transition:.2s linear;
                position: relative;
                display:flex;
                flex-direction:column ;
                align-items: center;
                >.date{
                    font-size:16px;
                    color:#dbdbdb;
                    margin-top:-25px;
                    white-space: nowrap;
                }
            }
            .arrowCircle{
                width:40px;
                height:40px;
                background-color: #dbdbdb;
                border-radius: 50%;
                transition:.2s linear;
                position: relative;
            }
            >.selected{
                transition:.2s linear;
                transform: scale(1.2);
                box-shadow:0 0 4px white;
                background-color: #fff;
                >.date{
                    color:white;
                }
            }
        }
    }
</style>