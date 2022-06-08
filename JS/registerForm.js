"use strict";

// LOGIN FORM / REGISTER FORM

let accountsList = [];
const backdrop = document.querySelector(".backdrop");
const activateBackdrop = () => (backdrop.style.display = "block");

const deactivateBackdrop = () => (backdrop.style.display = "none");

const loginForm = {
  closeButton: document.querySelector(".login__modal_close"),
  loginNavButton: document.querySelectorAll(".custom-button--login"),
  logoutNavButton: document.querySelectorAll(".custom-button--logout"),
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

loginForm.closeButton.addEventListener("click", () => {
  loginForm.loginModal.style.display = "none";
  deactivateBackdrop();
});

loginForm.loginNavButton.forEach((button) => {
  button.addEventListener("click", () => {
    loginForm.loginModal.style.display = "flex";
    activateBackdrop();
  });
});

loginForm.moveToRegister.addEventListener("click", () => {
  loginForm.loginModal.style.display = "none";
  registerForm.registerModal.style.display = "flex";
});
registerForm.closeButton.addEventListener("click", () => {
  registerForm.registerModal.style.display = "none";
  deactivateBackdrop();
});

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
  for (let input of Object.values(registerForm.inputs)) {
    if (input.value == "") {
      input.nextElementSibling.classList.add("active");
      return;
    }
  }
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
    localStorage.setItem("accounts", JSON.stringify(accountsList));

    registerForm.registerModal.style.display = "none";
    registerForm.successfulRegistration.style.display = "flex";
  } else {
    registerWarningWrongPassword.classList.add("active");
  }
});

registerForm.successfulRegistrationButton.addEventListener("click", () => {
  registerForm.successfulRegistration.style.display = "none";
  loginForm.loginModal.style.display = "flex";
});

loginForm.logInAccountButton.addEventListener("click", function (e) {
  let storageAccountList = JSON.parse(localStorage.getItem("accounts"));
  e.preventDefault();
  if (loginForm.logUserName.value == "") {
    loginForm.logUserName.nextElementSibling.classList.add("active");
    return;
  } else if (
    !storageAccountList.some(
      (user) => user.username === loginForm.logUserName.value
    )
  ) {
    loginForm.logUserName.nextElementSibling.classList.add("active");
    return;
  } else if (
    storageAccountList.some(
      (user) => user.username === loginForm.logUserName.value
    )
  ) {
    loginForm.logUserName.nextElementSibling.classList.remove("active");
    if (loginForm.logUserPassword.value == "") {
      loginForm.logUserPassword.nextElementSibling.classList.add("active");
      return;
    } else if (
      !storageAccountList.some(
        (user) => user.password === loginForm.logUserPassword.value
      )
    ) {
      loginForm.logUserPassword.nextElementSibling.classList.add("active");
      return;
    } else if (
      storageAccountList.some(
        (user) => user.password === loginForm.logUserPassword.value
      )
    ) {
      loginForm.logUserPassword.nextElementSibling.classList.remove("active");
      loginForm.loginModal.style.display = "none";
      deactivateBackdrop();
      loggedIn();
    }
  }
  localStorage.setItem("logged", 1);
});

function loggedIn() {
  loginForm.loginNavButton.forEach((loginButton) => {
    loginButton.classList.add("inactive");
    loginForm.logoutNavButton.forEach((logoutButton) => {
      logoutButton.classList.remove("inactive");
      logoutButton.addEventListener("click", () => {
        localStorage.setItem("logged", 2);
        loggedOut();
      });
    });
  });
}

function loggedOut() {
  loginForm.loginNavButton.forEach((loginButton) => {
    loginButton.classList.remove("inactive");
    loginForm.logoutNavButton.forEach((logoutButton) => {
      logoutButton.classList.add("inactive");
    });
  });
}
// Check If Logged
if (localStorage.logged == 1) {
  loggedIn();
} else {
  loggedOut();
}

backdrop.addEventListener("click", () => {
  loginForm.loginModal.style.display = "none";
  registerForm.registerModal.style.display = "none";
  backdrop.style.display = "none";
});
