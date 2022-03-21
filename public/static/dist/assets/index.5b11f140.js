import{v as e,l as d,u as x,y,d as k,s as I,R as A,a as v,B as C,b as U,f as S}from"./vendor.ed1f3d98.js";const R=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};R();function O(l){const{mediaSum:n}=l;return e("p",{className:"box-border absolute bottom-0 w-full h-full p-1 overflow-scroll text-center text-white bg-black opacity-0 hover:opacity-70"},n)}function H(l){const{userObj:n}=l,[t,o]=d([]),r=x();async function s(){const i=await fetch("/useranimelist",{credentials:"include"}),{savedAniList:u}=await i.json();console.log(u),o(u)}function a(i){for(let u=0;u<t.length;u+=1)if(t[u].id===i)return u;return!1}async function g(i){const u={aniId:parseInt(i.target.dataset.mediaId,10)};console.log(typeof i.target.dataset.mediaId),await fetch("/remAnime",{headers:{"Content-Type":"application/json"},method:"POST",credentials:"include",body:JSON.stringify(u)});const b=a(u.aniId);if(console.log(b),b){const h=t.slice();h.splice(b,1),console.log(h),o(h)}}function p(i){r(i.target.dataset.ref)}return y(()=>{n.loggedIn&&(console.log(n),s())},[n]),n.loggedIn?e(k,null,e("div",{className:"grid grid-cols-[minmax(0,7fr),minmax(125px,1fr)] py-[5vh] px-[10vw] "},e("div",{className:"overflow-hidden text-xl text-center text-gray-600"},"Your Anime List"),e("div",{className:"p-1 overflow-hidden overflow-ellipsis justify-self-end"},n.userName)),e("div",{className:"py-[5vh] px-[10vw] m-2 justify-around grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))]  box-border  gap-8"},e("div",{className:"box-border grid grid-rows-[min-content] items-center bg-primary-600 text-primary-300 shadow-xl rounded-lg overflow-hidden relative self-center justify-self-center"},e("p",{className:"box-border block w-full h-full min-w-[125px] min-h-[125px] text-center"},e("p",{className:"absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"},"\u253C")),e("p",{className:"box-border absolute bottom-0 flex items-center justify-center w-full h-full p-1 overflow-scroll text-center text-white bg-black opacity-0 hover:opacity-70 focus:opacity-70"},e("button",{className:"box-border block w-full h-full",type:"button","data-ref":"/animesearch",onClick:p},"Add Anime"))),t.map(i=>e("div",{key:i.id,className:"box-border grid grid-rows-[min-content,auto,min-content] items-center bg-white shadow-xl rounded-lg overflow-hidden"},e("div",{className:"box-border relative w-full h-auto"},e("img",{src:i.coverImage.extraLarge,alt:"Anime Cover",className:"object-cover w-full"}),e(O,{mediaSum:i.description})),e("h3",{className:"m-1 text-center"},i.title.romaji),e("button",{type:"button",className:"box-border self-end p-1 text-white bg-red-600 border-2 border-red-700 rounded-lg",onClick:g,"data-media-id":i.id},"Remove from list"))))):e("div",null)}function J(l){const n=x(),{userObj:t}=l;if(t.loggedIn)return e("div",null);function o(r){n(r.target.dataset.ref)}return e("div",{className:"flex flex-col items-center justify-center px-20 pt-52"},e("div",{className:"flex flex-col items-center justify-center"},e("button",{type:"button","data-ref":"/login",onClick:o,className:"block px-1 m-4 text-center text-white rounded shadow-md justify-self-center bg-cyan-600 w-[158px] py-0.5"},"Login"),e("button",{type:"button","data-ref":"/register",onClick:o,className:"block px-1 m-4 text-center text-white rounded shadow-md justify-self-center bg-cyan-600 w-[158px] py-0.5"},"Register")))}function T(l){const n=x(),{userObj:t}=l;function o(){n("/login")}function r(){fetch("/logout").then(s=>s.json()).then(s=>{s.loggedIn===!1&&window.location.reload()}).catch(s=>{console.log(s)})}return t.loggedIn?e("div",{className:"box-border flex flex-col items-center justify-center p-1 border-l-4 border-cyan-300 "},e("p",{className:"inline-block px-4 py-1 text-center"},t.userName),e("button",{type:"button",className:"px-1 text-white rounded bg-cyan-600",onClick:r},"logout")):e("div",{className:"box-border flex flex-col items-center justify-center p-1 border-l-4 border-cyan-300"},e("p",{className:"inline-block px-4 py-1 text-center"},"Not logged in"),e("button",{type:"button",className:"px-1 text-white rounded bg-cyan-600",onClick:o},"login"))}function B(l){const{retUser:n}=l,t=x();function o(r){t(r.target.dataset.ref)}return e("div",{className:"grid grid-cols-[repeat(5,1fr)] items-center justify-center bg-primary-400 mb-3 ]"},e("div",{className:"h-full"},e("button",{type:"button","data-ref":"/",className:"box-border w-full h-full text-center text-blue-700 border-r-4 hover:text-blue-600 border-cyan-300",onClick:o},"Home")),e("div",{className:"h-full"},e("button",{type:"button","data-ref":"/about",className:"box-border w-full h-full text-center border-l-4 border-r-4 hover:text-blue-600 border-cyan-300",onClick:o},"About")),e("div",{className:"h-full"},e("button",{type:"button",className:"box-border w-full h-full text-center border-l-4 border-r-4 hover:text-blue-600 border-cyan-300","data-ref":"/animesearch",onClick:o},"Search Anime")),e("div",{className:"h-full"},e("button",{type:"button",className:"box-border w-full h-full text-center border-l-4 border-r-4 hover:text-blue-600 border-cyan-300","data-ref":"/notelist",onClick:o},"Notelist")),e("div",{className:"h-full"},e(T,{userObj:n})))}function L(){const[l,n]=d({loggedIn:!1,userName:"Stranger"});return y(()=>{async function t(){const r=await(await fetch("/user",{credentials:"include"})).json();n(r)}t()},[]),e("div",{className:"min-h-[100vh] bg-gradient-to-t from-primary-600 via-purple-300 to-red-300"},e(B,{retUser:l}),e("div",null,e("div",null,e(J,{userObj:l})),e("div",null,e(H,{userObj:l}))))}var E="/assets/samurai.38b1a363.png";function P(){const[l,n]=d(""),[t,o]=d(""),r=x();async function s(){const a={uname:l,pw:t},p=await(await fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();console.log(p),r("/")}return e("div",{spellCheck:"false",className:"relative flex flex-col items-center justify-center h-screen overflow-hidden"},e("img",{src:E,alt:"samurai with sword",className:"absolute top-0 left-0 z-10 object-cover"}),e("div",{className:"relative z-20 flex flex-col items-center justify-center w-min"},e("input",{className:"box-border block px-1 mb-2 text-center border-2 border-green-500 rounded justify-self-center focus:border-green-700 focus:outline-none py-0.5",placeholder:"User Name",value:l,onChange:a=>n(a.target.value)}),e("input",{className:"box-border block px-1 mt-2 mb-4 text-center border-2 border-green-500 rounded justify-self-center focus:border-green-700 focus:outline-none py-0.5",placeholder:"Password",value:t,onChange:a=>o(a.target.value)}),e("button",{type:"button",className:"w-full text-center bg-blue-300 rounded border-2 border-blue-400  py-0.5 box-border",onClick:s},"Register")))}function D(l){const{mediaSum:n}=l;return e("p",{className:"box-border absolute bottom-0 w-full h-full p-1 overflow-scroll text-center text-white bg-black opacity-0 hover:opacity-70"},n)}function M(l){const{mediaBtn:n}=l,{userMedIdList:t}=l,{btnUser:o}=l,[r,s]=d(t.includes(n.id));async function a(){await fetch("/addAnime",{headers:{"Content-Type":"application/json"},method:"POST",credentials:"include",body:JSON.stringify(n)}),s(!0)}async function g(){const p={aniId:n.id};await fetch("/remAnime",{headers:{"Content-Type":"application/json"},method:"POST",credentials:"include",body:JSON.stringify(p)}),s(!1)}return o.loggedIn?r?e("button",{type:"button","data-media":JSON.stringify(n),className:"box-border self-end p-1 text-white bg-red-600 border-2 border-red-700 rounded-lg",onClick:g},"Remove from List"):e("button",{type:"button","data-media":JSON.stringify(n),className:"box-border self-end p-1 text-white bg-blue-700 border-2 border-blue-600 rounded-lg",onClick:a},"Add To List"):e(k,null)}function Z(l){const{userObj:n}=l,{resData:t}=l,{renderBool:o}=l,[r,s]=d([]);if(y(()=>{n.loggedIn&&fetch("/useranimelist",{credentials:"include"}).then(a=>a.json()).then(a=>{if(a.savedAniList.length){const g=a.savedAniList.map(p=>p.id);console.log(g),s(g)}})},[n.loggedIn]),!o)return e("div",null);if(o&&t.Page.pageInfo.currentPage)return t.Page.media.length===0?e("div",{className:"box-border p-2 m-2 text-center text-red-700 bg-red-100"},"No such anime found"):e("div",{className:"p-2 m-2 justify-around grid grid-cols-[repeat(auto-fill,minmax(125px,1fr))]  box-border  gap-8"},t.Page.media.map(a=>e("div",{key:a.id,className:"box-border grid grid-rows-[min-content,auto,auto] items-center bg-white shadow-xl shadow-white/50 rounded-lg overflow-hidden "},e("div",{className:"box-border relative w-full h-auto"},e("img",{src:a.coverImage.extraLarge,alt:"Anime Cover",className:"object-cover w-full"}),e(D,{mediaSum:a.description})),e("h3",{className:"m-1 text-center"},a.title.romaji),e(M,{mediaBtn:a,userMedIdList:r,btnUser:n}))))}function G(l){const n=x(),{userObj:t}=l;function o(){n("/login")}function r(){fetch("/logout").then(s=>s.json()).then(s=>{s.loggedIn===!1&&n("/")}).catch(s=>{console.log(s)})}return t.loggedIn?e("div",{className:"box-border flex flex-col items-center justify-center p-1 border-l-4  border-cyan-300"},e("p",{className:"inline-block px-4 py-1 text-center"},t.userName),e("button",{type:"button",className:"px-1 text-white rounded bg-cyan-600",onClick:r},"logout")):e("div",{className:"box-border flex flex-col items-center justify-center p-1 border-l-4 border-cyan-300"},e("p",{className:"inline-block px-4 py-1 text-center"},"Not logged in"),e("button",{type:"button",className:"px-1 text-white rounded bg-cyan-600",onClick:o},"login"))}function W(l){const{retUser:n}=l,t=x();function o(r){t(r.target.dataset.ref)}return e("div",{className:"grid grid-cols-[repeat(5,1fr)] items-center justify-center bg-primary-400 w-[100vw]"},e("div",{className:"h-full"},e("button",{type:"button","data-ref":"/",className:"box-border w-full h-full text-center border-r-4 hover:text-blue-600 border-cyan-300",onClick:o},"Home")),e("div",{className:"h-full"},e("button",{type:"button","data-ref":"/about",className:"box-border w-full h-full text-center border-l-4 border-r-4 hover:text-blue-600 border-cyan-300",onClick:o},"About")),e("div",{className:"h-full"},e("button",{type:"button",className:"box-border w-full h-full text-center text-blue-700 border-l-4 border-r-4 hover:text-blue-600 border-cyan-300","data-ref":"/animesearch",onClick:o},"Search Anime")),e("div",{className:"h-full"},e("button",{type:"button",className:"box-border w-full h-full text-center border-l-4 border-r-4 hover:text-blue-600 border-cyan-300","data-ref":"/notelist",onClick:o},"Notelist")),e("div",{className:"h-full"},e(G,{userObj:n})))}var F="/assets/manlost.c0aafef5.jpg";function z(){const[l,n]=d({loggedIn:!1,userName:"Stranger"}),[t,o]=d(""),[r,s]=d({}),[a,g]=d(!1);function p(b){o(b.target.value)}y(()=>{async function b(){const w=await(await fetch("/user",{credentials:"include"})).json();n(w)}b()},[]),y(()=>{r.data&&g(!0)},[r]);async function i(){const b=`
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total  
          currentPage   
          lastPage   
          hasNextPage   
          perPage   
        }
        media (id: $id, search: $search, type: ANIME, sort: POPULARITY_DESC) {
          id 
          title {
            romaji 
            english
          }  
          description  
          genres   
          episodes 
          duration 
          coverImage { 
            extraLarge 
            
          }
        }
      }
    }
    `,h={search:t,page:1,perPage:50},w="https://graphql.anilist.co",c={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:b,variables:h})},m=await(await fetch(w,c)).json();s(m)}async function u(b){b.key==="Enter"&&(b.target.blur(),document.getElementById("searchBtn").click())}return e("div",{className:"flex flex-col h-screen"},e(W,{retUser:l}),e("div",{className:"relative h-[100vh] bg-black overflow-y-scroll"},e("img",{src:F,alt:"background of shadow of a man by a tree and direction sign",className:"absolute top-0 left-0 z-20 object-cover w-full h-full"}),e("div",{className:"relative z-30 p-16",spellCheck:"false"},e("div",{className:"flex flex-col items-center justify-center p-10 m-5"},e("input",{type:"text",className:"px-1 m-1 font-sans text-center text-purple-700 border-2 border-purple-500 rounded-md focus:outline-none",value:t,placeholder:"Type what to search for",onChange:p,onKeyUp:u,required:!0}),e("button",{type:"button",id:"searchBtn",className:"px-2 py-1 m-1 text-white bg-purple-600 rounded-md ",onClick:i},"Search")),e(Z,{resData:r.data,renderBool:a,userObj:l}))))}var Y="/assets/samurai.38b1a363.png";function V(){const[l,n]=d(""),[t,o]=d(""),r=x();async function s(){const a={uname:l,pw:t},g=await fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",redirect:"follow",body:JSON.stringify(a)});console.log(typeof g),r("/")}return e("div",{spellCheck:"false",className:"relative flex flex-col items-center justify-center h-screen overflow-hidden"},e("img",{src:Y,alt:"samurai with sword",className:"absolute top-0 left-0 z-10 object-cover"}),e("div",{className:"relative z-20 flex flex-col items-center justify-center w-min"},e("input",{className:"box-border block px-1 mb-2 text-center border-2 border-green-500 rounded justify-self-center focus:border-green-700 focus:outline-none py-0.5",placeholder:"User Name",value:l,onChange:a=>n(a.target.value)}),e("input",{className:"box-border block px-1 mt-2 mb-4 text-center border-2 border-green-500 rounded justify-self-center focus:border-green-700 focus:outline-none py-0.5",placeholder:"Password",value:t,onChange:a=>o(a.target.value)}),e("button",{type:"button",className:"w-full text-center bg-blue-300 rounded border-2 border-blue-400  py-0.5 box-border shadow-md",onClick:s},"Login")))}function Q(l){const n=x(),{userObj:t}=l;function o(){n("/login")}function r(){fetch("/logout").then(s=>s.json()).then(s=>{s.loggedIn===!1&&n("/")}).catch(s=>{console.log(s)})}return t.loggedIn?e("div",{className:"box-border flex flex-col items-center justify-center p-1 border-l-4 border-cyan-300 "},e("p",{className:"inline-block px-4 py-1 text-center"},t.userName),e("button",{type:"button",className:"px-1 text-white rounded bg-cyan-600",onClick:r},"logout")):e("div",{className:"box-border flex flex-col items-center justify-center p-1 border-l-4 border-cyan-300"},e("p",{className:"inline-block px-4 py-1 text-center"},"Not logged in"),e("button",{type:"button",className:"px-1 text-white rounded bg-cyan-600",onClick:o},"login"))}function X(l){const{retUser:n}=l,t=x();function o(r){t(r.target.dataset.ref)}return e("div",{className:"grid grid-cols-[repeat(5,1fr)] items-center justify-center bg-primary-400 ]"},e("div",{className:"h-full"},e("button",{type:"button","data-ref":"/",className:"box-border w-full h-full text-center border-r-4 hover:text-blue-600 border-cyan-300",onClick:o},"Home")),e("div",{className:"h-full"},e("button",{type:"button","data-ref":"/about",className:"box-border w-full h-full text-center text-blue-700 border-l-4 border-r-4 hover:text-blue-600 border-cyan-300",onClick:o},"About")),e("div",{className:"h-full"},e("button",{type:"button",className:"box-border w-full h-full text-center border-l-4 border-r-4 hover:text-blue-600 border-cyan-300","data-ref":"/animesearch",onClick:o},"Search Anime")),e("div",{className:"h-full"},e("button",{type:"button",className:"box-border w-full h-full text-center border-l-4 border-r-4 hover:text-blue-600 border-cyan-300","data-ref":"/notelist",onClick:o},"Notelist")),e("div",{className:"h-full"},e(Q,{userObj:n})))}var K="/assets/samuraibg.11d7bc9f.png",q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=";function $(){const[l,n]=d({loggedIn:!1,userName:"Guest"});return y(()=>{fetch("/user",{credentials:"include"}).then(t=>t.json()).then(t=>n(t)).catch()},[]),e("div",{className:"flex flex-col h-screen"},e(X,{retUser:l}),e("div",{className:"flex flex-col items-center justify-center text-center relative h-[100vh]"},e("img",{src:K,alt:"samurai background",className:"absolute top-0 left-0 z-20 object-cover object-center w-full h-full"}),e("a",{href:"https://github.com/neonPebble",className:"absolute z-40 right-[5vw] top-3"},e("img",{src:q,alt:"gitHub symbol"})),e("div",{className:"z-30 flex items-center justify-center w-full h-full text-center text-white bg-primary-600/50"},e("p",{className:"text-center "},"Search for anime by title and save to your list.",e("br",null)," Create and save notes for later"))))}function j(l){const{noteContent:n}=l;return e("p",{className:"self-center block w-full px-4 py-1 text-center"},n.text)}function _(l){const n=x(),{userObj:t}=l;function o(){n("/login")}function r(){fetch("/logout").then(s=>s.json()).then(s=>{s.loggedIn===!1&&n("/")}).catch(s=>{console.log(s)})}return t.loggedIn?e("div",{className:"box-border flex flex-col items-center justify-center p-1 border-l-4 border-cyan-300 "},e("p",{className:"inline-block px-4 py-1 text-center"},t.userName),e("button",{type:"button",className:"px-1 text-white rounded bg-cyan-600",onClick:r},"logout")):e("div",{className:"box-border flex flex-col items-center justify-center p-1 border-l-4 border-cyan-300"},e("p",{className:"inline-block px-4 py-1 text-center"},"Not logged in"),e("button",{type:"button",className:"px-1 text-white rounded bg-cyan-600",onClick:o},"login"))}function ee(l){const{retUser:n}=l,t=x();function o(r){t(r.target.dataset.ref)}return e("div",{className:"grid grid-cols-[repeat(5,1fr)] items-center justify-center bg-primary-400 ]"},e("div",{className:"h-full"},e("button",{type:"button","data-ref":"/",className:"box-border w-full h-full text-center border-r-4 hover:text-blue-600 border-cyan-300",onClick:o},"Home")),e("div",{className:"h-full"},e("button",{type:"button","data-ref":"/about",className:"box-border w-full h-full text-center border-l-4 border-r-4 hover:text-blue-600 border-cyan-300",onClick:o},"About")),e("div",{className:"h-full"},e("button",{type:"button",className:"box-border w-full h-full text-center border-l-4 border-r-4 hover:text-blue-600 border-cyan-300","data-ref":"/animesearch",onClick:o},"Search Anime")),e("div",{className:"h-full"},e("button",{type:"button",className:"box-border w-full h-full text-center text-blue-700 border-l-4 border-r-4 hover:text-blue-600 border-cyan-300","data-ref":"/notelist",onClick:o},"Notelist")),e("div",{className:"h-full"},e(_,{userObj:n})))}function te(){const[l,n]=d(""),[t,o]=d([]),[r,s]=d({loggedIn:!1,userName:"Guest"}),a=I(!1);async function g(){const f=await(await fetch("/getnotelist",{credentials:"include"})).json();o(f.userNoteList)}function p(c,f){for(let m=0;m<f.length;m+=1)if(f[m].index===c)return m;return!1}y(()=>{fetch("/user",{credentials:"include"}).then(c=>c.json()).then(c=>{c.loggedIn&&s(c)}).catch()},[]),y(()=>{r.loggedIn&&g()},[r]),y(()=>{async function c(){try{await(await fetch("/updatenotelist",{headers:{"Content-Type":"application/json"},method:"POST",credentials:"include",body:JSON.stringify(t)})).json()}catch{}}a.current&&r.loggedIn&&c(),a.current=!1},[t,r.loggedIn]);async function i(){const c=t.slice();c.push({text:l,checked:!1,index:t.length?t[t.length-1].index+1:0}),a.current=!0,o(c),n("")}async function u(c){const f=parseInt(c,10),m=t.slice(),N=p(f,m);m.splice(N,1,{text:t[N].text,checked:!t[N].checked,index:N}),a.current=!0,o(m)}async function b(c){c.key==="Enter"&&document.getElementById("createNoteBtn").click()}async function h(c){const f=parseInt(c.target.parentElement.parentElement.dataset.indexNumber,10),m=t.slice(),N=p(f,m);m.splice(N,1),a.current=!0,o(m)}const w=t.slice().reverse().map(c=>c.checked?e("div",{key:c.index,"data-index-number":c.index,className:"flex flex-col items-center justify-center w-full p-1 m-1.5 bg-opacity-60 rounded-lg bg-red-300"},e(j,{noteContent:c}),e("div",{className:"flex justify-center p-0.5"},e("button",{type:"button",className:"self-center px-2 py-1 m-1 rounded bg-cyan-300",onClick:f=>{u(f.target.parentElement.parentElement.getAttribute("data-index-number"))}},"undo"),e("button",{type:"button",className:"px-1 py-0.5 border-1 bg-cyan-300 self-center rounded m-1",onClick:h},"Delete"))):e("div",{key:c.index,"data-index-number":c.index,className:"flex flex-col items-center justify-center w-full p-2 m-1.5 bg-opacity-50 border-opacity-50 rounded-lg bg-primary-400"},e(j,{noteContent:c}),e("div",{className:"flex justify-center p-0.5"},e("button",{type:"button",className:"px-1 py-0.5 border-1 bg-cyan-300 self-center rounded m-1",onClick:f=>{u(f.target.parentElement.parentElement.getAttribute("data-index-number"))}},"Done"),e("button",{type:"button",className:"px-1 py-0.5 border-1 bg-cyan-300 self-center rounded m-1",onClick:h},"Delete"))));return e("div",{id:"preact_root",className:"flex flex-col min-h-screen bg-gradient-to-t from-primary-600 to-red-300"},e(ee,{retUser:r}),e("div",{className:"flex flex-col items-center justify-center px-5 pt-5 pb-0"},e("h1",{className:"font-sans text-2xl text-center"},"Your Note list")),e("div",{className:"flex flex-col items-center"},e("div",{className:"flex justify-center pt-3 "},e("input",{className:"px-1 m-2 rounded-sm justify-self-center focus:outline-none focus:shadow-inner",value:l,onChange:c=>n(c.target.value),onKeyUp:b}),e("button",{type:"button",onClick:i,className:"px-1 rounded bg-cyan-300 border-1 border-cyan-700",id:"createNoteBtn"},"Create")),e("div",{className:"flex flex-col justify-center items-center p-2 w-full max-w-[30cm]"},w)))}function ne(){return e(C,null,e(A,null,e(v,{path:"/",element:e(L,null)}),e(v,{path:"/about",element:e($,null)}),e(v,{path:"/register",element:e(P,null)}),e(v,{path:"/animesearch",element:e(z,null)}),e(v,{path:"/login",element:e(V,null)}),e(v,{path:"/notelist",element:e(te,null)})))}U(e(S,null,e(ne,null)),document.getElementById("app"));
