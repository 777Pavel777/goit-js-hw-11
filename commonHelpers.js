import{i as f,S as g}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function d(){const i="42471453-a4a004408e33f852748a0909e",r="https://pixabay.com/api/",a=c.value,s=`${r}?key=${i}&q=${a}&image_type=photo&orientation=horizontal&safesearch=${!0}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(`Problem ${o.status}`);return o.json()}).catch(o=>{console.log(o)})}function h(i){const r=i.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:s,comments:o,downloads:p})=>`<li class="image-search">
        <a href="${n}">
        <img class="gallery-img" src="${a}" alt="${e}"/>
        </a>
        <ul class="img-info">
          <li class="img-items">
            <p class="img-value"><span class="img-subtitle">Likes</span>${t}</p>
            <p class="img-value"><span class="img-subtitle">Views</span>${s}</p>
            <p class="img-value"><span class="img-subtitle">Comments</span>${o}</p>
            <p class="img-value"><span class="img-subtitle">Downloads</span>${p}</p>
          </li>
        </ul>
      </li>`).join("");l.innerHTML=r,m.classList.remove("loader")}const y="/goit-js-hw-11/assets/error-1e41ecdc.svg",l=document.querySelector(".gallery-list"),c=document.querySelector("input"),u=document.querySelector("form"),m=document.querySelector(".form-container div");u.addEventListener("submit",b);function b(i){i.preventDefault(),l.innerHTML="",c.value.trim()!==""&&(m.classList.add("loader"),d().then(r=>{r.total===0&&f.error({iconUrl:y,messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"}),h(r.hits),new g(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}),u.reset())}
//# sourceMappingURL=commonHelpers.js.map
