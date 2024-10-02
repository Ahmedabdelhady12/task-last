let userinfo =document.querySelector("#user-info")
let userdata =document.querySelector("#user")
let links =document.querySelector("#links")
let shop =document.querySelector(".shopping")

// log out from website
let logoutbtn=document.querySelector("#logout")
logoutbtn.addEventListener("click",function (){
   localStorage.clear();
   setTimeout(() => {
      window.location="login.html";
   },1500)
})



if (localStorage.getItem("username")){
    links.remove()
    shop.style.display= "block"
    userinfo.style.display= "flex"
    userdata.innerHTML =localStorage.getItem("username")
}
  let allproducts=document.querySelector(".allproducts")
  let products=[
    {
       id:1,
       title:"CHAIR MODEL1" ,
       color:"color:GREY",
       imageUrl:"imgs/1.png",
       price:"price:60$"
    },
    {
       id:2,
       title:"CHAIR MODEL2" ,
       color:"color:light blue",
       imageUrl:"imgs/2.png",
       price:"price:40$"
    },
    {
       id:3,
       title:"CHAIR MODEL3" ,
       color:"color:normal",
       imageUrl:"imgs/3.png",
       price:"price:20$",
    },
    {
       id:4,
       title:"CHAIR MODEL4" ,
       color:"color:turquoise",
       imageUrl:"imgs/4.png",
       price:"price:100$",
    },
    {
       id:5,
       title:"CHAIR MODEL4" ,
       color:"color:brown",
       imageUrl:"imgs/5.png",
       price:"price:100$",
    },
    {
       id:6,
       title:"CHAIR MODEL5" ,
       color:"color:black",
       imageUrl:"imgs/6.png",
       price:"price:50$",
    },
    {
       id:7,
       title:"CHAIR MODEL6" ,
       color:"color:black",
       imageUrl:"imgs/7.png",
       price:"price:40$",
    },
    {
       id:8,
       title:"CHAIR MODEL7" ,
       color:"color:black",
       imageUrl:"imgs/8.png",
       price:"price:40$",
    },
    {
       id:9,
       title:"CHAIR MODEL8" ,
       color:"color:purble",
       imageUrl:"imgs/category-banner1.jpg",
       price:"price:30$",
    },
    {
       id:10,
       title:"CHAIR MODEL8" ,
       color:"color:mustard",
       imageUrl:"imgs/category-banner2.jpg",
       price:"price:30$",
    },
    {
       id:11,
       title:"CHAIR MODEL8" ,
       color:"color:brown",
       imageUrl:"imgs/category-banner3.jpg",
       price:"price:30$",
    },
    {
       id:12,
       title:"CHAIR MODEL8" ,
       color:"color:black",
       imageUrl:"imgs/category-banner4.jpg",
       price:"price:30$",
    },
  ]
  let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {
    let searchTerm = searchInput.value.toLowerCase();
    let productsDiv = document.querySelectorAll(".products");

    productsDiv.forEach(product => {
        let title = product.querySelector("h2").innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
  function drawItems(){
    let y=products.map((item) => {
        return `
        <div class="products">
                <div class="product-item">
                    <img src="${item.imageUrl}" alt="Asus TUF Gaming">
                </div>
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <span>${item.color}</span>
                    <p>${item.price}</p>
                </div>
                    <div class="product-item-action">
                        <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
                        <i class="fas fa-heart" id="heart-${item.id}" onclick="toggleHeart(${item.id})"></i>
                    </div>
             </div>
             `
    })
    allproducts.innerHTML= y;
  }
  drawItems()
  function toggleHeart(id) {
   const heartIcon = document.getElementById(`heart-${id}`);
   
   // Toggle the color of the heart
   if (heartIcon.style.color === 'red') {
       heartIcon.style.color = ''; // Reset to default color
   } else {
       heartIcon.style.color = 'red'; // Change to red on click
   }
}
  let badge=document.querySelector(".badge")
  let cartproductsdiv=document.querySelector(".carts-products div")

//   let addeditem=[];
let addeditem = localStorage.getItem("tocart") ? JSON.parse(localStorage.getItem("tocart")):[];
if(addeditem){
   addeditem.map(item => {
      cartproductsdiv.innerHTML += `<P>${item.title}</p>`;
   })
   badge.style.display="block"
   badge.innerHTML = addeditem.length;
}
   if(localStorage.getItem=("username")){
      function addToCart(id){
         let choosenItem=products.find((item) => item.id===id)
         cartproductsdiv.innerHTML +=`<P>${choosenItem.title}</p>`
         let cartproductslength=document.querySelectorAll(".carts-products div p")
         addeditem=[...addeditem,choosenItem]
         localStorage.setItem("tocart",JSON.stringify(addeditem))
         // console.log(cartproductslength.length)
         badge.innerHTML = cartproductslength.length
        }
   } 
   else{
      window.location="login.html"
   }
let shoppingcartitem=document.querySelector(".shopping")
let cartproducts=document.querySelector(".carts-products")
shoppingcartitem.addEventListener("click", opencart )
function opencart(){
   if(cartproductsdiv.innerHTML !=""){
      if(cartproducts.style.display=="block"){
         cartproducts.style.display="none"
      }else{
         cartproducts.style.display="block"
      }
   }
}