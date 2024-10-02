let username =document.querySelector("#username")
let password =document.querySelector("#pwd")
let loginbtn =document.querySelector("#sign_in")

 let getUsername=localStorage.getItem("username")
 let getPassword=localStorage.getItem("password")


 loginbtn.addEventListener("click", function (e){
    e.preventDefault()
    if(username.value ==="" || password.value ==="" ){
        alert("please fill data")
    }
    else{
        if(getUsername && getUsername === username.value.trim() && getPassword && getPassword === password.value){
           
            setTimeout(() => {
                window.location ="index.html"
            }, 1500);           
        }else{
            alert("username or password is wrong")
        }
        }

 })