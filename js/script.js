  function nextStep(step) {
    console.log("nextStep function called with step:", step);

    // Hide all form sections
    document.querySelectorAll(".form-section").forEach((section) => {
      section.style.display = "none";
    });

    // Show the selected form section
    document.querySelector(`.form-section[data-step="${step}"]`).style.display =
      "block";

    // Update step indicators in 'form-steps'
    const formSteps = document.getElementById("form-steps");
    const steps = formSteps.querySelectorAll(".step");

    steps.forEach((stepIndicator) => {
      const indicatorStep = parseInt(stepIndicator.getAttribute("data-step"));
      if (indicatorStep <= step) {
        stepIndicator.classList.add("active"); // Add 'active' class to current and previous steps
      } else {
        stepIndicator.classList.remove("active"); // Remove 'active' class from future steps
      }
    });

    // Display additional forms for step 2 (if any)
    if (step === 2) {
      document.getElementById("formContainer").style.display = "block";
    } else {
      document.getElementById("formContainer").style.display = "none";
    }
  }

function prevStep(step) {
  // Call nextStep to show the previous step
  nextStep(step);

  // Update step indicators
  const steps = document.querySelectorAll("#form-steps .step");
  steps.forEach((stepIndicator) => {
    if (parseInt(stepIndicator.getAttribute("data-step")) === step + 1) {
      stepIndicator.classList.remove("active");
    }
  });
}

// Add event listener for form submission
document
  .getElementById("conditional-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
  });
function triggerFileInput() {
  document.getElementById("file-upload").click();
}

// JavaScript เพื่อแสดงฟอร์มเพิ่มเติมในขั้นตอนที่ 2
function nextStep(stepNumber) {
  var allSteps = document.querySelectorAll(".form-section");
  allSteps.forEach(function (step) {
    if (step.dataset.step == stepNumber) {
      step.style.display = "block"; // แสดงขั้นตอนที่เลือก
    } else {
      step.style.display = "none"; // ซ่อนขั้นตอนอื่น
    }
  });

  // โค้ดสำหรับแสดงฟอร์มเพิ่มเติม (ถ้ามี) ในขั้นตอนที่ 2
  if (stepNumber == 2) {
    document.getElementById("formContainer").style.display = "block";
  } else {
    document.getElementById("formContainer").style.display = "none";
  }
}
