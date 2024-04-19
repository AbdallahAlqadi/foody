var flip=document.getElementsByClassName('flip');
var cardTitl=document.getElementsByClassName('card-title');
var cardText=document.getElementsByClassName('card-text');
var cardLink=document.getElementsByClassName('card-link');
var faceOrback=document.getElementsByClassName('face');
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