window.addEventListener("scroll", function(){
    var header = this.document.querySelector("nav");
    header.classList.toggle("Abajo", this.window.scrollY>0);
})