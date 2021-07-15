<template>
  <div class="mangerIntro">
    <div class="intro-box" v-for="(item) in imgInfo">
      <div class="img-box">
        <div class="img">
          <img :src="item.url" alt="">
        </div>
        <i class="block"></i>
      </div>
      <div class="text-box">
        <div class="name">{{ item.name }}</div>
        <div class="org">{{ item.org }}</div>
        <div class="status">{{ item.status }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mangerIntro",
  data(){
    return{
      imgInfo:[
        {
          url:'https://tva1.sinaimg.cn/large/008i3skNly1gshoazosb8j311g0u0hdt.jpg',
          name:'李鑫磊',
          org:'学生创新创业实践中心',
          status:'中心主任'
        },
        {
          url:'https://tva1.sinaimg.cn/large/008i3skNly1gshpsmg3k0j30yw0u079j.jpg',
          name:'张钰辉',
          org:'学生创新创业实践中心',
          status:'中心副主任/项目部长'
        },
        {
          url:'https://tva1.sinaimg.cn/large/008i3skNly1gshq2922edj30sl0lmafz.jpg',
          name:'郭芷妍',
          org:'学生创新创业实践中心',
          status:'中心副主任'
        },
        {
          url:'https://tva1.sinaimg.cn/large/008i3skNly1gshpu9d8o5j312h0u0gtb.jpg',
          name:'徐浩瀚',
          org:'学生创新创业实践中心',
          status:'技术部长'
        },
        {
          url:'https://tva1.sinaimg.cn/large/008i3skNly1gshq1v0ph0j30uy0n3wh4.jpg',
          name:'赵倩',
          org:'学生创新创业实践中心',
          status:'管理部长'
        },
        {
          url:'https://tva1.sinaimg.cn/large/008i3skNly1gshpxcmgpxj30fb0b3755.jpg',
          name:'陈泓盛',
          org:'科技协会',
          status:'主席'
        },
        {
          url:'https://tva1.sinaimg.cn/large/008i3skNly1gshq2lihtrj309e072t8y.jpg',
          name:'陈佳博',
          org:'科技协会',
          status:'副主席'
        },
        {
          url:'https://tva1.sinaimg.cn/large/008i3skNly1gshq0f1552j315v0u0gtd.jpg',
          name:'陈书俊',
          org:'科技协会',
          status:'副主席'
        },

      ]
    }
  }
}
</script>

<style scoped lang="scss">
.mangerIntro{
  width: 96%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #FBFBFB;

  .intro-box{
    position: relative;
    @media (min-width: 1160px) {
      width: 33.33%;
    }
    @media (max-width: 1160px) {
      width: 50%;
    }
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .img-box{
      position: relative;
      height: 60%;
      width: 100%;
      @media(min-width: 600px){
        .img{
          float: right;
          width: 120px;
          height: 110px;
          overflow: hidden;
          img{
            height: 100%;
          }
        }
        i{
          position: absolute;
          right: 110px;
          top: 100px;
          padding: 10px;
          background-color: #0052D9;
        }
      }
      @media(max-width: 600px) {
        .img{
          float: right;
          width: 72px;
          height: 72px;
          overflow: hidden;
          img{
            height: 100%;
          }
        }
        i{
          position: absolute;
          right: 65px;
          top: 65px;
          padding: 6px;
          background-color: #0052D9;
        }
      }
    }
  }
  @media(max-width: 600px){
    .text-box{
      width: 70%;
      position: relative;
      top:-50px;
      padding-left: 20px;
      .name{
        margin: 12px auto;
        color: #0052d9;
        font-size: 16px;
        letter-spacing: 3px;
        font-family: 'PingFangSC-Regular', 'helvetica neue', tahoma, 'PingFang SC', 'microsoft yahei', arial, 'hiragino sans gb', sans-serif;
      }
      .org {
        margin-bottom: 8px;
        color: #5f6464;
        font-size: 12px;
      }
      .status{
        color: #5f6464;
        font-size: 11px;
      }
    }
  }
  @media(min-width: 600px) {
    .text-box{
      width: 60%;
      position: relative;
      top:-30px;
      padding-left: 50px;
      .name{
        margin: 12px auto;
        color: #0052d9;
        font-size: 20px;
        letter-spacing: 3px;
        font-family: 'PingFangSC-Regular', 'helvetica neue', tahoma, 'PingFang SC', 'microsoft yahei', arial, 'hiragino sans gb', sans-serif;
      }
      .org{
        margin-bottom: 8px;
        color: #5f6464;
        font-size: 15px;
      }
      .status{
        color: #5f6464;
        font-size: 14px;
      }
    }
  }

}

</style>