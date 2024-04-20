var favbutton=document.getElementsByClassName('favbutton');
var islogin=JSON.parse(localStorage.getItem('isloggedIn'));

if(islogin==null){
alert('is login first');

}
else if(islogin==false){
    alert('please login first');
    window.location.href='login.html';
}
else{
    console.log(islogin);
}
function fav(index){
favbutton[index].addEventListener('click',()=>{

  
    console.log(index)
    favbutton[index].children[0]
    var fill=document.getElementsByClassName('bi-heart-fill')[index];
    if(fill.style.display=='none'){
        fill.style.display='block'
    }
    else{
        fill.style.display=='none'
    }
})

}