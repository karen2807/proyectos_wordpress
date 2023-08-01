let slider = document.querySelector(".slider_test");
let sliderind = document.querySelectorAll(".testimony_test");
let contador = 1;
let tamanowidth = sliderind[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    let tamanowidth = sliderind[0].clientWidth;
})

setInterval(function tiempo(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate('+ (- tamanowidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++;

    if(contador === sliderind.length){
        contador=0;
        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
        }, intervalo);
    }
}