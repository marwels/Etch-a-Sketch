function generateDivs() {
    let fragment = new DocumentFragment();  //create a virtual DOM element, 
    //make all of DOM changes on it, and then assign that virtual DOM element 
    //to real DOM once they are ready to commit

    for (let i = 1; i <= 16; i++) {
        let divElement = document.createElement("div");
        divElement.classList.add("item");
        fragment.appendChild(divElement);
    }
    document.getElementById("container").appendChild(fragment);
}

generateDivs();