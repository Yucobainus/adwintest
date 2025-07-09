document
  .getElementById("callbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Очищаем предыдущие ошибки
    clearErrors();

    // Получаем значения полей
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Флаг валидности
    let isValid = true;

    // Валидация имени
    if (name === "") {
      showError("nameError", 'Поле "Имя" обязательно для заполнения');
      markInvalid("name");
      isValid = false;
    } else if (name.length < 2) {
      showError("nameError", "Имя должно содержать минимум 2 символа");
      markInvalid("name");
      isValid = false;
    }

    // Валидация телефона
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

    // Если форма валидна, можно отправить данные
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

// Маска для телефона (опционально)
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
