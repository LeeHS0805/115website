<template>
  <div class="container">
    <navbar :watchScrollStyle="true"></navbar>
    <section class="life">
      <h1 class="title title-1">组织生活</h1>
      <hoverShowBox :details="hoverShowBoxDetails"></hoverShowBox>
    </section>
    <section class="introduction">
      <h1 class="title title-2">方向简介</h1>
      <directionIntro></directionIntro>
    </section>
    <section class="member">
      <h1 class="title title-3">成员简介</h1>
    </section>
  </div>
</template>

<script>
import hoverShowBox from "@/components/hoverShowBox.vue"
import directionIntro from "../../components/directionIntro";

export default {
  components: {hoverShowBox,directionIntro},
  props: {},
  data() {
    return {}
  },
  computed: {
    hoverShowBoxDetails() {
      return this.$store.state.orgShow.hoverShowBoxDetails
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
.container {
  overflow: hidden;
  background-color: #FBFBFB;
  font-family: TencentSansw7,serif;

  section {
    padding: 20px 0;
    margin-top: 20px;
    margin-bottom: -10px;
  }

  .title {
    width: 100%;
    margin: 20px auto 30px auto;
  }
  .title-1{
    padding-left: 20px;
    padding-top: 50px;
  }
  .title-2,.title-3{
    text-align: center;
  }
  h1{
    font-family: TencentSansw7;
    color:#2a2e2e;
    font-size: 30px;
    letter-spacing: 2px;
  }
}
</style>