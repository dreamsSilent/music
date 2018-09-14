//时间转换
export function timeschange(times){
    var minutes=parseInt((times % (1000 * 60 * 60)) / (1000 * 60))
    var seconds=parseInt((times % (1000 * 60)) / 1000)
    if(minutes<10){
        minutes='0'+minutes
    }
    if(seconds<10){
       seconds='0'+seconds
    }
    return minutes+':'+seconds
}