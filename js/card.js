var img=document.getElementById('img');
var title=document.getElementById('title');
var description=document.getElementById('description');
var price=document.getElementById('price');
var form=document.getElementById('form');
var cardbody=document.getElementById('CardBody');


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

//Delete
function Delete() {
    var cards = cardbody.querySelectorAll('.card');
    var lastCard = cards[cards.length - 1];
  
    if (lastCard) {
      cardbody.removeChild(lastCard);
    } else {
      console.log("No cards to delete!");
    }
  }
  

//Update
  function Update() {
    var lastCard = cardbody.querySelector('.card:last-child');
  
    if (!lastCard) {
      alert('No cards to update.');
      return;
    }
  
  
    var newImgURL = document.getElementById('img').value;
    var newTitleText = document.getElementById('title').value;
    var newDescriptionText = document.getElementById('description').value;
    var newPriceText = document.getElementById('price').value;
  
    
    if (newImgURL) {
      lastCard.querySelector('.card-img-top').src = newImgURL;
    }
    if (newTitleText) {
      lastCard.querySelector('.card-title').textContent = newTitleText;
    }
    if (newDescriptionText) {
      lastCard.querySelector('.card-text').textContent = newDescriptionText;
    }
    if (newPriceText) {
      lastCard.querySelector('.btn-primary').textContent = newPriceText; 
    }
  
    alert('Card updated successfully.');
  }
  