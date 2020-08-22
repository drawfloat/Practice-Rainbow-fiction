<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
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