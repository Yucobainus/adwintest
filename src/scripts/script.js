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

function listElementController(listElementClass, className) {
  document.querySelectorAll(`.${listElementClass}`).forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.add(className);
      document.querySelectorAll(`.${listElementClass}`).forEach((element2) => {
        if (element !== element2) {
          element2.classList.remove(className);
        }
      });
    });
  });
}

//Mobile Menu Class Switch

listElementController("mobile-menu__item", "current");
listElementController("header__navigation-item", "current");

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
