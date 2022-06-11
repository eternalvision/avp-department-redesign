import $ from "jquery";

document.querySelector(document).ready(function () {
  // Ждём загрузки страницы

  document.querySelector(".image").click(function () {
    // Событие клика на маленькое изображение
    var img = document.querySelector(this); // Получаем изображение, на которое кликнули
    var src = img.attr("src"); // Достаем из этого изображения путь до картинки
    document.body.insertAdjacentHTML(
      "beforeend",
      "<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
        "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
        "<img src='" +
        src +
        "' class='popup_img' />" + // Само увеличенное фото
        "</div>"
    );
    document.querySelector(".popup").fadeIn(200); // Медленно выводим изображение
    document.querySelector(".popup_bg").click(function () {
      // Событие клика на затемненный фон
      document.querySelector(".popup").fadeOut(200); // Медленно убираем всплывающее окн
      setTimeout(function () {
        // Выставляем таймер
        document.querySelector(".popup").remove(); // Удаляем разметку всплывающего окна
      }, 200);
    });
  });
});
