<template>
  <div class="indexBottomBar">
    <div class="box">
      <h1 class="contact">联系我们</h1>
      <p class="contact">地址: {{contactAddress}}</p>
      <p class="contact">邮箱: {{contactEmail}}</p>
      <p class="bottom">学生创新实践中心©2010-{{nowYear}}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      nowYear: new Date().getFullYear()
    }
  },
  computed: {
    contactAddress() {
      return this.$store.state.contactAddress;
    },
    contactEmail() {
      return this.$store.state.contactEmail;
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
@media (max-width: 600px) {
  .indexBottomBar {
    padding: 14vh 22px 50px 22px;
    background-color: #434343;
    color: white;
    position: relative;
    z-index: -1;

    > div {
      width: 100%;
      overflow: hidden;

      > .contact {
        float: left;
        margin: 14px auto;
        letter-spacing: 1px;
      }

      > .contact:nth-child(3){
        margin-bottom: 80px;
      }

      > .bottom {
        position: absolute;
        width: 100%;
        right: 50%;
        text-align: center;
        transform: translateX(50%);
        bottom: 20px;
        font-weight: 600;
        letter-spacing: 2.5px;
      }
    }
  }
}

@media (min-width: 600px) {
  .indexBottomBar {
    padding: 20vh 50px 50px 50px;
    background-color: #434343;
    color: white;
    position: relative;
    z-index: -1;

    > div {
      width: 1280px;

      > .contact {
        margin: 10px;
      }
      > .contact:nth-child(3){
        margin-bottom: 30px;
      }

      > .bottom {
        position: absolute;
        right: 60px;
        bottom: 20px;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }
}
</style>