const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");
const container = document.getElementById("contactContainer");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Reset errors
    [name, email, message].forEach(input => input.classList.remove("error"));

    // Validation
    if (name.value.trim() === "") {
        name.classList.add("error");
        isValid = false;
    }
    if (email.value.trim() === "" || !email.value.includes("@")) {
        email.classList.add("error");
        isValid = false;
    }
    if (message.value.trim() === "") {
        message.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        container.classList.add("blurred");  // blur form
        popup.classList.add("show");

        // Hide popup after 3s
        setTimeout(() => {
            popup.classList.remove("show");
            container.classList.remove("blurred");
            form.reset();
        }, 3000);
    }
});