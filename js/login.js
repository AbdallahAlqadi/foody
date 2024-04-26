var form=document.getElementById('formlogin');
var email=document.getElementById('form2Example1');
var password=document.getElementById('form2Example2');
form.addEventListener('submit',function(e){
e.preventDefault();
var alluser=JSON.parse(localStorage.getItem('Data'));
for(var i=0;i<alluser.length;i++){
    if(alluser[i].email==email.value&&alluser[i].password==password.value){
        console.log('email alredy exist');
        localStorage.setItem('loginUser',JSON.stringify(alluser[i]))
        window.location.href='index.html';
    }
else{
    
}
}
})