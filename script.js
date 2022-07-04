let currentColor = "black";

function newCanva() {

    document.querySelectorAll(".item").forEach(item => {
        item.style.setProperty("background-color", "white");
    });


    let size = parseInt(prompt("Please enter how many 'pixels' in a row you want. It has to be number from 1 to 25:", "15"), 10);

    if (size < 1 || size > 25) {
        parseInt(prompt("Please enter a number from 1 to 25", "15"), 10);
    } else if (isNaN(size)) {
        parseInt(prompt("It is not a number. Please enter a number from 1 to 25", "15"), 10);
    }

    generateDivs(size);
}

function generateDivs(size) {

    let textGrid = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    console.log(textGrid);
    document.getElementById("container").style.gridTemplate = textGrid;


    let fragment = new DocumentFragment();  //create a virtual DOM element, 
    //make all of DOM changes on it, and then assign that virtual DOM element 
    //to real DOM once they are ready to commit

    for (let i = 1; i <= size * size; i++) {
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
            //item.classList.add("color");
            if (currentColor === "rainbow") {
                item.style.setProperty("background-color", "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")");
            } else if (currentColor === "gray") {
                let grayLevel = Number.parseInt(item.dataset["grayLevel"] || "255")
                if (grayLevel > 0) {
                    grayLevel -= 10;
                }
                item.dataset["grayLevel"] = grayLevel;
                item.style.setProperty("background-color", `rgb(${grayLevel}, ${grayLevel}, ${grayLevel})`);
            } else {

                item.style.setProperty("background-color", currentColor);
            }

        })
    })
}

document.getElementById("rainbow").addEventListener("click", (rainbow => {
    //let color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    //document.body.style.setProperty("--box-color", color);
    currentColor = "rainbow";
}))

document.getElementById("color").addEventListener("input", changeColor => {
    let color = document.getElementById("color").value;
    document.body.style.setProperty("--box-color", color);
    currentColor = color;
});

document.getElementById("gray").addEventListener("click", gray => {
    currentColor = "gray";
});

generateDivs(10);


