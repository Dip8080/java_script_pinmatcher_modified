/* // function that generate random number
// thn round it and value set it in the input area where the user should see it



// a function without name is  called annonimus function. fuck my splleing.
 */


                                  /* generate pin and validation */
//----------------------------------------------------------------------------------------
// function one- will genarate random four degit number and return the value .
// recursion or self calling function has been used in the function

function onlyFourDigitRandom(){
  const randomNo=Math.round(Math.random()*10000);
  randomInString=randomNo+'';
  if(randomInString.length==4){
      return randomNo; 
  }
  else {
      console.log('3 degit found',randomNo)
      return onlyFourDigitRandom();
  }

}
//----------------------------------------------------------------------------------------
// function 2- this one is onclick . his existance serves only to receive the  returned fourdgit value from function one then showing it to the input field.

function generateRandom(){
   const randomNo=onlyFourDigitRandom();
   const input_field=document.getElementById('randomInputField');
   input_field.value=randomNo;
}

//----------------------------------------------------------------------------------------
//function-3 this function is the most important on. this one checks validation. in simpler word it will match the randon pin with the pin you typed thn execute the commended program
function checkValidation(){
  const receivedPin=document.getElementById('randomInputField').value;
  const typedPin=document.getElementById('showPin').value;
  if(typedPin==receivedPin){
    document.getElementById('matched').style.display='block';
    document.getElementById('notMatched').style.display='none';
    document.getElementById('showPin').style.backgroundColor='green';
    document.getElementById('showPin').value='Congratulation!!!' ;

  }
  else{
    document.getElementById('notMatched').style.display='block';
    document.getElementById('matched').style.display='none';
    document.getElementById('showPin').style.backgroundColor='red';
    document.getElementById('showPin').value='Try again' ;
  }
}
//----------------------------------------------------------------------------------------
// now comes the event handler . the beating heart of DOM manupulation .here we have added click event on a bubble.... lol .. actually on a div . not just a div. sorry .a parent div if i say the truth . whick create a bubble effect . meaning - if u click on the clild div every click will register as a event . 

document.getElementById('bubble_div').addEventListener('click',function(event){
  const typedPinNo=event.target.innerText;
  let showPin=document.getElementById('showPin');
  if(typedPinNo.match('C')){
    showPin.value='';
    
  
}
else if(typedPinNo.match('Submit')){
    checkValidation();
}
  else{
   
    showPin.value = showPin.value + typedPinNo;
  
  
  }
})
// most fun part of this function was the condition part . i had to look at the celling a log. 1st i didn't get how the fuck my own ritten code is working . fuck !!! that rush. it was great . i learned that "always think simpler path thn create your way to the desired way"

//----------------------------------------------------------------------------------------