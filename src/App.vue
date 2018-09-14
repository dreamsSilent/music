<template>
  <div id="app">
    <router-view/>

    <div class="footer">
       <div class="foot-left" @click="goPlay">
            <img :src="picUrl" alt="" v-if="singerImg">
            <img :src="sImg1" alt="" v-if="!singerImg">
            <div class="singerInfo">
              <span>{{name}}</span>
              <span>{{singerName}}</span>
            </div>
       </div>
       <div class="foot-right">
            <audio :src="musicUrl" class="audio" :autoplay="isPlay" loop ref="audioPlay"></audio>
            <img :src="play" alt="" v-if="isPlay" @click="musicPlay"> 
            <img :src="pause" alt="" v-if="!isPlay" @click="musicPlay">
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      playSrc:'http://m10.music.126.net/20180903194307/02f4304d47aa5a41d87bd5322796523b/ymusic/fc09/ba27/091f/b817b89ea35414a8c08c5ab0b34b3ae1.mp3',
      sImg1:require('./assets/icon/avatar.jpg'),
      play:require('./assets/icon/play.png'),
      pause:require('./assets/icon/pause.png')
    }
  },
  computed:{
    picUrl(){
       return this.$store.state.picUrl
     },
    singerName(){
      return this.$store.state.singerName
    },
    name() {
      return this.$store.state.name
    },
    isPlay() {
      return this.$store.state.isPlay
    },
    musicUrl() {
      return this.$store.state.url
    },
    singerImg(){
      return this.$store.state.singerImg
    }
  },
  methods:{
    musicPlay(){
      var audio=this.$refs.audioPlay;
      if(this.$store.state.isPlay==false){
         this.$store.state.isPlay=true;
          audio.play()
      }
      else{
          this.$store.state.isPlay=false;
          audio.pause()
      }
    },
    goPlay(){
        this.$router.push({ name: 'storePlay', params: { musid: 'none' }})
    }
  },
  mounted(){
  
  }
}
</script>
<style lang="less" scoped>
.footer{
  background: #fff;
  width: 100%;
  height: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .foot-left{
    width: 5rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      animation: rotate 10s linear infinite ;
      -webkit-animation: rotate 10s linear infinite;
      transform-origin: center center;
      @keyframes rotate {
          from{
            transform: rotate(0deg);
          }
          to{
            transform: rotate(360deg);
          }
      }
    }
    .singerInfo{
      width: 3rem;
      height: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      span{
        font-family: "微软雅黑";
        font-size: 0.45rem;
        display: block;
        margin-top: 0.2rem;
        font-weight: 600;
        color: #31C37C;
      }
    }
  }
  .foot-right{
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
  }
}
</style>

