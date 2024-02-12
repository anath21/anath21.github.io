
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
};
  
function toggleMenu() {
    var menu = document.getElementById('menu');
    var hamburgerMenu = document.querySelector('.hamburger-menu');

    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  }

const e1 = (e) => {
    let e1Image = document.getElementById("command-image");
    const userInput = document.getElementById("command").value;

    if (e.key == 'b') {
        e1Image.src = "images/reading.png";
    } 
    else if (e.key == 'c') {
        e1Image.src = "images/clown.png";
    } 
    else if (e.key == 'p') {
        e1Image.src = "images/birthday.png";
    } 
    else if (e.key == 'r') {
        e1Image.src = "images/umbrella.png";
    } 
    else if (e.key == 's') {
        e1Image.src = "images/shovel.png";
    } 
    else if (e.key == 'w') {
        e1Image.src = "images/gotowork.png";
    }
};

const e2 = () => {
    let slider = document.getElementById("myRange").value;
    const yogaImage = document.getElementById("yoga-image");
        
        if (slider == 0) {
            yogaImage.src = "images/yoga1.png";
            console.log("yoga1");
        }
        else if (slider == 1) {
            yogaImage.src = "images/yoga2.png";
            console.log("yoga2");
        }
        else if (slider == 2) {
            yogaImage.src = "images/yoga3.png";
            console.log("yoga3");
        }
        else if (slider == 3) {
            yogaImage.src = "images/yoga4.png";
            console.log("yoga4");
        }
        else if (slider == 4) {
            yogaImage.src = "images/yoga5.png";
            console.log("yoga5");
        }
        else if (slider == 5) {
            yogaImage.src = "images/yoga6.png";
            console.log("yoga6");
        }
        else if (slider == 6) {
            yogaImage.src = "images/yoga7.png";
            console.log("yoga7");
        }
        else if (slider == 7) {
            yogaImage.src = "images/yoga8.png";
            console.log("yoga8");
        }
    
};

document.getElementById("command").onkeyup = e1;
document.getElementById("myRange").oninput = e2;