var pn = document.getElementsByClassName('pn');
pn[0].addEventListener('click',function(m){tabFun(1)},false);
pn[1].addEventListener('click',function(m){tabFun(2)},false);
pn[2].addEventListener('click',function(m){tabFun(3)},false);

function tabFun(even){
    var tabs = document.getElementsByClassName('tabs');
    if(even == 1){
        tabs[0].style.display="block";
        tabs[1].style.display="none";
        tabs[2].style.display="none";
    }else if(even == 2){
        tabs[0].style.display="none";
        tabs[1].style.display="block";
        tabs[2].style.display="none";
    }else if(even == 3){
         tabs[0].style.display="none";
        tabs[1].style.display="none";
        tabs[2].style.display="block";
    }
}
tabFun(1);