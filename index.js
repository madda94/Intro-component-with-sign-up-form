const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")

document.getElementById("submit").addEventListener("click", function() {
    if (firstName.value === "" ) {
        document.getElementById("first-name-div").style.display = "block"
    }
    if (lastName.value === "") {
        document.getElementById("last-name-div").style.display = "block"
    }
    if (email.value === "" || !email.value.includes("@") || !email.value.includes(".com")) {
        document.getElementById("email-div").style.display = "block"
    }
    if (password.value === "") {
        document.getElementById("password-div").style.display = "block"
    }
})