<template>
  <div class="join-us">
    <navbar :watchScrollStyle="true"></navbar>
    <section class="video-display">
      <h1 class="title title-1">宣传视频</h1>
      <iframe src="//player.bilibili.com/player.html?aid=674136025&bvid=BV1vU4y137Ds&cid=370357043&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </section>
    <section class="join-kjxh">
      <h1 class="title title-1">科协招新</h1>
      <img src="https://tva1.sinaimg.cn/large/008i3skNly1gshrsn3xo9j30u01hdn0q.jpg" alt="">
    </section>
  </div>
</template>

<script>
import navbar from "../../layout/navbar";

export default {
  name: "index.vue",
  components:{
    navbar
  }
}
</script>

<style scoped lang="scss">
.join-us{
  overflow: hidden;
  background-color: #FBFBFB;
  section:nth-child(2){
    padding-top: 80px;
  }
  section {
    padding: 10px 0;
    margin-top: 30px;
    margin-bottom: 30px;
    h1{
      font-family: TencentSansw7;
      position: relative;
      left: 6px;
      margin: 10px auto 40px auto;
      text-align: center;
      color:#2a2e2e;
      font-size: 30px;
      letter-spacing: 2px;
    }
  }
  .video-display{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    iframe{
      border-radius: 8px;
      position: relative;
      width: 80vw;
      height: 45vw;
      left: 25%;
      transform: translateX(-30%);
    }
  }
  .join-kjxh{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 80%;
      border-radius: 20px;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1)
    }
  }

}

</style>