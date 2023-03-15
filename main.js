(()=>{"use strict";function t(t,e,n){const o=document.documentElement,a="data-outside";function c(i){t.contains(i.target)||(t.removeAttribute(a),e.forEach((t=>{o.removeEventListener(t,c)})),n())}t.hasAttribute(a)||(e.forEach((t=>{setTimeout((()=>o.addEventListener(t,c)))})),t.setAttribute(a,""))}!function(){const t=document.querySelectorAll("[data-tab='menu'] li"),e=document.querySelectorAll("[data-tab='content'] section"),n="ativo";t.length&&e.length&&(e[0].classList.add(n),t.forEach(((t,o)=>{t.addEventListener("click",(()=>{!function(t){e.forEach((t=>{t.classList.remove(n)}));const o=e[t].dataset.anime;e[t].classList.add(n,o)}(o)}))})))}(),function(){const t=document.querySelectorAll("[data-anime='accordion'] dt"),e="ativo";function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",n)})))}(),function(){const t=document.querySelectorAll("[data-menu='suave'] a[href^='#']");function e(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}t.length&&t.forEach((t=>{t.addEventListener("click",e)}))}(),function(){const t=document.querySelectorAll("[data-anime='scroll']"),e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0&&t.classList.add("ativo")}))}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelector("[data-modal='abrir']"),e=document.querySelector("[data-modal='fechar']"),n=document.querySelector(".modal-container");function o(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)})))}(),function(){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}},n={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function o(t){const o=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);o.style.top=`${t.pageY}px`,o.style.left=`${t.pageX}px`,e.tooltipBox=o,this.addEventListener("mousemove",e),n.tooltipBox=o,n.element=this,this.addEventListener("mouseleave",n)}t&&t.forEach((t=>{t.addEventListener("mouseover",o)}))}(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((n=>t.addEventListener(n,e)))}))}(),function(){const e=document.querySelector("[data-menu='button']"),n=document.querySelector("[data-menu='list']"),o=["click","touchstart"];function a(){e.classList.add("active"),n.classList.add("active"),t(n,o,(()=>{e.classList.remove("active"),n.classList.remove("active")}))}e&&o.forEach((t=>{e.addEventListener(t,a)}))}(),function(){const t=document.querySelector("[data-semana]");if(t){const e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,a=o.getDay(),c=o.getHours();e.includes(a)&&c>=n[0]&&c<n[1]&&t.classList.add("aberto")}}(),async function(t){try{const t=await fetch("../../animaisapi.json"),e=await t.json(),n=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3>\n    <span data-numero>${t.total}</span>`,e}(t);n.appendChild(e)})),function(){const t=document.querySelectorAll("[data-numero]");let e;const n=document.querySelector(".numeros");e=new MutationObserver((function(n){n[0].target.classList.contains("ativo")&&(e.disconnect(),t.forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const a=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(a))}),25*Math.random())})))})),e.observe(n,{attributes:!0})}()}catch(t){console.log(t)}}(),async function(t){try{const t=(await(await fetch("https://blockchain.info/ticker")).json()).BRL.buy,e=String((100/t).toFixed(6)).replace(".",","),n=document.querySelector(".btc-preco");n&&(n.innerText=e)}catch(t){console.log(t)}}()})();