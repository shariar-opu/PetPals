document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Retrieve user data from local storage
      const userData = JSON.parse(localStorage.getItem('userData'));
  
      if (!userData) {
        alert('No account found. Please create an account.');
        return;
      }
  
      if (userData.email === email && userData.password === password) {
        alert('Login successful');
        // Redirect to home page after successful login
        window.location.href = 'home.html';
      } else {
        alert('Invalid email or password');
      }
    });
  });
  