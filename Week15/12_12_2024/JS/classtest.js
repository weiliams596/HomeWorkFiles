const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailContent = document.getElementById("email").value;
    const pswContent = document.getElementById("password").value;
    let messageContent = document.getElementById("text");
    if (emailContent === "" || pswContent === "") {
        messageContent = "Please fill all fields";
    }
    else if (emailContent.length < 5) {
        messageContent.textContent = "Email should be at least 5 characters long";
    }
    else if (pswContent.length < 6) {
        messageContent.textContent = "Password should be at least 6 characters long";
    }
});

