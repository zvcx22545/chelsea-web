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

// JavaScript เพื่อแสดงฟอร์มเพิ่มเติมในขั้นตอนที่ 2
function nextStep(stepNumber) {
  var allSteps = document.querySelectorAll(".form-section");
  allSteps.forEach(function(step) {
    if (step.dataset.step == stepNumber) {
      step.style.display = 'block'; // แสดงขั้นตอนที่เลือก
    } else {
      step.style.display = 'none'; // ซ่อนขั้นตอนอื่น
    }
  });

  // โค้ดสำหรับแสดงฟอร์มเพิ่มเติม (ถ้ามี) ในขั้นตอนที่ 2
  if (stepNumber == 2) {
    document.getElementById("formContainer").style.display = 'block';
  } else {
    document.getElementById("formContainer").style.display = 'none';
  }
}

// ฟังก์ชัน addForm ของคุณที่มีการปรับปรุง
function addForm() {
  // โค้ดเดิมของคุณ...
}



