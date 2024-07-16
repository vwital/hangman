(()=>{"use strict";var t={169:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(81),a=n.n(o),i=n(645),s=n.n(i)()(a());s.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@400;700&display=swap);"]),s.push([t.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}body{font-family:"Roboto",sans-serif;font-size:10px}.gallow__bg{max-width:500px;max-height:500px;transition:all .5s ease}@media(max-width: 845px){.gallow__bg{max-width:400px;max-height:400px}}@media(max-width: 630px){.gallow__bg{max-width:350px;max-height:350px}}@media(max-width: 550px){.gallow__bg{max-width:300px;max-height:300px}}.gallow_full{max-width:500px;max-height:500px;transition:all .5s ease}@media(max-width: 845px){.gallow_full{max-width:400px;max-height:400px}}.gallow{position:relative;padding-right:40px}.man{display:flex;flex-direction:column;align-items:center;position:absolute;top:25%;left:51%;z-index:2;transition:all .5s ease}@media(max-width: 845px){.man{max-width:50%;max-height:50%;left:47%}}@media(max-width: 630px){.man{max-width:45%;max-height:45%;left:44%}}@media(max-width: 550px){.man{left:40%;max-width:40%;max-height:40%}}.body__arms{position:absolute;z-index:3;top:50%}.left-arm{right:55%}.right-arm{left:55%}.body__legs{position:absolute;top:100%}.left-leg{right:55%}.right-leg{left:55%}.man>img{max-width:250px;max-height:200px;transition:all .5s ease}@media(max-width: 845px){.man>img{max-width:65%;max-height:65%}}.body__head{transition:all .5s ease}@media(max-width: 845px){.body__head{max-width:80%;max-height:80%;left:47%}}.body__body{width:5px;overflow:hidden}.buttons{display:flex;flex-wrap:wrap;justify-content:center;gap:5px}.buttons__btn{transition:all .5s ease;background-color:#5455ac;color:#fff;border:none;border-radius:5px;width:60px;height:60px;cursor:pointer;font-size:1.5rem;font-weight:700;cursor:pointer}@media(max-width: 845px){.buttons__btn{width:50px;height:50px}}@media(max-width: 630px){.buttons__btn{width:45px;height:45px}}@media(max-width: 500px){.buttons__btn{width:40px;height:40px}}.buttons__btn_activate{background-color:#9899cd;pointer-events:none;cursor:default}.game{max-width:1440px;font-size:1.8rem;margin:0 auto}@media(max-width: 845px){.game{font-size:1.6rem}}@media(max-width: 750px){.game{font-size:1.5rem}}@media(max-width: 630px){.game{font-size:1.35rem}}@media(max-width: 500px){.game{font-size:1.3rem}}.wrapper{max-width:1360px;margin:20px}.game-field{display:flex;justify-content:space-around;align-items:center;margin:0 auto;transition:all .5s}@media(max-width: 550px){.game-field{flex-direction:column}}.game-control{display:flex;flex-direction:column;align-items:center;gap:40px;transition:all .5s}@media(max-width: 750px){.game-control{gap:30px}}@media(max-width: 500px){.game-control{gap:20px}}.word{font-size:3rem;font-weight:700;transition:all .5s}@media(max-width: 845px){.word{font-size:2.5rem}}@media(max-width: 750px){.word{font-size:2rem}}@media(max-width: 630px){.word{font-size:1.8rem}}@media(max-width: 500px){.word{font-size:1.8rem}}.letter{padding:5px}.question{text-align:center}.incorrect-counter_active{color:red}.hidden{display:none}p{margin:20px}.modal{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:5;width:50%;height:60%;background-color:#a92a2a;border:2px solid #000;font-size:2.4rem;text-align:center;padding:40px;border-radius:20px;font-weight:700;transition:opacity 1s;opacity:1;transition:all .4s}@media(max-width: 900px){.modal{font-size:2rem}}@media(max-width: 550px){.modal{font-size:1.8rem}}.overlay{display:none}.overlay_active{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:3}.modal__button{border-radius:10px;display:flex;cursor:pointer}.button__arrow{display:inline-block;width:40px;height:40px;z-index:6}.hidden__modal{transition:all 1s ease;opacity:.1;display:none}.modal__button:hover{transition:all .5s;transform:scale(1.1)}',""]);const r=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(s[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);o&&s[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},s=[],r=0;r<t.length;r++){var l=t[r],d=o.base?l[0]+o.base:l[0],c=i[d]||0,u="".concat(d," ").concat(c);i[d]=c+1;var m=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var b=a(p,o);o.byIndex=r,e.splice(r,0,{identifier:u,updater:b,references:1})}s.push(u)}return s}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var i=o(t=t||[],a=a||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var r=n(i[s]);e[r].references--}for(var l=o(t,a),d=0;d<i.length;d++){var c=n(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!t;)t=o[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{n.p;var t=n(379),e=n.n(t),o=n(795),a=n.n(o),i=n(569),s=n.n(i),r=n(565),l=n.n(r),d=n(216),c=n.n(d),u=n(589),m=n.n(u),p=n(169),b={};function h(t){return Math.floor(Math.random()*t)}b.styleTagTransform=m(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=c(),e()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals,n.p,n.p,n.p,n.p,n.p,n.p,n.p;const g=[{question:"Is a static modular builder for JavaScript applications.",answer:"Webpack"},{question:"One of the three pillars of front-end development",answer:"JavaScript"},{question:"What invention lets you look right through a wall?",answer:"Window"},{question:"The science of the structure and properties of various substances and the transformation of one substance into another.",answer:"Chemistry"},{question:"A sport that is played with a round ball and a hoop.",answer:"Basketball"},{question:" A large animal that has a trunk and tusks.",answer:"Elephant"},{question:"The capital of the Netherlands, famous for its canals and bicycles",answer:"Amsterdam"},{question:"Australian animal with a long tail and a pouch on its belly",answer:"Kangaroo"},{question:"Legendary British rock band, authors of the songs “Yesterday” and “Let It Be”",answer:"Beatles"},{question:"First planet from the sun.",answer:"Mercury"},{question:"What is the name of the device that measures temperature?",answer:"Thermometer"},{question:"What is the name of the smallest continent by land area?",answer:"Australia"},{question:"What is the name of the instrument that is used to measure atmospheric pressure?",answer:"Barometer"},{question:"Еhe unit of measurement that is equal to 1000 meters?",answer:"Kilometer"},{question:"The coldest, driest, and windiest сontinent on earth?",answer:"Antarctica"}];document.body.innerHTML='   <main class="game">\n      <div class="wrapper">\n      <div class="game-field">\n        <section class="gallow_full">\n          <div class="gallow">\n            <img\n              class="gallow__bg"\n              src="./assets/img/gallows.jpg"\n              alt="img"\n            />\n            <div class="man">\n              <img\n                class="body__part body__head hidden"\n                src="./assets/img/head.jpg"\n                alt="head"\n              />\n              <img\n                class="body__part body__body hidden"\n                src="./assets/img/body.jpg"\n                alt="body"\n              />\n              <img\n                class="body__part body__arms left-arm hidden"\n                src="./assets/img/left-arm.jpg"\n                alt="left-arm"\n              />\n              <img\n                class="body__part body__arms right-arm hidden"\n                src="./assets/img/right-arm.jpg"\n                alt="right-arm"\n              />\n\n              <img\n                class="body__part body__legs left-leg hidden"\n                src="./assets/img/left-leg.jpg"\n                alt="left-leg"\n              />\n              <img\n                class="body__part body__legs right-leg hidden"\n                src="./assets/img/right-leg.jpg"\n                alt="right-leg"\n              />\n            </div>\n          </div>\n        </section>\n        <section class="game-control">\n          <div class="word">\n\n          </div>\n          <div class="question">This is a question</div>\n          <div class="incorrent">Incorrent guesses <span class="incorrect-counter">0</span>/6</span></div>\n       <div class="buttons">\n         <button class="buttons__btn">A</button>\n         <button class="buttons__btn">B</button>\n         <button class="buttons__btn">C</button>\n         <button class="buttons__btn">D</button>\n         <button class="buttons__btn">E</button>\n         <button class="buttons__btn">F</button>\n        <button class="buttons__btn">G</button>\n        <button class="buttons__btn">H</button>\n        <button class="buttons__btn">I</button>\n        <button class="buttons__btn">J</button>\n        <button class="buttons__btn">K</button>\n         <button class="buttons__btn">L</button>\n         <button class="buttons__btn">M</button>\n         <button class="buttons__btn">N</button>\n         <button class="buttons__btn">O</button>\n         <button class="buttons__btn">P</button>\n      <button class="buttons__btn">Q</button>\n      <button class="buttons__btn">R</button>\n      <button class="buttons__btn">S</button>\n       <button class="buttons__btn">T</button>\n       <button class="buttons__btn">U</button>\n        <button class="buttons__btn">V</button>\n      <button class="buttons__btn">W</button>\n        <button class="buttons__btn">X</button>\n  <button class="buttons__btn">Y</button>\n     <button class="buttons__btn">Z</button>\n   </div>\n  </section>\n  </div>\n</div>\n</main>\n<div class="modal hidden__modal">\n<p class="modal__grats"></p>\n<p class="modal__message">\nYou won!</p>\n<p class="modal__word">The word:</p>\n<button class="modal__button">Restart  <img\nclass="button__arrow "\nsrc="./assets/img/arrow.png"\nalt="right-leg"\n/></button>\n</div>\n<div class="overlay"></div>\n';const f=document.querySelector(".question"),x=document.querySelector(".word"),_=document.querySelector(".buttons"),w=document.querySelectorAll(".buttons__btn"),y=document.querySelectorAll(".body__part"),v=document.querySelector(".modal"),L=document.querySelector(".overlay"),k=document.querySelector(".modal__button"),z=document.querySelector(".incorrect-counter");let C=!1;const T=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];function q(){document.body.classList.add("scroll-hidden"),L.classList.add("overlay_active"),C=!0}let M=0,S=0,E=[],j=h(g.length),A=j,H=document.querySelectorAll(".letter"),I=g[j].answer;function B(){x.innerHTML="",w.forEach((t=>{"buttons__btn_activate"==t.classList[1]&&t.classList.remove("buttons__btn_activate")})),y.forEach((t=>{t.classList.add("hidden")})),z.innerHTML=S,"incorrect-counter_active"===z.classList[1]&&z.classList.remove("incorrect-counter_active"),I=g[j].answer,f.innerHTML=g[j].question,A=j;for(let t=0;t<I.length;t++){let t=document.createElement("span");t.classList.add("letter"),t.innerHTML="_",x.append(t)}function t(){q(),v.style.backgroundColor="#00662a",setTimeout((()=>{v.children[0].textContent="Congratulations!",v.children[1].textContent="You win!",v.children[2].textContent=`The word: ${I}`,v.classList.remove("hidden__modal")}),500)}function e(){q(),v.style.backgroundColor="#a92a2a",setTimeout((()=>{v.children[0].textContent="You lose :(",v.children[1].textContent="Better luck next time :) ",v.children[2].textContent=`The word: ${I}`,v.classList.remove("hidden__modal")}),500)}H=document.querySelectorAll(".letter"),document.addEventListener("keydown",(function(n){if(!C&&T.includes(n.key.toLowerCase())){if(!E.includes(n.key.toLowerCase())){w.forEach((t=>{t.textContent.toLowerCase()===n.key.toLowerCase()&&t.classList.add("buttons__btn_activate")}));let t=!1;I.toLowerCase().split("").forEach(((e,o)=>{if(e===n.key)H[o].textContent=e.toUpperCase(),M++,t=!0,E.push(n.key.toLowerCase());else if(o===I.length-1&&e!==n.key&&!1===t){S++;let e=S.toString();z.innerHTML=e,z.classList.add("incorrect-counter_active"),t=!1,E.push(n.key.toLowerCase()),y[S-1].classList.remove("hidden")}}))}M===I.length&&t(),6===S&&e()}})),_.addEventListener("click",(function(n){if(!E.includes(n.target.innerHTML.toLowerCase())&&"buttons__btn"==n.target.classList.value){w.forEach((t=>{t.textContent.toLowerCase()===n.target.innerHTML.toLowerCase()&&t.classList.add("buttons__btn_activate")}));let t=!1;I.toLowerCase().split("").forEach(((e,o)=>{if(e===n.target.innerHTML.toLowerCase())H[o].innerHTML=e.toUpperCase(),M++,t=!0,E.push(n.target.innerHTML.toLowerCase());else if(o===I.length-1&&e!==n.target.innerHTML.toLowerCase()&&!1===t){S++;let e=S.toString();z.innerHTML=e,z.classList.add("incorrect-counter_active"),t=!1,E.push(n.target.innerHTML.toLowerCase()),y[S-1].classList.remove("hidden")}}))}M===I.length&&(t(),M=0),6===S&&(e(),S=0)}))}k.addEventListener("click",(()=>{v.classList.add("hidden__modal"),document.body.classList.remove("scroll-hidden"),L.classList.remove("overlay_active"),C=!1,M=0,S=0,E=[],j=h(g.length),A===j&&(j=h(g.length)),H=document.querySelectorAll(".letter"),B()})),B()})()})();