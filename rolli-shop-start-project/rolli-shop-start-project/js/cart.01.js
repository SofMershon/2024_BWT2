const cartWrapper = document.querySelector(".cart-wrapper");

// Добавляем обработчик кликов для увеличения и уменьшения количества
window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".card");
    const productInfo = {
      id: card.dataset.id,
      imgScr: card.querySelector(".product-img").getAttribute("src"), // Исправлено: 'scr' на 'src'
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: parseInt(card.querySelector(".price__currency").innerText), // Конвертируем цену в число
      counter: card.querySelector("[data-counter]").innerText, // Начальное количество
    };

    const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgScr}" alt="${productInfo.title}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}.</div>
                    <div class="cart-item__details">
                        <div class="items counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    // Отображаем товар в корзине
    cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
  }

  // Логика для изменения количества товара в корзине
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");
    let newCount = parseInt(counter.innerText); // Получаем текущее количество товара

    // Если это плюс, увеличиваем количество
    if (event.target.dataset.action === "plus") {
      newCount++;
    }
    // Если это минус, уменьшаем количество (не ниже 1)
    else if (event.target.dataset.action === "minus" && newCount > 1) {
      newCount--;
    }

    // Обновляем количество в корзине
    counter.innerText = newCount;

    // Пересчитываем стоимость товара
    const price = parseInt(
      counterWrapper.querySelector(".price__currency").innerText
    );
    const newPrice = price * newCount;

    // Обновляем стоимость товара в корзине (не умножаем ее дважды)
    counterWrapper.querySelector(".price__currency").innerText = newPrice;
  }
});
