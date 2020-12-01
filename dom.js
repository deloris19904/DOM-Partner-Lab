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

for(i = 0; i < 5; i++){
    let team1=prompt("Team member name");
    teamList[i].textContent = team1;
}



function headerCreate() {
    let h = document.createElement("HEADER");
    //document.body.appendChild(h);
    document.body.insertBefore(h,document.body.childNodes[0])
    let h2 = document.createElement("H2");
    let txt = document.createTextNode("Header element containing a h2 element is now created");
    h2.appendChild(txt);
    h.appendChild(h2);
}
headerCreate()

