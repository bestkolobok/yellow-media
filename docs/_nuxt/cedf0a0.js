(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{353:function(e,t,r){var content=r(384);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("1d431c0b",content,!0,{sourceMap:!1})},354:function(e,t,r){var content=r(390);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("15502aa5",content,!0,{sourceMap:!1})},359:function(e,t,r){"use strict";r.r(t);r(380);var o=r(3),n=r(382),c=r(381);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(c.d)("eager"),Object(c.c)("numeric",d(d({},n.a),{},{message:"{_field_} needs to be numeric. ({_value_})"})),Object(c.c)("required",d(d({},n.b),{},{message:"{_field_} can not be empty"}));var f={name:"TaskForm",components:{ValidationProvider:c.b,ValidationObserver:c.a},data:function(){return{field:""}},methods:{onSubmit:function(){this.$refs.observer.validate(),this.field&&this.$refs.observer.flags.valid&&this.$emit("submit",this.field)},onClear:function(){this.field="",this.$emit("clear")}}},m=(r(383),r(65)),v=r(97),h=r.n(v),_=r(422),O=r(336),k=r(415),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("validation-observer",{ref:"observer"},[r("form",{staticClass:"task-form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("validation-provider",{attrs:{name:"Field",rules:"required|numeric"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("v-text-field",{attrs:{placeholder:"Tape text here","error-messages":o,label:"Field",outlined:""},model:{value:e.field,callback:function(t){e.field=t},expression:"field"}})]}}])}),e._v(" "),r("v-row",{attrs:{justify:"space-around"}},[r("v-btn",{attrs:{outlined:"",rounded:"",type:"submit",disabled:!e.field}},[e._v("\n          submit\n        ")]),e._v(" "),r("v-btn",{attrs:{outlined:"",rounded:""},on:{click:e.onClear}},[e._v("\n          clear\n        ")])],1)],1)])],1)}),[],!1,null,"02a7dc58",null);t.default=component.exports;h()(component,{VBtn:_.a,VRow:O.a,VTextField:k.a})},383:function(e,t,r){"use strict";r(353)},384:function(e,t,r){(t=r(20)(!1)).push([e.i,".task-form[data-v-02a7dc58]{padding:16px;border:1px solid #bebebe}",""]),e.exports=t},389:function(e,t,r){"use strict";r(354)},390:function(e,t,r){(t=r(20)(!1)).push([e.i,".task-two__paragraph[data-v-28ff99dd]{padding:16px;border:1px solid #bebebe}.task-two__paragraph--odd[data-v-28ff99dd]{background-color:#ae3943}.task-two__paragraph--even[data-v-28ff99dd]{background-color:#2dae2a}",""]),e.exports=t},419:function(e,t,r){"use strict";r.r(t);var o={name:"TaskTwo",components:{TaskForm:r(359).default},data:function(){return{paragraph:null}},mounted:function(){this.getLocalStorage()},methods:{setLocalStorage:function(e){localStorage.setItem("num23",e)},getLocalStorage:function(){this.paragraph=localStorage.getItem("num23")||""},clearLocalStorage:function(){localStorage.removeItem("num23")}},computed:{checkColor:function(){return this.paragraph?+this.paragraph%2==0?"even":"odd":""}}},n=(r(389),r(65)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"task-two"},[e.paragraph?r("p",{staticClass:"task-two__paragraph",class:"task-two__paragraph--"+e.checkColor},[e._v("\n    "+e._s(e.paragraph)+"\n  ")]):e._e(),e._v(" "),r("task-form",{on:{submit:e.setLocalStorage,clear:e.clearLocalStorage}})],1)}),[],!1,null,"28ff99dd",null);t.default=component.exports;installComponents(component,{TaskForm:r(359).default})}}]);