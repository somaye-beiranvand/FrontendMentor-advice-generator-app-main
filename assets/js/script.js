document.addEventListener("DOMContentLoaded", function () {
  const id = $(".card__title span");
  const advice = $(".card__text");
  $(".card__btn").on("click", function () {
    $.getJSON("https://api.adviceslip.com/advice", function (data) {
      var items = [];
      $.each(data, function (key, val) {
        items.push(val);
        id.text(items[0].id);
        advice.text(items[0].advice);
      });
    });
  });
});
