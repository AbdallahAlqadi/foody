
var form=document.getElementById('formlogin');
var email=document.getElementById('form2Example1');
var password=document.getElementById('form2Example2');
form.addEventListener('submit',function(e){
e.preventDefault();
var alluser=JSON.parse(localStorage.getItem('user formlalocal'));
for(var i=0;i<alluser.length;i++){
if(alluser[i].email==email.value){
    console.log('email alredy exist');
}
else{
    console.log('email not exist');
alert('email not exist')
}
}
})