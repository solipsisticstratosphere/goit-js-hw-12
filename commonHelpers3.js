import"./assets/styles-a3b4b318.js";import{a as u,S as y,i as c}from"./assets/vendor-ee72e1a4.js";const p=async(t,e,n)=>{const a=await u.get("https://pixabay.com/api/?key=44687559-d8ede6072036f50d72c2e92ab",{params:{q:t,image_type:"photo",pretty:"true",orientation:"horizontal",safesearch:"true",page:e,per_page:n}});if(a.status!==200)throw new Error(a.status);return a.data},f=(t,e)=>{const n=t.hits.map(s=>`<li class="card gallery-item">
        <a href="${s.largeImageURL}"><img
          src="${s.webformatURL}"
          alt="${s.tags}"
          class="search-pic gallery-image"
        />
        </a>
        <ul class="description">
          <li><a>Likes</a> <a>${s.likes}</a></li>
          <li><a>Views</a> <a>${s.views}</a></li>
          <li><a>Comments</a> <a>${s.comments}</a></li>
          <li><a>Downloads</a> <a>${s.downloads}</a></li>
        </ul>
      </li>`).join("");e.insertAdjacentHTML("beforeend",n),console.log("Images added to list:",e.querySelectorAll(".gallery-item").length);let a=new y(".search-list a",{captionsData:"alt",captionDelay:250});a.on("show.simplelightbox",function(s){s.preventDefault()}),a.refresh()},b=document.querySelector(".form-search"),v=document.querySelector("input[name=search]"),d=document.querySelector(".search-list"),o=document.querySelector(".load-more"),l=document.querySelector(".loader");let h="",r=1;const m=15;let i=0;const g=(t=!1)=>{t&&(r=1,i=0,d.innerHTML="",o.classList.add("hidden")),l.style.visibility="visible",l.style.opacity="1",p(h,r,m).then(e=>{e.hits.length===0?(c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),o.classList.add("hidden")):(f(e,d),i=e.totalHits,console.log("Total Hits:",i),r*m>=i?(o.classList.add("hidden"),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(o.classList.remove("hidden"),setTimeout(w,100)))}).catch(e=>console.log(e)).finally(()=>{l.style.visibility="hidden",l.style.opacity="0"})},w=()=>{const t=document.querySelector(".gallery-image");if(t){const e=t.getBoundingClientRect().height;e>0?window.scrollBy({top:e*2,behavior:"smooth"}):console.log("222")}else console.log("No gallery items found")};b.addEventListener("submit",t=>{t.preventDefault(),h=v.value,g(!0)});o.addEventListener("click",()=>{r+=1,g()});
//# sourceMappingURL=commonHelpers3.js.map
