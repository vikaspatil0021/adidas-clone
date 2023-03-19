import { passwordValidation } from "./passwordValidation";

export const labelAnimation = (inputId, state, type, data) => {
    const ele = document.querySelector('#' + inputId + "-label");



    const inputWarn = document.querySelector('#' + inputId + '-warning');
    const input = document.querySelector('#' + inputId);
    const checkIcon = document.querySelector('#' + inputId + '-checkIcon i');

    if (state === 'on') {
        ele.classList.add("inputLabelAni");

        if (type === 'passwordRegister') {
            inputWarn.innerHTML = 'Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.'


        } else {

            inputWarn.classList.add('d-none');
        }

    } else {
        if (type === 'email') {
            checkIcon.classList.remove('d-none')

            if (data.Email == '') {
                inputWarn.classList.remove('d-none')
                input.style.borderBottom = "3px solid red";


                ele.classList.remove("inputLabelAni");
                inputWarn.textContent = "Please enter a valid e-mail address";

            } else {
                if ((data.Email).includes('@gmail.com') && !(data.Email).includes(' ')) {
                    input.style.borderBottom = "3px solid green";


                } else {
                    inputWarn.classList.remove('d-none')
                    input.style.borderBottom = "3px solid red";

                    inputWarn.textContent = "The email address is invalid.";

                }
            }
        } else if (type.substring(0, 8) === "password") {

            checkIcon.classList.remove('d-none')


            if (data.Password == '') {
                inputWarn.classList.remove('d-none')
                input.style.borderBottom = "3px solid red";


                ele.classList.remove("inputLabelAni");
                inputWarn.textContent = "Please enter a password";
                inputWarn.classList.replace("text-muted", 'text-danger')

            } else {
                
                const r = passwordValidation(data)

                if (type === 'passwordRegister' && r != "good") {

                    input.style.borderBottom = "3px solid red";
                    inputWarn.classList.replace("text-muted", 'text-danger')
                } else {

                    input.style.borderBottom = "3px solid green";
                    inputWarn.classList.replace("text-danger", 'text-muted')
                }

            }

        } else if (type === 'fullName') {
            if ("signupFname" == inputId) {
                checkIcon.classList.remove('d-none');

                if (data.fname == '') {
                    inputWarn.classList.remove('d-none')
                    input.style.borderBottom = "3px solid red";


                    ele.classList.remove("inputLabelAni");
                } else {
                    input.style.borderBottom = "3px solid green";

                }
            } else if ("signupLname" == inputId) {
                checkIcon.classList.remove('d-none')

                if (data.lname == '') {
                    inputWarn.classList.remove('d-none')
                    input.style.borderBottom = "3px solid red";


                    ele.classList.remove("inputLabelAni");
                } else {
                    input.style.borderBottom = "3px solid green";

                }
            }

        }
    }
}