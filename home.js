document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("child-photo");
    const previewImage = document.getElementById("preview-image");
    const uploadForm = document.querySelector("form");

    // ✅ Image Preview Before Upload
    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
                previewImage.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    // ✅ Form Validation Before Submission
    uploadForm.addEventListener("submit", function (event) {
        const location = document.getElementById("photo-location").value;
        if (!fileInput.files.length) {
            alert("⚠ Please select an image before uploading!");
            event.preventDefault();
        } else if (location.trim() === "") {
            alert("⚠ Please enter the photo location!");
            event.preventDefault();
        }
    });
});

