(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-379e5046"],{"09e0":function(t,a,e){"use strict";var i=e("33bd"),c=e.n(i);c.a},"235e":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"active_lists"},[i("scroller",[t.msg?i("div",{staticClass:"hint-page"},[i("img",{attrs:{src:e("5bf6"),alt:""}}),i("p",{staticClass:"hint-page__text"},[t._v(t._s(t.msg))])]):[i("activeBanner",{attrs:{activeInfo:t.activeInfo}}),t.activeData?i("activeGoods",{attrs:{activeData:t.activeData,activeType:"拼团",activeInfo:t.activeInfo,activeTime:t.activeTime}}):t._e()]],2),i("div",{staticClass:"bottom-btn"},[i("router-link",{staticClass:"my_collage",attrs:{to:"/collage/my_collage/"+t.activeInfo.id}},[t._v("我的拼团")])],1)],1)},c=[],n=e("96f8"),s=e.n(n),o=e("95eb"),v=e("5ada"),r=e("ed08"),l=e("9d8d"),u={data:function(){return{activeInfo:{},activeData:[],activeTime:"",msg:""}},components:{activeGoods:o["a"],activeBanner:v["a"],navbar:l["a"]},methods:{getData:function(t){var a=this;Object(r["h"])(r["g"]+"/collage/Api/index",{collage_id:t}).then(function(t){0==t.code?a.msg=t.msg:(a.activeData=t.goods_lists,a.activeInfo=t.event_info)})},countTime:function(){var t=this,a=t.activeInfo.end_time,e=a-Date.parse(new Date)/1e3,i=s()(e/60/60/24),c=s()(e/60/60%24),n=s()(e/60%60),o=s()(e%60);t.activeTime="".concat(i,"天").concat(c,"时").concat(n,"分").concat(o,"秒"),setTimeout(function(){t.countTime()},1e3)}},created:function(){var t=this.$route.params.id;this.getData(t),this.countTime()}},d=u,f=(e("09e0"),e("17cc")),m=Object(f["a"])(d,i,c,!1,null,"0ec9e8e6",null);a["default"]=m.exports},"33bd":function(t,a,e){}}]);