// step-1 add click evet handelar with the submit button 

document.getElementById('btn-submit').addEventListener('click',function(){

    // step-2 get the email address  inside the input field  
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField= document.getElementById('user-password');
    const password= passwordField.value;

    if( email=== 'sontan@bapp.com' && password==='secret' ){
        window.location.href='bank.html';
    }
    else{
        alert(" Tui password vule gecoc !!! Toke ami tejjo sontan goshona  korlam");
    }
  


})