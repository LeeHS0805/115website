<template>
  <div class="navbar" ref="navbar"
       :class="
    watchScrollStyle?
    {
        isShow:isUp,
        noShow:!isUp
    }:
    {
        topStyle:changeStyle,
        noTopStyle:!changeStyle,
    }"
  >
    <div class="logo"></div>
    <div class="list" v-show="!changeStyle">
      <a>
        <router-link to="/">关于我们</router-link>
      </a>
      <a>
        <router-link to="/">产品展示</router-link>
      </a>
      <a>
        <router-link to="/orgShow">组织展示</router-link>
      </a>
      <a>
        <router-link to="/">关于我们</router-link>
      </a>
      <a>
        <router-link to="/">加入我们</router-link>
      </a>
    </div>
    <div class="fit-phone">
      <span>SIPC</span>
      <svg t="1626059395436" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1198" width="200" height="200"><path d="M896 0l128 0 0 128-128 0 0-128Z" p-id="1199" fill="#515151"></path><path d="M0 0l704 0 0 128-704 0 0-128Z" p-id="1200" fill="#515151"></path><path d="M896 448l128 0 0 128-128 0 0-128Z" p-id="1201" fill="#515151"></path><path d="M0 448l704 0 0 128-704 0 0-128Z" p-id="1202" fill="#515151"></path><path d="M896 896l128 0 0 128-128 0 0-128Z" p-id="1203" fill="#515151"></path><path d="M0 896l704 0 0 128-704 0 0-128Z" p-id="1204" fill="#515151"></path></svg>
    </div>
  </div>
</template>

<script>
import logo from "../assets/sipc.png"

export default {
  components: {},
  props: {
    watchTopStyle: Boolean,
    watchScrollStyle: Boolean
  },
  data() {
    return {
      logo: logo,
      changeStyle: false,
      isUp: true
    }
  },
  computed: {},
  watch: {},
  methods: {
    watchNavbar() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop)
      if (scrollTop <= 200) {
        this.changeStyle = true;
      } else {
        this.changeStyle = false;
      }
    },
    watchScroll(e) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      e = e || window.event;
      // console.log(scrollTop)
      if (scrollTop <= 10) this.isUp = true;
      else {
        if (e.wheelDelta) {
          this.isUp = e.wheelDelta >= 0;
          console.log(this.isUp)
        } else {
          this.isUp = e.detail >= 0;
        }
      }
    }
  },
  created() {

  },
  mounted() {
    if (this.watchTopStyle) {
      this.changeStyle = true;
      window.addEventListener('scroll', this.watchNavbar);
    } else {
      this.changeStyle = false;
    }
    if (this.watchScrollStyle) {
      if (document.attachEvent) document.attachEvent('onmousewheel', this.watchScroll);
      else if (document.addEventListener) document.addEventListener('DOMMouseScroll', this.watchScroll, false);
      window.onmousewheel = document.onmousewheel = this.watchScroll;
    }
  },
};
</script>

<style lang='scss' scoped>
@media (max-width: 600px) {
  .list {
    display: none !important;
  }
  .logo {
    width: 40px !important;
    height: 40px !important;
  }
  .fit-phone {
    width: 80vw;
    position: absolute;
    right: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    span {

      font-size: 22px;
      letter-spacing: 3px;
      font-weight: 550;
      color: rgba(59, 59, 59, 0.9);
    }

    svg{
      width: 18px;
      position: absolute;
      right: 0;
      margin-top: 3px;
      height: 18px;
    }
  }
}
@media (min-width: 600px) {
  .fit-phone{
    display: none;
  }

}

.topStyle {
  transition: .3s linear;
  background-color: rgba(255, 255, 255, 0);
  height: 60px;
}

.isShow {
  height: 80px;
  transform: translateY(0px);
  transition: .3s linear;
  background-color: white;
  box-shadow: 0 0 10px #666;
}

.noShow {
  height: 80px;
  transform: translateY(-80px);
  background-color: rgba(255, 255, 255, 0);
  transition: .3s linear;
}

.noTopStyle {
  transition: .3s linear;
  background-color: white;
  box-shadow: 0 0 10px #666;
  height: 80px;
}

.navbar {
  position: fixed;
  height: 80px;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, .25);

  > .logo {
    width: 50px;
    height: 50px;
    padding-right: 3px;
    position: absolute;
    left: 30px;
    background-image: url("../assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;

  }

  > .list {
    height: 40px;
    width: 70vw;
    line-height: 40px;
    position: absolute;
    right: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > a {
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 1px;
      text-indent: -1px;
      //margin: 0 10px 0 0;
      transition: .3s linear;
    }

    > a:hover {
      // color:#87CEFA;
      color: #386EB4;
      transition: .3s linear;
    }
  }
}
</style>