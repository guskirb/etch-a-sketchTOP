const newBox = document.createElement("div");
const container = document.getElementById("container");
const gridBox = container.getElementsByTagName("div");
const sizeBtn = document.getElementById("sizeButton");
const sizeInput = document.getElementById("sizeInput");
var penColor = "black";

function erase() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

if (container.childElementCount === 0) {
    for (let x = 0; x < (16 * 16); x++) {
        container.appendChild(newBox.cloneNode(true)).setAttribute("id", x);
    };
};

sizeBtn.addEventListener("click", function () {
    let sizeNum = Number(sizeInput.value);
    sizeInput.value = "";
    let calc = (500 / sizeNum) - 2;
    if (isNaN(sizeNum)) {
        return alert("Enter a Number");
    } if (sizeNum > 100 || sizeNum < 10) {
        return alert("Enter a number between 10 and 100")
    } else {
        erase();
        for (let x = 0; x < (sizeNum * sizeNum); x++) {
            container.appendChild(newBox.cloneNode(true)).setAttribute("id", x);
            let newSize = document.getElementById(x);
            newSize.style.height = calc + "px";
            newSize.style.width = calc + "px";
            newSize.addEventListener("mouseover", function () {
                newSize.style.backgroundColor = penColor;
                newSize.style.borderColor = penColor;
            });
        };
    }
})

function fillIn(i) {
    let fill = document.getElementById(i);
    fill.style.backgroundColor = penColor;
}

for (let i = 0; i < gridBox.length; i++) {
    let fillIn = document.getElementById(i)
    fillIn.addEventListener("mouseover", function () {
        fillIn.style.backgroundColor = penColor;
        fillIn.style.borderColor = penColor;
    });
};