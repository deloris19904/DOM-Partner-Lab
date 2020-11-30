let names =["Deloris","Grant", "Victoria"]
let listItems=document.getElementsByTagName("li")
for (let i=0; i<listItems.length; i++) {
    listItems[i].textContent=names[i]
}

