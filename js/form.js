var img=document.getElementById('img');
var title=document.getElementById('title');
var description=document.getElementById('description');
var form=document.getElementById('form');
var cardbody=document.getElementById('CardBody');
var h1=document.getElementById('h1');
var p=document.getElementById('p')

function flipe(){

   h1.innerHTML='aaaaaaaaaaaaaaaa' 
   p.innerHTML='zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
}


form.addEventListener('submit',function(e){
e.preventDefault()
console.log(img.value)
console.log(title.value)
console.log(description.value)
console.log(price.value)
//image
var newimg=document.createElement('img');
newimg.className='card-img-top'
newimg.src=img.value
//title
var newtitle=document.createElement('h5');
newtitle.className='card-title'
newtitle.innerHTML=title.value
//description
var newdescription=document.createElement('p');
newdescription.className='card-text'
newdescription.innerHTML=description.value

//price
var newprice=document.createElement('a');
newprice.className='btn-primary'
newprice.innerHTML=price.value

//contact
var contact=document.createElement('div');
contact.className='card-body'
//card
var card=document.createElement('div');
card.className='card'

contact.append(newtitle)
contact.append(newdescription)
contact.append(newprice)
card.style='width: 18rem';
card.append(newimg)
card.append(contact)
cardbody.append(card)

})



