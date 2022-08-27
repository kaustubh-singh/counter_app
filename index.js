let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let sumEl = document.getElementById("sum-el")
let count = 0
let sum = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    sum = sum + count
    saveEl.textContent += countStr
    countEl.textContent = 0
    sumEl.textContent = "Total: " + sum
    count = 0
}
