// console.log(window.scrollY)

function displayPosition() {
    position = window.scrollY;
    console.log(position);
}

displayPosition();

// get navbar
const navbar = document.getElementById("navbar")

// if (window.scrollY > 20){
//     console.log("position has changed to 200" + window.scrollY);
//     navbar.style.position = "absolute";
//     navbar.style.top = 0;
//     navbar.style.left = 0;
//     navbar.style.width = "100%";
//     navbar.style.zIndex = "100";
    
// }

function changePosition(){
    console.log("position has changed to 200" + window.scrollY);
    navbar.style.position = "absolute";
    navbar.style.top = 0;
    navbar.style.left = 0;
    navbar.style.width = "100%";
    navbar.style.zIndex = "100";}