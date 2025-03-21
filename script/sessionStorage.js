const form = document.querySelector("form");

function saveFormData() {
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    sessionStorage.setItem("formData", JSON.stringify(data));
}

// Auto-save every 10 seconds
setInterval(saveFormData, 10000);

// Restore data when the page loads
function restoreFormData() {
    const data = JSON.parse(sessionStorage.getItem("formData"));
    if (!data) return; // Exit if no data found

    for (const key in data) {
        const input = form.elements[key];

        if (input) {
            if (input.type === "radio" || input.type === "checkbox") {
                document.querySelector(`input[name="${key}"][value="${data[key]}"]`).checked = true;
            } else {
                input.value = data[key];
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", restoreFormData);
// credit naar chatGPT