<template>
  <div class="bottombar">
    <p>学生创新实践中心©2010-{{nowYear}}</p>
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
.bottombar {
  width: 100%;
  background-color: #434343;

  > p {
    font-size: 1rem;
    text-align: center;
    color: white;
    padding: 30px;
  }
}
</style>