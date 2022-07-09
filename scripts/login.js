addEventListener('load', function() {
  const loginForm = document.getElementById('login-form');
  const regForm = document.getElementById('reg-form');
  const regOrLog = document.getElementsByClassName('reg-or-log-click')
  const email = document.getElementsByClassName('email');

  email[0].focus();

  for (let rl of regOrLog) {
    rl.addEventListener('click', function(e) {
      if (loginForm.style.display === "block") {
        regForm.style.display = "block";
        regForm.style.visibility = "visible";
        loginForm.style.display = "none";
        loginForm.style.visibility = "hidden";
        email[1].focus();
      } else {
        regForm.style.display = "none";
        regForm.style.visibility = "hidden";
        loginForm.style.display = "block";
        loginForm.style.visibility = "visible";
        email[0].focus();
      };
    });
  }

  addEventListener('submit', function() {
    alert('Form Submitted');
  });
})
