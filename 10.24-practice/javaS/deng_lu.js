$.ajax({
    beforeSend:function(){
        document.getElementById ('loading').style.display='block';
    },
    complete:function(){
        document.getElementById ('loading').style.display='none'
    }
});
//验证码
var y_z_m=document.getElementById ("y_z_m");
var str="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ";
var s='';
window.onload=function(){
    for(var i=0;i<4;i++){
        s+=str.charAt(Math.random()*str.length);
        y_z_m.innerHTML=s;
    }
};
//密码右侧的按钮
var div1=document.getElementById ("div1");
var div2=document.getElementById ("div2");
div2.onclick=function(){
    div1.className=(div1.className=='close1')?"open1":"close1";
    div2.className=(div2.className=='close2')?'open2':'close2';
};
//input框里的叉号的消失、出现
var p1=document.getElementById ("p1");
var p2=document.getElementById ("p2");
var p3=document.getElementById ("p3");
$(':text:eq(0)').on('click',function(){
    p1.style.display='block';
});
$(':text:eq(1)').on('click',function(){
    p2.style.display='block';
});
$(':text:eq(2)').on('click',function(){
    p3.style.display='block';
});
$('#userName').on('blur',function(){
    p1.style.display='none';
});
$('#pwd').on('blur',function(){
    p2.style.display='none';
});
$('#yzm').on('blur',function(){
    p3.style.display='none';
});
//一个月内免登陆的选择
var xuan=document.getElementById ("xuan");
var x=document.getElementById ("x");
xuan.onclick=function(){
    x.style.backgroundPosition ='0 -110px';
}