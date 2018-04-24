



var prev = document.getElementById('prev');
prev.addEventListener('click',function(){
  incre(-1);},false);

var nxt = document.getElementById('nxt');
nxt.addEventListener('click',function(){
  incre(1);
    clearInterval(xset);

},false);
 var ban = document.getElementsByClassName('ban');
var caphd = document.getElementsByClassName('hdtxt');
var j =0;

 function incre(k){
     j = j + k;
     if(j == -1){
         j = ban.length-1;
     }
     if(j == ban.length){
         j=0;
     }
    scrollImg(j);
 }
function scrollImg(z){
    ban[0].style.display="none";
    ban[1].style.display="none";
    ban[2].style.display="none";
    ban[3].style.display="none";
    ban[z].style.display="block";
    
   caphd[0].style.display="none";
    caphd[1].style.display="none";
    caphd[2].style.display="none";
     caphd[3].style.display="none";
    caphd[z].style.display="block";                              
}
scrollImg(0);
//var xset= setInterval(function(){incre(1);},4000);


/*
function scrollImg(e){
    var ban1 = document.getElementById('ban1');
    var ban2 = document.getElementById('ban2');
    var caphd = document.getElementById('caphd');
    
    if( e == 1){
        ban1.style.display="none";
        ban1.style.animationName="fadeIn";
        ban1.style.animationDuration="0.7s";
        ban1.style.transistion="0.1s";
        caphd.style.top="-40px";
        caphd.style.opacity="0";
        
         ban2.style.display="block";
        ban2.style.transistion="0.1s";
        ban2.style.animationName="fadeIn";
        ban2.style.animationDuration="1s";
        
        caphd.style.transistionDelay="2s";
        caphd.style.top="0px";
        caphd.style.opacity="1";
        
        
        
    }
        
    else if(e == -1){
         ban1.style.display="block";
         ban1.style.animationName="fadeIn";
        ban1.style.animationDuration="0.7s";
        ban1.style.transistion="0.1s";
         ban2.style.display="none";
        ban2.style.transistion="0.1s";
         ban2.style.animationName="fadeIn";
        ban2.style.animationDuration="1s";
        
    }
}

*/
