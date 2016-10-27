window.onload= function()
{
    
var pos= 0;
    
var box1= document.getElementById('first');
    
var box2= document.getElementById('second');
    
var box3= document.getElementById('third');
    
    

var a= [box1, box2, box3];
var x=a[0];
var y=0;
var c;

var t= setInterval(move,10);
    
    
    


function move()
    
{
  
        
pos=pos+1;

x.style.visibility= "visible";

if(pos>500)
{y=y+1;

pos=0;


if(y>2)
{
hide();
y=0;
}
x=a[y];

}
}


function hide()
{

for(c=0;c<a.length;c++)
{

a[c].style.visibility="hidden";


}


}    
    



};