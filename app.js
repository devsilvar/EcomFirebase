function ToggleAcess() {
  document.getElementById("sign-up").classList.toggle("hidden");
  document.getElementById("sign-in").classList.toggle("hidden");

  document.getElementById("sign-up-link").classList.toggle("hidden");
  document.getElementById("sign-in-link").classList.toggle("hidden");
}

function GotoSignIn() {
  window.location.href = "login.html";
  if (window.location.href == "login.html") {
    document.getElementById("sign-in").classList.remove("hidden");
    document.getElementById("sign-up").classList.add("hidden");
  }
}

function GotoSignUp() {
  window.location.href = "login.html#sign-up";
  document.getElementById("sign-in").classList.add("hidden");
  document.getElementById("sign-up").classList.remove("hidden");
}

//admin section
