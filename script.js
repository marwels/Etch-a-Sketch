function generateDivs() {
    let fragment = new DocumentFragment();  //create a virtual DOM element, 
    //make all of DOM changes on it, and then assign that virtual DOM element 
    //to real DOM once they are ready to commit

    for (let i = 1; i <= 256; i++) {
        let divElement = document.createElement("div");
        divElement.classList.add("item");
        divElement.id = `item${i}`;
        fragment.appendChild(divElement);
    }
    document.getElementById("container").appendChild(fragment);
}

generateDivs();

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", event => {
        item.classList.add("black")
    })
})

function newCanva() {
    let size = prompt("Please enter size of new page. It has to be number from 1 to 100:", "50");
    return size;
}