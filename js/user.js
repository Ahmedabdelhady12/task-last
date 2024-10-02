let userinfo =document.querySelector("#user-info")
let userdata =document.querySelector("#user")
let links =document.querySelector("#links")
let shop =document.querySelector(".shopping")
if (localStorage.getItem("username")){
    links.remove()
    userinfo.style.display= "flex"
    shop.style.display= "block"
    userdata.innerHTML =localStorage.getItem("username")
}

// log out from website
let logoutbtn=document.querySelector("#logout")
logoutbtn.addEventListener("click",function (){
   localStorage.clear();
   setTimeout(() => {
      window.location="login.html";
   },1500)
})

