<template>
  <div>
    <header id="header" class="mui-bar mui-bar-transparent">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">{{bookInfo.title}}</h1>
    </header>

    <div class="mui-content bookEle">
      <img id="img1" :src="unicodeToChar(bookInfo.cover)" class="bookImg" />
      <div class="bookInfo">
        <p>{{bookInfo.title}}</p>
        <p>{{bookInfo.author}}</p>
        <p>{{parseInt(bookInfo.wordCount/10000)}}万字</p>
      </div>
    </div>
    <div>
      <ul class="bookData">
        <li>
          <p>{{bookInfo.rating.score}}</p>
          <p>{{bookInfo.rating.count}}人参与评分</p>
        </li>
        <li>
          <p>{{bookInfo.retentionRatio}}%</p>
          <p>读者留存</p>
        </li>
        <li>
          <p>{{parseInt(bookInfo.latelyFollower/10000)}}万</p>
          <p>7日人气</p>
        </li>
        <li>
          <p>{{parseInt(bookInfo.totalFollower/10000)}}万</p>
          <p>累计人气</p>
        </li>
      </ul>
    </div>
    <div class="bookIntro">
      <div class="bookTag">
        <p>简介</p>
        <ul>
          <li v-for="item in bookInfo.tags" :key="item._id">{{item}}</li>
        </ul>
      </div>
      <div class="booklongIntro">
        <text>{{bookInfo.longIntro}}</text>
      </div>
      <div class="bookMenu">目录</div>
    </div>
  </div>
</template>

<script>
  import mui from "../../lib/mui/js/mui.js";

  export default {
    data() {
      return {
        bookID: this.$route.params.id,
        bookInfo: [],
      };
    },
    created() {
      mui.init({
        swipeBack: false, //启用右滑关闭功能
      });
      var slider = document.getElementById("slider");
      mui(".mui-input-group").on("change", "input", function () {
        if (this.checked) {
          switch (this.value) {
            case "static":
              document.getElementById("img1").className = "";
              document.getElementById("slider").classList.add("mui-hidden");
              break;
            case "slider":
              document.getElementById("img1").className = "mui-hidden";
              if (slider.classList.contains("mui-hidden")) {
                document.getElementById("slider").classList.remove("mui-hidden");
              }
              break;
          }
        }
      });
    },
    created() {
      this.getBookInfo(this.bookID);
    },
    methods: {
      getBookInfo(bookID) {
        this.axios
          .get("/api/book/" + bookID)
          .then((res) => {
            this.bookInfo = res.data;
            console.log("OK");
          })
          .catch((err) => {
            console.log(err);
          });
      },
      unicodeToChar(str) {
        if (str) {
          str = str.replace(/^\/agent\//, "");
          return unescape(str.replace(/＼u/g, "%u"));
        }
        return false;
      },
    },
  };
</script>


<style lang="scss" scoped>
  html,
  body {
    background-color: #efeff4;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .mui-bar .mui-pull-left .mui-icon {
    padding-right: 5px;
    font-size: 28px;
  }

  .mui-bar .mui-btn {
    font-weight: normal;
    font-size: 17px;
  }

  .mui-bar .mui-btn-link {
    top: 1px;
  }

  .mui-content img {
    width: 100%;
  }
  .hm-description {
    margin: 15px;
  }

  .hm-description > li {
    font-size: 14px;
    color: #8f8f94;
  }
  .bookEle {
    display: flex;
    // position: relative;
    background-color: #555;
    height: 150px;
    .bookImg {
      //   position: absolute;
      //   left: 7%;
      //   top: 12%;
      width: 90px;
      height: 120px;
      margin: 20px 0 0 20px;
    }
    .bookInfo {
      margin: 30px 0 0 20px;
      p {
        color: #fff;
        &:nth-child(2) {
          color: #ffd700;
        }
        &:nth-child(3) {
          color: #999;
        }
      }
    }
  }
  .bookData {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    text-align: center;
    li {
      list-style: none;
      height: 100%;
      padding: 5px 0 5px 0;
      p {
        color: #ccc;
        font-size: 12px;
      }
    }
  }
  .bookIntro {
    padding-left: 20px;
    .bookTag {
      p {
        font-size: 20px;
        padding: 10px 0 10px 0;
        color: #000;
        padding-bottom: 10px;
      }
      ul {
        overflow: hidden;
      }
      li {
        float: left;
        font-size: 12px;
        list-style: none;
        color: #555;
        background-color: #ccc;
        padding: 1px 6px 1px 6px;
        margin: 3px;
        border-radius: 12px;
      }
    }
    .booklongIntro {
      padding: 10px 0 10px 0;
      font-size: 20px;
      color: #000;
      max-width: 100%;
      max-height: 50px;
      text-overflow: ellipsis;
    }
  }
</style>