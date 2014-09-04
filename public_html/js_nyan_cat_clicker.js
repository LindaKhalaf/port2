var text;
var num;
var p;
var cursy;
var granny;
var farmy;
var facty;
var b4;
var b;
var sum;
var c;
var sum2;
var a;
var sum3;
var d;
var sum4;

window.onload=function(){
  initialize();
    text.addEventListener("click", clicker, false);
    setInterval(solidColor10, 20);
    setInterval(solidColor20, 20);
    setInterval(solidColor40, 20);
    setInterval(solidColor80, 20);
    cursy.addEventListener("click", min10, false);
    granny.addEventListener("click", min20, false);
    farmy.addEventListener("click", min40, false);
    facty.addEventListener("click", min80, false);
};

function initialize(){
       num=0;
       sum=0;
       sum2=0;
       sum3=0;
       sum4=0;
    p=document.getElementById("space4");
    cursy=document.getElementById("cursor");
    granny=document.getElementById("grandmaid");
     farmy=document.getElementById("farmid");
     facty=document.getElementById("factoryid");
    text=document.getElementById("cookieid");
    b=document.getElementById("banana");
    c=document.getElementById("apple");
    a=document.getElementById("pickle");
    d=document.getElementById("cucumber");
}


function clicker(){
    num=num+1000;
 p.innerHTML="Cats: "+num;
   
}

function solidColor10(){
    if(num>=10)
    {
        cursy.className="solid";
    }
    else
    {
        cursy.className="transparent";    
    }
    
    
}
function solidColor20(){
    if(num>=100)
    {
        granny.className="solid";
    }
    else
    {
        granny.className="transparent";
    }
}
function solidColor40(){
    if(num>=150)
    {
        farmy.className="solid";
    }
    else
    {
        farmy.className="transparent";
    }
}

function solidColor80(){
    if(num>=200)
    {
        facty.className="solid";
    }
    else
    {
        facty.className="transparent";
    }
}

function min10(){
    if(num>=10)
    {    
        num=num-10;
        sum=sum+1;
        p.innerHTML="Cats: "+num;
        b.innerHTML="Chocolate Covered Strawberries: "+sum;
    }
    else
    {
        num=num-0;
    }   
}  

function min20(){
    if(num>=100)
    {    
    num=num-100;
    sum2=sum2+1;
    p.innerHTML="Cats: "+num;
    c.innerHTML="Cupcakes: "+sum2;
    }
    else
    {
        num=num-0;
    }   
} 

function min40(){
    if(num>=150)
    {    
    num=num-150;
    sum3=sum3+1;
    p.innerHTML="Cats: "+num;
    a.innerHTML="Pepermint Candies: "+sum3;
    }
    else
    {
        num=num-0;
    }   
} 

function min80(){
    if(num>=200)
    {    
    num=num-200;
    sum4=sum4+1;
    p.innerHTML="Cats: "+num;
    d.innerHTML="Cookie(s): "+sum4;
    }
    else
    {
        num=num-0;
    }   
} 



/*
var milliseconds;

window.setInterval=getElementById("cursorid",milliseconds); {
    text=document.getElementById("cursorid");
     text.addEventListener("click", sum2, false);
     intitialize2();
    alert("Hello",2000);
};

function initialize2(){
    num=0;
    document.getElementById("space7").innerHTML="Cookies Per Second: "+num;
}


function sum2(){
    num=num+1;
    document.getElementById("space7").innerHTML="Cookies Per Second: "+num;
   
}
*/

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


