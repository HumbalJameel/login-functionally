function onSubmit(){
    console.log('click')
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    console.log(email,password)

if(!email || !password){
    alert("not login")
}

if(password.length  > 8  ){
    if(email === "humbaljameel@gmail.com" && password === "123456789"){
        // alert("login success")//
        window.location.href="./index2.html"
        
    }else{
        alert("Incorrect email or password.Please try again")
    }

}
else{
    alert("password should be atleast 8 charachters")
}
}