<template lang="html">
<div class="main">
   <div class="header">
        <div class="t-header">
            <div class="l-icon">
                <img src="../assets/icon/xian.png">
            </div>
            <div class="m-content">
                <router-link to="/">
                  <span>我的</span>
                </router-link> 
                <router-link to="/club">
                  <span>音乐馆</span>
                </router-link>
                <router-link to="/vipPlay">
                  <span>vip音乐下载</span>
                </router-link>
            </div>
            <div class="r-icon">
                <img src="../assets/icon/shiqu.png">
            </div>
            <div>
            </div>
        </div>
        <div class="b-header">
            <!--<div class="mint-header-title">-->
                <div class="search-input">
                    <router-link to="/search">
                        <input type="text" placeholder="搜索"  >
                    </router-link>
                </div>
            <!--</div>-->
        </div>
    </div>
    <div class="carousel-box">
        <el-carousel :interval="4000" arrow="hover" height="3rem">
            <el-carousel-item v-for="item in carouselImg" :key="item">
                <img :src="item" class="carousel-img">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="main-content">
         <div class="info-nav">
            <div class="info-menu">
                <img :src="icon1">
                <span>本地音乐</span>
            </div>
            <div class="info-menu">
                <img :src="icon2">
                <span>我的下载</span>
            </div>
            <div class="info-menu">
                <img :src="icon3">
                <span>我喜欢的</span>
            </div>
         </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            bgImg:require('../assets/img/bg_3.jpg'),
            adImg:require('../assets/img/bg_1.jpg'),
            icon1:require('../assets/icon/yinfu.png'),
            icon2:require('../assets/icon/download.png'),
            icon3:require('../assets/icon/heart.png'),
            carouselImg:['../../static/img/carousel_1.jpg','../../static/img/carousel_2.jpg','../../static/img/carousel_3.jpg'],
            sidebarshow: false,
        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
*{
    font-family: Tahoma;
    font-weight: normal;
}
.main{
    width: 100%;
}
.header{
    background-color: #31C37C;
    width: 100%;
    height: 3rem;
}
.t-header{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 0.1rem;
    span{
        color: #DBF3E8;
        font-size:0.35rem; 
        padding-left: 0.12rem;   
        line-height: 0.6rem;
    }
    img {
        width: 0.6rem;
        height: 0.6rem;
    }
}
.l-icon{
    position: absolute;
    left: 0.32rem;
}
.r-icon{
  position: absolute;
  right: 0.32rem;
}
.b-header{
   input{
       position: absolute;
       left: 0.32rem;
       top: 1.5rem;
       width: 6.3rem;
       height: 0.4rem;
       text-align: center;
       padding: 0.3rem;
       background-color: #2AAA6D;
       border-radius: 0.3rem;
       border: none;
       font-size: 0.35rem;
       outline: none;
       &::placeholder{
           color: #DBF3E8;
       }
   }
}
.m-content{
    a{
        text-decoration: none;
    }
}
.main-content{
    width: 100%;
    height: 11rem;
    background-size: 100% 100%;
    &::before{
      display: table;
      content: "";
    }
    .info-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 3rem;
        margin-top: 5.54rem;
        .info-menu{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 2rem;
            height: 3rem;
            img{
                width: 2rem;
                height: 2rem;
            }
            span{
                font-size: 0.45rem;
                color: #fff;
            }
        }
    }
}
.el-carousel__item{
    .carousel-img{
        width: 100%;
        height: 100%;
    }
    li.is-active{
        background: #2AAA6D;
        .el-carousel__button{
            background: rgb(227, 243, 5);
        }
    }
  }
</style>

