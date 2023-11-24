
//let counter = 0
let counter= localStorage.getItem("counter") 
? localStorage.getItem("counter")
: 0

let counterDOM = document.getElementById("counter")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let clear = document.getElementById("clear")

counterDOM.innerHTML = counter

increase.addEventListener("click", clickEvent)
decrease.addEventListener("click", clickEvent)
clear.addEventListener("click", clickClear)


function clickEvent() {
    //console.log(typeof(counter));
    //console.log(this.id);
    this.id == "increase" ?counter += 1 :counter -= 1
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML = counter
}

function clickClear() {
    localStorage.clear()
    counter = 0
    counterDOM.innerHTML = 0
}