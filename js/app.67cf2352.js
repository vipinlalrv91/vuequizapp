(function(t){function e(e){for(var s,a,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)a=o[d],r[a]&&f.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vuequizapp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0696":function(t,e,n){"use strict";var s=n("7293"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=n("5f5b"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",[n("router-view")],1)],1)},a=[],o=n("2877"),c={},u=Object(o["a"])(c,i,a,!1,null,null,null),l=u.exports,d=n("2f62");s["default"].use(d["a"]);var f=new d["a"].Store({state:{numCorrect:0,numIncorrect:0},getters:{},mutations:{increment:function(t,e){t.numCorrect=e.correct,t.numIncorrect=e.incorrect}},actions:{}}),m=(n("a41b"),n("f9e3"),n("2dd8"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container h-100"},[t._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("router-link",{staticClass:"tile purple",attrs:{to:"/quiz/9"}},[n("h3",{staticClass:"title"},[t._v("General Knowledge")]),n("p",[t._v("Quizzes taken: 122  ")])])],1),n("div",{staticClass:"col-sm-4"},[n("router-link",{staticClass:"tile red",attrs:{to:"/quiz/18"}},[n("h3",{staticClass:"title"},[t._v("Science: Computers")]),n("p",[t._v("Quizzes taken: 522  ")])])],1),n("div",{staticClass:"col-sm-4"},[n("router-link",{staticClass:"tile orange",attrs:{to:"/quiz/19"}},[n("h3",{staticClass:"title"},[t._v("Science: Mathematics")]),n("p",[t._v("Quizzes taken: 235  ")])])],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("router-link",{staticClass:"tile green",attrs:{to:"/quiz/21"}},[n("h3",{staticClass:"title"},[t._v("Sports")]),n("p",[t._v("Quizzes taken: 412  ")])])],1),n("div",{staticClass:"col-sm-4"},[n("router-link",{staticClass:"tile yellow",attrs:{to:"/quiz/27"}},[n("h3",{staticClass:"title"},[t._v("Animals")]),n("p",[t._v("Quizzes taken: 365  ")])])],1),n("div",{staticClass:"col-sm-4"},[n("router-link",{staticClass:"tile color_sky",attrs:{to:"/quiz/24"}},[n("h3",{staticClass:"title"},[t._v("Politics")]),n("p",[t._v("Quizzes taken: 258  ")])])],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("router-link",{staticClass:"tile color_hash",attrs:{to:"/quiz/23"}},[n("h3",{staticClass:"title"},[t._v("History")]),n("p",[t._v("Quizzes taken: 147  ")])])],1),n("div",{staticClass:"col-sm-4"},[n("router-link",{staticClass:"tile green",attrs:{to:"/quiz/22"}},[n("h3",{staticClass:"title"},[t._v("Geography")]),n("p",[t._v("Quizzes taken: 222  ")])])],1),n("div",{staticClass:"col-sm-4"},[n("router-link",{staticClass:"tile orange",attrs:{to:"/quiz/17"}},[n("h3",{staticClass:"title"},[t._v("Science & Nature")]),n("p",[t._v("Quizzes taken: 123  ")])])],1)])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("h1",[n("strong",[t._v("Top Categories")])])])])}],p={data:function(){return{dismissSecs:10,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},b=p,_=Object(o["a"])(b,h,v,!1,null,null,null),w=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{numCorrect:t.numCorrect,numTotal:t.numTotal,curIndex:t.index}}),n("b-container",{staticClass:"bv-example-row"},[n("b-row",{attrs:{sm:"6",offset:"3"}},[n("b-col",[t.questions.length?n("QuestionBox",{attrs:{currentQuestion:t.questions[t.index],next:t.next,increment:t.increment}}):t._e()],1)],1)],1)],1)},x=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("Home")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[t._v("Quizzes")]),n("b-nav-item",{attrs:{href:"#"}},[t._v("Categories")]),n("b-nav-item",{attrs:{href:"#"}},[t._v("Quiz Lab")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),n("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),n("b-nav-item-dropdown",{attrs:{right:""}},[n("template",{slot:"button-content"},[n("em",[t._v("User")])]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],2)],1)],1)],1)],1)},z=[],y={props:["numCorrect","numTotal"]},k=y,j=Object(o["a"])(k,g,z,!1,null,null,null),O=j.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-alert",{attrs:{variant:"success",show:""}},[t._v("Correct Answers : "+t._s(t.numCorrect))]),n("b-alert",{attrs:{variant:"danger",show:""}},[t._v("In Correct Answers : "+t._s(t.numIncorrect)+" ")]),n("router-link",{attrs:{to:"/"}},[n("b-button",{staticClass:"m-1",attrs:{variant:"info"}},[t._v("Try Again")])],1)],1)},I=[],q={computed:{numCorrect:function(){return this.$store.state.numCorrect},numIncorrect:function(){return this.$store.state.numIncorrect}}},S=q,A=Object(o["a"])(S,Q,I,!1,null,null,null),T=A.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questioin-box-container"},[n("b-jumbotron",[n("template",{slot:"lead"},[n("h2",{domProps:{innerHTML:t._s(t.currentQuestion.question)}})]),n("hr",{staticClass:"my-4"}),n("b-list-group",t._l(t.answers,function(e,s){return n("b-list-group-item",{key:s,class:t.answerClass(s),on:{click:function(e){return t.selectAnswers(s)}}},[n("p",{domProps:{innerHTML:t._s(e)}})])}),1),n("b-button",{attrs:{variant:"primary",disabled:null===t.selectedIndex||t.answered},on:{click:t.submitAnswer}},[t._v("Submit")])],2)],1)},E=[],P=n("75fc"),M=n("2ef0"),H=n.n(M),B={props:{currentQuestion:Object,next:Function,increment:Function,showResult:Boolean},data:function(){return{selectedIndex:null,shuffledAnswers:[],answered:!1,correctIndex:null}},watch:{currentQuestion:{immediate:!0,handler:function(){this.selectedIndex=null,this.shuffleAnswers(),this.answered=!1}}},computed:{answers:function(){var t=Object(P["a"])(this.currentQuestion.incorrect_answers);return t.push(this.currentQuestion.correct_answer),t}},methods:{selectAnswers:function(t){this.selectedIndex=t},submitAnswer:function(){var t=!1;this.selectedIndex===this.correctIndex&&(t=!0),this.answered=!0,this.increment(t),this.next()},shuffleAnswers:function(){var t=[].concat(Object(P["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);this.shuffledAnswers=H.a.shuffle(t),this.correctIndex=this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)},answerClass:function(t){var e="";return this.answered||this.selectedIndex!==t?this.answered&&this.correctIndex===t?e="correct":this.answered&&this.selectedIndex===t&&this.correctIndex!==t&&(e="incorrect"):e="selected",e}}},D=B,F=(n("0696"),Object(o["a"])(D,$,E,!1,null,"986c6942",null)),L=F.exports,R=n("57fe"),G={name:"app",components:{Header:O,Result:T,QuestionBox:L,HomeContainer:R["default"]},data:function(){return{questions:[],index:0,numCorrect:0,numTotal:0,selectedOption:100}},methods:{next:function(){this.index<9?this.index++:(f.commit("increment",{correct:this.numCorrect,incorrect:this.numTotal-this.numCorrect}),this.$router.push("/result"))},increment:function(t){t&&this.numCorrect++,this.numTotal++}},mounted:function(){var t=this,e=this.$route.params.cat;fetch("https://opentdb.com/api.php?amount=10&category="+e,{method:"get"}).then(function(t){return t.json()}).then(function(e){t.questions=e.results})}},J=G,N=(n("ab04"),Object(o["a"])(J,C,x,!1,null,null,null)),U=N.exports;s["default"].use(m["a"]);var V=new m["a"]({mode:"history",base:"/vuequizapp/",routes:[{path:"/",name:"home",component:w},{path:"/quiz/:cat",name:"quiz",component:U},{path:"/result",name:"result",component:T}]});s["default"].use(r["a"]),s["default"].config.productionTip=!1,s["default"].use(d["a"]),new s["default"]({router:V,store:f,render:function(t){return t(l)}}).$mount("#app")},"57fe":function(t,e,n){"use strict";var s=n("e047"),r=n("c01d"),i=n("2877"),a=Object(i["a"])(r["default"],s["a"],s["b"],!1,null,null,null);e["default"]=a.exports},7293:function(t,e,n){},"9cbc":function(t,e){},a41b:function(t,e,n){},ab04:function(t,e,n){"use strict";var s=n("b40c"),r=n.n(s);r.a},b40c:function(t,e,n){},c01d:function(t,e,n){"use strict";var s=n("9cbc"),r=n.n(s);e["default"]=r.a},e047:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-jumbotron",{attrs:{header:"BootstrapVue",lead:"Bootstrap v4 Components for Vue.js 2"}},[n("p",[t._v("For more information visit website")]),n("b-button",{attrs:{variant:"primary",href:"#"}},[t._v("More Info")])],1)],1)},r=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return r})}});
//# sourceMappingURL=app.67cf2352.js.map