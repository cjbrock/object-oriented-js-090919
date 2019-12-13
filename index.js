// Step 1 - create a user object with a Username, age, and hobby

// function createUser(){
//     let user = {
//         username: "Trevor",
//         age: 50,
//         hobby: "bird watching"
//     }

//     let list = document.getElementById('list')
//     list.innerHTML = `
//     <tr>
//         <td>${user.username}</td>
//         <td>${user.age}</td>
//         <td>${user.hobby}</td>
//     </tr>
//     `
// }


// Step 2 - Create a User object using the function syntax

// function User(username, age, hobby){
//     this.username = username
//     this.age = age
//     this.hobby = hobby
// }

// function createUser(){

//     let user = new User("Trevor", 50, "bird watching")

//     let list = document.getElementById('list')
//     list.innerHTML = `
//     <tr>
//         <td>${user.username}</td>
//         <td>${user.age}</td>
//         <td>${user.hobby}</td>
//     </tr>
//     `
// }

// Step 3 - Create a prototype function called render
function User(username, age, hobby) {
    this.username = username
    this.age = age
    this.hobby = hobby
}

User.prototype.render = function(){
    let list = document.getElementById('list')
    list.innerHTML = `
    <tr>
        <td>${this.username}</td>
        <td>${this.age}</td>
        <td>${this.hobby}</td>
    </tr>
    `
}

function createUser() {
    let user = new User("Todd", 40, "psychology")
    user.render()
}


// Step 4 - Create a class level function called list users
// Step 5 - Translate to ES6 - create class
// Step 6 - Translate to ES6 - render inside of the class
// Step 7 - Translate to ES6 - add static keywords
// Step 8 - get input from the form!