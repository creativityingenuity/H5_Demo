//开头 轮播图
new Swiper('.img-container',{
    loop:true,
    pagination: '.swiper-pagination',        //pagination:分页
    autoplay:2000,
    paginationClickable: false          //Clickable:可以点击的
//        paginationBulletRender: function (index, cname) {
//            return '<span class="' + cname + '">' +(index+1)+ '</span>'
//        }
});
//y-hui 倒计时
var timer;
var a;
var b;
var c;
window.onload=function(){
    var shi=document.getElementById ("shi");
    var fen=document.getElementById ("fen");
    var miao=document.getElementById ("miao");
    function changeTime(){
        a = parseInt(shi.innerHTML);
        b = parseInt(fen.innerHTML);
        c = parseInt(miao.innerHTML);
        c = c - 1;
        if (a == 0 && b == 0 && c == 0) {
            return false;
        }
        c = c - 1;
        if (c < 0&&b>0) {
            c = 59;
            b=b-1;
        } else if(c<0&&b==0){
            c=59;
            b=59;
            a=a-1;
        }
        else if (b == 0 && c == 0&& a>0) {
            c = 59;
            b = 59;
            a = a - 1;
        } else if (a == 0 && b == 0 && c == 0) {
            miao.innerHTML =0;
            clearInterval(timer);
            return false;
        }
        shi.innerHTML = a;
        fen.innerHTML = b;
        miao.innerHTML = c;
    }
    timer=setInterval(changeTime,1000);
};
//限时秒杀中的轮播图
$(function () {
    var oImg = $('#xiaolunbo').find('img');
    var count = 0;

    function tab() {
        if (count == 3) {
            count = 0;
        }
        oImg.hide();
        oImg.eq(count).show();
        count++;
    }

    setInterval(tab, 2000);
});
//返回顶部按钮
var ding=document.getElementById ("ding");
var timer2;
window.onscroll=function(){
    var top=document.documentElement.scrollTop||document.body.scrollTop;
    if(top>=300){
        ding.style.display ='block';
    }else{
        ding.style.display ='none';
    }
};
function callBack(){
    var top=document.documentElement.scrollTop||document.body.scrollTop;
    if(top>0){
        document.documentElement.scrollTop-=50;
        document.body.scrollTop-=50;
    }else{
        document.documentElement.scrollTop=0;
        document.body.scrollTop=0;
        clearInterval(timer2);
    }
}
ding.onclick=function(){
    timer2=setInterval(callBack,10);
}