// LOGIN FORM / REGISTER FORM
let accountsList = [];
const loginForm = {
  closeButton: document.querySelector(".login__modal_close"),
  loginNavButton: document.querySelector(".login_button"),
  logInAccountButton: document.querySelector(".login__modal_login_button"),
  loginModal: document.querySelector(".login__modal"),
  modalForm: document.querySelector(".login__modal form"),
  moveToRegister: document.querySelector(".move_to_register"),
  logUserName: document.getElementById("logUserName"),
  logUserPassword: document.getElementById("logUserPassword"),
};

const registerForm = {
  registerModal: document.querySelector(".register__modal"),
  closeButton: document.querySelector(".register__modal_close"),
  createAccount: document.querySelector(".register__modal_create_account"),
  successfulRegistration: document.querySelector(".successful_registration"),
  successfulRegistrationButton: document.querySelector(
    ".successful_registration_button"
  ),
  inputs: {
    username: document.getElementById("registerUsername"),
    email: document.getElementById("registerEmail"),
    password: document.getElementById("registerPassword"),
    repeatPassword: document.getElementById("registerPasswordRepeat"),
  },
  comparePassword() {
    return this.inputs.password.value === this.inputs.repeatPassword.value;
  },
};

loginForm.closeButton.addEventListener(
  "click",
  () => (loginForm.loginModal.style.display = "none")
);

loginForm.loginNavButton.addEventListener(
  "click",
  () => (loginForm.loginModal.style.display = "flex")
);
loginForm.moveToRegister.addEventListener("click", () => {
  loginForm.loginModal.style.display = "none";
  registerForm.registerModal.style.display = "flex";
});
registerForm.closeButton.addEventListener(
  "click",
  () => (registerForm.registerModal.style.display = "none")
);

class Account {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

registerForm.createAccount.addEventListener("click", function (e) {
  let registerWarningWrongPassword = document.querySelector(
    ".register_warning_wrongPassword"
  );
  registerWarningWrongPassword.classList.remove("active");

  e.preventDefault();

  if (registerForm.comparePassword()) {
    let acc = new Account(
      registerForm.inputs.username.value,
      registerForm.inputs.email.value,
      registerForm.inputs.password.value
    );
    for (let input of Object.values(registerForm.inputs)) {
      input.value = "";
    }
    accountsList.push(acc);

    registerForm.registerModal.style.display = "none";
    registerForm.successfulRegistration.style.display = "flex";
  } else {
    registerWarningWrongPassword.classList.add("active");
  }
});
registerForm.successfulRegistration.addEventListener("click", () => {
  registerForm.successfulRegistration.style.display = "none";
  loginForm.loginModal.style.display = "flex";
});

loginForm.logInAccountButton.addEventListener("click", function (e) {
  let loginWarning = document.querySelectorAll(".login_warning");
  e.preventDefault();
  if (loginForm.logUserName.value == "") {
    loginForm.logUserName.nextElementSibling.classList.add("active");
    return;
  } else if (
    !accountsList.some((user) => user.username === loginForm.logUserName.value)
  ) {
    loginForm.logUserName.nextElementSibling.classList.add("active");
    return;
  } else if (
    accountsList.some((user) => user.username === loginForm.logUserName.value)
  ) {
    loginForm.logUserName.nextElementSibling.classList.remove("active");
    if (loginForm.logUserPassword.value == "") {
      loginForm.logUserPassword.nextElementSibling.classList.add("active");
      return;
    } else if (
      !accountsList.some(
        (user) => user.password === loginForm.logUserPassword.value
      )
    ) {
      loginForm.logUserPassword.nextElementSibling.classList.add("active");
      return;
    } else if (
      accountsList.some(
        (user) => user.password === loginForm.logUserPassword.value
      )
    ) {
      loginForm.logUserPassword.nextElementSibling.classList.remove("active");
      loginForm.loginModal.style.display = "none";
      loginForm.loginNavButton.innerHTML = "Zalogowany";
      loginForm.loginNavButton.style.pointerEvents = "none";
    }
  }
});

// function registerFormValidation() {
//   const registerWarning = document.querySelectorAll(".register_warning");
//   registerWarning.forEach((warning) => warning.classList.remove("active"));
//   for (let inputValue of Object.values(registerForm.inputs)) {
//     if (inputValue.value == "") {
//       inputValue.nextElementSibling.classList.add("active");
//     }
//   }
// }
