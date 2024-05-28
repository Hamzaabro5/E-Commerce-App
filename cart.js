console.log('cart items');

const cartItems = JSON.parse(localStorage.getItem('cartItems'));

const div = document.querySelector('div');

function renderCards(){
    div.innerHTML = ``
    if(cartItems != null && cartItems.length > 0){
        for(let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i]);
            div.innerHTML += `
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title text-center mb-3">${cartItems[i].brand} ${cartItems[i].model}</h4>
    <p class="card-text"><b>Price :</b> ${cartItems[i].price}</p>
    <p class="card-text"><b>Memory :</b> ${cartItems[i].rom}GB ROM / ${cartItems[i].ram}GB RAM</p>
    <p class="card-text mb-4"><b>Camera :</b> ${cartItems[i].camera}</p>
    <p class="card-text mb-4"><b>Quantity :</b> ${cartItems[i].quantity}</p>
   <button onclick = deleteBtn() class= "btn btn-danger">Delete</button>
   <button onclick = addBtn() class= "btn btn-success">Add</button>
  </div>
  </div>
            `
        }
    }else{
        div.innerHTML = `
        <h3 class="text-center">Please First add some items in your cart...</h3>
        `
    }
}

renderCards()

function deleteBtn() {
for (let i = 0; i < cartItems.length; i++) {
   
    if(cartItems[i].quantity === 0){
        cartItems.splice(i , 1)
    }else{
        cartItems[i].quantity -= 1;
    }
    renderCards()
}
}

function addBtn() {
    for (let i = 0; i < cartItems.length; i++) {
        if(cartItems[i].quantity === 0){
            cartItems.splice(i , 1)
        }else{
            cartItems[i].quantity += 1;
        }
    }
    renderCards()
}