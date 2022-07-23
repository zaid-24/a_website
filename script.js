var slides = document.getElementById("slides");
var slide= slides.getElementsByClassName("slide");
function previous_button(){
    slides.prepend(slide[slide.length-1]);
}
function next_button(){
    slides.append(slide[0]);
}


