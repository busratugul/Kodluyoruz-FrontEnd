const inputDOM = document.querySelector('#taskInput')
const addBtnDOM = document.querySelector('#addBtn')
const deleteBtnDOM = document.querySelectorAll('.deleteTask')
const tasksDOM = document.querySelector('#tasks')
const taskDOM = document.querySelectorAll('.task')

const handleClick = () => {
  let value = inputDOM.value
  //Boş mu kontrolü yapıyoruz
  if (value.trim() !== '') {
    //elementleri oluşturuyoruz
    const newLi = document.createElement('li')
    newLi.innerHTML = `
    <li class="task">
          ${value}
          <button class="deleteTask"><i class="fa-solid fa-xmark icon"></i></button>
        </li>
    `

    tasksDOM.appendChild(newLi)

    showToast('Görev başarı ile eklendi.')

    newLi.addEventListener('click', taskCompleted)

    const deleteButton = newLi.querySelector('.deleteTask')
    deleteButton.addEventListener('click', handleDelete)

    inputDOM.value = ''
  } else {
    //Eğer Boşsa
    alert('lütfen bir değer giriniz')
  }
}

const taskCompleted = (e) => {
  const clicked = e.target
  if (clicked.classList.contains('deleteTask')) {
    e.stopPropagation()
    return
  }
  clicked.classList.toggle('completed')
}

const handleDelete = (e) => {
  const clicked = e.currentTarget
  const taskToDelete = clicked.parentNode
  taskToDelete.remove()
}

taskDOM.forEach((task) => {
  task.addEventListener('click', taskCompleted)
})

deleteBtnDOM.forEach((btn) => {
  btn.addEventListener('click', handleDelete)
})

addBtnDOM.addEventListener('click', handleClick)
