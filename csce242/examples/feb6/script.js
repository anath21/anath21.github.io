const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

const changeP = (e) => {
    e.preventDefault(); //prevents it from going to another pages
    document.getElementById("display").textContent = "Hello Ankit";
}

const showMood = () => {
    const color = document.getElementById("txt-mood").value.toLowerCase().trim();
    const moodP = document.getElementById("mood");
    let mood = "meh mood";

    if(color == "red") {
        mood = "ANGRY";
    } else if (color == "blue") {
        mood = "sad";
    } else if (color == "yellow") {
        mood = "happy";
    }



    //moodP.innerHTML = "You are in a " + mood + " mood";

    moodP.innerHTML = `You are in a ${mood} mood`;
}

const evalForm =(e) => {
    e.preventDefault();
    console.log("we did it");
}

document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("link-click").onclick = changeP;
document.getElementById("txt-mood").onkeyup = showMood;
document.getElementById("form").onsubmit = evalForm;