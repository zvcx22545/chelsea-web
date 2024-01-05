var formCount = 1; // Start with one form


function addForm() {
    if (formCount <= 4) {
        var formContainer = document.getElementById("formContainer");
        var newForm = document.createElement("div");
        newForm.innerHTML = `
      <div class="Player-title">
        <label for="nameplayer-${formCount}" class="add-player">คนที่ ${formCount + 1
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
    <div class="form-group">
      <div class="sport-title">
      <div class="cardnumber">บัตรประชาชน/หนังสือเดินทาง</div>
      <p style="color: #eb0000; font-size: 1.5rem">*</p>
      </div>
      <label for="file-upload${formCount}" class="file-label">
        <button type="button" class="upload-doc" onclick="document.getElementById('file-upload').click()">
          + แนบไฟล์เอกสาร
        </button>
      </label>
      <input type="file" id="file-upload${formCount}" name="file-upload${formCount}" required />
      <p class="file-upload-info">
        *Lorem ipsum dolor sit amet consectetur. Nunc sit eleifend dictum
        quisque tortor velit purus. Enim in gravida tortor sit.
      </p>
    </div>
    <button type="button" id="add-player-btn" onclick="addForm()">+ เพิ่ม</button>
    <p class="add-player-info">*เพิ่มได้สูงสุด 4 คน</p>
    `;
        newForm.id = "form-section-" + formCount; // Update ID of the new form section
        newForm.style.marginTop="10rem";
        newForm.style.marginBottom="2rem";
        formContainer.appendChild(newForm);
        formCount++;
    } else {
        alert("สามารถเพิ่มฟอร์มได้สูงสุด 4 ฟอร์ม");
    }
}
