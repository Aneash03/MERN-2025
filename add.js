document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formMessage = document.getElementById("formMessage");

    formMessage.textContent = `Thank you, ${name}! Aneash will respond to your message at ${email} soon.`;
    formMessage.style.color = "green";

    // Clear form fields
    e.target.reset();
});
