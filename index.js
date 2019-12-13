// NOTE: THESE WILL NOT ALL RUN TOGETHER. Comment them all out, then run them step by step.

// Step 1 - create a user object with a Username, age, and hobby

function createUser(){
    let user = {
        username: "Trevor",
        age: 50,
        hobby: "bird watching"
    }

    let list = document.getElementById('list')
    list.innerHTML = `
    <tr>
        <td>${user.username}</td>
        <td>${user.age}</td>
        <td>${user.hobby}</td>
    </tr>
    `
}


// Step 2 - Create a User object using the function syntax

function User(username, age, hobby){
    this.username = username
    this.age = age
    this.hobby = hobby
}

function createUser(){

    let user = new User("Trevor", 50, "bird watching")

    let list = document.getElementById('list')
    list.innerHTML = `
    <tr>
        <td>${user.username}</td>
        <td>${user.age}</td>
        <td>${user.hobby}</td>
    </tr>
    `
}

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

function User(username, age, hobby) {
    this.username = username
    this.age = age
    this.hobby = hobby
    User.all.push(this)
}

User.prototype.information = function(){
    return `
    <tr>
        <td>${this.username}</td>
        <td>${this.age}</td>
        <td>${this.hobby}</td>
    </tr>
    `
}

User.listUsers = function(){
    let list = document.getElementById('list')
    list.innerHTML = ''
    User.all.forEach(user => list.innerHTML += user.information())
}

User.all = []

function createUser() {
    let user = new User("Todd", 40, "psychology")
    let user2 = new User("CJ", 38, "programming")
    let user3 = new User("Anna", 15, "cheer")
    let user4 = new User("Caitlin", 34, "whining")
    let user5 = new User("Faith", 1, "eating")
    User.listUsers()
}

// Step 5 - Translate to ES6 - create class

class User {
    constructor(username, age, hobby){
        this.username = username
        this.age = age
        this.hobby = hobby
        User.all.push(this)
    }
}

User.prototype.information = function(){
    return `
    <tr>
        <td>${this.username}</td>
        <td>${this.age}</td>
        <td>${this.hobby}</td>
    </tr>
    `
}

User.listUsers = function(){
    let list = document.getElementById('list')
    list.innerHTML = ''
    User.all.forEach(user => list.innerHTML += user.information())
}

User.all = []

function createUser() {
    let user = new User("Todd", 40, "psychology")
    let user2 = new User("CJ", 38, "programming")
    let user3 = new User("Anna", 15, "cheer")
    let user4 = new User("Caitlin", 34, "whining")
    let user5 = new User("Faith", 1, "eating")
    User.listUsers()
}

// Step 6 - Translate to ES6 - render inside of the class

class User {
    constructor(username, age, hobby){
        this.username = username
        this.age = age
        this.hobby = hobby
        User.all.push(this)
    }

    information(){
        return `
        <tr>
            <td>${this.username}</td>
            <td>${this.age}</td>
            <td>${this.hobby}</td>
        </tr>
        `
    }
}

User.listUsers = function(){
    let list = document.getElementById('list')
    list.innerHTML = ''
    User.all.forEach(user => list.innerHTML += user.information())
}

User.all = []

function createUser() {
    let user = new User("Todd", 40, "psychology")
    let user2 = new User("CJ", 38, "programming")
    let user3 = new User("Anna", 15, "cheer")
    let user4 = new User("Caitlin", 34, "whining")
    let user5 = new User("Faith", 1, "eating")
    User.listUsers()
}

// Step 7 - Translate to ES6 - add static keywords

class User {
    static all = []

    constructor(username, age, hobby){
        this.username = username
        this.age = age
        this.hobby = hobby
        User.all.push(this)
    }

    information(){
        return `
        <tr>
            <td>${this.username}</td>
            <td>${this.age}</td>
            <td>${this.hobby}</td>
        </tr>
        `
    }

    static listUsers(){
        let list = document.getElementById('list')
        list.innerHTML = ''
        User.all.forEach(user => list.innerHTML += user.information())
    }
}

function createUser() {
    let user = new User("Todd", 40, "psychology")
    let user2 = new User("CJ", 38, "programming")
    let user3 = new User("Anna", 15, "cheer")
    let user4 = new User("Caitlin", 34, "whining")
    let user5 = new User("Faith", 1, "eating")
    User.listUsers()
}

// Step 8 - get input from the form!
class User {
    static all = []

    constructor(username, age, hobby){
        this.username = username
        this.age = age
        this.hobby = hobby
        User.all.push(this)
    }

    information(){
        return `
        <tr>
            <td>${this.username}</td>
            <td>${this.age}</td>
            <td>${this.hobby}</td>
        </tr>
        `
    }

    static listUsers(){
        let list = document.getElementById('list')
        list.innerHTML = ''
        User.all.forEach(user => list.innerHTML += user.information())
    }
}

function createUser() {
    let username = document.getElementById('username').value
    let age = document.getElementById('age').value
    let hobby = document.getElementById('hobby').value

    let user = new User(username, age, hobby)

    let username = document.getElementById('username').value = ''
    let age = document.getElementById('age').value = ''
    let hobby = document.getElementById('hobby').value = ''
    
    User.listUsers()
}