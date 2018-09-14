<template>
    <div class="main-paly">
        <div class="play-content" :style="{'backgroundImage':'url('+bgImg+')'}">
            <!--<audio :src="playSrc" class="audio" :autoplay="true" loop></audio> -->
            <audio controls>
                <source :src="this.$store.state.url" type="audio/mpeg">
            </audio>
        </div>
        <div class="play-menu">
            <audio controls>
                <source :src="this.$store.state.url" type="audio/mpeg">
            </audio> 
        </div>
    </div>
</template>
<script>
import { getMusicUrl } from '../utls/axios.js'
export default {
    data(){
        return{
            bgImg:require('../assets/img/main_bg.jpg'),
            playSrc:''
        }
    },
    computed:{

    },
    created(){
        var url=this.$route.params.musid;
    },
    mounted(){
        this.playSrc=this.$route.params.musid
    }
}
</script>
<style lang="less" scoped>
.play-content{
    width: 100%rem;
    height: 13.34rem;
    background-size: 100% 100%;
}
.play-menu{
    audio{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 6.78rem;
    height: 1.2rem;
    background-color: aqua;
}
}


</style>


