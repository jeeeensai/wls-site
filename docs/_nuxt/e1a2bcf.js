(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{441:function(t,e,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("06871a3f",content,!0,{sourceMap:!1})},454:function(t,e,n){"use strict";n(441)},455:function(t,e,n){var r=n(82)(!1);r.push([t.i,".border_y{margin-top:4vh;margin-bottom:4vh}",""]),t.exports=r},470:function(t,e,n){"use strict";n.r(e);var r={name:"PicturePage",layout:function(){return"top"},data:function(){return{images:["picture/img_1.jpg","picture/img_2.jpg","picture/img_3.jpg","picture/img_4.jpg"],index:null}}},o=(n(454),n(35)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"has-text-centered is-size-4-mobile is-size-2-tablet border_y"},[t._v("\n    Team Photo\n  ")]),t._v(" "),e("div",{staticClass:"container is-fullwidth is-flex"},[e("div",{staticClass:"columns"},t._l(t.images,(function(image,i){return e("div",{key:i,staticClass:"column is-one-quarter",attrs:{src:image}},[e("img",{staticClass:"image",attrs:{src:image},on:{click:function(e){t.index=i}}}),t._v(" "),e("no-ssr",[e("vue-gallery-slideshow",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}})],1)],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);