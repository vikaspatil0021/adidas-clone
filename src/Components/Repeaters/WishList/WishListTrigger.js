import axios from "axios";


const wishlistTrigger = (productInfo,btn) => {

    const email01 = localStorage.getItem('Email') || null
    if(btn==='btn'){
        var Ele = document.querySelector('#btn' + productInfo.productId + ' i');

    }else{

        Ele = document.querySelector('#heart' + productInfo.productId + ' i');
    }
 console.log(Ele);

    if (email01) {
        if (Ele.classList.contains('fa-regular')) {
            var action = '/add/'
        } else {
            action = '/remove/'
        }
        axios.post(process.env.REACT_APP_SERVER_URL + '/wishlist/crud' + action + email01,
            { productInfo },
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('Token01')
                }
            }).then((res) => {
                console.log(res.data);
                if (res.data === 'product added') {
                    Ele.classList.replace('fa-regular', 'fa-solid')
                } else {
                    Ele.classList.replace('fa-solid', 'fa-regular')

                }
            }).catch((err) => {
                console.log(err);
            });
    }else{

              
                // trigger login modal
              const triggerModal = document.querySelector('#loginModal')
              triggerModal.classList.toggle("d-none");
        
          
    }


}

export default wishlistTrigger;