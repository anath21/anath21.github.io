const changeImage = () => {
    const image = document.getElementById("strawberry");
    image.src = "images/blueberry.png";
};

const addStar = () => {
    const starBox = document.getElementById("starbox");
    const star = document.createElement("section");
    star.add("images/star.png");
}

document.getElementById("strawberry").onclick = changeImage;
document.getElementById("button-add-star").onclick = addCircle;


