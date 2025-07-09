document
  .getElementById("callbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    let isValid = true;

    if (name === "") {
      showError("nameError", 'Поле "Имя" обязательно для заполнения');
      markInvalid("name");
      isValid = false;
    } else if (name.length < 2) {
      showError("nameError", "Имя должно содержать минимум 2 символа");
      markInvalid("name");
      isValid = false;
    }

    const phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
    if (phone === "") {
      showError("phoneError", 'Поле "Телефон" обязательно для заполнения');
      markInvalid("phone");
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      showError("phoneError", "Введите телефон в формате +7 (XXX) XXX-XX-XX");
      markInvalid("phone");
      isValid = false;
    }

    if (isValid) {
      alert("Форма успешно отправлена!");
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
    }
  });

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.textContent = "";
  });

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("input-error");
  });
}

function markInvalid(elementId) {
  document.getElementById(elementId).classList.add("input-error");
}

document.getElementById("phone").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 0) {
    value =
      "+7 (" +
      value.substring(1, 4) +
      ") " +
      value.substring(4, 7) +
      "-" +
      value.substring(7, 9) +
      "-" +
      value.substring(9, 11);
  }

  e.target.value = value;
});

// Native Listeners

const overlay = document.getElementById("darkOverlay");
const popup = document.getElementById("popup");
const callback = document.getElementById("callback");
const callbackMenu = document.getElementById("callbackMenu");
const closePopup = document.getElementById("closePopup");
const mobileMenu = document.getElementById("mobileMenu");
const burger = document.getElementById("burger");
const contentOverlay = document.getElementById("contentOverlay");
const cart = document.getElementById("cart");
const headerClose = document.getElementById("headerClose");

function stateElementController(trigger, target) {
  trigger.addEventListener("click", () => {
    if (target.classList.contains("open")) {
      target.classList.remove("open");
    } else {
      target.classList.add("open");
    }
  });
}

function listElementController(listElementClass, className, modificator) {
  document.querySelectorAll(`.${listElementClass}`).forEach((element) => {
    element.addEventListener("click", () => {
      if (!element.classList.contains(modificator))
        element.classList.add(className);

      document.querySelectorAll(`.${listElementClass}`).forEach((element2) => {
        if (element !== element2) {
          element2.classList.remove(className);
        }
      });
    });
  });
}

function dropdownList(listElementClass, className, modificator) {
  document
    .querySelectorAll(`.${listElementClass}.${className}`)
    .forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.add(modificator);
      });
      element.addEventListener("mouseleave", () => {
        element.classList.remove(modificator);
      });
    });
}

//Mobile Menu Class Switch

listElementController("mobile-menu__item", "current");
listElementController("header__navigation-item", "current", "carret");
dropdownList("header__navigation-item", "carret", "current");

// Open callback Popup Btn
stateElementController(callback, overlay);
stateElementController(callback, popup);

// Close Callback Popup Btn
stateElementController(closePopup, overlay);
stateElementController(closePopup, popup);

// Mobile Menu Callback
stateElementController(callbackMenu, overlay);
stateElementController(callbackMenu, popup);

//Burger Menu Open
stateElementController(burger, mobileMenu);
stateElementController(burger, contentOverlay);
stateElementController(burger, burger);
stateElementController(burger, cart);
stateElementController(burger, headerClose);

//Burger Menu Close
stateElementController(headerClose, mobileMenu);
stateElementController(headerClose, contentOverlay);
stateElementController(headerClose, burger);
stateElementController(headerClose, cart);
stateElementController(headerClose, headerClose);
