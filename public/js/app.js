const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const user = document.querySelector("#user");

const activeClass = "is-show";

toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});

window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});

// TODO: Display username on homepage
const loggedUser = window.localStorage.getItem("username");
console.log("🚀 ~ file: app.js ~ line 15 ~ loggedUser", loggedUser);

const text = document.createTextNode(`Welcome: ${JSON.parse(loggedUser)}`);

user.appendChild(text);
console.log("🚀 ~ file: app.js ~ line 24 ~ user", user);

// TODO: Logout function
function logOut() {
  localStorage.removeItem("username");
  window.location.href = "login_page.html";
}

document.querySelector("#btnLogout").addEventListener("click", function (e) {
  console.log("Hello");
  e.preventDefault();

  logOut();
});
