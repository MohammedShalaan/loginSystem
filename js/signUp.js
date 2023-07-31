
// input in the sign up page 

let inptName = document.getElementById("name")
let inptMail = document.getElementById("Mail")
let inptPassword = document.getElementById("passWord")
let btnSignUp = document.getElementById("signUp")
let sucsess = document.getElementById("succes")
let mailerror = document.getElementById("emailError")

// in sign up enter and get data 
let dataArray = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []

btnSignUp.addEventListener("click", function () {

    if (validationRuleEmail()) {

        if (dataArray.some((i) => {
            return i.inptMail == inptMail.value

        })) {
            alert("This Mail is Already registered")
        } else {
            let dataSingUp = {
                inptName: inptName.value,
                inptMail: inptMail.value,
                inptPassword: inptPassword.value
            }

            dataArray.push(dataSingUp)

            inptName.value = ""
            inptMail.value = ""
            inptPassword.value = ""

            localStorage.setItem("user", JSON.stringify(dataArray))

            sucsess.classList.remove("d-none");
            mailerror.classList.add("d-none");

            setTimeout(function () {
                window.open("index.html", "_self");

            }, 5000);



        }
    } else {
        mailerror.classList.remove("d-none");
    }
})

function validationRuleEmail() {
    let regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if (regexEmail.test(inptMail.value)) {
        return true
    } else {
        return false
    }
}
