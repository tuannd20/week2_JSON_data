// 1. Save user account information in localStorage
// 2. Display user account in home page

// localStorage.setItem("username", "user01");
// localStorage.setItem("password", "1234");

window.addEventListener("load", function () {
  var accounts = [
    {
      username: "user02",
      password: "1234",
    },
    {
      username: "user03",
      password: "12345",
    },
    {
      username: "user04",
      password: "123456",
    },
  ];
  // localStorage.setItem("accounts", JSON.stringify(accounts));
  // sessionStorage.setItem("accounts", JSON.stringify(accounts));

  // if (sessionStorage.getItem("accounts") != null) {
  //   window.location.href = "index.html";
  // } else {
  //   window.location.href = "login_page.html";
  // }

  function getAccount() {
    // debugger;
    var username = document.getElementById("username").value;
    console.log(
      "🚀 ~ file: handleLogin.js ~ line 24 ~ getAccount ~ username",
      username
    );
    var password = document.getElementById("password").value;
    console.log(
      "🚀 ~ file: handleLogin.js ~ line 26 ~ getAccount ~ password",
      password
    );
    for (i = 0; i < accounts.length; i++) {
      if (
        username == accounts[i].username &&
        password == accounts[i].password
      ) {
        console.log(username + "is logged in!!!");
        localStorage.setItem("username", JSON.stringify(username));
        sessionStorage.setItem("username", JSON.stringify(username));
        sessionStorage.setItem("password", JSON.stringify(password));
        window.location.href = "index.html";
        alert(username + " is login successful!!!");
        return;
      }
    }
    console.log("Incorret username or password");
    alert("Incorret username or password");
  }

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("hello");

    getAccount();
    console.log("hi");
  });
});
