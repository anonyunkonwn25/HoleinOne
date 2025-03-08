document.addEventListener("DOMContentLoaded", function() {
    // الحصول على الزر وقائمة الروابط
    var hamburgerBtn = document.getElementById("hamburger-btn");
    var navLinks = document.getElementById("nav-links");

    // عند الضغط على الزر، إظهار أو إخفاء قائمة الروابط
    hamburgerBtn.addEventListener("click", function() {
        if (navLinks.style.display === "none" || navLinks.style.display === "") {
            navLinks.style.display = "block";  // إظهار القائمة
        } else {
            navLinks.style.display = "none";  // إخفاء القائمة
        }
    });
});