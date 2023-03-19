export const showPass = (id) => {
    const ele = document.querySelector('#' + id);
    const clickedBtn = document.querySelector('.showPassBtn');
    const showPassIcon = document.querySelector('#showPassIcon');
    if (ele.type == "password") {
        ele.type = "text";
        clickedBtn.textContent = 'HIDE';
        showPassIcon.classList.replace('fa-eye', 'fa-eye-slash')
    } else {
        ele.type = "password";
        clickedBtn.textContent = 'SHOW';
        showPassIcon.classList.replace('fa-eye-slash', 'fa-eye')


    }

}