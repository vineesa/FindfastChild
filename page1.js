document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        document.getElementById("description").style.display = "none";
        document.getElementById("user-auth").style.display = "none";
        document.getElementById("admin-auth").style.display = "none";
        document.getElementById(sectionId).style.display = "block";
    }

    // Attach event listeners to buttons
    document.querySelector(".header-btn:nth-child(1)").addEventListener("click", function () {
        showSection("user-auth");
    });

    document.querySelector(".header-btn:nth-child(2)").addEventListener("click", function () {
        showSection("admin-auth");
    });

    // Ensure password toggle works
    document.getElementById("user-show-password").addEventListener("change", function () {
        let passwordField = document.getElementById("user-password");
        passwordField.type = this.checked ? "text" : "password";
    });

    document.getElementById("admin-show-password").addEventListener("change", function () {
        let passwordField = document.getElementById("admin-password");
        passwordField.type = this.checked ? "text" : "password";
    });
});
