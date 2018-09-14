<template>
    <div class="main">
        <video controls="" autoplay="" name="media">
            <source src="http://m10.music.126.net/20180903194307/02f4304d47aa5a41d87bd5322796523b/ymusic/fc09/ba27/091f/b817b89ea35414a8c08c5ab0b34b3ae1.mp3" type="audio/mpeg">
        </video>
    </div>
</template>
<style lang="less" scoped>
.main{
    background-image: url('../assets/header-bg.jpg');
    width: 100%;
    height: 1334px;
    background-size: 100% 100%;
    video{
        width: 100%;
        height: 55px;
        margin-top: 100px;
        source{
            width: 100%;
            height: 55px;
            background: #fff;
        }
    }
}
</style>
