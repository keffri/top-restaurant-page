(()=>{"use strict";function e(e,t,n,d){const i=document.createElement(e);return i.setAttribute("id",t),i.setAttribute("class",n),i.textContent=d,i}function t(e,t,n){const d=document.createElement("div");d.classList.add("menuItem");const i=document.createElement("img");i.classList.add("itemImage"),i.setAttribute("src",e),i.setAttribute("alt",t);const s=document.createElement("p");return s.classList.add("itemText"),s.textContent=n,d.appendChild(i),d.appendChild(s),d}!function(){const n=document.getElementById("content"),d=function(e,t){const n=document.createElement("div");return n.setAttribute("id","menuContainer"),n}(),i=function(t,n){const d=document.createElement(t);d.setAttribute("id",n);const i=function(e,t){const n=document.createElement("nav");return n.setAttribute("id","nav"),n}(),s=e("button","home","btn","Home"),a=e("button","menu","btn","Menu"),o=e("button","info","btn","Info");return d.appendChild(i),i.appendChild(s),i.appendChild(a),i.appendChild(o),d}("header","header"),s=function(e,t){const n=document.createElement("div");n.setAttribute("id","menuMain");const d=document.createElement("div");d.setAttribute("id","menuTextContainer");const i=document.createElement("h1");return i.setAttribute("id","menuTitle"),i.textContent="Menu",d.appendChild(i),n.appendChild(d),n}(),a=function(e,t){const n=document.createElement("div");return n.setAttribute("id","menuItemsContainer"),n}(),o=t("/dist/images/coffee.jpeg","coffee","Coffee"),c=t("/dist/images/icedCoffee.jpeg","icedCoffee","Iced Coffee"),u=t("/dist/images/espresso.jpeg","espresso","Espresso"),r=t("/dist/images/latte.jpeg","latte","Latte"),l=t("/dist/images/breakfastBagel.jpeg","breakfastBagel","Breakfast Bagel"),p=t("/dist/images/donutHoles.jpeg","donutHoles","Donut Holes"),m=function(e,t){const n=document.createElement(e);n.setAttribute("id",t);const d=function(e,t){let n=document.createElement("a");return n.setAttribute("href","https://www.github.com/keffri"),n.setAttribute("target","_blank"),n}(),i=function(e,...t){const n=document.createElement(e);return n.classList.add(t[0]),n.classList.add(t[1]),n.classList.add(t[2]),n.classList.add(t[3]),n}("i","footer-icon","fab","fa-github-square","fa-2x");return n.appendChild(d),d.appendChild(i),n}("footer","footer");d.appendChild(i),d.appendChild(s),s.appendChild(a),a.appendChild(o),a.appendChild(c),a.appendChild(u),a.appendChild(r),a.appendChild(l),a.appendChild(p),d.appendChild(m),n.appendChild(d)}()})();