(()=>{var e={7804:(e,t,r)=>{"use strict";r(6992),r(8674),r(9601),r(7727);var a=r(5010),i=r(3396),n={class:"header"},o=(0,i.Uk)(" Ukraine War Memes "),s=(0,i.Uk)(" | "),c=(0,i.Uk)(" Life calendar "),p={id:"Layer_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 477.427 477.427",style:{"enable-background":"new 0 0 477.427 477.427"},"xml:space":"preserve"},u=(0,i._)("g",null,[(0,i._)("polygon",{points:"101.82,187.52 57.673,143.372 476.213,143.372 476.213,113.372 57.181,113.372 101.82,68.733 80.607,47.519\n              0,128.126 80.607,208.733 \t"}),(0,i._)("polygon",{id:"second",points:"396.82,268.694 375.607,289.907 420,334.301 1.213,334.301 1.213,364.301 420,364.301 375.607,408.694\n              396.82,429.907 477.427,349.301 \t"})],-1),l=[u];function d(e,t,r,a,u,d){var g=(0,i.up)("router-link"),m=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("nav",null,[(0,i.Wm)(g,{to:"/"},{default:(0,i.w5)((function(){return[o]})),_:1}),s,(0,i.Wm)(g,{to:"/life-calendar"},{default:(0,i.w5)((function(){return[c]})),_:1}),"/"===a.route.path?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"rotate-icon",onClick:t[0]||(t[0]=function(){return a.changeEventsDirection&&a.changeEventsDirection.apply(a,arguments)})},[((0,i.wg)(),(0,i.iD)("svg",p,l))])):(0,i.kq)("",!0)]),(0,i.Wm)(m)])}var g=r(4870),m=r(2483);const v={name:"HistiryOfUkrainianWarMemes",components:{},setup:function(){var e=(0,m.tv)(),t=(0,m.yj)(),r=(0,g.iH)(a),a="from_old",i="from_new";function n(){console.log("route.query :>> ",t.query),r.value=t.query.direction===a?i:a,e.push({query:{direction:r.value}})}return{route:t,changeEventsDirection:n}}};var b=r(89);const f=(0,b.Z)(v,[["render",d]]),h=f;r(1539),r(8783),r(3948);var k={class:"layout"},y={class:"events"};function j(e,t,r,a,n,o){var s=(0,i.up)("SideBlock"),c=(0,i.up)("eventBlock");return(0,i.wg)(),(0,i.iD)("div",k,[(0,i.Wm)(s),(0,i._)("div",y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.events,(function(e){return(0,i.wg)(),(0,i.j4)(c,{key:e.date,text:e.text,date:e.date,pictures:e.pictures},null,8,["text","date","pictures"])})),128))]),(0,i.Wm)(s,{position:"right"})])}r(5069),r(2707);var x=r(7139),w={class:"event-block"},I={class:"event-block__info"},C={class:"event-block__days"},E={class:"event-block__day"},W={class:"event-block__date"},R={class:"event-block__text"},N={class:"event-block__images"},Z=["src"];function B(e,t,a,n,o,s){return(0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("div",I,[(0,i._)("div",C,[(0,i._)("div",E,(0,x.zw)(n.days),1),(0,i._)("div",W,(0,x.zw)(n.newDayFormat),1)]),(0,i._)("div",R,(0,x.zw)(a.text),1)]),(0,i._)("div",N,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.pictures,(function(e){return(0,i.wg)(),(0,i.iD)("img",{key:e,src:r(7173)("./".concat(e)),class:"event-block__image",alt:""},null,8,Z)})),128))])])}r(2222),r(3710);const O={name:"EventBlock",props:{text:{type:String,default:""},date:{type:String,default:""},pictures:{type:Array,default:function(){return[]}}},setup:function(e){var t=(0,g.iH)(0),r=(0,g.iH)("src/assets/".concat(e.pictureName)),a=(0,i.Fl)((function(){return"".concat(e.date[8]).concat(e.date[9],".").concat(e.date[5]).concat(e.date[6],".").concat(e.date[0]).concat(e.date[1]).concat(e.date[2]).concat(e.date[3])})),n=new Date("2022-02-24");console.log("warStart evetnt :>> ",n);var o=new Date(e.date),s=Math.abs(o-n)/1e3;return t.value=Math.floor(s/86400),t.value+=1,console.log("days :>> ",t),{days:t,picturePath:r,newDayFormat:a}}},U=(0,b.Z)(O,[["render",B]]),Q=U;function z(e,t,r,a,n,o){return(0,i.wg)(),(0,i.iD)("div",{class:"side-block",style:(0,x.j5)(a.styleOptions)},null,4)}const G={name:"SideBlock",props:{position:{type:String,default:"left"}},setup:function(e){var t=(0,i.Fl)((function(){return{"background-position":e.position}}));return{styleOptions:t}}},A=(0,b.Z)(G,[["render",z]]),S=A,P=JSON.parse('[{"date":"2022-02-24","text":"День початку війни. Вказано напрямок руху для російського воєнного корабля","pictures":["russian-warship.jpeg"]},{"date":"2022-04-12","text":"Спіймали Медведчука","pictures":["medvedchyk.jpeg"]},{"date":"2022-04-13","text":"Марченко звертається до президентів","pictures":["marchenko.jpeg"]},{"date":"2022-06-30","text":"Передача о.Зміїний в якості жеста доброї волі","pictures":["jest-dobroi-voly.png","jest-dobroi-voly_2.jpeg"]},{"date":"2022-05-17","text":"Патрон отримав найпрестижнішу нагороду для собак у Каннах – Palm Dog Humanitarian! ","pictures":["patron.jpeg"]},{"date":"2022-07-23","text":"Imagine Dragons стали амбасадоми платформи UNITED24","pictures":["imagine_dragons.jpeg"]},{"date":"2022-06-22","text":"Початок збору коштів на 3 Байрактари (500 000 000 грн)","pictures":["bayraktar_start.jpeg"]},{"date":"2022-06-24","text":"Зібрано коштів на 4 Байрактари","pictures":["bayraktar_end.jpeg"]},{"date":"2022-08-18","text":"Притула купив супутник за кошти зібрані на Байрактари ","pictures":["satellite.jpeg"]},{"date":"2022-05-09","text":"В росії провели парад \'дня перемоги\'","pictures":["9_may.jpeg"]},{"date":"2022-03-29","text":"Бавовна в Бєлгороді","pictures":["belgorod.jpeg","belgorod_4.webp"]},{"date":"2022-04-12","text":"Укрпошта випустила марку \\"Русскій воєнний корабль Іди Нахуй!\\"","pictures":["russian-warship_marka.jpeg"]},{"date":"2022-05-23","text":"Укрпошта випустила марку \\"Русскій воєнний корабль … ВСЬО!\\"","pictures":["moskva_done_marka.jpeg"]},{"date":"2022-06-28","text":"Укрпошта випустила марку \\"Доброго вечора, ми з України!\\"","pictures":["mria_marka.jpeg"]},{"date":"2022-07-28","text":"Укрпошта випустила марку \\"Українська Мрія\\"","pictures":["dobyi_vechir_marka.jpeg"]},{"date":"2022-04-14","text":"Знищення крейсеру москва","pictures":["maskva-dead.jpeg"]},{"date":"2022-05-14","text":"Перемога Kalush Orchestra на Evrovision-2022","pictures":["eurovision-kalush.jpeg"]},{"date":"2022-07-01","text":"на 5-му позачерговому засіданні в Парижі комітет ЮНЕСКО включив борщ — а саме «культуру приготування українського борщу» — до Списку нематеріальної культурної спадщини.","pictures":["borsсh.jpeg"]},{"date":"2022-06-23","text":"Країни Європейського Союзу проголосували за надання Україні статусу кандидата на вступ до Європейського Союзу","pictures":["candidate_to_eu.jpeg"]},{"date":"2022-05-09","text":"Президент США Джо Байден підписав закон про ленд-ліз","pictures":["land_lease.jpeg"]},{"date":"2022-08-09","text":"Порушення техніки безпеки в Криму","pictures":["crimea-first-bavovna.jpeg"]},{"date":"2022-04-30","text":"Анджеліна Джолі відвідала Україну","pictures":["angelina_jolie.jpeg"]},{"date":"2022-03-01","text":"Захоплення группи солдат поблизу Горлівки","pictures":["chmonya.jpeg"]}]'),V={name:"WarMemes",components:{eventBlock:Q,SideBlock:S},setup:function(){(0,m.tv)();var e=(0,m.yj)(),t=(0,i.Fl)((function(){return e.query.direction}));(0,i.Fl)((function(){return console.log("route.query.direction war :>> ",e.query.direction),e.query.direction}));function r(){console.log("HelloWorld")}function a(){P.sort((function(e,t){return e.date>t.date?1:e.date<t.date?-1:0}))}return(0,i.YP)((function(){return t.value}),(function(e,t){console.log("oldValue :>> ",t),console.log("newValue :>> ",e),P=P.reverse()})),a(),{events:P,helloWorld:r}}},D=(0,b.Z)(V,[["render",j]]),Y=D;var M=[{path:"/",name:"war-memes",component:Y},{path:"/life-calendar",name:"life-calendar",component:function(){return r.e(443).then(r.bind(r,2377))}}],J=(0,m.p7)({history:(0,m.PO)("/history-of-ukrainian-war-memes/"),routes:M});const K=J;(0,a.ri)(h).use(K).mount("#app")},7173:(e,t,r)=>{var a={"./9_may.jpeg":9313,"./9_may.png":8118,"./9_may.webp":7971,"./angelina_jolie.jpeg":2055,"./bayraktar_end.jpeg":6935,"./bayraktar_start.jpeg":6105,"./belgorod.jpeg":9255,"./belgorod_2.jpeg":192,"./belgorod_3.png":2826,"./belgorod_4.webp":1284,"./borsсh.jpeg":3901,"./candidate_to_eu.jpeg":2065,"./chmonya.jpeg":3637,"./crimea-first-bavovna.jpeg":2735,"./dobyi_vechir_marka.jpeg":8090,"./eurovision-kalush.jpeg":6255,"./icons/change-direction.svg":5836,"./imagine_dragons.jpeg":2640,"./imagine_dragons.webp":5201,"./jest-dobroi-voly.png":7848,"./jest-dobroi-voly_2.jpeg":3554,"./land_lease.jpeg":4895,"./logo.png":6949,"./lykashenko_map.jpeg":8782,"./marchenko.jpeg":7479,"./maskva-dead.jpeg":9961,"./medvedchyk.jpeg":3551,"./moskva_done_marka.jpeg":1925,"./mria_marka.jpeg":2052,"./patron.jpeg":8140,"./russian-warship.jpeg":5860,"./russian-warship_marka.jpeg":283,"./satellite.jpeg":3768,"./ukrainian-ornament.jpeg":7377};function i(e){var t=n(e);return r(t)}function n(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=n,e.exports=i,i.id=7173},5836:(e,t,r)=>{"use strict";e.exports=r.p+"img/change-direction.13ae223a.svg"},9313:(e,t,r)=>{"use strict";e.exports=r.p+"img/9_may.f803936e.jpeg"},8118:(e,t,r)=>{"use strict";e.exports=r.p+"img/9_may.4a04412d.png"},7971:(e,t,r)=>{"use strict";e.exports=r.p+"img/9_may.0cf34e27.webp"},2055:(e,t,r)=>{"use strict";e.exports=r.p+"img/angelina_jolie.7fdc0b41.jpeg"},6935:(e,t,r)=>{"use strict";e.exports=r.p+"img/bayraktar_end.a870e8c6.jpeg"},6105:(e,t,r)=>{"use strict";e.exports=r.p+"img/bayraktar_start.be7d3b7e.jpeg"},9255:(e,t,r)=>{"use strict";e.exports=r.p+"img/belgorod.b662c4c1.jpeg"},192:(e,t,r)=>{"use strict";e.exports=r.p+"img/belgorod_2.545d37d8.jpeg"},2826:(e,t,r)=>{"use strict";e.exports=r.p+"img/belgorod_3.8b9dc1af.png"},1284:(e,t,r)=>{"use strict";e.exports=r.p+"img/belgorod_4.c4620571.webp"},3901:(e,t,r)=>{"use strict";e.exports=r.p+"img/borsсh.184bc37d.jpeg"},2065:(e,t,r)=>{"use strict";e.exports=r.p+"img/candidate_to_eu.a859f6f7.jpeg"},3637:(e,t,r)=>{"use strict";e.exports=r.p+"img/chmonya.c7117232.jpeg"},2735:(e,t,r)=>{"use strict";e.exports=r.p+"img/crimea-first-bavovna.891760c9.jpeg"},8090:(e,t,r)=>{"use strict";e.exports=r.p+"img/dobyi_vechir_marka.a55ce2e0.jpeg"},6255:(e,t,r)=>{"use strict";e.exports=r.p+"img/eurovision-kalush.dbd69667.jpeg"},2640:(e,t,r)=>{"use strict";e.exports=r.p+"img/imagine_dragons.a4be51c8.jpeg"},5201:(e,t,r)=>{"use strict";e.exports=r.p+"img/imagine_dragons.6439ab46.webp"},7848:(e,t,r)=>{"use strict";e.exports=r.p+"img/jest-dobroi-voly.723c155d.png"},3554:(e,t,r)=>{"use strict";e.exports=r.p+"img/jest-dobroi-voly_2.339380c4.jpeg"},4895:(e,t,r)=>{"use strict";e.exports=r.p+"img/land_lease.409ba6ee.jpeg"},6949:e=>{"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},8782:(e,t,r)=>{"use strict";e.exports=r.p+"img/lykashenko_map.b7ca3213.jpeg"},7479:(e,t,r)=>{"use strict";e.exports=r.p+"img/marchenko.f70e68f8.jpeg"},9961:(e,t,r)=>{"use strict";e.exports=r.p+"img/maskva-dead.05c55ff9.jpeg"},3551:(e,t,r)=>{"use strict";e.exports=r.p+"img/medvedchyk.8af9af5b.jpeg"},1925:(e,t,r)=>{"use strict";e.exports=r.p+"img/moskva_done_marka.0ff62400.jpeg"},2052:(e,t,r)=>{"use strict";e.exports=r.p+"img/mria_marka.5f54dbba.jpeg"},8140:(e,t,r)=>{"use strict";e.exports=r.p+"img/patron.dcba5419.jpeg"},5860:(e,t,r)=>{"use strict";e.exports=r.p+"img/russian-warship.db090039.jpeg"},283:(e,t,r)=>{"use strict";e.exports=r.p+"img/russian-warship_marka.0724ef07.jpeg"},3768:(e,t,r)=>{"use strict";e.exports=r.p+"img/satellite.23e1525c.jpeg"},7377:(e,t,r)=>{"use strict";e.exports=r.p+"img/ukrainian-ornament.84885976.jpeg"}},t={};function r(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(t,a,i,n)=>{if(!a){var o=1/0;for(u=0;u<e.length;u++){for(var[a,i,n]=e[u],s=!0,c=0;c<a.length;c++)(!1&n||o>=n)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(s=!1,n<o&&(o=n));if(s){e.splice(u--,1);var p=i();void 0!==p&&(t=p)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,i,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[]))})(),(()=>{r.u=e=>"js/about.6f7a280b.js"})(),(()=>{r.miniCssF=e=>"css/about.f5fdb1af.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="history-of-ukrainian-war-memes:";r.l=(a,i,n,o)=>{if(e[a])e[a].push(i);else{var s,c;if(void 0!==n)for(var p=document.getElementsByTagName("script"),u=0;u<p.length;u++){var l=p[u];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==t+n){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+n),s.src=a),e[a]=[i];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(g);var i=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(r))),t)return t(r)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/history-of-ukrainian-war-memes/"})(),(()=>{var e=(e,t,r,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var n=n=>{if(i.onerror=i.onload=null,"load"===n.type)r();else{var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=n,i.href=t,document.head.appendChild(i),i},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var i=r[a],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){i=o[a],n=i.getAttribute("data-href");if(n===e||n===t)return i}},a=a=>new Promise(((i,n)=>{var o=r.miniCssF(a),s=r.p+o;if(t(o,s))return i();e(a,s,i,n)})),i={143:0};r.f.miniCss=(e,t)=>{var r={443:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=a(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,a)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var n=new Promise(((r,a)=>i=e[t]=[r,a]));a.push(i[2]=n);var o=r.p+r.u(t),s=new Error,c=a=>{if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,i[1](s)}};r.l(o,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,a)=>{var i,n,[o,s,c]=a,p=0;if(o.some((t=>0!==e[t]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(c)var u=c(r)}for(t&&t(a);p<o.length;p++)n=o[p],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},a=self["webpackChunkhistory_of_ukrainian_war_memes"]=self["webpackChunkhistory_of_ukrainian_war_memes"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[998],(()=>r(7804)));a=r.O(a)})();
//# sourceMappingURL=app.dc2346cd.js.map