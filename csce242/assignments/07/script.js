const changeImage = () => {
    const image = document.getElementById("strawberry");
    image.src = "images/blueberry.png";
};

const addStar = () => {
    const starBox = document.getElementById("starBox");
    const star = document.createElement("img");
    star.src = "images/star.png";
    starBox.appendChild(star);
}

const rotateImage = () => {
    var slider = document.getElementById("myRange");
    const image = document.getElementById("image");

    slider.addEventListener("input", () => {
        const value = slider.value;
        image.style.transform = `rotate(${value}deg)`;
    });
};

document.getElementById("strawberry").onclick = changeImage;
document.getElementById("add-star").onclick = addStar;
rotateImage();