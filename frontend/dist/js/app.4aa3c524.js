(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],d=0,h=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},n={app:0},a=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0248":function(e,t,s){},"0c96":function(e,t,s){},"1b5c":function(e,t,s){"use strict";var r=s("2a61"),n=s.n(r);n.a},2623:function(e,t,s){"use strict";var r=s("796f"),n=s.n(r);n.a},"2a61":function(e,t,s){},3718:function(e,t,s){},"4d8a":function(e,t,s){"use strict";var r=s("0c96"),n=s.n(r);n.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=s("2b27"),a=s.n(n),o=(s("caad"),s("8c4f")),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card card-container"},[s("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),s("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.errors.has("username")?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.errors.has("password")?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),s("span",[e._v("Login")])])]),s("div",{staticClass:"form-group"},[e.message?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])])},l=[],u=(s("d3b7"),s("25f0"),s("d4ec")),c=function e(t,s,r){Object(u["a"])(this,e),this.username=t,this.email=s,this.password=r},d={name:"Login",data:function(){return{user:new c("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/home")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/home")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()})):e.loading=!1}))}}},h=d,m=(s("4d8a"),s("2877")),p=Object(m["a"])(h,i,l,!1,null,"425d80bd",null),f=p.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card card-container"},[s("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),s("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e.successful?e._e():s("div",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.submitted&&e.errors.has("username")?s("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.submitted&&e.errors.has("email")?s("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.submitted&&e.errors.has("password")?s("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"passwordValidate"}},[e._v("Enter Password Again ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{name:"passwordValidate",type:"password"},domProps:{value:e.passwordCheck},on:{input:function(t){t.target.composing||(e.passwordCheck=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:!e.submitable}},[e._v("Sign Up")])])])]),e.message?s("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()])])},v=[],g={name:"Register",data:function(){return{user:new c("","",""),submitted:!1,successful:!1,message:"",passwordCheck:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn},submitable:function(){return this.user.password===this.passwordCheck&&this.user.username&&this.user.password&&this.passwordCheck}},mounted:function(){this.loggedIn&&this.$router.push("/home")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0,e.$router.push("/login")}),(function(t){e.message=t.response&&t.response.data||t.message||t.toString(),e.successful=!1}))}))}}},w=g,y=(s("9fd3"),Object(m["a"])(w,b,v,!1,null,"6a39d3f6",null)),_=y.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"home"}},[s("div",{attrs:{id:"auction"}},[s("div",{attrs:{id:"identifier"}},[e.loggedIn?s("p",[e._v(" You are logged in as: "+e._s(e.currentUser.user.ownerName)+" ")]):e._e()]),s("BudgetBoard",{attrs:{showScore:e.wins,id:"budget-board"},on:{newWinner:e.checkScore}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"1",id:"lot1",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"2",id:"lot2",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"3",id:"lot3",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"4",id:"lot4",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"5",id:"lot5",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"6",id:"lot6",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"7",id:"lot7",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"8",id:"lot8",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"9",id:"lot9",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"10",id:"lot10",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"11",id:"lot11",ownerList:this.owners}}),s("PlayerDropdown",{staticClass:"lotStyle",attrs:{lotId:"12",id:"lot12",ownerList:this.owners}})],1)])},C=[],P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"lot-element"}},[s("div",{attrs:{id:"watermark"}},[s("strong",[e._v(" Lot "+e._s(e.lotId))])]),s("form",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.bidMode,expression:"bidMode"}],attrs:{id:"playerInfoBanner"}},[s("h2",{attrs:{id:"player-title"}},[e._v(" "+e._s(e.selectedPlayer.firstName)+" "+e._s(e.selectedPlayer.lastName)+" ")]),s("b-container",{staticClass:"current-bid-row"},[s("b-row",[s("b-col",{attrs:{id:"bid-title-row"}},[s("div",{attrs:{id:"bid-title"}},[e._v(" HIGHEST BID ")])])],1),s("b-row",[s("b-col",[s("div",[e._v(" Salary: $"+e._s(e.currentBid.bidSalary)+" ")])]),s("b-col",[s("div",[e._v(" "+e._s(e.currentBid.bidLength)+" Years ")])]),s("b-col",[s("div",[e._v(" "+e._s(e.currentOwner.ownerName)+" ")])])],1),s("b-row",[s("p")]),s("b-row",[s("p")])],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.nomMode,expression:"nomMode"}],attrs:{id:"posSelector"}},[s("span",[e._v("Choose a position")]),s("b-form-select",{staticClass:"mb-3",on:{change:e.lookupPos},model:{value:e.selectedPos,callback:function(t){e.selectedPos=t},expression:"selectedPos"}},[s("b-form-select-option",{attrs:{value:null}},[e._v("Please select a position")]),s("b-form-select-option",{attrs:{value:"QB"}},[e._v("QB")]),s("b-form-select-option",{attrs:{value:"RB"}},[e._v("RB")]),s("b-form-select-option",{attrs:{value:"WR"}},[e._v("WR")]),s("b-form-select-option",{attrs:{value:"TE"}},[e._v("TE")])],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.nomMode,expression:"nomMode"}],attrs:{id:"playerSelector"}},[s("span",[e._v("Choose a player")]),s("b-form-select",{staticClass:"mb-3",on:{change:e.lookupPlayer},model:{value:e.selectedPlayerId,callback:function(t){e.selectedPlayerId=t},expression:"selectedPlayerId"}},[s("b-form-select-option",{attrs:{value:null}},[e._v("Choose a player")]),e._l(e.playerObjectList,(function(t){return s("b-form-select-option",{key:t.playerId,attrs:{value:t.playerId}},[e._v(" "+e._s(t.firstName)+" "+e._s(t.lastName))])}))],2)],1),s("b-container",{attrs:{fluid:""}},[s("b-row",{staticClass:"salaryRow"},[s("span",{staticStyle:{"margin-right":"2em"}},[e._v(" Salary per season: ")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.salaryInput,expression:"salaryInput",modifiers:{number:!0}}],attrs:{id:"salarySelector",type:"number",min:1,max:500},domProps:{value:e.salaryInput},on:{input:function(t){t.target.composing||(e.salaryInput=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),s("b-row",{staticClass:"lengthRow"},[s("b-form-select",{staticClass:"mb-3",attrs:{id:"lengthSelector"},model:{value:e.lengthInput,callback:function(t){e.lengthInput=t},expression:"lengthInput"}},[s("b-form-select-option",{attrs:{value:null}},[e._v("Select number of contract years ")]),s("b-form-select-option",{attrs:{value:"1"}},[e._v("1")]),s("b-form-select-option",{attrs:{value:"2"}},[e._v("2")]),s("b-form-select-option",{attrs:{value:"3"}},[e._v("3")]),s("b-form-select-option",{attrs:{value:"4"}},[e._v("4")]),s("b-form-select-option",{attrs:{value:"5"}},[e._v("5")])],1)],1)],1),s("b-container",[s("b-row",{attrs:{id:"button-row"}},[s("b-button",{attrs:{variant:"outline-primary",disabled:!e.nomFormIsValid},on:{click:e.submitNomination}},[e._v("Nominate")]),s("b-button",{attrs:{variant:"danger",disabled:!e.bidFormIsValid},on:{click:e.submitBid}},[e._v("Bid")]),s("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.userHasPassed,expression:"!userHasPassed"}],attrs:{disabled:!e.iCanPass},on:{click:e.passOnPlayer}},[e._v("Pass")])],1)],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.bidMode,expression:"bidMode"}],attrs:{id:"clock"}},[s("Counter",{attrs:{updateClock:e.loaded,year:e.bidYear,month:e.bidMonth,date:e.bidDate,hour:e.bidHour,minute:e.bidMinute,second:e.bidSecond,millisecond:e.bidMillisecond},on:{timeExpired:e.winPlayer}})],1),s("b-form-checkbox",{directives:[{name:"show",rawName:"v-show",value:!e.userHasPassed,expression:"!userHasPassed"}],attrs:{switch:"",size:"sm"},model:{value:e.passable,callback:function(t){e.passable=t},expression:"passable"}},[e._v("Enable pass button")])],1)},S=[],k=(s("a9e3"),s("ac1f"),s("2532"),s("3ca3"),s("1276"),s("ddb0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("section",[s("b-container",{staticClass:"timer-row"},[s("b-row",[s("b-col",{staticClass:"col-sm-1"}),s("b-col",{staticClass:"hours col-sm-2"},[s("div",{staticClass:"big-num"},[e._v(e._s(e.displayHours)+": ")])]),s("b-col",{staticClass:"minutes col-sm-2"},[s("div",{staticClass:"big-num"},[e._v(" "+e._s(e.displayMinutes)+": ")])]),s("div",[s("b-col",{staticClass:"seconds col-sm-2"},[s("div",{staticClass:"big-num"},[e._v(" "+e._s(e.displaySeconds)+" ")])])],1),s("b-col",{staticClass:"col-sm-1"})],1)],1)],1)])}),N=[],j={props:["year","month","date","hour","minute","second","millisecond","updateClock"],data:function(){return{displayHours:0,displayMinutes:0,displaySeconds:0,expired:!1}},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours},end:function(){return new Date(this.year,this.month,this.date,this.hour,this.minute,this.second,this.millisecond)}},watch:{updateClock:function(){this.showRemaining()}},methods:{showRemaining:function(){var e=this,t=setInterval((function(){var s=new Date,r=e.end.getTime()-s.getTime();r<0&&(clearInterval(t),e.$emit("timeExpired"));var n=Math.floor(r/e._days),a=Math.floor(r%e._days/e._hours),o=Math.floor(r%e._hours/e._minutes),i=Math.floor(r%e._minutes/e._seconds);e.displayMinutes=o<10?"0"+o:o,e.displaySeconds=i<10?"0"+i:i,e.displayHours=a<10?"0"+a:a,e.displayDays=n<10?"0"+n:n}))}}},x=j,O=(s("1b5c"),Object(m["a"])(x,k,N,!1,null,"1c99d024",null)),L=O.exports,B={components:{Counter:L},props:["lotId","ownerList"],created:function(){var e=this;if(!this.$store.state.auth.user){var t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.$cookies.get("token"))}};fetch(this.url+"api/owner/persist",t).then((function(e){return e.json()})).then((function(t){e.jwtUser.user=t,e.$store.commit("SAVE_USER",e.jwtUser)})).then((function(){e.currentUser||e.$router.push("/login")}))}},mounted:function(){var e=this;fetch(this.url+"api/lot/"+this.lotIdNum,{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.bid=t,e.currentBid=e.bid,e.dressLot()})).then((function(){e.currentBid.bidId&&(fetch(e.url+"api/owner/name/"+e.currentBid.bidder,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.owner=t,e.currentOwner=e.owner})),fetch(e.url+"api/pass/"+e.currentBid.playerId,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.passers=t})))}))},data:function(){return{url:"http://localhost:8080/",selectedPos:"",playerObjectList:[],selectedPlayer:Object,selectedPlayerId:0,lengthInput:0,salaryInput:0,bidMode:!1,nomMode:!0,currentBid:Object,currentOwner:Object,bidYear:0,bidMonth:0,bidDate:0,bidHour:0,bidMinute:0,bidSecond:0,bidMillisecond:0,loaded:0,localOwnerList:[],jwtUser:{user:{}},passable:!1,passers:[]}},computed:{passes:function(){return this.passers?this.passers.length:0},iCanPass:function(){return this.passable&&!this.userHasPassed},userHasPassed:function(){return!!this.passers.includes(this.jwtUser.user.ownerName)},currentUser:function(){return this.jwtUser.user?this.jwtUser:this.$store.state.auth.user?this.$store.state.auth.user:null},nomFormIsValid:function(){return this.lengthInput>0&&this.salaryInput>0&&this.salaryInput%1===0&&this.selectedPlayerId>0&&this.nomMode&&(this.salaryInput<=this.currentUser.user.capRoom||this.salaryInput<=this.currentUser.capRoom)&&(this.lengthInput<=this.currentUser.user.yearsLeft||this.lengthInput<=this.currentUser.yearsLeft)},bidFormIsValid:function(){return this.bidMode&&this.lengthInput>0&&this.salaryInput>0&&this.salaryInput%1===0&&this.selectedPlayer.playerId>0&&this.bidMode&&this.bidIsLegal},lotIdNum:function(){return parseInt(this.lotId)},getTimeStamp:function(){var e=new Date,t=e.getFullYear()+","+e.getMonth()+","+e.getDate(),s=e.getHours()+8+","+e.getMinutes()+","+e.getSeconds(),r=t+","+s+",10";return r},bidIsLegal:function(){return this.salaryInput+5*this.lengthInput>this.currentBid.bidSalary+5*this.currentBid.bidLength&&this.currentUser.user.capRoom>=this.salaryInput&&this.currentUser.user.yearsLeft>=this.lengthInput&&this.salaryInput<=this.currentUser.user.capRoom&&this.lengthInput<=this.currentUser.user.yearsLeft}},watch:{passers:function(){this.passers.length>=11&&this.winPlayer()}},methods:{enablePass:function(){this.passable=!0},callForTimer:function(){++this.loaded},lookupPlayerByBid:function(){var e=this;console.log("are we getting here"),console.log(this.lotIdNum),fetch(this.url+"api/players/"+this.currentBid.playerId,{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.selectedPlayer=t}))},dressLot:function(){this.currentBid.bidId&&(this.splitTimeString(),this.engageBidMode(),this.callForTimer(),this.lookupPlayerByBid())},lookupPlayer:function(){var e=this;console.log("are we getting here"),console.log(this.lotIdNum),fetch(this.url+"api/players/"+this.selectedPlayerId,{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.selectedPlayer=t}))},lookupPos:function(){var e=this;fetch(this.url+"api/position/"+this.selectedPos,{method:"get"}).then((function(e){return e.json()})).then((function(t){return e.playerObjectList=t}))},engageBidMode:function(){this.bidMode=!0,this.nomMode=!1},engageNomMode:function(){this.bidMode=!1,this.nomMode=!0},submitNomination:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.$cookies.get("token"))},body:JSON.stringify({playerId:this.selectedPlayerId,bidder:this.currentUser.user.ownerName,bidLength:this.lengthInput,bidSalary:this.salaryInput,expires:this.getTimeStamp})},s={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.$cookies.get("token"))},body:JSON.stringify({playerId:this.selectedPlayerId,ownerId:-1,firstName:this.selectedPlayer.firstName,lastName:this.selectedPlayer.lastName,position:this.selectedPlayer.position,salary:0,length:0,contractValue:0,espnId:this.selectedPlayer.espnId})};Promise.all(fetch(this.url+"api/nominate",t).then((function(e){return e.json()})).then((function(t){e.bid=t,e.currentBid=e.bid,e.splitTimeString(),e.callForTimer(),e.lotCleanup()})),fetch(this.url+"api/nominate",s)).then((function(){e.$router.go()}))},passOnPlayer:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.$cookies.get("token"))}};fetch(this.url+"api/pass/"+this.currentBid.playerId,t).then((function(e){return e.json()})).then((function(t){e.passers=t}))},lotCleanup:function(){var e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({lotId:this.lotIdNum,bidId:this.currentBid.bidId})};fetch(this.url+"api/lot/",e),this.engageBidMode(),this.salaryInput=0,this.lengthInput=""},submitBid:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.$cookies.get("token"))},body:JSON.stringify({playerId:this.selectedPlayer.playerId,bidder:this.currentUser.user.ownerName,bidLength:this.lengthInput,bidSalary:this.salaryInput,expires:this.getTimeStamp})};fetch(this.url+"api/bid",t).then((function(e){return e.json()})).then((function(t){e.bid=t,e.currentBid=e.bid,e.splitTimeString(),e.callForTimer(),e.lotCleanup()})).then((function(){e.engageBidMode(),e.$router.go()}))},winPlayer:function(){var e=this,t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({bidId:this.currentBid.bidId,playerId:this.currentBid.playerId,bidder:this.currentBid.bidder,bidLength:this.currentBid.bidLength,bidSalary:this.currentBid.bidSalary,expires:this.getTimeStamp})};fetch(this.url+"api/win/player",t);var s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({bidId:this.currentBid.bidId,bidder:this.currentBid.bidder,playerId:this.currentBid.playerId,bidLength:this.currentBid.bidLength,bidSalary:this.currentBid.bidSalary,expires:this.getTimeStamp})};fetch(this.url+"api/win/owner",s).then((function(){var t={method:"PUT",headers:{"Content-Type":"application/json"}};fetch(e.url+"api/lot/clear/"+e.lotId,t).then((function(){e.selectedPos="",e.selectedPlayer="",e.bidMode=!1,e.nomMode=!0,e.$emit("newWinner")}))}))},splitTimeString:function(){var e=this.currentBid.expires.split(",");this.bidYear=Number(e[0]),this.bidMonth=Number(e[1]),this.bidDate=Number(e[2]),this.bidHour=Number(e[3]),this.bidMinute=Number(e[4]),this.bidSecond=Number(e[5]),++this.loaded}}},M=B,$=(s("2623"),Object(m["a"])(M,P,S,!1,null,"c02eea94",null)),T=$.exports,U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-table",{attrs:{striped:"",hover:"",items:e.ownerList,fields:e.rows}})],1)},E=[],R={data:function(){return{url:"http://localhost:8080/",ownerList:[],rows:[{key:"ownerName",label:"Owner",sortable:!0},{key:"capRoom",label:"Cap Space",sortable:!0},{key:"yearsLeft",label:"Years Left",sortable:!0}]}},mounted:function(){this.showScore()},watch:{tableBuilder:function(){this.showScore()}},methods:{showScore:function(){var e=this;fetch(this.url+"api/owner/scoreboard/",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.ownerList=t}))}}},D=R,A=Object(m["a"])(D,U,E,!1,null,null,null),H=A.exports,F=s("6c8b"),q=s.n(F),G=(s("54ba"),{name:"Home",components:{PlayerDropdown:T,BudgetBoard:H},data:function(){return{backgroundUrl:q.a,user:new c("",""),wins:0,owners:[],content:""}},mounted:{assertLogin:function(){localStorage.user&&(this.user=localStorage.user),this.currentUser||this.$router.push("/login")}},methods:{checkScore:function(){this.wins++},setAuthenticated:function(e){this.authenticated=e},logout:function(){this.authenticated=!1}},computed:{currentUser:function(){return this.$store.state.auth.user},loggedIn:function(){return!!this.currentUser}}}),V=G,J=(s("c440"),Object(m["a"])(V,I,C,!1,null,"a002e934",null)),Y=J.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-container",{staticClass:"table-page",attrs:{fluid:""}},[s("div",[s("b-container",{staticClass:"team-select-row",attrs:{fluid:""}},[s("span",[e._v(" Select another team: ")]),s("b-form-select",{staticClass:"col-sm-4",attrs:{id:"ownerSelector"},on:{change:e.showARoster},model:{value:e.selectedOwnerName,callback:function(t){e.selectedOwnerName=t},expression:"selectedOwnerName"}},e._l(e.ownerList,(function(t){return s("b-form-select-option",{key:t.ownerId,attrs:{value:t.ownerName}},[e._v(" "+e._s(t.ownerName)+" ")])})),1)],1)],1),s("div",{attrs:{id:"table"}},[s("b-table",{attrs:{striped:"",hover:"",items:e.playerList,fields:e.rows}})],1)])],1)},W=[],Q={name:"Rosters",data:function(){return{ownerList:[],playerList:[],selectedOwnerName:"",url:"http://localhost:8080/",rows:[{key:"firstName",label:"First Name",sortable:!0},{key:"lastName",label:"Last Name",sortable:!0},{key:"position",label:"Position",sortable:!0},{key:"salary",label:"Annual Salary",sortable:!0},{key:"length",label:"Contract Length (Years)",sortable:!0},{key:"contractValue",label:"Contract Value",sortable:!0}]}},components:{},methods:{showMyRoster:function(){var e=this;fetch(this.url+"api/team/"+this.currentUser.user.ownerName,{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.playerList=t}))},showARoster:function(){var e=this;fetch(this.url+"api/team/"+this.selectedOwnerName,{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.playerList=t}))},getOwnerList:function(){var e=this;fetch(this.url+"api/owner/scoreboard/",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.ownerList=t}))}},mounted:function(){this.showMyRoster(),this.getOwnerList()},computed:{currentUser:function(){return this.$store.state.jwtUser.user?this.$store.state.jwtUser.user:this.$store.state.auth.user?this.$store.state.auth.user:null}}},K=Q,X=(s("6c8f"),Object(m["a"])(K,z,W,!1,null,null,null)),Z=X.exports;r["default"].use(o["a"]);var ee=new o["a"]({mode:"history",routes:[{path:"/",name:"home",component:Y},{path:"/error",name:"home",component:Y},{path:"/home",component:Y},{path:"/rosters",component:Z},{path:"/login",component:f},{path:"/register",component:_}]});ee.beforeEach((function(e,t,s){var r=["/login","/register","/home","/rosters"],n=!r.includes(e.path),a=localStorage.getItem("user");n&&!a?s("/login"):s()}));var te=s("5f5b"),se=s("2f62"),re=s("bee2"),ne=s("bc3a"),ae=s.n(ne);r["default"].use(a.a);var oe="http://localhost:8080/api/",ie=function(){function e(){Object(u["a"])(this,e)}return Object(re["a"])(e,[{key:"login",value:function(e){return ae.a.post(oe+"login",{username:e.username,password:e.password}).then((function(e){return r["default"].$cookies.set("token",e.data.token),e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return ae.a.post(oe+"register",{username:e.username,email:e.email,password:e.password})}}]),e}(),le=new ie,ue=JSON.parse(localStorage.getItem("user")),ce=ue?{status:{loggedIn:!0},user:ue}:{status:{loggedIn:!1},user:null},de={namespaced:!0,state:ce,actions:{login:function(e,t){var s=e.commit;return le.login(t).then((function(e){return s("loginSuccess",e),Promise.resolve(e)}),(function(e){return s("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;le.logout(),t("logout")},register:function(e,t){var s=e.commit;return le.register(t).then((function(e){return s("registerSuccess"),Promise.resolve(e.data)}),(function(e){return s("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};r["default"].use(se["a"]);var he=new se["a"].Store({modules:{auth:de},state:{jwtUser:{user:{}}},mutations:{SAVE_USER:function(e,t){e.jwtUser.user=t}}}),me=(s("f9e3"),s("7bb1")),pe=(s("2dd8"),s("ab8b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Menu",{attrs:{id:"nav"}}),s("router-view")],1)}),fe=[],be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-navbar",{attrs:{toggleable:"",type:"dark",variant:"dark"}},[s("b-navbar-brand",{attrs:{href:"#"}},[e._v("Cap'n Crunch")]),s("b-navbar-toggle",{attrs:{target:"navbar-toggle-collapse"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.expanded;return[s("div",t?[s("font-awesome-icon",{attrs:{icon:"chevron-up"}})]:[s("font-awesome-icon",{attrs:{icon:"chevron-down"}})],1)]}}])}),s("b-collapse",{attrs:{id:"navbar-toggle-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",[s("router-link",{attrs:{to:"/home"}},[e._v("Home")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"/rosters"}},[e._v("Rosters")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"/login"}},[e._v("Log in")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)],1)],1)],1)},ve=[],ge={name:"Menu",props:{},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},we=ge,ye=(s("7967"),Object(m["a"])(we,be,ve,!1,null,"edff983a",null)),_e=ye.exports,Ie={name:"App",components:{Menu:_e},data:function(){return{authenticated:!1}},methods:{},computed:{}},Ce=Ie,Pe=Object(m["a"])(Ce,pe,fe,!1,null,"4b10ed34",null),Se=Pe.exports,ke=s("ecee"),Ne=s("ad3d"),je=s("c074");ke["c"].add(je["c"],je["f"],je["g"],je["d"],je["e"],je["a"],je["b"]),r["default"].use(te["a"]),r["default"].use(a.a),r["default"].config.productionTip=!1,r["default"].use(me["a"]),r["default"].component("font-awesome-icon",Ne["a"]),new r["default"]({router:ee,store:he,render:function(e){return e(Se)}}).$mount("#app")},"6c8b":function(e,t,s){e.exports=s.p+"img/20950.bb46ed79.jpg"},"6c8f":function(e,t,s){"use strict";var r=s("3718"),n=s.n(r);n.a},7967:function(e,t,s){"use strict";var r=s("9ee3"),n=s.n(r);n.a},"796f":function(e,t,s){},"84e0":function(e,t,s){},"9ee3":function(e,t,s){},"9fd3":function(e,t,s){"use strict";var r=s("0248"),n=s.n(r);n.a},c440:function(e,t,s){"use strict";var r=s("84e0"),n=s.n(r);n.a}});
//# sourceMappingURL=app.4aa3c524.js.map