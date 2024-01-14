document.addEventListener("DOMContentLoaded", () => {
  attachFormSubmitHandler("form-1");
  attachFormSubmitHandler("form-2");

  function attachFormSubmitHandler(formId) {
    const form = document.getElementById(formId);
    if (form) {
      form.onsubmit = function (event) {
        event.preventDefault();
        handleFormSubmission(form);
      };
    }
  }

  function handleFormSubmission(form) {
    // Gather data from the form fields
    let formData = new FormData(form);
    let allFieldsFilled = true;

    // Check each required field
    form.querySelectorAll(".required-field").forEach(field => {
      if (!formData.get(field.name) || formData.get(field.name).trim() === '') {
        allFieldsFilled = false;
      }
    });

    if (!allFieldsFilled) {
      showAlert("แจ้งเตือน!", "กรุณากรอกข้อมูลให้ครบถ้วน!", "error");
      return;
    }

    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Prepare JSON data from FormData
    var data = {};
    formData.forEach((value, key) => (data[key] = value));
    var jsonData = JSON.stringify(data);

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error("Error sending data: " + xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error("Error sending data");
    };

    xhr.send(jsonData);
  }
});

function showAlert(title, text, icon) {
  // Assuming you have Swal available
  Swal.fire({
    title: title,
    text: text,
    icon: icon || "error",
    confirmButtonText: "ตกลง",
  });
}

function showAlert(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon || "error",
    confirmButtonText: "ตกลง",
  });
}

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
