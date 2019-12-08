import '../scss/style.scss';

let btn_search = document.querySelector('.btn-search');
let input_search = document.querySelector('.body-container-aside__input');
let counter = 0;

btn_search.addEventListener('click',function(evt){
    evt.preventDefault();
    if (counter%2 == 0){
        input_search.style.display = 'initial';
    }
    else{
        input_search.style.display = 'none';
    }
    counter++;
})

let aside_exit = document.querySelector('.body-container-aside__exit');
let aside = document.querySelector('.body-container-aside');

let contact = document.querySelector('.btn-phone');
let modal_callback = document.querySelector('.modal-window--callback')

let message = document.querySelector('.btn-message');
let modal_ordercall = document.querySelector('.modal-window--ordercall');

let modal_window = document.querySelector('.modal-window');
let modal_exit = document.querySelector('.modal-exit');

let ca = document.querySelector('.ca');
let or = document.querySelector('.or');

ca.style.display = 'none';
or.style.display = 'none';

contact.addEventListener('click', function(evt){
    evt.preventDefault();
    modal_exit.style.display = 'none';
    modal_callback.style.transform = 'translateX(0%)';
    ca.style.display = 'initial';
    modal_callback.style.boxShadow = '0 0 10px 5px rgba(172, 166, 166, 0.5)';
})
message.addEventListener('click', function(evt){
    evt.preventDefault();
    modal_ordercall.style.transform = 'translateX(0%)';
    or.style.display = 'initial';
    modal_ordercall.style.boxShadow = '0 0 10px 5px rgba(172, 166, 166, 0.5)';
})

ca.addEventListener('click', function(evt){
    modal_callback.style.transform = 'translateX(100%)';
    modal_window.style.boxShadow = 'none';
    ca.style.display = 'none';
})
or.addEventListener('click', function(evt){
    modal_ordercall.style.transform = 'translateX(100%)';
    modal_window.style.boxShadow = 'none';
    or.style.display = 'none';
})

aside_exit.addEventListener('click', function(evt){
    evt.preventDefault();
    aside.style.transform = 'translateX(-100%)';
})




