<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <div>
      <input type="text" v-model="$store.state.count" />
      <!-- <input type="button" value="增加" @click="$store.state.count++" />
      <input type="button" value="减少" @click="$store.state.count--" />-->
      <input type="button" value="增加" @click="count_add" />
      <input type="button" value="减少" @click="count_reduce" />
      <h3>{{this.$store.getters.optCount}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    created() {
      //   this.getClassification();
    },
    methods: {
      count_add() {
        this.$store.commit("increment");
      },
      count_reduce() {
        this.$store.commit("subtract", { a: 1, b: 2 });
      },
      getClassification() {
        this.axios
          .get("/api/cats/lv2/statistics")
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 175px;
    .mint-swipe-item {
      &:nth-child(1) {
        background: url("../../images/swipe1.jpg");
        background-size: cover;
      }
      &:nth-child(2) {
        background: url("../../images/swipe2.jpg");
        background-size: cover;
      }
      &:nth-child(3) {
        background: url("../../images/swipe3.jpg");
        background-size: cover;
      }
    }
  }
</style>