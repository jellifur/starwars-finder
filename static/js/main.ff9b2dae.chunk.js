(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){e.exports={background:"styles_background__2bFrJ",search:"styles_search__1CSoC",searchContainer:"styles_searchContainer__3uaua",searchHeader:"styles_searchHeader__Mu8iB",title:"styles_title__1Dqy1",appDescription:"styles_appDescription__cbEik",searchBox:"styles_searchBox__LZJFk",characters:"styles_characters__12x_w",navBtn:"styles_navBtn__zhvfh",navBtns:"styles_navBtns__KWbTr"}},11:function(e,a,t){e.exports=t(22)},17:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),s=t.n(c),l=(t(17),t(2)),o=t(3),i=t(5),u=t(4),h=t(6),m=t(8),p=t.n(m),v=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.value,t=e.onChange,n=e.onSubmit;return r.a.createElement("form",{className:p.a.searchInput},r.a.createElement("input",{type:"text",onChange:t,value:a}),r.a.createElement("button",{type:"submit",className:p.a.searchBtn,onClick:n},r.a.createElement("img",{src:"/assets/search.svg",alt:"Search"})))}}]),a}(n.Component);v.defaultProps={value:"",onSubmit:function(){}};var _=v,d=t(7),b=t.n(d),f=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=(e.onClick,e.imageUrl);return r.a.createElement("div",{className:b.a.characterCard},t&&t.length>0&&r.a.createElement("img",{className:b.a.charImage,src:t}),a&&a.length>0&&r.a.createElement("div",{className:b.a.labelContainer},r.a.createElement("div",{className:b.a.label},a)))}}]),a}(n.Component);f.defaultProps={name:"",onClick:function(){}};var y=f,E=t(1),g=t.n(E),C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={searchValue:"",characters:[],nextUrl:void 0,prevUrl:void 0},t.handleSearchChange=function(e){return t.setState({searchValue:e.target.value})},t.handleSubmit=function(e){var a=t.state.searchValue;e.preventDefault(),a&&a.length>0&&t.fetchUrl("https://swapi.co/api/people/?search=".concat(a))},t.fetchUrl=function(e){e&&fetch(e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){if(e){var a=e.next?e.next:void 0,n=e.previous?e.previous:void 0;return t.setState({characters:e.results,prevUrl:n,nextUrl:a})}})},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,a=this.state,t=a.searchValue,n=a.characters,c=a.prevUrl,s=a.nextUrl;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:g.a.background}),r.a.createElement("div",{className:g.a.search},r.a.createElement("div",{className:g.a.searchContainer},r.a.createElement("header",{className:g.a.searchHeader},r.a.createElement("h1",{className:g.a.title},"Star Wars Characters"),r.a.createElement("p",{className:g.a.appDescription},"You can search for any Star Wars character. ",r.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing. ",r.a.createElement("br",null),"Sed ut perspiciatis unde omnis iste natus.")),r.a.createElement("div",{className:g.a.searchBox},r.a.createElement(_,{value:t,onChange:this.handleSearchChange,onSubmit:this.handleSubmit})),r.a.createElement("div",{className:g.a.characters},n.map(function(e){return r.a.createElement(y,{name:e.name,key:e.url})})),r.a.createElement("div",{className:g.a.navBtns},c&&r.a.createElement("button",{className:g.a.navBtn,onClick:function(){return e.fetchUrl(c)}},"<< Prev"),s&&r.a.createElement("button",{className:g.a.navBtn,onClick:function(){return e.fetchUrl(s)}},"Next >>")))))}}]),a}(n.Component),j=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,t){e.exports={characterCard:"styles_characterCard__2QoBh",charImage:"styles_charImage__1IJ0i",labelContainer:"styles_labelContainer__zqb1g",label:"styles_label__1OVfm"}},8:function(e,a,t){e.exports={searchInput:"styles_searchInput__1NR-o",searchBtn:"styles_searchBtn__1FvTu"}}},[[11,2,1]]]);
//# sourceMappingURL=main.ff9b2dae.chunk.js.map