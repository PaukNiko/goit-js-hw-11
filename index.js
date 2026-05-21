import{a as m,S as p,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="55960167-e523c3424fe4b885fc3ac8e74",h="https://pixabay.com/api/";function y(i){const r=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return m.get(`${h}?${r}`).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${n}</p>
            <p><b>Comments</b> ${f}</p>
            <p><b>Downloads</b> ${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function P(){l.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",$);function $(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(r===""){a.warning({message:"Please fill in the search field!",position:"topRight"});return}S(),w(),y(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.log(o)}).finally(()=>{P(),u.reset()})}
//# sourceMappingURL=index.js.map
