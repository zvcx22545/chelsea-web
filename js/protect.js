document.addEventListener('DOMContentLoaded', (event) => {
    // Check if the sessionStorage item is set
    if (sessionStorage.getItem('loggedIn') !== 'true') {
      window.location.href = '/CS-admin.html'; // Redirect to the login page
    }
  
    // Logout button functionality
    const logoutButton = document.querySelector('.logout');
    logoutButton.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.removeItem('loggedIn'); // Remove the loggedIn flag
      window.location.href = '/CS-admin.html'; // Redirect to the login page
    });
  });
  