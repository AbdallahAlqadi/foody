var profile =JSON.parse(localStorage.getItem('loginUser'));
var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var password=document.getElementById('password');
var confpassword=document.getElementById('confpassword');
var phone=document.getElementById('phone');
var email=document.getElementById('email');
var username=document.getElementById('username');

fname.innerHTML=profile.firstname;
lname.innerHTML=profile.lastname;
password.innerHTML=profile.password;
confpassword.innerHTML=profile.confpassword;
phone.innerHTML=profile.phone;
email.innerHTML=profile.email;
username.innerHTML=profile.username;

