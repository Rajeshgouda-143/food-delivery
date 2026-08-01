var swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: "#prev",
        prevEl: "#next",
      },
    });



const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cardList = document.querySelector(".card-list");
const cartList = document.querySelector(".cart-list");
let cartValue = document.querySelector(".cart-value")

cartIcon.addEventListener('click', ()=> cartTab.classList.add('cart-tab-active'));

closeBtn.addEventListener('click', ()=> cartTab.classList.remove('cart-tab-active'));


let productList = [];

const showCards = ()=>{
  productList.forEach(product =>{
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');

    orderCard.innerHTML = `
    <div class="card-image">
        <img src="${product.image}">
    </div>
    <h4>${product.name}</h4>
    <h4 class="price">${product.price}</h4>
    <a href="" class="btn card-btn">Add to Cart</a>
    `;

    cardList.appendChild(orderCard);

    const cardBtn = orderCard.querySelector(".card-btn");
    cardBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      addToCart(product);
      cartValue.innerText = Number(cartValue.innerText) + 1
    });
  });

};

const addToCart = (product)=>{
  const cartItem = document.createElement('div');
  cartItem.classList.add('item');

  cartItem.innerHTML = `
  <div class="item-image">
      <img src="${product.image}">
  </div>
  <div>
      <h4>${product.name}</h4>
      <h4 class="item-total">${product.price}</h4>
  </div>
  <div class="flex">
      <a href="#" class="quantity-btn">
          <i class="fa-solid fa-minus"></i>
      </a>
      <h4 class="quantity-value">1</h4>
      <a href="#" class="quantity-btn">
          <i class="fa-solid fa-plus"></i>
      </a>
  </div>
  `;

  cartList.appendChild(cartItem)

}

const initApp = ()=>{
  fetch('products.json').then
  (Response => Response.json()).then
  (data =>{
    productList = data;
    showCards();
  })
}

initApp();


//go to homepage section

function GotoHome(){
  document.getElementById("home").scrollIntoView({
    behavior:"smooth"
  });
}

//Go to menu section
function GotoMenu(){
  document.getElementById("menu").scrollIntoView({
    behavior:"smooth"
  });
}

//Go to services section
function GotoServices(){
  document.getElementById("service").scrollIntoView({
    behavior:"smooth"
  });
}

//Go to about section
function GotoAbout(){
  document.getElementById("about").scrollIntoView({
    behavior:"smooth"
  });
}

//Go to contact section
function GotoContact(){
  document.getElementById("contact").scrollIntoView({
    behavior:"smooth"
  });
}

//Go to reviews section
function GotoReviews(){
  document.getElementById("review").scrollIntoView({
    behavior:"smooth"
  });
}

function GotoOrder(){
  document.getElementById("order").scrollIntoView({
    behavior:"smooth"
  });
}


