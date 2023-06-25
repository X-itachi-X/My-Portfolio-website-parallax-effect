const parallax_el = document.querySelectorAll(".parallax");

let xValue=0 , yValue=0 ;
let rotateDegree = 0;

function update() {
    
}

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    
});