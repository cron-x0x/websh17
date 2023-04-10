
let countEl = document.getElementById("count-el") 
let saved = document.getElementById("saved")
let count = 0

function increment() {
        count += 1
        countEl.innerText = count
        
}

function save(){
    saved.textContent += count + " - "
    countEl.innerText = 0
    count = 0; 
    
    
}
