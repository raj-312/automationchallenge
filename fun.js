var keytime=0;
var total=0;
var s;
var prevFlag=false;
var defaultFlag=false;
$(function() {
    $('div').click(function(e) {
		
      var posX = e.pageX-$('#textarea1').offset().left,
            posY = e.pageY-$('#textarea1').offset().top;
if(posX==201 && posY==15.125)
{
}
else
{
	  document.getElementById('text1').style.visibility='visible';
	   document.getElementById('text1').focus();
}

	});
});

$(function() {
    $('input').focusout(function() {
       
       document.getElementById('textarea1').innerText=this.value;
       this.value=''; 
    });
});
$(function() {
    $('input').keydown(function() {
     
	 keytime = new Date().getTime() ;
    });
});
$(function() {
    $('input').keyup(function() {

   total = new Date().getTime() - keytime  ;
    });
});
$(document).on('keypress',function(e) {
    
	e.preventDefault();
	var b = $('#text1').val();
	 var a = $('#text1').val().length ;

if((total>30 && total<170) || (total==0 && a==0))
{
	
	document.getElementById('text1').value = b+e.key;
	//document.getElementById('text1').value = s+b+e.key+total+' ';
	if((total>30 && total<170))
	{
		prevFlag = true;
	}
}
else 
{
	if(prevFlag==true)
	{
		//document.getElementById('text1').value = b+e.key;
	}
	else{
	//document.getElementById('text1').value = b+e.key+total;
	prevFlag=false;
}
}
   
});


$(document).ready(function() {
 $('#text1').bind('copy paste cut',function(e) { 
 e.preventDefault(); //disable cut,copy,paste
 });
});