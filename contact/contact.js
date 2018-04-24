

var swit1=document.getElementsByClassName('swit1');
var switp=document.getElementsByClassName('switp');

var formcont=document.getElementsByClassName('form_cont');
function grey(n){
    
    switp[0].style.color="#b5b5b5";
    switp[1].style.color="#b5b5b5";
    switp[2].style.color="#b5b5b5";
    switp[3].style.color="#b5b5b5";
    
    formcont[0].style.display='none';
    formcont[1].style.display='none';    
      formcont[2].style.display='none';
      formcont[3].style.display='none';
    
    swit1[0].className='swit1 swit1g';
      swit1[1].className='swit1 swit1g';
      swit1[2].className='swit1 swit1g';
        swit1[3].className='swit1 swit1g';
    
    formcont[n].style.display='flex';
  swit1[n].className='swit1';
    switp[n].style.color="#2193A8";
}
grey(1);
swit1[0].addEventListener('click',function(){grey(0);},false);
swit1[1].addEventListener('click',function(){grey(1);},false);
swit1[2].addEventListener('click',function(){grey(2);},false);
swit1[3].addEventListener('click',function(){grey(3);},false);