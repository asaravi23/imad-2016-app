window.onload= function()
{
    
var pos= 0;
    
var box1= document.getElementById('first');
    
var box2= document.getElementById('second');
    
var box3= document.getElementById('third');
    
    

var a= [box1, box2, box3];
var x=a[0];
var y=0;
var t= setInterval(move,10);
    
    
    


function move()
    
{
  
        
pos=pos+1;

x.style.visibility= "visible";

if(pos>500)
{y=y+1;
x=a[y];
pos=0;
}

}





    
    
};