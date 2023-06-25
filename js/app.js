const parallax_el = document.querySelectorAll(".parallax");

let xValue=0 , yValue=0 ;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth;
    yValue = e.clientY;

    console.log(xValue,yValue)
})