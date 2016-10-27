window.onload= function()
{
    var pos= 0;
    var box1= document.getElementById('first');
    var box2= document.getElementById('second');
    var box3= document.getElementById('third');
    
    var t= setInterval(move,10);
    
    
    function move()
    {
  
        pos= pos+1;
        box1.style.left= pos +'px';
    }
    
    
};