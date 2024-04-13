var form =document.getElementById('form');
var img=document.getElementById('img');
var description=document.getElementById('description');
var price=document.getElementById('price');
var title=document.getElementById('title');
var carditem=document.getElementById('carditem');

form.addEventListener('submit',function(e){

e.preventDefault();

console.log(img.value)
console.log(price.value)
console.log(title.value)
console.log(description.value)

//imge
var newimg=document.createElement('img')
newimg.className='file-img'
// title
var newtitle=document.createElement('tiltle')
newtitle.className='text-title'
//description



//price
})