document.addEventListener('DOMContentLoaded', function() {
    const createAccountForm = document.getElementById('createAccountForm');
  
    createAccountForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
  
      const userData = {
        name,
        email,
        password
      };
  
      // Save user data to local storage
      localStorage.setItem('userData', JSON.stringify(userData));
  
      alert('Account created successfully');
      createAccountForm.reset();
      window.location.href = 'login.html'; // Redirect to login page after successful account creation
    });
  });
  