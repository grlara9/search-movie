(this["webpackJsonpsearch-movie"]=this["webpackJsonpsearch-movie"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(29),s=c.n(a),r=(c(36),c(31)),o=c(8),l=c(10),j=c(19),d=(c(37),c(0)),b=function(e){return Object(d.jsx)("header",{className:"movie__header",children:e.children})},h=(c(39),function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),i=c[0],a=c[1],s=function(){a(!1)};return Object(d.jsxs)(b,{children:[Object(d.jsx)(l.b,{to:"/",className:"nav-logo",onClick:function(){return a(!1)},children:Object(d.jsx)("h2",{children:"Movie App"})}),Object(d.jsx)("div",{onClick:function(){a(!i)},className:"nav-icon",children:i?Object(d.jsx)(j.b,{}):Object(d.jsx)(j.a,{})}),Object(d.jsxs)("ul",{className:i?"nav-links active":"nav-links",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/",className:"nav-link",onClick:s,children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/favorites",className:"nav-link",onClick:s,children:"Favorites"})})]})]})}),v=c.p+"static/media/spinner.11d9cde8.gif",u=function(){return Object(d.jsx)("img",{src:v,style:{width:"200px",margin:"auto",display:"block"}})},m=(c(45),function(e){var t=e.movie,c=e.handleLikeClick,n=e.AddLike,i="N/A"===t.Poster?"https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg":t.Poster;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"movie__list",children:Object(d.jsxs)("div",{className:"movie",children:[Object(d.jsx)("h4",{children:t.Title}),t.id,Object(d.jsx)("img",{className:"movie__img",src:i}),Object(d.jsx)("div",{className:"overlay",onClick:function(){return c(t)},children:Object(d.jsx)(n,{})})]})})})}),O=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:"Like "}),Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",class:"bi bi-hand-thumbs-up",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"})})]})},x=(c(46),function(e){var t=e.movies,c=e.isLoading,n=(e.errorMsj,e.addLikeMovies);return c?Object(d.jsx)(u,{}):Object(d.jsx)("section",{className:"movies",children:t.map((function(e){return Object(d.jsx)(m,{movie:e,handleLikeClick:n,AddLike:O},e.id)}))})}),f=(c(47),function(e){var t=e.likes,c=e.handleRemoveClick,n=e.RemoveLike,i="N/A"===t.Poster?"https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg":t.Poster;return console.log("aSDF",t),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"favorite__list",children:Object(d.jsxs)("div",{className:"favorite",children:[Object(d.jsx)("h4",{children:t.Title}),Object(d.jsx)("img",{className:"favorite__img",src:i}),Object(d.jsx)("div",{className:"overlay",onClick:function(){return c(t)},children:Object(d.jsx)(n,{})})]})})})}),p=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:"Remove "}),Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",class:"bi bi-x-square",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(d.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},g=function(e){var t=e.favorites,c=e.loading,n=e.errorMsj,i=e.removeFavoriteMovie;return c&&!n?Object(d.jsx)(u,{}):n?Object(d.jsx)("div",{className:"error__msj",children:n}):Object(d.jsx)("section",{className:"movies",children:t.map((function(e){return Object(d.jsx)(f,{likes:e,handleRemoveClick:i,RemoveLike:p})}))})},k=c(2),w=(c(48),function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),i=c[0],a=c[1];console.log(i);return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){a(e.target.value)},placeholder:"Enter movie"}),Object(d.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),e.search(i)},children:"SEARCH"})]})}),N=(c(49),c(18)),C=c.n(N),L=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)([]),s=Object(o.a)(a,2),j=s[0],b=s[1],v=Object(n.useState)(!0),u=Object(o.a)(v,2),m=u[0],O=u[1];Object(n.useEffect)((function(){O(!0),C.a.get("https://www.omdbapi.com/?s=avengers&apikey=709d62e0").then((function(e){console.log("promise",e),i(e.data.Search),O(!1)})).catch((function(e){console.log("Error: ",e)}))}),[]);Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));b(e)}),[]);return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(w,{search:function(e){O(!0),C.a.get("https://www.omdbapi.com/?s=".concat(e,"&apikey=709d62e0")).then((function(e){i(e.data.Search),O(!1)})).catch((function(e){console.log("Error: ",e)}))}}),Object(d.jsxs)(k.c,{children:[Object(d.jsx)(k.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{movies:c,addLikeMovies:function(e){var t,c=[].concat(Object(r.a)(j),[e]);b(c),t=c,localStorage.setItem("react-movie-app-favourites",JSON.stringify(t))},isLoading:m})}),Object(d.jsx)(k.a,{path:"/favorites",children:Object(d.jsx)(g,{favorites:j,removeFavoriteMovie:function(e){var t=j.filter((function(t){return t.imdbID!==e.imdbID}));b(t)}})})]})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.0e7afa6f.chunk.js.map