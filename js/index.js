var favbutton=document.getElementsByClassName('favbutton');
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