document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Add event listener for 'accept' button
  // document.getElementById('accept').addEventListener('click', function() {
  //     document.getElementById('status').textContent = 'อนุมัติ';
  //     modal.style.display = "none";
  //   });
  //   document.getElementById('decline').addEventListener('click', function() {
  //     document.getElementById('status').textContent = 'ไม่อนุมัติ';
  //     modal.style.display = "none";
  //   });
  //   document.getElementById('cancel').addEventListener('click', function() {
  //     document.getElementById('status').textContent = 'รอดำเนินการ';
  //     modal.style.display = "none";
  //   });
  //   document.querySelector('.close').addEventListener('click', function() {
  //       modal.style.display = "none";
  //   });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Function to update the status and close the modal
  function updateStatus(newStatus) {
      document.getElementById('status').textContent = newStatus;
      modal.style.display = "none";
      // Save the new status to localStorage
      localStorage.setItem('status', newStatus);
    }
    
    // Check if a saved status exists in localStorage when the page loads
    document.addEventListener('DOMContentLoaded', function() {
      var savedStatus = localStorage.getItem('status');
      if (savedStatus) {
        document.getElementById('status').textContent = savedStatus;
      }
    });
    
    // Add event listener for 'accept' button
    document.getElementById('accept').addEventListener('click', function() {
      updateStatus('อนุมัติ');
    });
    
    // Add event listener for 'decline' button
    document.getElementById('decline').addEventListener('click', function() {
      updateStatus('ไม่อนุมัติ');
    });
    
    // Add event listener for 'cancel' button
    document.getElementById('cancel').addEventListener('click', function() {
      updateStatus('รอดำเนินการ');
    });
    
    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.close').addEventListener('click', function() {
      modal.style.display = "none";
    });
});