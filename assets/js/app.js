const myCarouselElement = document.querySelector("#carouselExample");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000,
  touch: false,
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
  $("#card-2").click(function () {
    $("#card-2-img").css({
      transform: "rotateY(180deg)"
    })
  });

  $("#card-3").dblclick(function () {
    $("#card-3-title").css({
      color: "black"
    });
  });

  $(".recipe-title").click(function () {
      $(".recipe-text").toggle();
  })
});
