(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{433:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},440:function(t,e,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("3d99b691",content,!0,{sourceMap:!1})},454:function(t,e,n){"use strict";n(440)},455:function(t,e,n){var o=n(82),r=n(433),c=n(456),l=n(457),d=o(!1),v=r(c),m=r(l);d.push([t.i,".hero-back-image{background-image:url("+v+");background-size:cover;background-repeat:no-repeat;background-position-y:center}.googlemap{position:relative;padding-bottom:60%;height:0;overflow:hidden}.googlemap iframe{position:absolute;top:0;left:0;width:100%;height:100%}.ml-span{margin-left:48px}.concept-back-image{background-image:url("+m+');background-size:cover;background-repeat:no-repeat;background-position-y:center;min-height:30vh}.card-height{height:100%}.my-button{margin-top:20%;margin-bottom:20%}.c-loader-bg{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;z-index:100;display:grid;align-items:center;justify-items:center;place-items:center;pointer-events:none}.c-loader-bg-line1{width:200px}.c-loader-bg-line1,.c-loader-bg-line2{content:"";position:absolute;height:30px;top:0;bottom:0;left:0;right:0;transform:skewY(-45deg);z-index:-1}.c-loader-bg-line2{width:400px}.c-loader-bg-line3{width:400px}.c-loader-bg-line3,.c-loader-bg-line4{content:"";position:absolute;height:30px;bottom:0;right:0;transform:skewY(-45deg);z-index:-1}.c-loader-bg-line4{width:200px}@media screen and (max-width:1440px){.hero-back-image{background-image:url('+v+");background-size:contain;background-repeat:no-repeat;background-position-y:center}}",""]),t.exports=d},456:function(t,e,n){t.exports=n.p+"img/svg.dbf0512.svg"},457:function(t,e,n){t.exports=n.p+"img/sampled.d96d19a.png"},467:function(t,e,n){"use strict";n.r(e);n(12),n(33),n(27),n(202);var o={name:"IndexPage",layout:function(){return"top"},data:function(){return{bgClass:"c-loader-bg",accessCount:!1}},mounted:function(){var t=".c-loader-text",e=".c-loader-text span",n=".c-loader-bg-line1",o=".c-loader-bg-line2",r=".c-loader-bg-line3",c=".c-loader-bg-line4",l=".c-header",d=".animation",v={backgroundColor:"white",x:0,y:0,duration:1};if(sessionStorage.getItem("accessCount"))this.accessCount=!1;else{sessionStorage.setItem("accessCount",1),this.accessCount=!0,document.querySelectorAll(".c-loader-text").forEach((function(t){for(var e="",n=t.textContent.split(""),i=0;i<n.length;i++)e+="<span>"+n[i]+"</span>";t.innerHTML=e}));var m=this.$gsap.timeline();this.$gsap.set([t,e],{opacity:0}),this.$gsap.set([n,c],{x:"-100%",y:200,opacity:1}),this.$gsap.set([o,r],{x:"-100%",y:400,opacity:1}),this.$gsap.set(l,{opacity:0,y:-50}),m.to(t,{opacity:1,duration:.1}).to(e,{opacity:1,duration:2,stagger:{amount:1,from:"start",ease:"sine.in"}}).to(n,v,"-=0.5").to(o,v,"-=0.4").to(r,v,"-=0.4").to(c,v,"-=0.4").to(".c-loader-bg",{opacity:0,duration:2.5}).to(l,{opacity:1,y:0})}this.$gsap.set(d,{opacity:0,x:-100,y:100}),this.$gsap.to(d,{scrollTrigger:{trigger:d},x:0,y:0,opacity:1,duration:2})}},r=(n(454),n(35)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.accessCount,expression:"accessCount"}],staticClass:"c-loader-bg"},[e("div",{staticClass:"c-loader-bg-line1"}),t._v(" "),e("div",{staticClass:"c-loader-bg-line2"}),t._v(" "),e("div",{staticClass:"c-loader-bg-line3"}),t._v(" "),e("div",{staticClass:"c-loader-bg-line4"}),t._v(" "),e("span",{staticClass:"has-text-white is-size-3 c-loader-text"},[t._v("\n      ORIGINAL W.L.S\n    ")])]),t._v(" "),e("div",{staticClass:"anime_content"},[e("section",{staticClass:"hero is-fullheight-with-navbar hero-back-image"}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"columns is-5 mx-2"},[e("div",{staticClass:"column"},[e("div",{staticClass:"card card-height"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("h2",[t._v("練習内容")]),t._v(" "),t._m(2),t._v(" "),e("b-image",{attrs:{src:"sampleb.jpg",alt:"試合/練習イメージ"}}),t._v(" "),t._m(3)],1)])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"card card-height"},[e("div",{staticClass:"card-content"},[t._m(4),t._v(" "),e("div",{staticClass:"is-flex is-justify-content-center my-button"},[e("b-button",{staticClass:"button is-link is-outlined is-rounded is-medium is-fullwidth",attrs:{tag:"router-link",to:{name:"inquiry"}}},[t._v("\n                体験予約/お問い合わせ\n              ")])],1)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-2"},[e("section",{staticClass:"section has-background-grey-light concept-back-image animation"},[e("h1",{staticClass:"title has-text-white is-size-4-mobile"},[t._v("\n          ORIGINAL W.L.Sとは\n        ")]),t._v(" "),e("p",{staticClass:"has-text-white is-size-7-mobile"},[t._v("\n          大阪府東大阪市を中心に活動している社会人バスケットボールチームです。"),e("br"),t._v("\n          メンバーは社会人男性13名程度で平均年齢は20代前半~40代半ばと幅広い年代が在籍してます。"),e("br"),t._v("\n          現在、大阪社会人バスケットボール連盟男子2部Aに所属しており、1部昇格を目指して奮闘中です。"),e("br"),t._v("\n          随時新規加入メンバーを募集しております！！"),e("br"),t._v("\n          お気軽にお問い合わせください。"),e("br")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns is-5 mx-2"},[e("div",{staticClass:"column"},[e("div",{staticClass:"card card-height"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("div",{staticClass:"columns is-5 mx-2"},[e("div",{staticClass:"column"},[e("h2",[t._v("活動時間/場所")]),t._v(" "),e("p",[t._v("\n                    時間：隔週日曜 13:00〜17:00"),e("br"),t._v("\n                    場所：大阪府東大阪市立"),e("ruby",[t._v("意岐部"),e("rt",[t._v("おきべ")])]),t._v("中学校\n                  ")]),t._v(" "),e("div",{staticClass:"googlemap"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.48226008932!2d135.5929087150541!3d34.66777608044296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000df8edb3594b3%3A0xdde18801b5123fef!2z5p2x5aSn6Ziq5biC56uL5oSP5bKQ6YOo5Lit5a2m5qCh!5e0!3m2!1sja!2sjp!4v1664689627774!5m2!1sja!2sjp",width:"600",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("車でのアクセス：駐車場あり、校内の駐車スペースをご利用下さい。（台数に限りあり）")]),t._v(" "),e("p",[t._v("電車でのアクセス：近鉄奈良線八戸ノ里駅より15分程度、地下鉄長田駅より20分程度です。")]),t._v(" "),e("p",[t._v("※自転車,バイクでのアクセスも可能です。")])]),t._v(" "),e("div",{staticClass:"column"},[e("h2",{staticClass:"is-invisible"},[t._v("\n                    活動時間/場所\n                  ")]),t._v(" "),e("p",[t._v("\n                    時間：毎週水曜 19:30～21:30"),e("br"),t._v("\n                    場所：大阪市立"),e("ruby",[t._v("緑"),e("rt",[t._v("みどり")])]),t._v("中学校\n                  ")]),t._v(" "),e("div",{staticClass:"googlemap"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.8615046052832!2d135.56249631505528!3d34.70867298043239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e05677410a83%3A0x851ea582031f8807!2z5aSn6Ziq5biC56uL57eR5Lit5a2m5qCh!5e0!3m2!1sja!2sjp!4v1665821635017!5m2!1sja!2sjp",width:"600",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("車でのアクセス：近隣のコインパーキングをご利用下さい。")]),t._v(" "),e("p",[t._v("電車でのアクセス：地下鉄新森古市、今福鶴見、横堤駅より15分程度です。")]),t._v(" "),e("p",[t._v("※自転車,バイクでのアクセスも可能です。")])])])])])])])])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n                チーム練習は1時からです。"),e("br"),t._v("\n                ラストに1試合やります。"),e("br"),t._v("\n                ※コロナ対策を遵守して頂きます。"),e("br"),t._v("\n                出来るだけ公式戦と同様の内容でゲームをしています。"),e("br")])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n                チームへの加入希望者は1時からのチーム練習に参加下さい。"),e("br"),t._v("\n                加入条件、詳細については直接伝えますので、お気軽にお問い合わせください。"),e("br"),t._v("\n                ※高校生.大学生不可です。人間性も重視、誠実に応対できる社会人経験者を募集します。"),e("br")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("h2",[t._v("募集内容")]),t._v(" "),e("h3",[t._v("プレイヤー")]),t._v(" "),e("ul",[e("li",[t._v("\n                  上級バスケを求める方"),e("br"),t._v("\n                  （センターや経験豊富なガード歓迎）\n                ")])]),t._v(" "),e("h3",[t._v("マネージャー")]),t._v(" "),e("ul",[e("li",[t._v("練習サポートやスコアー記入できる方")])]),t._v(" "),e("h3",[t._v("その他")]),t._v(" "),e("ul",[e("li",[t._v("NPO法人のバスケ運営に興味がある方")])])])}],!1,null,null,null);e.default=component.exports}}]);