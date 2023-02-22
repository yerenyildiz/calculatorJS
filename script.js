//selections
const screen = document.querySelector(".screen")
const backspaceBtn = document.querySelector(".backspace")
const clearBtn = document.querySelector(".clear")
const dotBtn = document.querySelector(".dot")
const mathBtn = document.querySelectorAll(".buttons")
////functionality
//clear screen
clearBtn.addEventListener("click", function(){
    screen.textContent = ""
})
backspaceBtn.addEventListener("click", function(){
    screen.textContent = screen.textContent.slice(0,-1)
})

dotBtn.addEventListener("click", function(btn) {
    screen.textContent  += btn.target.textContent;
})
//adding eventlisteners to math buttons
mathBtn.forEach(btn => btn.addEventListener("click", function(btn){ 
    if (btn.target.textContent !== "="){
    screen.textContent += btn.target.textContent} else {
        //calculation 
        let userInput = screen.textContent.trim()
        screen.textContent = Function("return " + userInput)();
    }
    }));

