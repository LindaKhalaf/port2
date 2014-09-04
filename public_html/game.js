var text;
var num;
var p;
var cursy;
var granny;
var farmy;
var b4;

window.onload=function(){
  initialize();
    text.addEventListener("click", clicker, false);
    setInterval(solidColor10, 20);

    cursy.addEventListener("click", min10, false);
    granny.addEventListener("click", min20, false);
    farmy.addEventListener("click", min40, false);
};

function initialize(){
       num=0;
    p=document.getElementById("space4");
    cursy=document.getElementById("cursor");
    granny=document.getElementById("grandmaid");
     farmy=document.getElementById("farmid");
    text=document.getElementById("cookieid");
    
}


function clicker(){
    num=num+1;
 p.innerHTML="Cookies: "+num;
   
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
        farmy.className="solid";
    }
    else
    {
        farmy.className="transparent";
    }
}

function min10(){
    if(num>=10)
    {    
        num=num-10;
        p.innerHTML="Cookies: "+num;
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
    p.innerHTML="Cookies: "+num;
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
    p.innerHTML="Cookies: "+num;
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
    p.innerHTML="Cookies: "+num;
    }
    else
    {
        num=num-0;
    }   
}