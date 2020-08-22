<template>
  <div>
    <div class="mui-content mui-row mui-fullscreen concentration-container">
      <div class="mui-col-xs-3">
        <div
          id="segmentedControls"
          class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical"
        >
          <a class="mui-control-item" href="#male">男生</a>
          <a class="mui-control-item" href="#female">女生</a>
          <a class="mui-control-item" href="#picture">漫画</a>
          <a class="mui-control-item" href="#press">出版</a>
        </div>
      </div>
      <div
        id="segmentedControlContents"
        class="mui-col-xs-9"
        style="border-left: 1px solid #c8c7cc;"
      >
        <div id="male" class="mui-control-content mui-active">
          <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li
              class="mui-table-view-cell mui-media mui-col-xs-6"
              v-for="item in male"
              :key="item.bookCover[0]"
            >
              <router-link :to="'/details/male/'+item.name" class="bookDisplay-style">
                <img class="book-img" :src="unicodeToChar(item.bookCover[1])" />
                <div class="book-detail">
                  <a href="javascript:;">{{item.name}}</a>
                  <p>{{item.bookCount}}部</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div id="female" class="mui-control-content">
          <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li
              class="mui-table-view-cell mui-media mui-col-xs-6"
              v-for="item in female"
              :key="item.bookCover[0]"
            >
              <router-link :to="'/details/female/'+item.name" class="bookDisplay-style">
                <img class="book-img" :src="unicodeToChar(item.bookCover[0])" />
                <div class="book-detail">
                  <a href="javascript:;">{{item.name}}</a>
                  <p>{{item.bookCount}}部</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div id="picture" class="mui-control-content">
          <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li
              class="mui-table-view-cell mui-media mui-col-xs-6"
              v-for="item in picture"
              :key="item.bookCover[0]"
            >
              <router-link :to="'/details/picture/'+item.name" class="bookDisplay-style">
                <img class="book-img" :src="unicodeToChar(item.bookCover[1])" />
                <div class="book-detail">
                  <a href="javascript:;">{{item.name}}</a>
                  <p>{{item.bookCount}}部</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div id="press" class="mui-control-content">
          <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li
              class="mui-table-view-cell mui-media mui-col-xs-6"
              v-for="item in press"
              :key="item.bookCover[0]"
            >
              <router-link :to="'/details/press/'+item.name" class="bookDisplay-style">
                <img class="book-img" :src="unicodeToChar(item.bookCover[1])" />
                <div class="book-detail">
                  <a href="javascript:;">{{item.name}}</a>
                  <p>{{item.bookCount}}部</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mui from "../../lib/mui/js/mui.js";
  export default {
    data() {
      return {
        selected: "male-display",
        male: [],
        female: [],
        picture: [],
        press: [],
      };
    },
    created() {
      this.getClassification();
    },
    mounted() {
      mui.init({
        swipeBack: false, //启用右滑关闭功能
      });
      var controls = document.getElementById("segmentedControls");
      var contents = document.getElementById("segmentedControlContents");
      controls.querySelector(".mui-control-item").classList.add("mui-active");
      contents.querySelector(".mui-control-content").classList.add("mui-active");
    },
    methods: {
      // uyf-8转换成native
      unicodeToChar(str) {
        if (str) {
          str = str.replace(/^\/agent\//, "");
          return unescape(str.replace(/＼u/g, "%u"));
        }
        return false;
      },

      // 使用document.querySelector实现锚点的效果 不改变地址栏url地址
      changeHash(idName) {
        document.querySelector(idName).scrollIntoView(true);
      },

      getClassification() {
        this.axios
          .get("/api/cats/lv2/statistics")
          .then((res) => {
            this.male = res.data.male;
            this.female = res.data.female;
            this.picture = res.data.picture;
            this.press = res.data.press;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .mui-content {
    padding-top: 40px;
  }
  .mui-row.mui-fullscreen > [class*="mui-col-"] {
    height: 100%;
  }
  .mui-col-xs-3,
  .mui-control-content {
    overflow-y: auto;
    height: 100%;
  }
  .mui-segmented-control .mui-control-item {
    line-height: 50px;
    width: 100%;
  }
  .mui-segmented-control.mui-segmented-control-inverted
    .mui-control-item.mui-active {
    background-color: #fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    margin: 0;
    padding: 0;
    border: none;
  }
  .concentration-container {
    padding-bottom: 50px;
    .bookDisplay-style {
      position: relative;
      overflow: hidden;
      height: 90px;
      .book-img {
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        width: 45px;
        height: 60px;
      }
      .book-detail {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 50%;
        text-align: left;
        a {
          font-size: 16px;
          color: #000;
        }
      }
    }
  }
</style>