var form=document.getElementById('form');
var firstname=document.getElementById('form3Example1');
var lastname=document.getElementById('form3Example2');
var email=document.getElementById('form3Example3');
var password=document.getElementById('form3Example4');


// بقدر ادخل على DATA 
var Dataformstorg=JSON.parse(localStorage.getItem('user Data Forml local'));
if(Dataformstorg==null){
  var alluser=[];
}
else{
    var alluser=Dataformstorg;
}
form.addEventListener('submit',function(e) {
    e.preventDefault();
    alert(firstname.value);
    // معلومات user(key,value)
    var userData={
firstname:firstname.value,
 lastname:lastname.value ,
email:email.value,
password:password.value   }
        console.log(userData);
   
        // بضيف معلومات كل USER IN ALLUSER
         alluser.push(userData)
// بوخذ المعلومات وبحفظها في APPLICATION
// زي كانه حكالي روح ضيف المعلومات في APP ,او على LOCAL STORGE
localStorage.setItem('user Data Forml local',JSON.stringify(alluser));

})

