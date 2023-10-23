let slideN = 1;
show(slideN);
function plusSlides(n) {
    show(slideN += n);
}
function currentPic(n) {
    show(slideN = n);
}

function show(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("a");
     if (n > slides.length) {slideN = 1}
        if (n < 1) {slideN = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "N/A"
    }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
 }
    slides[slideN-1].style.display = "block";
    dots[slideN-1].className += "Available";

}
