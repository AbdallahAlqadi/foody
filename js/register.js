var form=document.getElementById('form');
var firstname=document.getElementById('form3Example1');
var lastname=document.getElementById('form3Example2');
var email=document.getElementById('form3Example3');
var password=document.getElementById('form3Example4');
var ConfPassword=document.getElementById('form3Example5');
var phone=document.getElementById('form3Example6');
var username=document.getElementById('form3Example7');





// بقدر ادخل على DATA 
var userDataFromStorage = JSON.parse(localStorage.getItem('correctKeyName'));


if(userDataFromStorage==null){
  var alluser=[];
}
else{
    var alluser=userDataFromStorage;
}
form.addEventListener('submit',function(e) {
    e.preventDefault();
  
    alert(firstname.value);
    // معلومات user(key,value)
   var  userData={
firstname:firstname.value,
 lastname:lastname.value ,
email:email.value,
password:password.value ,
ConfPassword:ConfPassword.value ,
phone:phone.value ,
username:username.value 
  }
  

      
       fname.innerHTML='userDataFromStorage'

        // بضيف معلومات كل USER IN ALLUSER
         alluser.push(userData)
// بوخذ المعلومات وبحفظها في APPLICATION
// زي كانه حكالي روح ضيف المعلومات في APP ,او على LOCAL STORGE
localStorage.setItem('user Data Forml local',JSON.stringify(alluser));

})




