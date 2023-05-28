
const form = document.querySelector('#form')
const username = document.querySelector('#username');const email = document.querySelector('#Email');
const phone = document.querySelector('#number');
const password = document.querySelector('#Password');
const  cpassword= document.querySelector('#ConfirmPassword');

form.addEventListener('submit',(event)=>{ //event =submit
          event.preventDefault();
            validate();
            success()
          

})




const isEmail = (emailVal)=>{ 

   let atSymbol = emailVal.indexOf('@');
   if(atSymbol<2) 
   {  return false   }//@ first ma vaya invalid

if(emailVal.length<5){ return false}

    let dot = emailVal.lastIndexOf('.')
   
    if(dot <= atSymbol + 2) {return false}
     
    //   if dot at last 
     if( dot == emailVal.length - 1){return false}
  
 
return true; // above  condition are not math 
    

}







const validate = ()=>{
     // input type username ma  aako value ko  agadi rw paxadi ko space remove garerw local const unsername ma aaija

     //spaces/blank input submit  will be null

    const usernameVal = username.value.trim()

    const emailVal =Email.value.trim();
    const phoneVal = number.value.trim();
    const passwordVal = Password.value.trim();
    const  cpasswordVal= ConfirmPassword.value.trim();
  
 

    //username validation
    if(usernameVal ===  ""){ 
        setErrorMsg(username,'username cannot be blank')
    }
   
    else if( usernameVal.length < 3){
        setErrorMsg(username,'at least 3 letter is required')

    }
    else{
          setSuccessMsg(username);
    }


    //Email validation
    if(emailVal ===  ""){ 
        setErrorMsg(email,'email cannot be blank')
    }
    else if( !isEmail(emailVal) ){ //  only if isEmail return false,this code is executed
        setErrorMsg(email,'invalid email')

    }
    else{
          setSuccessMsg(email);
    }


//validation phone
if(phoneVal ===  ""){ 
    setErrorMsg(phone,' cannot be blank')
}

else if( phoneVal.length != 10){
    setErrorMsg(phone,'must be 10 numbers')

}
else{
      setSuccessMsg(phone);
}


//  Password validation
if(passwordVal ===  ""){ 
    setErrorMsg(password,'password cannot be blank')
}

else if( 6 >= passwordVal.length ){
    setErrorMsg(password,'at least 6 letter is required')

}
else{
      setSuccessMsg(password);
}


//Confirmation password validation
if( cpasswordVal === passwordVal && passwordVal !=""){ 
    setSuccessMsg(cpassword);
    }

else if (cpasswordVal==="" ){
    setErrorMsg(cpassword,'  cannot beblank')
 }


else{
    setErrorMsg(cpassword,'plz use same passeord')
}



 }



// success();



//*************bujna parni************************************************ */
// setErrorMsg(email,'email cannot be blank') -->passing value 

//brief-->note ma xa


function setErrorMsg(input,errmsg){

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');// small tag
    formControl.className ="form-control error"; //adding class
    small.innerText = errmsg;

    
}

 function setSuccessMsg(input){
       const formControl=input.parentElement;

       formControl.className= "form-control success"
         

 }

//  if all details are valid then submit success

function success(){ //
 
    let formEL = document.querySelectorAll('.form-control'); // 5 ota
    
    //  console.log(formEL[0].className);
    //  console.log(formEL);

let count = formEL.length - 1;

    for(let i = 0; i< formEL.length; i++){

      if(formEL[i].className === "form-control-success"){
          sendData();
      }


    }
  
 




}

