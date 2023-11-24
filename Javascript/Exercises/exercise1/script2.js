let userForm = document.querySelector('#userForm')
userForm.addEventListener('submit', formHandler)
userForm.addEventListener('reset', formClear)

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    addItem(USER_NAME.value, SCORE.value) 
    //gonderdikten sonra sıfırlıyoruz
    USER_NAME.value = ""
    SCORE.value = ""
}

const userList = document.querySelector("#userList")

const addItem =(username, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = 
    `<li class="list-group-item d-flex justify-content-between align-items-center">${username}
    <span class="badge bg-primary rounded-pill">${score}</span></li>`
    userList.append(liDOM)
}

function formClear() {
    userList.innerHTML= ""
}








