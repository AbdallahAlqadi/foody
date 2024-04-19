var flip=document.getElementsByClassName('flip');
var cardtitl=document.getElementsByClassName('card-title');
var cardtext=document.getElementsByClassName('card-text');
var cardlink=document.getElementsByClassName('card-link');
var faceorback=document.getElementsByClassName('face');
 function flipcard(index){
if(faceorback[index].innerHTML==='face'){
   faceorback[index].innerHTML=='Back'
   cardtitl[index].innerHTML='waiting Back'
   cardtext[index].innerHTML='waiting Back'
 cardlink[index].innerHTML='waiting Back'
 
}
else {
   faceorback[index].innerHTML=='face'
   cardtitl[index].innerHTML='waiting face'
   cardtext[index].innerHTML='waiting face'
 cardlink[index].innerHTML='waiting face'

}
 }