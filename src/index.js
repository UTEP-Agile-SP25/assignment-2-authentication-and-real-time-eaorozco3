import { logIn, signUp, logOut } from "./auth"

const signupForm = document.querySelector("#signUpForm")
signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const firstname = document.getElementById("firstName").value
    const lastname = document.getElementById("lastName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value

    signUp(firstname, lastname, email, password)
})

const loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value

    logIn(email, password)
})

const logoutForm = document.querySelector("#logoutForm")
logoutForm.addEventListener("submit", (e) => {
    e.preventDefault()
    logOut()
})