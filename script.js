document.addEventListener("DOMContentLoaded", function () {
    function validateSignup() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        fetch('http://localhost:3000/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        })
        .then(res => {
          if (res.ok) {
            alert("Signup successful!");
            document.querySelector("form").reset();
          } else {
            res.text().then(msg => alert("Signup failed: " + msg));
          }
        });
        return false;
      }
      

    let signupForm = document.querySelector("#signup form");
    if (signupForm) {
        signupForm.onsubmit = validateSignup;
    }
    function validateLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Invalid login');
          }
        })
        .then(data => {
          alert(data.message);
          // Redirect or store user info as needed
        })
        .catch(err => {
          alert(err.message);
        });
      
        return false;
      }
      
    
      
    
});
