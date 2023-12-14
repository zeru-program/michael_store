const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");


navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

 var slideIndex = 0;
            tampilkanSlide(slideIndex);

            function gantiSlide(n) {
                tampilkanSlide((slideIndex += n));
            }

            function tampilkanSlide(n) {
                var slides = document.getElementsByClassName("mySlides");

                if (n >= slides.length) {
                    slideIndex = 0;
                }

                if (n < 0) {
                    slideIndex = slides.length - 1;
                }

                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }

                slides[slideIndex].style.display = "block";
            }