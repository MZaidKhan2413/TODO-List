let inp = document.getElementById("work");
let btn = document.getElementById("addBtn");
let list = document.querySelector("ol");

inp.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        let value = inp.value;
        addListItem(value);
        inp.value = "";
    }
})

btn.addEventListener("click",function(){
    let value = inp.value;
    addListItem(value);
    inp.value = "";
})

function addListItem(value){
    let list_val = document.createElement("li");
    let textNode = document.createTextNode(value);
    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.setAttribute("class","delBtn");
    list_val.appendChild(textNode);
    list_val.appendChild(delBtn);
    list.appendChild(list_val);
}

list.addEventListener("click",function(event){
    if(event.target.nodeName === "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }
})