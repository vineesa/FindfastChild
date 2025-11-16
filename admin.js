document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("child-photo");
    const uploadForm = document.querySelector("form");

    fileInput.addEventListener("change", function() {
        if (fileInput.files.length > 0) {
            alert("File ready to be uploaded: " + fileInput.files[0].name);
        }
    });

    uploadForm.addEventListener("submit", function(event) {
        if (!fileInput.files.length) {
            event.preventDefault();
            alert("Please select a file before uploading.");
        }
    });
});

// Show/Hide Add Case Form
document.getElementById('add-case-btn').addEventListener('click', () => {
    document.getElementById('add-case-form').style.display = 'block';
});

function closeAddForm() {
    document.getElementById('add-case-form').style.display = 'none';
    document.getElementById('new-case-form').reset();
}

// Handle New Case Form Submission
/*
document.getElementById('new-case-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        missing_place: document.getElementById('missing_place').value
        contact_no: document.getElementById('contact_no').value,
        email: document.getElementById('email').value
    };

    try {
        const response = await fetch('/add_case', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
            alert('Case added successfully!');
            window.location.reload();
        } else {
            alert(result.error || 'Failed to add case');
        }
    } catch (error) {
        alert('Error adding case');
        console.error('Error:', error);
    }
});*/

document.getElementById("new-case-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        missing_place: document.getElementById("missing_place").value,
        contact_no: document.getElementById("contact_no").value,  // New field
        email: document.getElementById("email").value  // New field
    };

    try {
        let response = await fetch("/add_case", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        let result = await response.json();
        alert(result.message || result.error);
        if (response.ok) window.location.reload(); // Refresh page on success
    } catch (error) {
        alert("Error adding case: " + error);
    }
});


// Delete Case Function
async function deleteCase(name) {
    if (!confirm('Are you sure you want to delete this case?')) {
        return;
    }

    try {
        const response = await fetch('/delete_case', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Case deleted successfully!');
            window.location.reload();
        } else {
            alert(result.error || 'Failed to delete case');
        }
    } catch (error) {
        alert('Error deleting case');
        console.error('Error:', error);
    }
}
