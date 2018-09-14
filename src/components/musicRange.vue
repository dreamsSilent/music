<template>
    <div class="range">
        <span class="currentTime">{{currentTimeStr}}</span>
        <div class="progress">
            <span class="currentProgress"></span>
            <div class="initProgress">
                 <span :style="{'width':currentTime*proportion+'px'}"></span>
                 <span></span>
            </div>
        </div>
        <span class="duration">{{durationTimeStr}}</span>
    </div>
</template>
<script>
import { timeschange } from '../utls/common.js'
    export default{
       data(){
           return{
              durationTime:0,
              currentTime:0,
              durationTimeStr:'',
              currentTimeStr:'',
              intervale:'',
              proportion:''
           }
       },
       watch:{
           currentTime(newValue,oldValue){
                if(newValue>=this.durationTime/1000){
                    clearInterval(this.intervale)
                }
           }
       },
       methods:{
           time(){
               this.currentTime+=1
               var minutes=parseInt(this.currentTime/60)
               var seconds=parseInt(this.currentTime%60)
               this.$store.state.durationTime=this.currentTime
               if(minutes<10){
                   minutes='0'+minutes
               }
               if(seconds<10){
                   seconds='0'+seconds
               }
               this.currentTimeStr=minutes+':'+seconds
           }
       },
       created(){
           this.durationTime=this.$store.state.duration
           this.currentTime=this.$store.state.currentTime
           this.durationTimeStr=timeschange(this.durationTime)
           this.intervale=setInterval(this.time,1000)
           this.proportion=620/(this.durationTime/1000)
       }
    }
</script>
<style lang="less" scoped>
.range{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:0 32px;
    .currentTime{
        font-family:  Arial, sans-serif;
        font-size: 36px;
        color:#fff;
    }
    .progress{
        width: 650px;
        height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        span:first-child{
          display: block;
          width: 650px;
          height: 10px;
          background: rgba(184, 28, 28, 0.493);
        }
        .initProgress{
          position: absolute;
          left: 0;
          top: 0;
          width: 650px;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          span:first-child{
              width: 0;
              height: 10px;
              background: #00CD00;
          }
          span:last-child{
              width: 30px;
              height: 30px;
              border-radius: 30px;
              background: #fff;
          }
        }
    }
    .duration{
        font-family:  Arial, sans-serif;
        font-size: 36px;
        color: #fff;
    }
}
</style>
