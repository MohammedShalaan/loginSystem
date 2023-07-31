

// input in the sign in page 

let SigninMail = document.getElementById("SigninMail")
let SigninPassword = document.getElementById("SigninPassword")
let btnLogin = document.getElementById("btnLogin1")
let welcom = document.getElementById("welcom")
let sucsess = document.getElementById("succes")

// in sign up enter and get data 
let dataArray = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []


// in sign in get data and chick it in the localstorge
btnLogin.addEventListener("click", function () {

    let name1 = ""

    if (dataArray.some((x) => {

        if (x.inptMail == SigninMail.value && x.inptPassword == SigninPassword.value) {
            name1 = x.inptName
            return true
        }

    })) {
        console.log("done" + name1)
        localStorage.setItem("name", name1)
        window.open("home.html", "_self");

    } else {
        console.log("the password or email is vaied")
        sucsess.classList.remove("d-none");
    }


})




