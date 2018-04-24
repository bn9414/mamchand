var n =true;
var a =document.getElementById('nav_line');

var b =document.getElementsByClassName('l1')[0];
var c =document.getElementsByClassName('l2')[0];
var d=document.getElementsByClassName('l3')[0];
var e=document.getElementsByClassName('menu_con')[0];
var main_menu=document.getElementsByClassName('main_menu')[0];
var sub_menu=document.getElementsByClassName('sub_menu')[0];
var menu7=document.getElementsByClassName('menu7')[0];
var inlogo=document.getElementById('inlogo')
var allmenu=e.getElementsByTagName('a');
var nav= document.getElementById('nav_bar');

var menu1=document.getElementsByClassName('menu1')[0];
var menu2=document.getElementsByClassName('menu2')[0];
var menu3=document.getElementsByClassName('menu3')[0];
var menu4=document.getElementsByClassName('menu4')[0];
var menu5=document.getElementsByClassName('menu5')[0];
var menu6=document.getElementsByClassName('menu6')[0];
var blacklay=document.getElementsByClassName('black_lay')[0];
var mn=document.getElementsByClassName('mn');
var pmn=document.getElementsByClassName('pmn');
var pmenu4=document.getElementsByClassName('menu4')[0];


var prod_menu=document.getElementsByClassName('prod_menu')[0];
var phead=document.getElementsByClassName('phead')[0];



var overflow =document.getElementById('nav_bar');





function test(a){

if(a==2){n=1;}
    
    
    
    if(n==true){
    b.className='line l1 lopen1';
    c.className='line l2 lopen2';
        d.className='line l3 lopen3';
        e.style.display='block';


         setTimeout(function(){prod_menu.style.display="none"; main_menu.style.display='block';  },420); 
         
       

          blacklay.className="black_lay blackani";
        setTimeout(function(){  blacklay.className="black_lay";},1300);
       // blacklay.style.backgroundColor="rgba(1,1,1,0.0)";
          
    overflow.style.position='fixed';
    }
    

if(n==false){
    b.className='line l1 lclose1';
  
     c.className='line l2 lclose2';
      d.className='line l3 lclose3';
 e.style.display='none';
    nav.style.boxShadow='0px 0px 2px 1px hsla(0, 0%, 0%, 0.1)';
    main_menu.style.display='none'; 

   // blacklay.style.backgroundColor="rgba(1,1,1,0.0)";
    blacklay.style.left="100%";
 overflow.style.position='relative';

}
n=!n;
}

function test1(){
   setTimeout(function(){  main_menu.style.display='none';   prod_menu.style.display="block";},420); 
    
 
    pmn[0].className='pmn mjz4 phead';
        
      blacklay.className="black_lay blackani";
     setTimeout(function(){  blacklay.className="black_lay";},1300);
}

a.addEventListener('click', function(){test(3);}, false );
menu3.addEventListener('click', test1, false );
phead.addEventListener('click', function(){test(2);}, false );



/* start:menu zoom out 
function zoomin(){
    
    e.className='menu_con a';
  main_menu.style.opacity="0";
     sub_menu.style.opacity="0";
     menu7.style.opacity="0";
     menu7.className="menu7 b";
      b.className='line l1 lclose1';
  
     c.className='line l2 lclose2';
      d.className='line l3 lclose3';
    
}
allmenu[0].addEventListener('click',zoomin,false);
allmenu[1].addEventListener('click',zoomin,false);
allmenu[2].addEventListener('click',zoomin,false);
allmenu[3].addEventListener('click',zoomin,false);
allmenu[4].addEventListener('click',zoomin,false);
allmenu[5].addEventListener('click',zoomin,false);
allmenu[6].addEventListener('click',zoomin,false);



/* end:menu zoom out */