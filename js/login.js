document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.querySelector('form');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value; // The id should be 'username'
      const password = document.getElementById('password').value; // The id should be 'password'
      
      // This is the username and password you want to check against
      const correctUsername = 'admin'; // Set the correct username here
      const correctPassword = '1234'; //
      
      if (username === correctUsername && password === correctPassword) {
        // If credentials are correct, set the session and redirect
        sessionStorage.setItem('loggedIn', true);
        window.location.href = './template/teamdetail.html'; // Redirect to the team details page
      } else {
        // If credentials are incorrect, alert the user
        alert('Incorrect username or password!');
      }
    });
  });
  