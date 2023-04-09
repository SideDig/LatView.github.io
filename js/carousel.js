var slideIndex = 1;
    showSlides(slideIndex);

    setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("animate__fadeIn"); /* Oculta la animación */
            slides[i].classList.remove("animate__animated"); /* Oculta todas las diapositivas */
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].classList.add("animate__fadeIn"); /* Agrega la animación a la diapositiva activa */
        slides[slideIndex-1].classList.add("animate__animated"); /* Agrega la clase de animación de Animate.css */
        slides[slideIndex-1].style.display = "block"; /* Muestra la diapositiva actual */
    }
