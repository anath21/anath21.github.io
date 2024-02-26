//https://www.w3schools.com/w3css/w3css_modal.asp
//link for w3Schools modal css

document.querySelectorAll(".items section").forEach((section) => {
    section.onclick = (e) => {
        document.getElementById("dialog").style.display = "block";

        document.querySelector("#dialog-content img").src = e.currentTarget.querySelector("img").src;
    };
});