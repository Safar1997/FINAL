!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);var o=document.querySelector(".btn-search"),r=document.querySelector(".body-container-aside__input"),l=0;o.addEventListener("click",function(e){e.preventDefault(),r.style.display=l%2==0?"initial":"none",l++});var a=document.querySelector(".body-container-aside__exit"),s=document.querySelector(".body-container-aside"),d=document.querySelector(".btn-phone"),i=document.querySelector(".modal-window--callback"),u=document.querySelector(".btn-message"),c=document.querySelector(".modal-window--ordercall"),y=document.querySelector(".modal-window"),f=document.querySelector(".modal-exit"),p=document.querySelector(".call-exit"),m=document.querySelector(".order-exit"),b=document.querySelector(".top-menu__phone"),x=document.querySelector(".top-menu__message"),v=document.querySelector(".body-container");p.style.display="none",m.style.display="none",b.addEventListener("click",function(e){e.preventDefault(),f.style.display="none",i.style.transform="translateX(0%)",p.style.display="initial",i.style.boxShadow="0 0 10px 5px rgba(172, 166, 166, 0.5)",i.style.zIndex="100",v.style.zIndex="0"}),x.addEventListener("click",function(e){e.preventDefault(),c.style.transform="translateX(0%)",m.style.display="initial",c.style.boxShadow="0 0 10px 5px rgba(172, 166, 166, 0.5)",c.style.zIndex="100",v.style.zIndex="0"}),d.addEventListener("click",function(e){e.preventDefault(),f.style.display="none",i.style.transform="translateX(0%)",p.style.display="initial",i.style.boxShadow="0 0 10px 5px rgba(172, 166, 166, 0.5)",i.style.zIndex="100",v.style.zIndex="0"}),u.addEventListener("click",function(e){e.preventDefault(),c.style.transform="translateX(0%)",m.style.display="initial",c.style.boxShadow="0 0 10px 5px rgba(172, 166, 166, 0.5)",c.style.zIndex="100",v.style.zIndex="0"}),p.addEventListener("click",function(e){i.style.transform="translateX(100%)",i.style.boxShadow="none",y.style.boxShadow="none",p.style.display="none"}),m.addEventListener("click",function(e){c.style.transform="translateX(100%)",c.style.boxShadow="none",y.style.boxShadow="none",m.style.display="none"}),a.addEventListener("click",function(e){e.preventDefault(),s.style.left="-100%",s.style.boxShadow="none"}),document.querySelector(".top-menu__burger").addEventListener("click",function(e){e.preventDefault(),s.style.left="0%",s.style.boxShadow="0 0 10px 5px rgba(172, 166, 166, 0.5)",s.style.zIndex="100"});var S=document.querySelector(".about-us__more"),_=document.querySelectorAll(".paragraph--hidden"),h=0;S.addEventListener("click",function(e){if(e.preventDefault(),h%2==0){for(var t=0;t<_.length;t++)_[t].style.display="block";S.classList.add("about-us__more--less"),S.classList.remove("about-us__more"),S.textContent="Скрыть",h++}else{for(var n=0;n<_.length;n++)_[n].style.display="none";S.classList.add("about-us__more"),S.classList.remove("about-us__more--less"),S.textContent="Читать далее",h++}})},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map