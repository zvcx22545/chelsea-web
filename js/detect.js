

function showAlert(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon || "error",
    confirmButtonText: "ตกลง",
  });
}
// document.addEventListener("DOMContentLoaded", () => {
//   const CheckInputValue = (submitid) => {
//     const submitButton = document.getElementById(submitid);
//     if (submitButton) {
//       submitButton.addEventListener("click", function (event) {
//         var requiredFields = document.querySelectorAll(".required-field");
//         var allFieldsFilled = true;

//         // Check each field
//         for (var i = 0; i < requiredFields.length; i++) {
//           if (requiredFields[i].value.trim() === "") {
//             allFieldsFilled = false;
//             break;
//           }
//         }

//         // If any field is empty, show SweetAlert2 alert and prevent form submission
//         if (!allFieldsFilled) {
//           event.preventDefault();
//           Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "กรุณากรอกข้อมูลให้ครบถ้วน!",
//           });
//         }
//       });
//     } else {
//       console.error("Submit button not found:", submitid);
//     }
//   };
//   CheckInputValue("load2");
//   CheckInputValue("load3");
// });




document.addEventListener("DOMContentLoaded", function () {
  function setupInputValidation(teamNameId, Nameid, phoneCaptainId) {
    var Teamname = document.getElementById(teamNameId);
    var Captain = document.getElementById(Nameid);
    var phoneCaptain = document.getElementById(phoneCaptainId);
    //   var emailCaptian = document.querySelector('input[name="emailCaptian"]');
    //   var AgeInput = document.querySelector('input[name="age"]');

    function validateInput(inputField, errorMessage) {
      // Regular expression that matches anything that is not a-Z, Thai characters, or whitespace

      var regex = /[^A-Za-zก-๙\s]/g;

      if (regex.test(inputField.value)) {
        showAlert("ไม่อนุญาต!", errorMessage, "error");

        // Remove invalid characters

        inputField.value = inputField.value.replace(regex, "");
      }
    }

    if (Teamname) {
      Teamname.oninput = function () {
        validateInput(this, "ใส่เฉพาะตัวอักษร A-z และ ก-ฮ เท่านั้น!!");
      };
    }

    if (Captain) {
      Captain.oninput = function () {
        validateInput(this, "ใส่เฉพาะตัวอักษร A-z และ ก-ฮ เท่านั้น!!");
      };
    }

    // Function to validate the telephone input

    if (phoneCaptain) {
      phoneCaptain.oninput = function () {
        this.value = this.value.replace(/\D/g, "");
      };
      phoneCaptain.onblur = function () {
        var value = this.value;
        if (value.length !== 10) {
          showAlert("แจ้งเตือน!", "เบอร์โทรศัพท์ต้องมี 10 หลัก!", "error");
          this.value = value.slice(0, 10);
        } else if (/(\d)\1{6,}/.test(value)) {
          showAlert(
            "แจ้งเตือน!",
            "เบอร์โทรศัพท์ไม่สามารถมีตัวเลขที่ซ้ำกันมากกว่า 6 ตัวได้!",
            "error"
          );
          this.value = "";
        } else if (/(\d{2,})\1+/.test(value)) {
          showAlert(
            "แจ้งเตือน!",
            "เบอร์โทรศัพท์ไม่สามารถมีลำดับตัวเลขที่ซ้ำกันได้!",
            "error"
          );
          this.value = "";
        }
      };
    }
  }

  setupInputValidation("Teamname", "Captain", "phoneCaptain");
  setupInputValidation("nameplayer", null, "phoneplayer");
  setupInputValidation("nameplayer-2", null, "phoneplayer-2");
  setupInputValidation("nameplayer-3", null, "phoneplayer-3");
  setupInputValidation("nameplayer-4", null, "phoneplayer-4");

  //  check value form input

  function checkInputs(idinput1,idinput2,idinput3) {
    var input1 = document.getElementById(idinput1).value;
    var input2 = document.getElementById(idinput2).value;
    var input3 = document.getElementById(idinput3).value;
    
    if (input1 !== '') {
      // ถ้า input ช่องแรกไม่ว่าง
      // จะบังคับให้กรอก input 2 และ input 3
      if (input2 === '' || input3 === '') {
        showAlert(
          "แจ้งเตือน!",
          "กรุณากรอกข้อมูลให้ครบถ้วน!",
          "error"
        );
      }
    } else {
      // ถ้า input ช่องแรกว่าง
      // ไม่บังคับให้กรอก input 2 และ input 3
    }
  }

  // แสดงข้อความเมื่อคลิกปุ่ม "ถัดไป"
  let button = document.querySelector('.next-2');
  button.addEventListener('click', function() {
    checkInputs("nameplayer-2", "dateplayer-2", "phoneplayer-2");
  });
  let checkinput3 = document.querySelector('.next-2');
  checkinput3.addEventListener('click', function() {
    checkInputs("nameplayer-3", "dateplayer-3", "phoneplayer-3");
  });
  function blockThaiInput(event) {
    var regex = /[^\u0E00-\u0E7F]/g; // Regular expression to match non-Thai characters
    if (!regex.test(event.key)) {
      event.preventDefault(); // Prevent Thai characters
      showAlert(
        "แจ้งเตือน!",
        "ไม่สามารถใส่ภาษาไทยได้!",
        "error"
      );
    }
  }

  // Attach the function to the input element
  var inputElement = document.getElementById('LineID');
  inputElement.addEventListener('keypress', blockThaiInput);
});


// Function to validate the Age input

// if (AgeInput) {
//   AgeInput.oninput = function () {
//     this.value = this.value.replace(/\D/g, "");
//   };
//   AgeInput.onblur = function () {
//     var value = this.value;
//     if (value.length < 1 || value.length > 3) {
//       showAlert("แจ้งเตือน!", "กรุณากรอกข้อมูลด้วย!", "error");
//       this.value = value.slice(0, 3);
//     }
//   };
// }

// Form submission validation
// attachFormSubmitHandler("form-1");
//   attachFormSubmitHandler("form-2");
//   attachFormSubmitHandler("form-3");

//   function attachFormSubmitHandler(formId) {
//     const form = document.getElementById(formId);
//     if (form) {
//       console.log("Attaching handler to: ", formId);
//       form.onsubmit = function (event) {
//         event.preventDefault();
//         handleFormSubmission(form);
//       };
//     } else {
//       console.log("Form not found: ", formId);
//     }
//   }

//   function handleFormSubmission(form) {
//     console.log("Handling form submission for: ", form.id);
//     let formData = new FormData(form);
//     let allFieldsFilled = true;
//     if (!checkRequiredFields(form.id)) {
//     return; // Stop further execution if validation fails
//   }form.querySelectorAll(".required-field").forEach(field => {
//     let fieldValue = formData.get(field.name);
  
//     if (fieldValue && typeof fieldValue === 'string' && fieldValue.trim() === '') {
//       console.log("Field not filled: ", field.name);
//       allFieldsFilled = false;
//     }
//   });

//     if (!allFieldsFilled) {
//       showAlert("แจ้งเตือน!", "กรุณากรอกข้อมูลให้ครบถ้วน!", "error");
//       console.log("After showAlert");

//     }
//     function checkRequiredFields(formId) {
//       const form = document.getElementById(formId);
//       let allFieldsFilled = true;
    
//       form.querySelectorAll(".required-field").forEach(field => {
//         if (!field.value.trim()) {
//           console.log("Field not filled: ", field.name);
//           allFieldsFilled = false;
//         }
//       });
    
//       if (!allFieldsFilled) {
//         showAlert("แจ้งเตือน!", "กรุณากรอกข้อมูลให้ครบถ้วน!", "error");
//       }
    
//       return allFieldsFilled;
//     }
//     var fileInputs = form.querySelectorAll('input[type="file"]');
//     fileInputs.forEach(input => {
//         if (input.files.length > 0) {
//             formData.append(input.name, input.files[0]);
//         }
//     });
//     form.querySelectorAll('input').forEach(input => {
//       console.log("Input field name:", input.name);
//     });


//     // Create an XMLHttpRequest object
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", form.action, true);
//     xhr.setRequestHeader("Content-Type", "multipart/form-data"); // ตรวจสอบให้แน่ใจว่า Content-Type ถูกต้อง
//     xhr.setRequestHeader("Content-Type", "application/json");

//     // Prepare JSON data from FormData
//     var data = {};
//     formData.forEach((value, key) => (data[key] = value));
  
//     var jsonData = JSON.stringify(data);

//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         console.log("Data sent successfully");
//       } else {
//         console.error("Error sending data: " + xhr.status);
//       }
//     };

//     xhr.onerror = function () {
//       console.error("Error sending data");
//     };
//       xhr.send(formData);
//       console.log(formData);
//     // console.log(jsonData)
//     // xhr.send(jsonData);
//   }
  