
var flip=document.getElementsByClassName('flip');
var cardTitl=document.getElementsByClassName('card-title');
var cardText=document.getElementsByClassName('card-text');
var cardLink=document.getElementsByClassName('card-link');
var faceOrback=document.getElementsByClassName('face');
var flipform=document.getElementById('flipform');
var title=document.getElementById('title');
console.log(title)
var text=document.getElementById('text')
var atage=document.getElementById('atage')
var selectedindex;
var backOrface={};

 function flipThecard(index){
if(faceOrback[index].innerHTML=='face'){
   cardTitl[index].innerHTML=backOrface[index]['face']['title'];
   cardText[index].innerHTML=backOrface[index]['face']['text'];
 cardLink[index].innerHTML=backOrface[index]['face']['atage'];
 faceOrback[index].innerHTML='back' 
}
else {
   cardTitl[index].innerHTML='waiting face'
   cardText[index].innerHTML='waiting face'
 cardLink[index].innerHTML='waiting face'
 faceOrback[index].innerHTML='face'
}
 }

function selectedcard(index){
  alert('you select the card : '+(index+1))
  selectedindex=index;
}

 
flipform.addEventListener('submit',(e)=>{
e.preventDefault()
if(selectedindex!=null){
  if(faceOrback[selectedindex].innerHTML=='face'){
    backOrface[selectedindex]={'face':{
'title':title.value,
'text':text.value,
'atage':atage.value
    }}
    if(backOrface[selectedindex].back!=null){

    }
  }
  else{
    backOrface={'back':{
      'title':title.value,
      'text':text.value,
      'atage':atage.value
      
          }} 
  }
  // console.log([selectedindex]['face']['title'])
alert('you are about to edit the card',(selectedindex+1))
  cardTitl[selectedindex].innerHTML=title.value
  cardText[selectedindex].innerHTML=text.value
cardLink[selectedindex].innerHTML=atage.value
selectedindex=null;


}
else{
  alert('please select a carde')
}
flipform.reset()
})