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
    <p class="card-text"><b>Price :</b> ${cartItems[i].price * cartItems[i].quantity}</p>
    <p class="card-text"><b>Memory :</b> ${cartItems[i].rom}GB ROM / ${cartItems[i].ram}GB RAM</p>
    <p class="card-text mb-4"><b>Camera :</b> ${cartItems[i].camera}</p>
    <p class="card-text mb-4"><b>Quantity :</b> <button onclick="increaseItem(${i})" class="text-white bg-success border-0 rounded-2">+</button> ${cartItems[i].quantity} <button onclick="decreaseItem(${i})" class="text-white bg-danger border-0 rounded-2">-</button></p>
    <div class=" d-flex justify-content-center">
    <button onclick = deleteBtn(${i}) class= "btn btn-danger">Delete</button>
    </div>
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












function increaseItem(i) {
    // for (let i = 0; i < cartItems.length; i++) {
    //     if(cartItems[i].quantity === 0){
    //         cartItems.splice(i , 1)
    //     }else{
    //         cartItems[i].quantity += 1;
    //     }
    // }

    div.innerHTML = ``;
    cartItems[i].quantity +=1 
    renderCards()
}












function decreaseItem(i) {
    div.innerHTML = ''
    if(cartItems[i].quantity <= 1){
        cartItems.splice(i , 1);

    }else{
        cartItems[i].quantity -= 1
    }
    renderCards()

}

// renderCards()







function deleteBtn() {
    
}








function deleteAll() {
    div.innerHTML = ``
}





function backShop() {
    window.location = `index.html`
}