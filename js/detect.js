document.getElementById("load2").addEventListener("click", function() {

    var Teamname = document.getElementById("Teamname").value;
    var Captain = document.getElementById("Captain").value;
    var phoneCaptain = document.getElementById("phoneCaptain").value;
    var emailCaptian = document.getElementById("emailCaptian").value;
    // var merchantInput = document.getElementById("merchant").value;
    // var imageInput = document.getElementById("image").value;
  
    if (!Teamname || !Captain || !phoneCaptain || !emailCaptian ) {
        showAlert("แจ้งเตือน!", "กรุณากรอกข้อมูลให้ครบถ้วน!", "error");
        document.getElementById("load2").setAttribute("onclick", "prevStep(1)");
      } 
      else {
        document.getElementById("load2").setAttribute("onclick", "nextStep(2)");
      }
  });
 
  
  function showAlert(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon || "error",
      confirmButtonText: "ตกลง"
    });
  }
document.addEventListener("DOMContentLoaded", function () {
  var Teamname = document.querySelector('input[name="Teamname"]');
  var Captain = document.querySelector('input[name="Captain"]');
  var phoneCaptain = document.querySelector('input[name="phoneCaptain"]');
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

  var form = document.querySelector("form");
  if (form) {
    form.onsubmit = function (event) {
      validateTelephone(telephoneInput);
      if (telephoneInput.value.length !== 10) {
        showAlert("แจ้งเตือน!", "เบอร์โทรศัพท์ต้องมี 10 หลัก!", "error");
        event.preventDefault();
      }
      validateAge(AgeInput);
      if (AgeInput.value.length <= 1 || AgeInput.value.length >= 3) {
        showAlert("แจ้งเตือน!", "กรอกอายุเพียง 2 หลักเท่านั้น!", "error");
        event.preventDefault();
      }
    };
  }
});