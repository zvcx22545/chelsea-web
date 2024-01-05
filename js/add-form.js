var formCount = 1; // Start with one form

function addForm() {
  if (formCount <= 3) {
      var formContainer = document.getElementById("formContainer");
      var newForm = document.createElement("div");
      newForm.innerHTML = `
        <div class="Player-title">
          <label for="nameplayer-${formCount}" class="add-player">คนที่ ${
        formCount + 1
      }</label>
          <p style="color: #eb0000; font-size: 1.5rem">*</p>
        </div>
        <div class="sport-title">
        <label for="nameplayer${formCount}">กรอกชื่อ - นามสกุล</label>
        <p style="color: #eb0000; font-size: 1.5rem">*</p>
      </div>
      <input type="text" id="nameplayer${formCount}" name="nameplayer${formCount}" required />
      <div class="sport-title">
        <label for="phoneplayer${formCount}">เบอร์โทร</label>
        <p style="color: #eb0000; font-size: 1.5rem">*</p>
      </div>
      <input type="tel" id="phoneplayer${formCount}" name="phoneplayer${formCount}" placeholder="กรุณาเบอร์โทร 10 หลัก" required />
      <div class="sport-title">
        <label for="emailplayer${formCount}">อีเมล</label>
        <p style="color: #eb0000; font-size: 1.5rem">*</p>
      </div>
      <input type="email" id="emailplayer${formCount}" name="emailplayer${formCount}" placeholder="กรุณากรอกอีเมล" required />
      <div class="sport-title">
      <div class="cardnumber">บัตรประชาชน/หนังสือเดินทาง</div>
      <p style="color: #eb0000; font-size: 1.5rem">*</p>
      </div>
      <div id="image-preview-container-${formCount}"></div>
    <label for="file-upload${formCount}" class="file-label">
    <button type="button" class="upload-doc-button" onclick="document.getElementById('file-upload-${formCount}').click()">
    + แนบไฟล์เอกสาร
    </button>
    </label>
    <input type="file" id="file-upload-${formCount}" name="file-upload-${formCount}" onchange="previewImage(${formCount});" required />
    <p class="file-upload-info">
      *Lorem ipsum dolor sit amet consectetur. Nunc sit eleifend dictum
      quisque tortor velit purus. Enim in gravida tortor sit.
    </p>
    <hr />
    <div class="quanlity-player">
      <button type="button" id="add-player-btn" onclick="addForm()" class="add-player-btn">
        + เพิ่ม
      </button>
      <p class="add-player-info">*เพิ่มได้สูงสุด 4 ท่าน</p>
      <div id="formContainer"></div>
  </div>
    `;
    newForm.id = "form-section-" + formCount; // Update ID of the new form section
    newForm.style.marginTop = "10rem";
    newForm.style.marginBottom = "2rem";
    formContainer.appendChild(newForm);
    formCount++;
  } else {
    Swal.fire({
      title: "แจ้งเตือน!",
      text: "สามารถเพิ่มฟอร์มได้สูงสุด 4 ฟอร์ม",
      icon: "warning",
      confirmButtonText: "ตกลง",
    });
  }
}

function previewImage(formNumber) {
  var fileInputId = "file-upload-" + formNumber;
  var fileInput = document.getElementById(fileInputId);
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onloadend = function() {
    var img = document.createElement("img");
    img.src = reader.result;
    img.style.maxWidth = "500px"; // Adjust size as needed
    img.style.maxHeight = "500px";
    img.style.display = "flex";
    img.style.margin = "auto";
    img.style.marginTop = "2rem";
    img.style.marginBottom = "2rem";

    var containerId = "image-preview-container-" + formNumber;
    var container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous images
    container.appendChild(img); // Add new image
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    var containerId = "image-preview-container-" + formNumber;
    document.getElementById(containerId).innerHTML = "";
  }
}
