// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { Carousel, CarouselItem } from 'element-ui';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Carousel);
Vue.use(CarouselItem);

const store = new Vuex.Store({
  state: {
    musiclist: [],
    showFooter: true,
    isPlay: false,
    singerImg:false,
    lyrics: "",
    duration:275000,
    currentTime:0,
    url: "http://m10.music.126.net/20180903194307/02f4304d47aa5a41d87bd5322796523b/ymusic/fc09/ba27/091f/b817b89ea35414a8c08c5ab0b34b3ae1.mp3",
    name: "一百万个可能",
    singerName:"Bruno Mars",
    picUrl: "https://p1.music.126.net/BgIHV6Bdc1fOL8exoLAHIg==/1694347418408441.jpg"
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
