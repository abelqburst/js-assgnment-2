window.onload = function(){
    if(isLoggedIn()){
        //Show Contact page
       onLogin()
    }


}
const loginfunc = ()=>{
    const loginBtn = document.getElementById("login")
    const parentElement = loginBtn.parentElement
    if(parentElement.getElementsByClassName("err")[0]){
        parentElement.removeChild(parentElement.getElementsByClassName("err")[0])
    }

    const uname = document.getElementById("username").value
    const pass = document.getElementById("password").value
    const res = validate(uname, pass)
    if(res){
        onLogin(uname,pass)
    }
    else{
        loginBtn.insertAdjacentHTML('afterend','<span class="err">Invalid Credentials</span>')
    }
    
}
const isLoggedIn = ()=>{
    if(localStorage.getItem("username").trim() == "" || localStorage.getItem("password").trim() == ""  ){
        return false
    }
    else{
        return true
    }
}
const onLogin = (uname,pass)=>{
    localStorage.setItem("username",uname)
    localStorage.setItem("password",password)
    const xhr = new XMLHttpRequest()
    xhr.open('GET','contact.html')
    xhr.send()
    xhr.onload = ()=>{
        document.getElementById("container").innerHTML = xhr.responseText
    }
}

const validate = (uname,pass)=>{
    const usersJson = localStorage.getItem("users")
    const users = JSON.parse(usersJson)
    for (const user of users) {
        if(uname.trim() === user.username.trim() ){
            if(pass.trim() === user.password.trim()){
                return true
            }
            else{
                return false
            }
            
        }
    }
   
    return false

}

const redirectToSignup = ()=>{
    const xhr = new XMLHttpRequest()
        xhr.open('GET','signup.html')
        xhr.send()
        xhr.onload = ()=>{
            document.getElementById("container").innerHTML = xhr.responseText
        }
        return false
}