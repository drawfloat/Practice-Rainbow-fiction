<template>
  <div class="infinite-scroll-pr">
    <mt-header :title="major">
      <router-link to="/concentration" slot="left">
        <mt-button icon="back" @click="prev">返回</mt-button>
      </router-link>
    </mt-header>
    <ul
      class="mui-table-view infinite-scroll-style"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
      infinite-scroll-listen-for-event
    >
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in books" :key="item._id+index">
        <router-link :to="'/book/'+item._id">
          <img class="mui-media-object mui-pull-left bookImg" :src="unicodeToChar(item.cover)" />
          <div class="mui-media-body">
            {{item.title}}
            <p>{{item.author}} • {{item.majorCate}} • {{item.minorCate}}</p>
            <p class="mui-ellipsis">{{item.shortIntro}}</p>
          </div>
        </router-link>
      </li>
      <!-- <div class="infinite-scroll-limit"></div> -->
    </ul>
  </div>
</template>

<script>
  import mui from "../../lib/mui/js/mui.js";
  export default {
    data() {
      return {
        gender: this.$route.params.gender,
        major: this.$route.params.major,
        books: [],
        curPosition: 0,
        pageSize: 10,
        busy: false,
      };
    },
    mounted() {
      mui.init({
        swipeBack: false, //右滑关闭功能
      });
    },
    created() {
      this.getBookList(this.curPosition, this.pageSize);
    },
    methods: {
      prev() {
        this.$router.back();
      },
      // uyf-8转换成native
      unicodeToChar(str) {
        if (str) {
          str = str.replace(/^\/agent\//, "");
          return unescape(str.replace(/\u/g, "%u"));
        }
        return false;
      },
      getBookList(curPosition, pageSize) {
        this.axios
          .get("/api/book/by-categories", {
            params: {
              gender: this.gender,
              type: "hot",
              major: this.major,
              start: curPosition,
              limit: pageSize,
            },
          })
          .then((res) => {
            this.books = res.data.books;
          })
          .catch((err) => {
            console.log(err);
          });
      },
      loadMore() {
        this.busy = true;
        this.curPosition += this.pageSize;
        setTimeout(() => {
          this.axios
            .get("/api/book/by-categories", {
              params: {
                gender: this.gender,
                type: "hot",
                major: this.major,
                start: this.curPosition,
                limit: this.pageSize,
              },
            })
            .then((res) => {
              let newbooks = res.data.books;
              this.books = this.books.concat(newbooks);
            })
            .catch((err) => {
              console.log(err);
            });
          this.busy = false;
        }, 300);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    transform: translateX(100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s ease;
  }
  // image[lazy="loading"] {
  //   width: 45px;
  //   height: 60px;
  //   margin: auto;
  // }
  .infinite-scroll-pr {
    height: 1000px;
  }
  .infinite-scroll-style {
    // position: fixed;
    height: 100%;
    // width: 100%;
    padding-bottom: 50px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    li {
      background-color: #fff;
    }
    .bookImg {
      width: 45px;
      touch-action: none;
      height: 60px;
    }
    .infinite-scroll-limit {
      background-color: aqua;
      height: 20px;
    }
  }
</style>