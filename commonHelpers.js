import{S as f,i as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="42471453-a4a004408e33f852748a0909e",d="https://pixabay.com/api/";function h(o){const e=`${d}?key=${g}&q=${o}&image_type=photo&orientation=horizontal&safesearch=${!0}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(`Problem ${t.status}`);return t.json()})}function y(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:m})=>`<li class="image-search">
        <a href="${i}">
        <img class="gallery-img" src="${s}" alt="${e}"/>
        </a>
        <ul class="img-info">
          <li class="img-items">
            <p class="img-value"><span class="img-subtitle">Likes</span>${t}</p>
            <p class="img-value"><span class="img-subtitle">Views</span>${a}</p>
            <p class="img-value"><span class="img-subtitle">Comments</span>${u}</p>
            <p class="img-value"><span class="img-subtitle">Downloads</span>${m}</p>
          </li>
        </ul>
      </li>`).join("");l.innerHTML=r}const b="/goit-js-hw-11/assets/error-1e41ecdc.svg",l=document.querySelector(".gallery-list"),L=document.querySelector("input"),c=document.querySelector("form"),n=document.querySelector(".form-container div"),$=new f(".gallery-list a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",S);function S(o){o.preventDefault(),l.innerHTML="";const r=L.value.trim();r!==""&&(n.classList.add("loader"),h(r).then(s=>{if(s.total===0){p.error({iconUrl:b,messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"});return}y(s.hits),$.refresh()}).catch(s=>{console.error("Error fetching data:",s)}).finally(()=>{n.classList.remove("loader")}),c.reset())}
//# sourceMappingURL=commonHelpers.js.map
