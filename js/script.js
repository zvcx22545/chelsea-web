const formSection = document.querySelectorAll(".form-section")
const progress = document.getElementById("progress")


// document.addEventListener('DOMContentLoaded', function () {
//   // Attach event listeners to each form's submit event
//   formSection.forEach((section, index) => {
//       section.addEventListener('submit', function (event) {
//           event.preventDefault(); // Prevent actual form submission

//           // Simulate form submission
//           console.log("Form submitted for step", index + 1);

//           // Move to the next step
//           nextStep(index + 2);
//       });
//   });
//   function nextStep(step) {
//     console.log("nextStep function called with step:", step);
  
//     updateFormSteps(step - 1);
  
//     // Update step indicators in 'form-steps'
//     const formSteps = document.getElementById("form-steps");
//     const steps = formSteps.querySelectorAll(".step");
  
//     steps.forEach((stepIndicator) => {
//       const indicatorStep = parseInt(stepIndicator.getAttribute("data-step"));
//       if (indicatorStep === step) {
//         stepIndicator.classList.add("active"); // Add 'active' class to current step
        
//       } 
//     });
//     const progressWidth = ((step - 1) / (steps.length - 1)) * 100;
//     progress.style.width = progressWidth + "%";
//   }
    
  
//   function updateFormSteps(stepNum) {
//     // Hide all sections and clear the 'form-active' class
//     formSection.forEach((section) => {
//       section.style.display = 'none'; // Hide the section
//       section.classList.remove("form-active");
//     });
  
//     // Show and animate the current step
//     if (stepNum >= 0 && stepNum < formSection.length) {
//       const currentSection = formSection[stepNum];
//       currentSection.style.display = 'block'; // Show the section
//       currentSection.classList.add("form-active");
//       // Optionally, you can trigger a reflow here to ensure the animation plays
//       void currentSection.offsetWidth;
//     }
//   }
  
  

  // function prevStep(step) {
  //   // Call nextStep to show the previous step
  //   nextStep(step);
  
  //   // Update step indicators
  //   const steps = document.querySelectorAll("#form-steps .step");
  //   steps.forEach((stepIndicator) => {
  //     if (parseInt(stepIndicator.getAttribute("data-step")) === step + 1) {
  //       stepIndicator.classList.remove("active");
  //     }
  //   });
  // }
  // let Prev1 = document.getElementById("prev2")
  // Prev1.addEventListener("click",function(){
  //   prevStep(1);
  // })
  // let Prev2 = document.getElementById("prev1")
  // Prev1.addEventListener("click",function(){
  //   prevStep(2);
  // })
  // Additional functions (nextStep, prevStep, etc.)
// });


// Add event listener for form submission

// JavaScript เพื่อแสดงฟอร์มเพิ่มเติมในขั้นตอนที่ 2
// function nextStep(stepNumber) {
//   var allSteps = document.querySelectorAll(".form-section");
//   allSteps.forEach(function (step) {
//     if (step.dataset.step == stepNumber) {
//       step.style.display = "block"; // แสดงขั้นตอนที่เลือก
//     } else {
//       step.style.display = "none"; // ซ่อนขั้นตอนอื่น
//     }
//   });

//   // โค้ดสำหรับแสดงฟอร์มเพิ่มเติม (ถ้ามี) ในขั้นตอนที่ 2
//   if (stepNumber == 2) {
//     document.getElementById("formContainer").style.display = "block";
//   } else {
//     document.getElementById("formContainer").style.display = "none";
//   }
// }
