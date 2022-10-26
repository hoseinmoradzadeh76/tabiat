var slidIndex = 0;
showslides();
function showslides() {
var i;
var slides = document.getElementsByClassName("myslider");
var dots = document.getElementsByClassName("dot");
for (i=0;i<slides.length;i++){
    slides[i].style.display="none";
}
    slidIndex++;
if (slidIndex > slides.length){
    slidIndex = 1;

}
for (i=0;i<dots.length;i++){
    dots[i].className = dots[i].className.replace(" active1","");

    }
slides[slidIndex - 1].style.display = "block";
dots[slidIndex - 1].className +=" active1";

setTimeout(showslides,2000);
}