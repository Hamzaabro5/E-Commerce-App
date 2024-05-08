const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]

const arr = []
const div = document.querySelector(`.container`)

function renderCards() {
    for (let i = 0; i < phones.length; i++) {
        // console.log(phones[i]);
        div.innerHTML += `
        
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${phones[i].brand}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${phones[i].model}</h6>
    <p class="card-text">${phones[i].price}</p>
   <button onclick = addCart(${i}) class= "btn btn-danger">Add To Cart</button>
  </div>
  </div>
        
        `
    }
}
renderCards()

function addCart(index) {
    // console.log(`Add To Cart` , phones[index]);

    if (arr.push(phones[index])) {
        console.log(`Item Added`);
    }else{
        arr.push(phones[index])
    }

}

function showCart() {
    window.location = `cart.html`
}