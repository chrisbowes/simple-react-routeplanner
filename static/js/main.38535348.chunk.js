(this.webpackJsonprouteplanner=this.webpackJsonprouteplanner||[]).push([[0],{23:function(e,n,t){e.exports=t(35)},28:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(16),c=t.n(o),i=(t(28),t(2)),l=t(3),u=t(7),s=t(8),d=t(13),f=t(6),m=t(4),p=t(17);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=a.a.createContext(),h={markers:[],polylines:[]};function y(e,n){switch(n.type){case"ADD_MARKER":return g({},e,{markers:[].concat(Object(m.a)(e.markers),[n.payload])});case"DELETE_MARKER":return g({},e,{markers:Object(m.a)(e.markers.filter((function(e){return e!==n.payload})))});case"REORDER_MARKERS":return g({},e,{markers:n.payload});case"UPDATE_POLYLINES":return g({},e,{polylines:n.payload});default:throw new Error}}function O(e){var n=a.a.useReducer(y,h),t=Object(f.a)(n,2),r={state:t[0],dispatch:t[1]};return a.a.createElement(E.Provider,{value:r},e.children)}function v(){var e=Object(i.a)(["\n    display: inline-block;\n    padding: 0 1rem;\n"]);return v=function(){return e},e}function j(){var e=Object(i.a)(["\n    color: #747474;\n    background-color: #383838;\n    border: none;\n    font-size: 1rem;\n    margin: 0;\n    padding: 0;\n"]);return j=function(){return e},e}function k(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return k=function(){return e},e}function x(){var e=Object(i.a)(["\n    list-style-type: none;\n    margin: 0.2rem 0;\n    padding: 0.2rem 0;\n    box-sizing: border-box;\n"]);return x=function(){return e},e}var w=l.a.li(x()),D=l.a.div(k()),R=l.a.button(j()),S=l.a.span(v()),P=function(e){var n=a.a.useContext(E).dispatch;return a.a.createElement(w,{onDragOver:function(){return e.handleOnDragOver(e.index)}},a.a.createElement(D,{draggable:!0,onDragStart:function(n){return e.handleOnDragStart(n,e.index)},onDragEnd:e.handleOnDragEnd},a.a.createElement("span",null,a.a.createElement(R,null,a.a.createElement(s.a,{icon:"bars"})),a.a.createElement(S,null,"Waypoint ",e.index+1)),a.a.createElement(R,{onClick:function(){return n({type:"DELETE_MARKER",payload:e.data})}},a.a.createElement(s.a,{icon:"trash-alt"}))))};function A(){var e=Object(i.a)(["\n    border-radius: 0.3rem;\n    box-sizing: border-box;\n    border: 1px solid #e1e1e1;\n    padding: 1rem;\n    line-height: 1.2;\n    font-size: 0.8rem;\n    "]);return A=function(){return e},e}var T=l.a.div(A()),z=function(e){return a.a.createElement(T,null,e.children)};function L(){var e=Object(i.a)(["\n    margin: 0;\n    padding: 0;\n"]);return L=function(){return e},e}var _=l.a.ul(L()),C=function(){var e=a.a.useContext(E),n=e.state,t=e.dispatch,r=a.a.useState(),o=Object(f.a)(r,2),c=o[0],i=o[1],l=a.a.useState(),u=Object(f.a)(l,2),s=u[0],d=u[1],m=a.a.useState(),p=Object(f.a)(m,2),b=p[0],g=p[1];a.a.useEffect((function(){g(n.markers)}),[]);var h=function(e,t){i(n.markers[t]),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/html",e.target.parentNode),e.dataTransfer.setDragImage(e.target.parentNode,20,20)},y=function(e){if(d(n.markers[e]),c!==s){var t=n.markers.filter((function(e){return e!==c}));t.splice(e,0,c),g(t)}},O=function(){t({type:"REORDER_MARKERS",payload:b})};return a.a.createElement(a.a.Fragment,null,n.markers.length?a.a.createElement(_,null,n.markers.map((function(e,n){return a.a.createElement(P,{key:n,data:e,index:n,handleOnDragStart:h,handleOnDragEnd:O,handleOnDragOver:y})}))):a.a.createElement(z,null,"Add markers to the map to build a sortable list. Delete and rearrange as desired. Then use the download option below to export your route in GPX format."))},M=t(5),K=t.n(M);function N(){var e=Object(i.a)(["\n    width: 100%;\n    height: 100vh;\n    "]);return N=function(){return e},e}var G=l.a.div(N()),I=function(){var e=a.a.useRef(null),n=a.a.useRef(null),t=a.a.useContext(E),r=t.state,o=t.dispatch;return a.a.useEffect((function(){e.current=K.a.map("map",{center:[45.51,-122.68],zoom:16,layers:[K.a.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]}),e.current.on("click",(function(e){o({type:"ADD_MARKER",payload:K.a.marker(e.latlng).toGeoJSON()})}))}),[o]),a.a.useEffect((function(){n.current=K.a.layerGroup().addTo(e.current)}),[]),a.a.useEffect((function(){n.current.clearLayers();var e=[];if(r.markers.length){var t=[];r.markers.map((function(e){var r={lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]};t.push(r),K.a.marker(r).addTo(n.current)})),K.a.polyline(t,{color:"red"}).addTo(n.current),e=[].concat(Object(m.a)(e),[K.a.polyline(t,{color:"red"}).toGeoJSON()])}o({type:"UPDATE_POLYLINES",payload:e})}),[r.markers]),a.a.createElement(G,{id:"map"})},J=t(20),B=t.n(J);function F(){var e=Object(i.a)(["\n    border: 0;\n    background-color: #c3e452;\n    padding: 0.8rem;\n    border-radius: 5px;\n    color: #383838;\n    font-size: 1rem;\n    font-weight: bold;\n    opacity: 1;\n    transition: opacity 0.3s;\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n    :disabled {\n        opacity: 0;\n    }\n"]);return F=function(){return e},e}var W=l.a.button(F()),U=function(){var e=a.a.useContext(E),n=e.state,t=(e.dispatch,{type:"FeatureCollection",features:[].concat(Object(m.a)(n.markers),Object(m.a)(n.polylines))}),r=n.markers.length?"data:text/json;charset=utf-8,".concat(B()(t)):null;return a.a.createElement(a.a.Fragment,null,r?a.a.createElement(W,null,a.a.createElement("a",{href:r,download:"route.gpx"},"Download Route")):a.a.createElement(W,{disabled:!0},"Download Route"))};function Y(){var e=Object(i.a)(["\n  margin: 0 0 3rem 0;\n  padding: 0 0 1rem 0;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #fff;\n  "]);return Y=function(){return e},e}function X(){var e=Object(i.a)(["\n  width: 20rem;\n  background-color: #383838;\n  height: 100vh;\n  padding: 1rem;\n  box-sizing: border-box;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  "]);return X=function(){return e},e}function $(){var e=Object(i.a)(["\n  display: flex;\n  "]);return $=function(){return e},e}u.b.add(d.b,d.a);var q=l.a.div($()),H=l.a.div(X()),Q=l.a.h1(Y());var V=function(){return a.a.createElement(O,null,a.a.createElement(q,null,a.a.createElement(s.a,{icon:"fa-trash-alt"}),a.a.createElement(H,null,a.a.createElement("div",null,a.a.createElement(Q,null,"Route Builder"),a.a.createElement(C,null)),a.a.createElement(U,null)),a.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.38535348.chunk.js.map