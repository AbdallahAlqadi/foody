var flip=document.getElementsByClassName('flip');
var cardTitl=document.getElementsByClassName('card-title');
var cardText=document.getElementsByClassName('card-text');
var cardLink=document.getElementsByClassName('card-link');
var faceOrback=document.getElementsByClassName('face');
var flipform=document.getElementById('flipform');
var title=document.getElementById('title');
var text=document.getElementById('text')
var atage=document.getElementById('atage')
var selectedindex;

 function flipThecard(a){
if(faceOrback[a].innerHTML=='face'){
   faceOrback[a].innerHTML='Back'
   cardTitl[a].innerHTML='waiting Back'
   cardText[a].innerHTML='waiting Back'
 cardLink[a].innerHTML='waiting Back'
 
}
else {
   faceOrback[a].innerHTML='face'
   cardTitl[a].innerHTML='waiting face'
   cardText[a].innerHTML='waiting face'
 cardLink[a].innerHTML='waiting face'

}
 }

function selectedcard(index){
  alert('you select the card of index : '+(index+1))
  selectedindex=index;
}

 
flipform.addEventListener('submit',function(e){
e.preventDefault()
if(selectedindex!=null){

  cardTitl[selectedindex].innerHTML=title.value
  cardText[selectedindex].innerHTML=text.value
cardLink[selectedindex].innerHTML=atage.value


}
else{
  alert('please select a carde')
}

})