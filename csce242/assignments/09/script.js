let moveBall;
let pos = 10;
let up = 10;

const bounceBall = (e) => {

        const ball = document.getElementById("ball");
        const ballHeight = document.getElementById("ball").style.height;
        const divHeight = document.getElementById("bounce-ball").style.height;
    
        if(e.target.innerHTML.toLowerCase() == "start") {
            e.target.innerHTML = "Stop";
            //setInterval has 2 params 1st is the funtion it calls and 2nd is how often it gets called
        moveBall = setInterval(()=>{
            pos += 1;
            up -= 1;
            console.log(divHeight + "test");
            const root = document.querySelector(":root");
                if(ballHeight <= 350) {
                    root.style.setProperty("--ball-height", pos + "px");
                }
                else {
                    root.style.setProperty("--ball-height", up + "px" );
                }
                
        }, 50);
        } else {
            e.target.innerHTML = "Start";
            clearInterval(moveBall);
        }
};

const showDetails = (e) => {
    /*
    I coulnd't get it to display beside the image so i just did a console.log 
    const yogaText = document.getElementById("yoga-text");
    yogaText.innerHTML(e.target.getAttribute("rel"));
    */
   console.log(e.target.getAttribute("rel"));
};

document.getElementById("button-bounce").onclick = bounceBall;
document.querySelectorAll("#yoga-list li").forEach((li)=>{
    li.onclick = showDetails;
});

