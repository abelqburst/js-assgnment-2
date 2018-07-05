
const signupfunc = ()=>{
    username = document.getElementById("name").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value

    addToJson(username,password,email)
    redirectToLogin()
}
const addToJson = (username, password,email)=>{
   let usersJson = localStorage.getItem("users")
   let users = []

   if(usersJson){
       users = JSON.parse(usersJson)
    }
    users.push({username:username,password:password})
    localStorage.setItem("users",JSON.stringify(users))

}

// const redirectToLogin = ()=>{
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET','index.html')
//     xhr.send()
//     xhr.onload = ()=>{
//         document.getElementById("container").innerHTML = xhr.responseText
//     }
// }