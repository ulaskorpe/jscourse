const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
 
function error(input,message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    input.value ='';
    div.innerText = message ;
    div.className = 'invalid-feedback';
}
function success(input){
    input.className = 'form-control is-valid';
}
form.addEventListener('submit',function(e){
    e.preventDefault();
     
    checkRequired([username,email,password,repassword]);
  validateEmail();
  checkLength(username,6,12);
  checkLength(password,8,12);
  checkPassword();
});

function checkRequired(inputs){
    inputs.forEach(function(input){
   
    if(input.value ===''){
        error(input,input.id+' required');
       }else{
        success(input);
       }
    })
}
function checkPassword(){
     if(password.value !== repassword.value && repassword.value !== ''){
        error(repassword,'passwords not same');
     }
}

function checkLength(input,min,max){
 
    if(input.value!=='' && ( input.value.length < min || input.value.length > max) ){
        error(input, input.id+' must be between '+min+' and '+max+' characters') ;
 
    }

}
 
function validateEmail() {
    if(email.value!==''){
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!regex.test(email.value)){
            error(email,'invalid email format');
         
            }
    }
 
  //  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //  console.log(regex.test(String(x).toLowerCase()));
    //return regex.test(String(email).toLowerCase());
    // if(!regex.test(String(email).toLowerCase())){
    //  error(email,'invalid email format');
    // }else{
    //     success(email);
    // }
}

// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }