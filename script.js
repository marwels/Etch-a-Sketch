function newCanva() {
    let size = parseInt(prompt("Please enter size of new page. It has to be number from 1 to 100:", "50"), 10);

    if (size < 1 || size > 100) {
        parseInt(prompt("Please enter a number from 1 to 100", "50"), 10);
    } else if (isNaN(size)) {
        parseInt(prompt("It is not a number. Please enter a number from 1 to 100", "50"), 10);
    }

    generateDivs(size);
}

function generateDivs(size) {
    let fragment = new DocumentFragment();  //create a virtual DOM element, 
    //make all of DOM changes on it, and then assign that virtual DOM element 
    //to real DOM once they are ready to commit

    for (let i = 1; i <= size; i++) {
        let divElement = document.createElement("div");
        divElement.classList.add("item");
        divElement.id = `item${i}`;
        fragment.appendChild(divElement);
    }
    document.getElementById("container").appendChild(fragment);

    addListeners();
}


function addListeners() {
    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("mouseover", event => {
            item.classList.add("black")
        })
    })
}
