var menuButton = document.getElementById("menuButton");


var navigation = document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

});


var menuLinks = document.querySelectorAll(".navigation a");


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

    });

});


var slides = document.querySelectorAll(".slide");


var dots = document.querySelectorAll(".dot");


var currentSlide = 0;


function showSlide(number) {



    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    slides[number].classList.add("active");


    dots[number].classList.add("active");

}

setInterval(function () {


    currentSlide = currentSlide + 1;


    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }


    showSlide(currentSlide);


}, 5000);


dots.forEach(function (dot, index) {


    dot.addEventListener("click", function () {

        currentSlide = index;

        showSlide(currentSlide);

    });


});


var elements = document.querySelectorAll(".reveal");


function revealOnScroll() {


    elements.forEach(function (element) {


        var position = element.getBoundingClientRect().top;



        if (position < window.innerHeight - 80) {

            element.classList.add("show");

        }

    });

}



window.addEventListener("scroll", revealOnScroll);


revealOnScroll();


var counters = document.querySelectorAll(".counter");


function startCounter(counter) {

    var target = Number(counter.getAttribute("data-target"));

    var number = 0;


    function updateNumber() {

        number = number + Math.ceil(target / 60);


        if (number > target) {

            number = target;

        }


        counter.textContent = number.toLocaleString("fr-FR");


        if (number < target) {

            setTimeout(updateNumber, 30);

        }

    }

    updateNumber();

}


var countersStarted = false;



function checkCounters() {


    var impactSection = document.getElementById("impact");


    var position = impactSection.getBoundingClientRect().top;


    if (
        position < window.innerHeight - 100 &&
        countersStarted === false
    ) {


        counters.forEach(function (counter) {

            startCounter(counter);

        });


        countersStarted = true;

    }

}


checkCounters();


window.addEventListener("scroll", checkCounters);