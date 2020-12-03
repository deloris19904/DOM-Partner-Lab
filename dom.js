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
//Part 1 Problem 3

let userColor=prompt("Pick a color: Red, Blue or Yellow.")
let body = document.getElementsByTagName("body")
if (userColor == "red"){
    body[0].style.backgroundColor="red"
    
} else if (userColor == "blue"){
    body[0].style.backgroundColor="blue"
    
} else if (userColor == "yellow"){
    body[0].style.backgroundColor="yellow"
    
} 

//Part 1 Problem 4

// for(i = 0; i < 5; i++){
//     let team1=prompt("Team member name");
//     teamList[i].textContent = team1;
// }

// Part 2 Problem 1
let userName=prompt("Please Enter Your Name")
function headerCreate(userName){
    let h=document.createElement("h1")
    let text=document.createTextNode(userName+"'s Resume!")
    h.appendChild(text)
    document.body.appendChild(h)
}
headerCreate(userName)

//Part 2 Problem 2

let array = ["html", "css", "javascript", "java"]
let userInput = prompt("How would you like the list displayed? Ordered or Unordered?")
let list
if(userInput == "ordered"){
    list = document.createElement("ol")   
} else if(userInput == "unordered"){
    list = document.createElement("ul")
}

for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li")
    let liText = document.createTextNode(array[i])
    li.appendChild(liText)
    list.appendChild(li)
}

document.body.appendChild(list)

// 3. Prompt the user for a number and 
// remove that skill from their
// list of skills.
//let array = ["html", "css", "javascript", "java"]
//Part 2 problem 3

let userNum= prompt("Pick a number 1 - 4.")
let index = userPrompt - 1;
let children=list.childNodes
children[index].remove()












