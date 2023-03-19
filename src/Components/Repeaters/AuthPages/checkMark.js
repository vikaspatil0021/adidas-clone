export const checkMark = (id) => {
    const ele = document.querySelector('#' + id)
    const warningEle = document.querySelector('#' + id + "-warning")
  
    if (ele.checked) {
      ele.checked = false;
      ele.style.backgroundColor = 'white';
      if (warningEle) {
  
        warningEle.classList.remove('d-none')
      }
  
    } else {
      ele.checked = true;
      ele.style.backgroundColor = 'black';
  
      if (warningEle) {
  
        warningEle.classList.add('d-none');
      }
  
    }
  }