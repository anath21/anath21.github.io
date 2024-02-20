let moveBall;
let pos = 10;
let move = true;

const bounceBall = (e) => {

        const ball = document.getElementById("ball");
        const ballHeight = document.getElementById("ball").style.height;
    
        if(e.target.innerHTML.toLowerCase() == "start") {
            e.target.innerHTML = "Stop";
            //setInterval has 2 params 1st is the funtion it calls and 2nd is how often it gets called
        moveBall = setInterval(()=>{
            const root = document.querySelector(":root");

            if(move == false) {
                pos += -1;
                root.style.setProperty("--ball-height", pos + "px");

                if(pos <= 10) {
                    move = true;
                }
            }
            else {
                pos += 1;
                root.style.setProperty("--ball-height", pos + "px");
                if(pos >= 350) {
                    move = false;
                }
            }
                
        }, 5);
        } else {
            e.target.innerHTML = "Start";
            clearInterval(moveBall);
        }
};



let lastClicked = -1; 

const showDetails = (e) => {
    const yogaImage = document.querySelectorAll("#yoga-list img");

    let clicked = 0;
    for(let i = 0; i < yogaImage.length; i++) {
        if(yogaImage[i] == e.target) {
            clicked = i;
            break;
        }
    }

    const yogaText = document.getElementById("yoga" + (clicked + 1));

    if (yogaText && clicked !== lastClicked) {
        yogaText.textContent = e.target.getAttribute("rel");
        lastClicked = clicked;
    }
};

document.getElementById("button-bounce").onclick = bounceBall;
document.querySelectorAll("#yoga-list img").forEach((img)=>{
    img.onclick = showDetails;
});