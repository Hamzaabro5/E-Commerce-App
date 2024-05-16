const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 MegaPixel',
        price: 170999
    },
    {
        brand: 'Xiomi',
        model: 'note 10',
        ram: 4,
        rom: 64,
        camera: '10 MegaPixel',
        price: 32000
    },
    {
        brand: 'Infinix',
        model: 'Z10',
        ram: 4,
        rom: 32,
        camera: '5 MegaPixel',
        price: 35000
    },
    {
        brand: 'Tecno',
        model: 'Spark 10',
        ram: 8,
        rom: 128,
        camera: '25 MegaPixel',
        price: 34000
    },
    {
        brand: 'Iphone',
        model: '14 max',
        ram: 12,
        rom: 512,
        camera: '30 MegaPixel',
        price: 150000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 6,
        rom: 128,
        camera: '20 MegaPixel',
        price: 25000
    },
    {
        brand: 'Vivo',
        model: 'Y20',
        ram: 4,
        rom: 64,
        camera: '8 MegaPixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 'S20 Ultra',
        ram: 8,
        rom: 256,
        camera: '60 MegaPixel',
        price: 512000
    },

]

let arr;
let items = JSON.parse(localStorage.getItem('cartItems'));
if(items === null){
    arr = [];
}else{
    arr = items;
}
const div = document.querySelector(`.container`)

function renderCards() {
    for (let i = 0; i < phones.length; i++) {
        // console.log(phones[i]);
        div.innerHTML += `
        
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title text-center mb-3">${phones[i].brand} ${phones[i].model}</h4>
    <p class="card-text"><b>Price :</b> ${phones[i].price}</p>
    <p class="card-text"><b>Memory :</b> ${phones[i].rom}GB ROM / ${phones[i].ram}GB RAM</p>
    <p class="card-text mb-4"><b>Camera :</b> ${phones[i].camera}</p>
   <button onclick = addCart(${i}) class= "btn btn-danger">Add To Cart</button>
  </div>
  </div>
        
        `
    }
}
renderCards()

function addCart(index){
    if(arr.includes(phones[index])){
        phones[index].quantity += 1;
    }else{
        phones[index].quantity = 1;
        arr.push(phones[index]);
    }
    console.log(arr);
}

function showCart() {
    localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = `cart.html`
}