<template>
    <div class="main-paly">
        <div class="play-content" :style="{'backgroundImage':'url('+bgImg+')'}">
            <!-- <audio controls>
                <source :src="playSrc" type="audio/mpeg">
            </audio> -->
            <div class="cd-img">
                <div class="cd-countrl">
                     <img :src="cdHead" alt="">
                </div>
                <div class="cd-icon">
                    <div class="main-icon">
                          <img :src="cdBgimg" alt="">
                    </div>
                    <div class="singer-icon">
                          <img :src="picUrl" alt="">
                    </div>
                </div>
            </div>
            <div class="div-range">
                   <musicRange></musicRange>
		    </div>
        </div>
    </div>
</template>
<script>
import { getMusicUrl } from '../utls/axios.js'
import { timeschange } from '../utls/common.js'
import musicRange from './musicRange.vue'
export default {
    data(){
        return{
            bgImg:require('../assets/img/main_bg.jpg'),
            cdBgimg:require('../assets/cd-mine.png'),
            cdHead:require('../assets/swith.png'),
            playSrc:''
        }
    },
    components:{
        musicRange
    },
    created(){
    },
    computed:{
     picUrl(){
       return this.$store.state.picUrl
     }
    },
    mounted(){
        var songTimes=this.$store.state.duration
        var times=timeschange(songTimes)
        console.log(songTimes)
    }
}
</script>
<style lang="less" scoped>
.play-content{
    width: 100%;
    height: 14.34rem;
    background-size: 100% 100%;
}
.play-content::before{
    display: table;
    content: "";
}
.cd-img{
    width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    .cd-countrl{
        z-index: 100;
    }
    .cd-icon{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0.35rem;
        animation: rotate 10s linear infinite ;
        -webkit-animation: rotate 10s linear infinite;
        transform-origin: center center;
        .main-icon{
            width: 7rem;
            height: 7rem;
            img{
                width: 7rem;
                height: 7rem;
            }
        }
        div.singer-icon{
            position: absolute;
            width: 4.65rem;
            height: 4.65rem;
            border-radius: 100%;
            overflow: hidden;
            img{
                width: 4.65rem;
                height: 4.65rem;
            }
        }
        @keyframes rotate {
          from{
            transform: rotate(0deg);
          }
          to{
            transform: rotate(360deg);
          }
      }
    }
}
.div-range{
    margin-top: 400px;
}

</style>


