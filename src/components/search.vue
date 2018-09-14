<template>
    <div class="main">
        <div class="head-search">
            <img :src="backIcon" alt="">
            <input type="text" placeholder="一百万个可能" v-model="searchName">
            <img :src="search" alt="" class="search-img" @click="goSearch">
        </div>
        <div class="music-list">
            <div class="main-music" v-for="(num,index) in musicData" :key="index" @click="getMusicInfo(num.id,num.name,num.artists[0].img1v1Url,num.artists[0].name,num.duration)">
                <img :src="num.artists[0].img1v1Url" class="music-img">
                <div class="music-info">
                    <p>{{num.name}}</p>
                    <p>{{num.artists[0].name}}</p>
                    <img :src="playIcon" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getDiscList ,getSearch,getMusicUrl,getMusicLyric} from '../utls/axios.js'
export default {
    data(){
        return{
           backIcon:require('../assets/icon/left.png'),
           search:require('../assets/img/search_icon.png'),   
           playIcon:require('../assets/icon/pause.png'),        
           musicData:[],
           searchName:'一百万个可能',
           singerImg:require('../assets/icon/avatar.jpg')
        }
    },
    created(){
    //    getSearch(this.searchName).then(res=>{
    //        //console.log(res.data.result.songs)
    //        this.musicData=res.data.result.songs
    //    })
    },
    methods:{
        getMusicInfo(id,singerName,singerImg,name,durationTime){
            getMusicUrl(id).then(res=>{
                this.$store.state.url=res.data.data[0].url;
                this.$store.state.isPlay=true;
                this.$router.push({ name: 'storePlay'})
            })
            getMusicLyric(id).then(res=>{
                //console.log(res.data.lrc.lyric);
                this.$store.state.lyrics=res.data.lrc.lyric;
            })
            this.$store.state.name=name
            this.$store.state.singerName=singerName
            this.$store.state.picUrl=singerImg
            this.$store.state.duration=durationTime
            this.searchName=name
        },
        goSearch(){
            getSearch(this.searchName).then(res=>{
                console.log(res.data.result.songs)
                this.musicData=res.data.result.songs
           })
        }
    }
}
</script>
<style lang="less" scoped>
.head-search{
    width: 100%;
    height: 1.2rem;
    background: #2AAA6D;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        width: 5rem;
        height: 0.7rem;
        color: #fff;
        font-size: 0.4rem;
        padding-left: 0.4rem;
        background: #2AAA6D;
        outline: #2AAA6D;
        border: none;
    }
    input::placeholder{
        color: #fff;
        font-size: 0.35rem;
    }
    .search-img{
        width: 0.7rem;
        height: 0.7rem;
    }
}
.music-list{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #291E26;
    .main-music{
        width: 3.15rem;
        height: 1.7rem;
        margin:0.32rem 0.3rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        background: #21181E;
        .music-img{
            width: 1.7rem;
            height: 1.7rem;
        }
        .music-info{
            width: 1.45rem;
            height: 1.7rem;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            &::before{
                display: table;
                content: "";
            }
            p{
                font-size: 0.25rem;
                width: 1.45rem;
                height: 0.4rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                margin: 0.2rem 0 0 0.1rem;
                color: #fff;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
           }
           p:last-child{
               margin-top: 0.15rem;
           }
           img{
               width: 0.6rem;
               height: 0.6rem;
               margin-top: 0.1rem;
           }
        }
    }
}
</style>


