//Part 1 Problem 1

let names =["Deloris","Grant", "Victoria"]
let listItems=document.getElementsByTagName("li")
for (let i=0; i<listItems.length; i++) {
    listItems[i].textContent=names[i]
}

//Part 1 Problem 2 

let userPrompt = prompt("Enter logo size small or large.")
let logo = document.getElementById('logo')
if(userPrompt == "small"){
    logo.setAttribute('width', "400")
    logo.setAttribute('height', "250")
} else if (userPrompt == "large") {
    logo.setAttribute("width", "800")
    logo.setAttribute("height", "500")
}