var button= document.getElementById("counter");
var counter=0;

button.onClick=function()
{
    counter=counter+1;
    var span= document.GetElementById("span");
    span.innerHTML= counter.toString() ;
    
}