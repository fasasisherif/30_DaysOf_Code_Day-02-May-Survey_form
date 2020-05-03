var ham = document.getElementsByClassName("ham")
var dropdown1 = document.getElementsByClassName("dropdown1")
var dropdown2 = document.getElementsByClassName("dropdown2")
var five = document.getElementsByClassName("five")


ham[0].addEventListener("click",myfunc1)
five[0].addEventListener("click",myfunc2)

var a = 0;
function myfunc1(){

dropdown1[0].style.height ="255px"		
dropdown1[0].style.width ="auto"
//second[0].style.overflow ="auto"		
//second[0].style.margin ="auto"				
ham[0].innerHTML ="X"	
a++;

if(a%2 === 0){		
dropdown1[0].style.height ="0px"		
dropdown1[0].style.overflow ="hidden"		
ham[0].innerHTML ="&#9776"
		}
		
 }
 
 
var b = 0;
function myfunc2(){

dropdown2[0].style.height ="350px"		
dropdown2[0].style.width ="auto"		
b++;

if(b%2 === 0){		
dropdown2[0].style.height ="0px"		
dropdown2[0].style.overflow ="hidden"		
		}
		
 }
