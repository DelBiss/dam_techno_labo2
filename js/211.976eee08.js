"use strict";(self["webpackChunkrecette"]=self["webpackChunkrecette"]||[]).push([[211],{75:function(e,l,t){t.d(l,{Z:function(){return U}});var u=t(252),a=t(262),n=t(577),r=t(994);const o=(0,u.Uk)("action");var m=(0,u.aZ)({name:"NavToolBar",props:{action:{default:!1},title:{required:!0}},setup(e){const l=(0,r.cj)();return(t,m)=>((0,u.wg)(),(0,u.j4)((0,a.SU)(r._i),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Gu),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.sr),{color:"primary"},{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Sm),{slot:"start"},{default:(0,u.w5)((()=>[(0,a.SU)(l).canGoBack()?(0,u.kq)("",!0):((0,u.wg)(),(0,u.j4)((0,a.SU)(r.fG),{key:0})),(0,u.Wm)((0,a.SU)(r.oU))])),_:1}),(0,u.Wm)((0,a.SU)(r.wd),null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,n.zw)(e.title),1)])),_:1}),e.action?((0,u.wg)(),(0,u.j4)((0,a.SU)(r.Sm),{key:0,slot:"end"},{default:(0,u.w5)((()=>[(0,u.WI)(t.$slots,"action",{},(()=>[o]))])),_:3})):(0,u.kq)("",!0)])),_:3})])),_:3}),(0,u.WI)(t.$slots,"default")])),_:3}))}});const d=m;var U=d},279:function(e,l,t){t.d(l,{Z:function(){return W}});var u=t(252),a=t(262),n=t(577),r=t(994),o=t(903);const m=(0,u.Uk)("Information"),d=(0,u.Uk)("Area"),U=(0,u.Uk)("Tag"),w=(0,u.Uk)("Category"),f=(0,u.Uk)("Source"),i=(0,u.Uk)("Video"),c=(0,u.Uk)("Ingredients"),s=(0,u.Uk)("Instructions"),S={class:"ion-padding"};var _=(0,u.aZ)({name:"RecipeMeal",props:{meal:null},setup(e){return(l,t)=>((0,u.wg)(),(0,u.j4)((0,a.SU)(r.W2),{fullscreen:!0},{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Xz),{src:e.meal.image},null,8,["src"]),(0,u.Wm)((0,a.SU)(r.q_),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Ub),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.rH),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.yh),null,{default:(0,u.w5)((()=>[(0,u._)("h1",null,(0,n.zw)(e.meal.title),1)])),_:1})])),_:1}),(0,u.Wm)((0,a.SU)(r.q_),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Ub),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.rH),{color:"primary",sticky:""},{default:(0,u.w5)((()=>[m])),_:1}),(0,u.Wm)((0,a.SU)(r.Ie),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Q$),null,{default:(0,u.w5)((()=>[d])),_:1}),(0,u.Wm)((0,a.SU)(r.uN),{slot:"end"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,n.zw)(e.meal.area),1)])),_:1})])),_:1}),e.meal.tags?((0,u.wg)(),(0,u.j4)((0,a.SU)(r.Ie),{key:0},{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Q$),null,{default:(0,u.w5)((()=>[U])),_:1}),(0,u.Wm)((0,a.SU)(r.uN),{slot:"end"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,n.zw)(e.meal.tags),1)])),_:1})])),_:1})):(0,u.kq)("",!0),(0,u.Wm)((0,a.SU)(r.Ie),{button:"",detail:"true","router-link":`/category/${e.meal.category.name}`,"router-direction":"forward"},{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Q$),null,{default:(0,u.w5)((()=>[w])),_:1}),(0,u.Wm)((0,a.SU)(r.uN),{slot:"end"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,n.zw)(e.meal.category.name),1)])),_:1})])),_:1},8,["router-link"]),e.meal.source?((0,u.wg)(),(0,u.j4)((0,a.SU)(r.Ie),{key:1,button:"",href:e.meal.source.url,detail:"true"},{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Q$),null,{default:(0,u.w5)((()=>[f])),_:1}),(0,u.Wm)((0,a.SU)(r.uN),{slot:"end"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,n.zw)(e.meal.source.host),1)])),_:1})])),_:1},8,["href"])):(0,u.kq)("",!0),e.meal.youtube?((0,u.wg)(),(0,u.j4)((0,a.SU)(r.Ie),{key:2,button:"",href:e.meal.youtube,detail:"true"},{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.gu),{icon:(0,a.SU)(o.Iir),slot:"end"},null,8,["icon"]),(0,u.Wm)((0,a.SU)(r.Q$),null,{default:(0,u.w5)((()=>[i])),_:1})])),_:1},8,["href"])):(0,u.kq)("",!0)])),_:1}),(0,u.Wm)((0,a.SU)(r.Ub),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.rH),{color:"primary",sticky:""},{default:(0,u.w5)((()=>[c])),_:1}),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.meal.ingredients,(e=>((0,u.wg)(),(0,u.j4)((0,a.SU)(r.Ie),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.Q$),null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,n.zw)(e.ingredient),1)])),_:2},1024),(0,u.Wm)((0,a.SU)(r.uN),{slot:"end"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,n.zw)(e.measure),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1}),(0,u.Wm)((0,a.SU)(r.Ub),null,{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.rH),{color:"primary",sticky:""},{default:(0,u.w5)((()=>[s])),_:1}),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.meal.instructions,(e=>((0,u.wg)(),(0,u.iD)("div",S,(0,n.zw)(e),1)))),256))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}))}});const k=_;var W=k},211:function(e,l,t){t.r(l),t.d(l,{default:function(){return i}});var u=t(252),a=t(262),n=t(577),r=t(994),o=t(369),m=t(279),d=t(75),U=t(903),w=(0,u.aZ)({name:"HomePage",setup(e){const l=(0,u.f3)(o.F),t=(0,a.iH)(null);function w(){console.log("refreshDate"),l?.randomMeal().then((e=>{t.value=e}))}return w(),(e,l)=>((0,u.wg)(),(0,u.j4)(d.Z,{title:"Recipe of the moment",action:!0},{action:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.YG),{onClick:l[0]||(l[0]=e=>w())},{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.gu),{icon:(0,a.SU)(U.biU)},null,8,["icon"])])),_:1})])),default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.sr),{color:"secondary"},{default:(0,u.w5)((()=>[(0,u.Wm)((0,a.SU)(r.wd),null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,n.zw)(t.value?.title),1)])),_:1})])),_:1}),t.value?((0,u.wg)(),(0,u.j4)(m.Z,{key:0,meal:t.value},null,8,["meal"])):(0,u.kq)("",!0)])),_:1}))}});const f=w;var i=f}}]);
//# sourceMappingURL=211.976eee08.js.map