// สร้างฟังก์ชันเพื่อเปลี่ยนหน้าและปรับสถานะของปุ่ม
function changePage() {
    // ปรับสถานะของปุ่มให้เป็น .active
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));

    // ใช้ location.pathname เพื่อตรวจสอบ URL และกำหนดหัวข้อตาม URL ที่ปัจจุบัน
    const pageTitle = document.getElementById('pageTitle');
    if (location.pathname.includes('teamdetail.html')) {
        pageTitle.textContent = 'ข้อมูลรายชื่อทีม';
        document.getElementById('teamButton').classList.add('active');
    } else if (location.pathname.includes('compete.html')) {
        pageTitle.textContent = 'การแข่งขัน';
        document.getElementById('competitionButton').classList.add('active');
        document.getElementById('showScheduleButton').classList.add('active');
        document.getElementById('showScheduleButton').style.color = "white";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // ตรวจสอบ URL และตั้งค่าสถานะของปุ่มและตาราง
    changePage();

    // ฟังก์ชันเมื่อคลิกปุ่ม "ตารางการแข่งขัน"
        document.getElementById("showScheduleButton").addEventListener("click", function() {
        // ซ่อนตารางผลการแข่งขัน
        document.getElementById("resultsTable").style.display = "none";
        // แสดงตาราง tableCom
        document.getElementById("tableCom").style.display = "table";

        // เปลี่ยนสถานะของปุ่ม "ตารางการแข่งขัน"
        document.getElementById('showScheduleButton').classList.add('active');
        document.getElementById('showScheduleButton').style.color = "white";

        // ถ้าปุ่ม "ผลการแข่งขัน" มีสถานะ active ให้ลบสถานะ
        if (document.getElementById('showResultsButton').classList.contains('active')) {
            document.getElementById('showResultsButton').classList.remove('active');
            document.getElementById('showResultsButton').style.color = ""; // เรียกคืนสีเดิม (ถ้ามี)
        }
    });

    // ฟังก์ชันเมื่อคลิกปุ่ม "ผลการแข่งขัน"
    document.getElementById("showResultsButton").addEventListener("click", function() {
        // ซ่อนตาราง tableCom
        document.getElementById("tableCom").style.display = "none";
        // แสดงตารางผลการแข่งขัน
        document.getElementById("resultsTable").style.display = "table";

        // เปลี่ยนสถานะของปุ่ม "ผลการแข่งขัน"
        document.getElementById('showResultsButton').classList.add('active');
        document.getElementById('showResultsButton').style.color = "white";

        // ถ้าปุ่ม "ตารางการแข่งขัน" มีสถานะ active ให้ลบสถานะ
        if (document.getElementById('showScheduleButton').classList.contains('active')) {
            document.getElementById('showScheduleButton').classList.remove('active');
            document.getElementById('showScheduleButton').style.color = ""; // เรียกคืนสีเดิม (ถ้ามี)
        }
    });
});




window.onload = changePage;
