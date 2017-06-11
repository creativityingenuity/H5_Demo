var list=document.getElementById ("list");
var con=document.getElementById ("con");
var oLis=list.getElementsByTagName ("li");
var oDiv=con.getElementsByTagName ("div");
list.onclick=function(e){
    var oLi= e.target;
    if(oLi.nodeName.toLowerCase()=="li"){
        var key=oLi.dataset.index;
        for(var i=0;i<oDiv.length;i++){
            if(key==i+1){
                oDiv[i].id='con-tab';
                oLi.id='list-tab';
            }else{
                oDiv[i].id='';
                oLis[i].id='';
            }
        }
    }
}