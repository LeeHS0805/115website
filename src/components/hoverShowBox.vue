<template>
  <div class="hoverShowBox">
    <div class="row row-1">
      <div class="item item-1"
           :style="{'background-image':`url(${details.environment.imgUrl})`}"
      >
        <div class="mask-bg"
        ></div>
        <p class="title">中心环境</p>
        <p class="label">{{details.environment.content}}</p>
      </div>
      <div class="item item-2"
           :style="{'background-image':`url(${details.resource.imgUrl})`}"
      >
        <div class="mask-bg"></div>
        <p class="title">学习资源</p>
        <p class="label">{{details.resource.content}}</p>
      </div>
    </div>
    <div class="row row-2">
      <div class="item item-1"
           :style="{'background-image':`url(${details.activity.imgUrl})`}"
      >
        <div class="mask-bg"></div>
        <p class="title">活动</p>
        <p class="label">{{details.activity.content}}</p>
      </div>
      <div class="item item-2"
           :style="{'background-image':`url(${details.communication.imgUrl})`}"
      >
        <div class="mask-bg"></div>
        <p class="title">交流</p>
        <p class="label">{{details.communication.content}}</p>
      </div>
      <div class="item item-3"
           :style="{'background-image':`url(${details.competition.imgUrl})`}"
      >
        <div class="mask-bg"></div>
        <p class="title">比赛</p>
        <p class="label">{{details.competition.content}}</p>
      </div>
    </div>
    <div class="row row-3">
      <div class="item item-1"
           :style="{'background-image':`url(${details.smriti.imgUrl})`}"
      >
        <div class="mask-bg"></div>
        <p class="title">传承</p>
        <p class="label">{{details.smriti.content}}</p>
      </div>
      <div class="item item-2"
           :style="{'background-image':`url(${details.birthday.imgUrl})`}"
      >
        <div class="mask-bg"></div>
        <p class="title">中心生日</p>
        <p class="label">{{details.birthday.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    details: {
      type: Object
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {

  },
  mounted() {

  },
};
</script>

<style lang='scss' scoped>
.hoverShowBox {
  width: 100%;
  margin: 44px 0;
  overflow: hidden;

  > .row {
    > .item {
      float: left;
      padding: 40px;
      box-sizing: border-box;
      height: 271px;
      overflow: hidden;
      position: relative;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      > .title {
        font-size: 30px;
        color: white;
        letter-spacing: 0;
        margin-bottom: 25px;
        position: relative;
        font-family: 'TencentSansw7';
      }

      > .label {
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 26px;
        margin-top: 25px;
        margin-right: 40px;
        position: relative;
        opacity: 0;
        transform: translate(0, 80px);
        transform-origin: bottom;
        -webkit-transform-origin: bottom;
        -moz-transform-origin: bottom;
        -ms-transform-origin: bottom;
        -o-transform-origin: bottom;
        transition: transform .5s cubic-bezier(0.2, 0.0, 0.2, 1), opacity .3s cubic-bezier(0.2, 0.0, 0.2, 1);
        -webkit-transition: transform .5s cubic-bezier(0.2, 0.0, 0.2, 1), opacity .3s cubic-bezier(0.2, 0.0, 0.2, 1);
        -moz-transition: transform .5s cubic-bezier(0.2, 0.0, 0.2, 1), opacity .3s cubic-bezier(0.2, 0.0, 0.2, 1);
        -ms-transition: transform .5s cubic-bezier(0.2, 0.0, 0.2, 1), opacity .3s cubic-bezier(0.2, 0.0, 0.2, 1);
        -o-transition: transform .5s cubic-bezier(0.2, 0.0, 0.2, 1), opacity .3s cubic-bezier(0.2, 0.0, 0.2, 1);
      }

      > .mask-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        top: 0;
        left: 0;
        transform: translate(0, 271px);
        transform-origin: bottom;
        transition: all .5s cubic-bezier(0.2, 0.0, 0.2, 1);
        -webkit-transition: all .5s cubic-bezier(0.2, 0.0, 0.2, 1);
        -moz-transition: all .5s cubic-bezier(0.2, 0.0, 0.2, 1);
        -ms-transition: all .5s cubic-bezier(0.2, 0.0, 0.2, 1);
        -o-transition: all .5s cubic-bezier(0.2, 0.0, 0.2, 1);
      }
    }

    > .item:before {
      width: 100%;
      height: 271px;
      content: '';
      display: block;
      top: 0;
      left: 0;
      position: absolute;
      opacity: .4;
    }

    > .item:hover {
      > .label {
        opacity: 1;
        transform: translate(0, 0px);
        -webkit-transform: translate(0, 0px);
        -moz-transform: translate(0, 0px);
        -ms-transform: translate(0, 0px);
        -o-transform: translate(0, 0px);
      }

      > .mask-bg {
        transform: translate(0, 0px);
        -webkit-transform: translate(0, 0px);
        -moz-transform: translate(0, 0px);
        -ms-transform: translate(0, 0px);
        -o-transform: translate(0, 0px);
      }
    }
  }

  > .row-1 {
    > .item-1 {
      width: 66.66666666%;
      // background-color: #0052d9;
      > .mask-bg {
        background-color: #0052d9;
      }
    }

    > .item-1:before {
      background-color: #0052d9;
    }

    > .item-2 {
      width: 33.33333333%;

      > .mask-bg {
        background-color: #9B26B6;
      }
    }

    > .item-2:before {
      background-color: #9B26B6;
    }
  }

  > .row-2 {
    > .item-1 {
      width: 33.33333333%;

      > .mask-bg {
        background-color: #00A9CE;
      }
    }

    > .item-1:before {
      background-color: #00A9CE;
    }

    > .item-2 {
      width: 33.33333333%;

      > .mask-bg {
        background-color: rgb(255, 103, 31);
      }
    }

    > .item-2:before {
      background-color: rgb(255, 103, 31);
    }

    > .item-3 {
      width: 33.33333333%;

      > .mask-bg {
        background-color: #00A9CE;
      }
    }

    > .item-3:before {
      background-color: #00A9CE;
    }
  }

  > .row-3 {
    > .item-1 {
      width: 33.33333333%;

      > .mask-bg {
        background-color: rgb(150, 140, 131);
      }
    }

    > .item-1:before {
      background-color: rgb(150, 140, 131);
    }

    > .item-2 {
      width: 66.66666666%;

      > .mask-bg {
        background-color: rgb(121, 192, 0);
      }
    }

    > .item-2:before {
      background-color: rgb(121, 192, 0);
    }
  }
}

@media screen and (max-width: 768px) {
  .hoverShowBox {
    > .row {
      > .item {
        height: 125px;
        padding: 12px;

        > .title {
          font-size: 16px;
        }
      }
    }
  }
}
</style>