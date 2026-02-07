function signIn() {
    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("number").value.trim();
    const location = document.getElementById("location").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const error = document.getElementById("error");
    error.style.color = "red";
    error.innerText = "";

    if (!name || !phone || !location || !email || !password) {
        error.innerText = " Please fill in all fields";
        return;
    }

    if (phone.length < 10) {
        error.innerText = "Enter a valid phone number!";
        return;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters!";
        return;
    }

    error.style.color = "green";
    error.innerText = "!Login successful! Redirecting...";

    console.log({
        name,
        phone,
        location,
        email,
        password
    });

    setTimeout(() => {
        window.location.href = "/";
    }, 1500);
}
