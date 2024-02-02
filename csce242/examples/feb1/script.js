let pos = 0;

const colorSquare = () => {
    document.getElementById("square").classList.add("rainbow");
    // same as- document.querySelector("#square");
};

const moveDown = () => {
    pos += 10;
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
};

const addCircle = () => {

    //input a valid color
    const color = document.getElementById("txt-color").value;
    
    //change color of all of the balls
    //const root = document.querySelector(":root");
    //root.style.setProperty("--ball-color", color);

    const playground = document.getElementById("circle-playground");
    
    
    //playground.innerHTML += "<section class='circle'></section>";

    const ball = document.createElement("section");
    ball.classList.add("circle");
    playground.append(ball);

    //change color of next ball being added
    ball.style.background = color;
};

document.getElementById("button-color").onclick = colorSquare;
document.getElementById("button-move-down").onclick = moveDown;
document.getElementById("button-add-circle").onclick = addCircle;