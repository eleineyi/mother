/**
 * Created by Administrator on 2016/11/24.
 */
$(function () {
    var starty=0,endy=0,x=0,move=true;
    document.addEventListener('touchstart',function (ev) {
        var touchs=ev.touches[0];
        starty=touchs.pageY;
        move=false;
    },false)
    document.addEventListener('touchmove',function (ev) {
        var touchs=ev.touches[0];
        endy=touchs.pageY;
        move=true;
    },false)
    document.addEventListener('touchend',function () {
        if((endy-starty)<-1){
            if(x>=7){
                x=7;
                return false;
            }
            $('.wrap li').eq(x).slideUp(200,'swing');
            $('.wrap li').eq(x+1).show();
            x++;
        }
        if((endy-starty)>7){
            x--;
            if(x<0){
                x=0;
                return false;
            }
            $('.wrap li').eq(x).slideDown(200,'swing',function () {
                $('.wrap li').eq(x+1).hide();
            });


        }
    },false);
    /*setTimeout(function () {
        $(".tupian").fadeIn(2000);
    },10)*/

});

