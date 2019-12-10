import '../scss/style.scss';

let body = document.querySelector('body');
let html = document.querySelector('html');

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

let call = document.querySelector('.call-exit');
let order = document.querySelector('.order-exit');

let top_menu_phone = document.querySelector('.top-menu__phone');
let top_menu_message = document.querySelector('.top-menu__message');

// let html = document.querySelector('html');
let body_container = document.querySelector('.body-container');

call.style.display = 'none';
order.style.display = 'none';

top_menu_phone.addEventListener('click', function(evt){
    evt.preventDefault();
    modal_exit.style.display = 'none';
    modal_callback.style.transform = 'translateX(0%)';
    call.style.display = 'initial';
    modal_callback.style.boxShadow = '0 0 10px 5px rgba(172, 166, 166, 0.5)';
    html.style.overflow = 'hidden';
    modal_callback.style.zIndex = '100';
    body_container.style.zIndex = '0';
    body.classList.add('body-overlay');
        //скрыть при нажатии на оверлей
        document.addEventListener('click', (evt) => {
            if (evt.target === document.body) {
                modal_callback.style.transform = 'translateX(100%)';
                call.style.display = 'none';
                modal_callback.style.boxShadow = 'none';
                body.classList.remove('body-overlay');
                html.style.overflow = 'initial';
            }
          })
        // **************************
})
top_menu_message.addEventListener('click', function(evt){
    evt.preventDefault();
    modal_ordercall.style.transform = 'translateX(0%)';
    order.style.display = 'initial';
    modal_ordercall.style.boxShadow = '0 0 10px 5px rgba(172, 166, 166, 0.5)';
    html.style.overflow = 'hidden';
    modal_ordercall.style.zIndex = '100';
    body_container.style.zIndex = '0';
    body.classList.add('body-overlay');
        //скрыть при нажатии на оверлей
        document.addEventListener('click', (evt) => {
            if (evt.target === document.body) {
                modal_ordercall.style.transform = 'translateX(100%)';
                order.style.display = 'none';
                modal_ordercall.style.boxShadow = 'none';
                body.classList.remove('body-overlay');
                html.style.overflow = 'initial';
            }
          })
        // **************************
})

contact.addEventListener('click', function(evt){
    evt.preventDefault();
    modal_exit.style.display = 'none';
    modal_callback.style.transform = 'translateX(0%)';
    call.style.display = 'initial';
    modal_callback.style.boxShadow = '0 0 10px 5px rgba(172, 166, 166, 0.5)';
    html.style.overflow = 'hidden';
    modal_callback.style.zIndex = '110';
    body_container.style.zIndex = '0';
    aside.style.left = '-100%';
    aside.style.boxShadow = 'none';
    body.classList.add('body-overlay');
    if (window.innerWidth >= 1440){
        body.style.zIndex = '105';
    }
        //скрыть при нажатии на оверлей
        document.addEventListener('click', (evt) => {
            if (evt.target === document.body) {
                modal_callback.style.transform = 'translateX(100%)';
                call.style.display = 'none';
                modal_callback.style.boxShadow = 'none';
                body.classList.remove('body-overlay');
                html.style.overflow = 'initial';
            }
          })
        // **************************
})
message.addEventListener('click', function(evt){
    evt.preventDefault();
    modal_ordercall.style.transform = 'translateX(0%)';
    order.style.display = 'initial';
    modal_ordercall.style.boxShadow = '0 0 10px 5px rgba(172, 166, 166, 0.5)';
    html.style.overflow = 'hidden';
    modal_ordercall.style.zIndex = '110';
    body_container.style.zIndex = '0';
    aside.style.left = '-100%';
    aside.style.boxShadow = 'none';
    if (window.innerWidth >= 1440){
        body.style.zIndex = '105';
    }
    body.classList.add('body-overlay');
    //скрыть при нажатии на оверлей
    document.addEventListener('click', (evt) => {
        if (evt.target === document.body) {
            modal_ordercall.style.transform = 'translateX(100%)';
            order.style.display = 'none';
            modal_ordercall.style.boxShadow = 'none';
            body.classList.remove('body-overlay');
            html.style.overflow = 'initial';
        }
      })
    // **************************
    
})

call.addEventListener('click', function(evt){
    modal_callback.style.transform = 'translateX(100%)';
    modal_callback.style.boxShadow = 'none';
    modal_window.style.boxShadow = 'none';
    call.style.display = 'none';
    body.classList.remove('body-overlay');
    html.style.overflow = 'initial';
})
order.addEventListener('click', function(evt){
    modal_ordercall.style.transform = 'translateX(100%)';
    modal_ordercall.style.boxShadow = 'none';
    modal_window.style.boxShadow = 'none';
    order.style.display = 'none';
    body.classList.remove('body-overlay');
    html.style.overflow = 'initial';
})

aside_exit.addEventListener('click', function(evt){
    evt.preventDefault();
    // aside.style.transform = 'translateX(-100%)';
    aside.style.left = '-100%';
    aside.style.boxShadow = 'none';
    body.classList.remove('body-overlay');
    html.style.overflow = 'initial';
})

let top_menu_burger = document.querySelector('.top-menu__burger');

top_menu_burger.addEventListener('click', function(evt){
    evt.preventDefault();
    aside.style.left = '0%';
    aside.style.boxShadow = '0 0 10px 5px rgba(172, 166, 166, 0.5)';
    aside.style.zIndex = '100';
    body.classList.add('body-overlay');
    html.style.overflow = 'hidden';
    //скрыть при нажатии на оверлей
    document.addEventListener('click', (evt) => {
        if (evt.target === document.body) {
            aside.style.left = '-100%';
            body.classList.remove('body-overlay');
            html.style.overflow = 'initial';
        }
      })
    // **************************
})


let show_more = document.querySelector('.about-us__more');
let paragraph_hidden = document.querySelectorAll('.paragraph--hidden');


let count_show = 0;
show_more.addEventListener('click', function(evt){
    evt.preventDefault();
    if (count_show %2 ==0){
        for(let i=0; i<paragraph_hidden.length;i++){
            paragraph_hidden[i].style.display = 'block';
        }
        show_more.classList.add('about-us__more--less');
        show_more.classList.remove('about-us__more');
        show_more.textContent = 'Скрыть'
        count_show++;
    }  else{
        for(let i=0; i<paragraph_hidden.length;i++){
            paragraph_hidden[i].style.display = 'none';
        }
        show_more.classList.add('about-us__more');
        show_more.classList.remove('about-us__more--less');
        show_more.textContent = 'Читать далее'
        count_show++;
    } 
})

let brands_show_more = document.querySelector('.brands__show-more');
let brands_list = document.querySelector('.brands__list');
let brands_item = document.querySelectorAll('.brands__item');
let clone_brands_list = [];
for(let i=0; i< brands_item.length; i++){
    clone_brands_list[i] = brands_item[i].cloneNode(true);
}
let count_brands = 0;    

brands_show_more.addEventListener('click', function(evt){
    evt.preventDefault();
    if (count_brands %2 ==0){
        for(let i=0; i<clone_brands_list.length;i++){
            brands_list.appendChild(clone_brands_list[i]);
        }
        brands_show_more.classList.remove('about-us__more');
        brands_show_more.classList.add('about-us__more--less');
        brands_show_more.textContent = 'Скрыть'
        count_brands++;
    }  else{
        for(let i=0; i<clone_brands_list.length;i++){
            brands_list.removeChild(clone_brands_list[i]);
        }
        brands_show_more.classList.add('about-us__more');
        brands_show_more.classList.remove('about-us__more--less');
        brands_show_more.textContent = 'Показать все(9)'
        count_brands++;
    } 
})

let repair_show_more = document.querySelector('.repair__show-more');
let repair_list = document.querySelector('.repair__list');
let repair_item = document.querySelectorAll('.repair__item');
let clone_repair_list = [];
for(let i=0; i< repair_item.length; i++){
    clone_repair_list[i] = repair_item[i].cloneNode(true);
}
let count_repair = 0;    

repair_show_more.addEventListener('click', function(evt){
    evt.preventDefault();
    if (count_repair %2 ==0){
        for(let i=0; i<clone_repair_list.length;i++){
            repair_list.appendChild(clone_repair_list[i]);
        }
        repair_show_more.classList.remove('about-us__more');
        repair_show_more.classList.add('about-us__more--less');
        repair_show_more.textContent = 'Скрыть'
        count_repair++;
    }  else{
        for(let i=0; i<clone_repair_list.length;i++){
            repair_list.removeChild(clone_repair_list[i]);
        }
        repair_show_more.classList.add('about-us__more');
        repair_show_more.classList.remove('about-us__more--less');
        repair_show_more.textContent = 'Показать все(9)'
        count_repair++;
    } 
})