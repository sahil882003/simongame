var count=0;
var level=1;
var flag=true;
var fdefeat=false;
var generated=[];
var input=[]
document.addEventListener("keypress",kpress);
document.querySelector("#green").addEventListener('mousedown',greenf);
document.querySelector("#red").addEventListener('mousedown',redf);
document.querySelector("#yellow").addEventListener('mousedown',yellowf);
document.querySelector("#blue").addEventListener('mousedown',bluef);
function kpress()
{
    var string="Level "+level;
    document.removeEventListener("keypress",kpress);
    document.querySelector("h1").innerHTML=string;
    if(fdefeat)
    {
        document.querySelector("body").classList.remove("game-over");
        fdefeat=false;
    }
   // rgenerator();
    setTimeout(rgenerator,500);
    
}
function rgenerator()
{
    var index=Math.floor(Math.random()*4)+1;
    switch(index)
    {
        case 1:
            flag=false;
            greenf();
            break;
        case 2:
          flag=false;
            redf();
            break;
        case 3:
            flag=false;
            yellowf();
            break;
        case 4:
           flag=false;
            bluef();
            break;
    }
}
function greenf()
{
    var button=document.querySelector("#green");
    new Audio("sounds/green.mp3").play();
    button.classList.add("pressed");
    setTimeout(function(){
    button.classList.remove("pressed");
    },100);
    if(!flag)
    {
        generated.push(1);
    }
    else
    {
        input.push(1);
        count++;
        validate();
    isLevelIncremented();
    }
    flag=true;
    
}
function redf()
{
    var button=document.querySelector("#red");
    new Audio("sounds/red.mp3").play();
    button.classList.add("pressed");
    setTimeout(function(){
    button.classList.remove("pressed");
    },100);
    if(!flag)
    {
        generated.push(2);
    }
    else
    {
        input.push(2);
        count++;
        validate();
    isLevelIncremented();
    }
    flag=true;
    
}
function yellowf()
{
    var button=document.querySelector("#yellow");
    new Audio("sounds/yellow.mp3").play();
    button.classList.add("pressed");
    setTimeout(function(){
    button.classList.remove("pressed");
    },100);
    if(!flag)
    {
        generated.push(3);
    }
    else
    {
        input.push(3);
        count++;
        validate();
        isLevelIncremented();
    }
    flag=true;
   
}
function bluef()
{
    var button=document.querySelector("#blue");
    new Audio("sounds/blue.mp3").play();
    button.classList.add("pressed");
    setTimeout(function(){
    button.classList.remove("pressed");
    },100);
    if(!flag)
    {
        generated.push(4);
    }
    else
    {
        input.push(4);
        count++
        validate();
        isLevelIncremented();
    }
    flag=true;
    
}

function validate()
{
    if(generated[count-1]!=input[count-1])
    {
        defeat();
    }
}

function defeat()
{
    fdefeat=true;
    document.querySelector("body").classList.add("game-over");
    new Audio("sounds/wrong.mp3");
    document.querySelector("h1").innerHTML="Game Over,press any key to start";
    level=1;
    count=0;
    input=[];
    generated=[];
    document.addEventListener("keypress",kpress);

}
 
function isLevelIncremented()
{
    if(count==level)
    {
        count=0;
        level++;
        input=[];
        kpress();

    }
}

function delay()
{

}



