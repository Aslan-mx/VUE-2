webpackJsonp([6],{"035s":function(t,a){},4349:function(t,a){},Hwmd:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("035s"),s=(e.n(n),e("igmb")),i=(e.n(s),e("7+uW")),r=e("mtWM"),o=e.n(r),c=(e("n7YN"),e("TFhR")),d=e("U/rD");new i.default({el:"#app",data:{topLists:null,subLists:null,rankData:null,topIndex:0},created:function(){this.getTopList(),this.getSubList(0)},methods:{getTopList:function(){var t=this;o.a.get(c.a.topLists).then(function(a){t.topLists=a.data.lists})},getSubList:function(t,a){var e=this;this.topIndex=t,0===t?this.getRank():o.a.post(c.a.subLists,{id:a}).then(function(t){e.subLists=t.data.data})},getRank:function(){var t=this;o.a.get(c.a.rank).then(function(a){t.rankData=a.data.data})},toSearch:function(t,a){location.href="search.html?id="+t+"&keyword="+a}},mixins:[d.a]})},TFhR:function(t,a,e){"use strict";var n={hostLists:"/index/hotlists",bannerLists:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rank:"/category/rank",searchLists:"/search/list",details:"/goods/details",deal:"/goods/deal",evaluation:"/goods/evaluation",cartLists:"/cart/list",remove:"/cart/remove",mrremove:"/cart/mrremove",add:"/cart/add",reduce:"/cart/reduce",addressAdd:"/address/add",addressRemove:"/address/remove",addressLists:"/address/list",addressUpdate:"/address/update",addressDefault:"/address/setDefault"};for(var s in n)n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s];a.a=n},"U/rD":function(t,a,e){"use strict";var n={filters:{currency:function(t){var a=(t+="").split(".");return 1===a.length?t+".00":1===a[1].length?t+"0":t}},components:{Footnav:e("n7YN").a}};a.a=n},igmb:function(t,a){},n7YN:function(t,a,e){"use strict";var n=e("mw3O"),s=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],i=e.n(n).a.parse(window.location.search.substring(1)).index,r={data:function(){return{navConfig:s,curIndex:parseInt(i,10)||0}},methods:{changeNav:function(t,a){location.href=a.href+"?index="+t}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.navConfig,function(a,n){return e("li",{class:{active:t.curIndex===n},on:{click:function(e){t.changeNav(n,a)}}},[e("a",[e("i",{class:a.icon}),e("div",[t._v(t._s(a.name))])])])}))])},staticRenderFns:[]};var c=e("VU/8")(r,o,!1,function(t){e("4349")},null,null);a.a=c.exports}},["Hwmd"]);
//# sourceMappingURL=category.7189591bcb7be3fa62f7.js.map