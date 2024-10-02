let productsincart=localStorage.getItem("tocart")
let allproducts=document.querySelector(".allproducts")
if(productsincart){
    let item = JSON.parse(productsincart);
    drawcartproduct(item)
}
function drawcartproduct(products){
    let y=products.map((item) => {
        return `
        <div class="products">
                <div class="product-item">
                    <img src="${item.imageUrl}" alt="Asus TUF Gaming">
                </div>
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <span style="display: block;">The new laptop from asus tek 6-2023</span>
                    <span>${item.color}</span>
                    <p>${item.price}</p>
                </div>
                    <div class="product-item-action">
                         <button class="remove-from-cart" onclick="removeFromCart(${item.id})">remove from cart</button>
                    </div>
             </div>
             `
    })
    allproducts.innerHTML= y.join('');
  }
  function removeFromCart(id) {
    let products = JSON.parse(localStorage.getItem("tocart")) || [];
    products = products.filter(item => item.id !== id);
    localStorage.setItem("tocart", JSON.stringify(products));
    drawcartproduct(products);
}