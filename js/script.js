function nextStep(step) {
  // Hide all steps
  document.querySelectorAll('.form-section').forEach(section => {
    section.style.display = 'none';
  });
  // Show the next step
  document.querySelector(`.form-section[data-step="${step}"]`).style.display = 'block';
  
  // Update step indicator
  document.querySelectorAll('#form-steps .step').forEach(stepIndicator => {
    stepIndicator.classList.remove('active');
  });
  document.querySelector(`#form-steps .step[data-step="${step}"]`).classList.add('active');
}

function prevStep(step) {
  nextStep(step); // Reuse nextStep function for previous step
}

// Add event listener for form submission
document.getElementById('conditional-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted!');
});
function triggerFileInput() {
  document.getElementById('file-upload').click();
}



