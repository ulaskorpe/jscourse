const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
 
function error(input,message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    
    div.innerText = message ;
    div.className = 'invalid-feedback';
}
function success(input){
    input.className = 'form-control is-valid';
}
form.addEventListener('submit',function(e){
    e.preventDefault();
     
   if(username.value ===''){
    error(username,'username required');
   }else{
    success(username);
   }
   if(email.value ===''){
    error(email,'email required');
   }else if(!validateEmail(email.value)){
    error(email,'email is not valid');
   }else{
    success(email);
   }
   if(password.value ===''){
    error(password,'password required');
   }else{
    success(password);
   }
   if(repassword.value ===''){
    error(repassword,'repassword required');
   }else{
    success(repassword);
   }
});

 
function validateEmail(email) {
    
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}