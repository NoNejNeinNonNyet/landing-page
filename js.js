window.addEventListener("load", function() {
  var container = document.getElementById("container");
  var containerSpanArray = container.getElementsByTagName("span");
  let quote = $(".quote")[0];

  var containerInside = document.getElementById("container-inside");
  var containerInsideSpanArray = containerInside.getElementsByTagName("span");

  opening();

  $(containerInside).mouseover(() => {
    $(quote)
      .fadeIn(1500, () => {
        quote.style.display = "inline-block";
      })
      .delay(2000)
      .fadeOut(1500, () => {
        quote.style.dislay = "none";
      })
      .parent()
      .mouseover(() => false);

    containerInsideSpanArray[0].style.left = "-2%";
    containerInsideSpanArray[1].style.top = "-2%";
    containerInsideSpanArray[2].style.right = "-2%";
    containerInsideSpanArray[3].style.bottom = "-2%";
    containerInsideSpanArray[4].style.left = "-2%";
    containerInsideSpanArray[5].style.bottom = "-2%";

    containerSpanArray[0].style.left = "-200%";
    containerSpanArray[1].style.top = "-200%";
    containerSpanArray[2].style.right = "-200%";
    containerSpanArray[3].style.bottom = "-200%";
    containerSpanArray[4].style.right = "-200%";
    containerSpanArray[5].style.bottom = "-200%";
  });
  $(container)
    .mouseover(() => {
      $(quote).fadeOut(500, () => (quote.style.dislay = "none"));

      containerSpanArray[0].style.left = "2.5%";
      containerSpanArray[1].style.top = "5%";
      containerSpanArray[2].style.right = "5%";
      containerSpanArray[3].style.bottom = "0%";
      containerSpanArray[4].style.right = "2.5%";
      containerSpanArray[5].style.bottom = "2.5%";

      containerInsideSpanArray[0].style.left = "-120%";
      containerInsideSpanArray[1].style.top = "120%";
      containerInsideSpanArray[2].style.right = "-120%";
      containerInsideSpanArray[3].style.bottom = "120%";
      containerInsideSpanArray[4].style.left = "-120%";
      containerInsideSpanArray[5].style.bottom = "120%";
    })
    .children()
    .mouseover(() => false);

  function opening() {
    containerSpanArray[0].style.left = "2.5%";
    containerSpanArray[1].style.top = "5%";
    containerSpanArray[2].style.right = "5%";
    containerSpanArray[3].style.bottom = "0%";
    containerSpanArray[4].style.right = "2.5%";
    containerSpanArray[5].style.bottom = "2.5%";
  }
});
