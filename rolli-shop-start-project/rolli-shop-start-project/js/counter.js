window.addEventListener("click", function (event) {
  // Если нажата кнопка "+"
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");
    counter.innerText = ++counter.innerText;

    // Обновить цену
    const price = counterWrapper
      .closest(".cart-item__details")
      .querySelector(".price__currency");
    const unitPrice = counter
      .closest(".cart-item")
      .querySelector(".price__currency").innerText;
    const totalPrice = unitPrice * counter.innerText;
    price.innerText = totalPrice;
  }

  // Если нажата кнопка "-"
  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");
    if (counter.innerText > 1) {
      counter.innerText = --counter.innerText;
    }

    // Обновить цену
    const price = counterWrapper
      .closest(".cart-item__details")
      .querySelector(".price__currency");
    const unitPrice = counter
      .closest(".cart-item")
      .querySelector(".price__currency").innerText;
    const totalPrice = unitPrice * counter.innerText;
    price.innerText = totalPrice;
  }
});
