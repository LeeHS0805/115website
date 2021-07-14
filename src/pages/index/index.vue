<template>
  <div class="container">
    <navbar :watch-scroll-style="true" ></navbar>
    <div class="content">
      <Parallax class="parallax" :speedFactor="0.25" direction="down" >
        <img class="bannerImg" :src="bannerImg">
      </Parallax>
      <triD></triD>
      <div class="bigTitle">
        <div>
          <p>学生创新创业实践中心</p>
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
  components: {Parallax, triD, timeline, indexBottomBar},
  props: {},
  data() {
    return {
      changeNavbar: true
    }
  },
  computed: {
    banners() {
      return this.$store.state.bannerImgList;
    },
    bannerImg() {
      return bannerImg;
    },
    introduction() {
      return this.$store.state.introduction;
    }
  },
  watch: {},
  methods: {},
  created() {

  },
  mounted() {

  },
};
</script>

<style lang='scss' scoped>
@media(min-width: 600px){
  .container {
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: 100vh;

    .content{
      margin-top: -40px;
      .bigTitle {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100vh;
        display: flex;
        user-select: none;

        > div {
          margin: auto;
          letter-spacing: 1.2px;

          p:nth-child(1) {
            width: 100%;
            text-align: center;
            margin-bottom: 60px;
            font-size: 8vw;
            color: white;
          }

          p:nth-child(2) {
            width: 100%;
            text-align: center;
            margin: 0 auto 30px auto;
            font-size: 4vw;
            color: white;
          }

          p:nth-child(3) {
            width: 90%;
            text-align: right;
            margin: auto;
            font-size: 3.5vw;
            color: white;
          }
        }

      }

      .banner {
        width: 100%;
        height: auto;
        max-height: 70vh;
        z-index: -999;
        vertical-align: middle;
        // display: table-cell;
        // text-align: center;
        > img {
          width: 100%;
          height: 100%;
        }
      }

      .bannerImg {
        width: 100%;
        position: fixed;
        top:0;
      }

      .section{
        overflow: hidden;
        padding: 35px 0 10px 0;
        .introduction {
          width: 100%;
          margin: auto;
          letter-spacing: 1px;

          > h1 {
            text-align: right;
            padding: 10px 7vw;
          }

          > p {
            width: 60%;
            float: right;
            line-height: 30px;
            text-indent: 2rem;
            text-align: right;
            padding: 10px 6vw 0 0;
          }
          > p:nth-child(2){
            margin: 20px 0;
          }
        }
      }
    }
  }


  .parallax {
    height: 100vh !important;
  }

  .section {
    position: relative;
    width: 100%;
  }
}
@media(max-width: 600px) {

  .container {
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: 100vh;

    .content {
      margin-top: -40px;

      .bigTitle {
        position: absolute;
        top: -35vw;
        width: 100%;
        height: 100vh;
        display: flex;
        user-select: none;

        > div {
          margin: auto;
          letter-spacing: 1.2px;

          p:nth-child(1) {
            width: 100%;
            text-align: center;
            margin-bottom: 60px;
            font-size: 8vw;
            color: white;
          }

          p:nth-child(2) {
            width: 100%;
            text-align: center;
            margin: 0 auto 30px auto;
            font-size: 4vw;
            color: white;
          }

          p:nth-child(3) {
            width: 90%;
            text-align: right;
            margin: auto;
            font-size: 3.5vw;
            color: white;
          }
        }

      }

      .banner {
        width: 100%;
        height: auto;
        z-index: -999;
        vertical-align: middle;
        // display: table-cell;
        // text-align: center;
        > img {
          width: 100%;
          height: 100%;
        }
      }

      .bannerImg {
        width: 100%;
        position: fixed;
        top: -10px;
      }

      .section {
        overflow: hidden;
        padding: 35px 0 10px 0;

        .introduction {
          width: 100%;
          margin: auto;
          letter-spacing: 1px;

          > h1 {
            text-align: right;
            padding: 10px 7vw;
          }

          > p {
            width: 80%;
            float: right;
            line-height: 30px;
            text-indent: 2rem;
            text-align: right;
            padding: 10px 6vw 0 0;
          }

          > p:nth-child(2) {
            margin: 20px 0;
          }
        }
      }
    }
  }
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