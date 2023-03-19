export  const addButtonClass = (id) => {
    const btn = document.querySelector("#" + id);
    const btnBorder = document.querySelector("#" + id + " .border-button");


    btn.classList.toggle('main-btn-onClick');
    btnBorder.classList.toggle('border-button-onClick');
    setTimeout(() => {
        btn.classList.toggle('main-btn-onClick');
        btnBorder.classList.toggle('border-button-onClick');

    }, 150);
}