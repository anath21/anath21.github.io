const numLoop = () => {
    const numList = document.getElementById("numList");
    numList.innerHTML = "";
    const errorP = document.getElementById("error-nums");
    errorP.innerHTML = "";

    //Get starting and ending numbers
    let startNum = document.getElementById("txt-start-num").value;
    let endNum = document.getElementById("txt-end-num").value;

    console.log(`Looping from ${startNum} to ${endNum}`);


    if(isNaN(startNum) || isNaN(endNum) || startNum.trim()=="" || endNum.trim() == "") {
        errorP.innerHTML = "You must enter a number(s).";
        return;
    }

    startNum = parseInt(startNum);
    endNum = parseInt(endNum);

    if(startNum >= endNum) {
        errorP.innerHTML = "Ending number must be larger than starting number!"
        return;
    }


    //Create an li for each number and append it to the list
    for(let i = startNum; i < endNum+1; i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        numList.append(li);
    }
};

let updateCounter;
let counter = 0;

const startStopCount = (e) => {

    const countP = document.getElementById("countP");

    if(e.target.innerHTML.toLowerCase() == "start") {
        e.target.innerHTML = "Stop";
        //setInterval has 2 params 1st is the funtion it calls and 2nd is how often it gets called
    updateCounter = setInterval(()=>{
        counter++;
        countP.innerHTML = counter;
    }, 1000);
    } else {
        e.target.innerHTML = "Start";
        clearInterval(updateCounter);
    }
    
};

const showDetails = (e) => {
    console.log(e.target.getAttribute("rel"));
;}

document.getElementById("button-loop-nums").onclick = numLoop;
document.getElementById("button-count").onclick = startStopCount;
document.querySelectorAll("#toys li").forEach((li)=>{
    li.onclick = showDetails;
});