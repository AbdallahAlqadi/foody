var form=document.getElementById('form');
console.log(form)
var firstname=document.getElementsByClassName('firstname');
var lastname=document.getElementsByClassName('lastname');
var email=document.getElementsByClassName('email');
var password=document.getElementsByClassName('password');

form.addEventListener('submit',function(e){
    e.preventDefault();
    alert(firstname.value);
})