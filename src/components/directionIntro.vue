<template>
  <div class="directionIntro">
    <div class="phone-intro">
      <!--      适配手机端-->
      <div class="intro-item_logo">
      </div>
      <div class="intro-item_block" v-for="(item,index) in this.$store.state.orgShow.directionIntro" :key="item">
        <div class="intro-item-block_content">
          <div class="intro-item-name_en intro-item-name">{{item.en}}</div>
          <div class="intro-item-name_cn intro-item-name">{{ item.cn }}</div>
          <div class="intro-item-svg_more">
            <svg @click="showDetails(index)" t="1626099630651" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2391" width="200" height="200"><path d="M511.31 669.4a61.19 61.19 0 0 1-43.25-17.79l-237.12-237.2a35 35 0 0 1 49.55-49.55l230.89 230.9 230.9-230.89a35 35 0 1 1 49.55 49.55L554.7 651.54a61.41 61.41 0 0 1-43.39 17.86z" fill="#2B2F2F" p-id="2392"></path></svg>
          </div>
        </div>
        <div :class="{'intro-item-block_details':showNum!==index,'intro-item-block_details_active':showNum===index}">
          {{item.intro}}
        </div>
      </div>
    </div>
    <div class="web-intro">

    </div>
  </div>
</template>

<script>
export default {
  name: "directionIntro",
  data(){
    return{
      showNum:-1,
    }
  },
  methods:{
    showDetails(index){
      if(this.showNum===index)this.showNum=-1;
      else this.showNum = index;
    }
  }
}
</script>

<style scoped lang="scss">

.directionIntro{
  width: 100%;
  min-height: 500px;
  .phone-intro{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .intro-item_logo{
      height: 60px;
      width: 120px;
      margin: -10px auto 30px auto;
      background-size: cover;
      background-color: transparent;
      background-image: url('../assets/sipc.png');
    }
    .intro-item_block{
      @media (max-width: 600px) {
        width: 90%;
      }
      @media (min-width: 600px) {
        width: 70%;
      }
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: #fff;

      .intro-item-block_content{
        width: 100%;
        display: flex;
        height: 70px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .intro-item-name_en{
          @media (max-width: 600px) {
            width: 40%;
          }
          @media (min-width: 600px) {
            width: 30%;
            padding-left: 20px;
          }
          margin-top: -5px;
          font-size: 20px;
          font-family: 'TencentSansw7';
          font-weight: 500;
          color: #2A2E2E;
          margin-left: 10px;

        }
        .intro-item-name_cn{
          @media (max-width: 600px) {
            width: 30%;
          }
          @media (min-width: 600px) {
            width: 40%;
          }
          padding-left: 10px;
          font-family: "Microsoft Yahei";
          letter-spacing: 2px;
          color: #8b8e8e;
        }
        .intro-item-svg_more{
          width: 30%;
          svg{
            float: right;
            height: 20px;
            width: 20px;
            margin-top: 5px;
            margin-right: 10px;
          }
        }
      }
      .intro-item-block_details{
        border-top: 1px solid #F2F3F5;
        width: 95%;
        max-height: 0px;
        overflow: hidden;
        transition: all .3s ease-out;
        padding: 0 20px;
        text-indent: 8px;
        color: #A0A3A3;
      }
      .intro-item-block_details_active{
        border-top: 1px solid #F2F3F5;
        width: 95%;
        text-indent: 8px;
        color: #868989;
        max-height: 300px;
        transition: all .2s ease-in;
        padding: 20px;
      }

    }

  }
}

</style>