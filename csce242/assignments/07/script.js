const changeImage = () => {
    const image = document.getElementById("strawberry");
    image.src = "images/blueberry.png";
}

const doStuff = () =>{
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello Ankit!";
    messageP.classList.toggle("special");
    //.add adds a class and .toggle adds and removes the class
};

const hideStrawberry = () => {
    document.getElementById("strawberry").classList.add("hidden");
};

document.getElementById("strawberry").onclick = changeImage;

//.scr= is how you replace the image


/*
const clickButton = document.getElementById("button-clickme");
//Always use const unless it throws an error
//links the button from the index.html page by its ID

clickButton.onclick = doStuff;
//When you want the function to work when you click then you dont
//add the () because that always calls the funtion
*/