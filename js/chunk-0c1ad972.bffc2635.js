(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c1ad972"],{"1dde":function(e,t,a){var c=a("d039"),n=a("b622"),r=a("2d00"),l=n("species");e.exports=function(e){return r>=51||!c((function(){var t=[],a=t.constructor={};return a[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,a){"use strict";var c=a("c04e"),n=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var l=c(t);l in e?n.f(e,l,r(0,a)):e[l]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),n=a("d039"),r=a("e8b5"),l=a("861d"),o=a("7b0b"),s=a("50c4"),i=a("8418"),d=a("65f0"),u=a("1dde"),b=a("b622"),m=a("2d00"),h=b("isConcatSpreadable"),f=9007199254740991,O="Maximum allowed index exceeded",j=m>=51||!n((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),p=u("concat"),g=function(e){if(!l(e))return!1;var t=e[h];return void 0!==t?!!t:r(e)},v=!j||!p;c({target:"Array",proto:!0,forced:v},{concat:function(e){var t,a,c,n,r,l=o(this),u=d(l,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(r=-1===t?l:arguments[t],g(r)){if(n=s(r.length),b+n>f)throw TypeError(O);for(a=0;a<n;a++,b++)a in r&&i(u,b,r[a])}else{if(b>=f)throw TypeError(O);i(u,b++,r)}return u.length=b,u}})},b0c0:function(e,t,a){var c=a("83ab"),n=a("9bf2").f,r=Function.prototype,l=r.toString,o=/^\s*function ([^ (]*)/,s="name";c&&!(s in r)&&n(r,s,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(e){return""}}})},b789:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),n={class:"container"},r={class:"row justify-content-center"},l={class:"col-md-6"},o={class:"table align-middle"},s=Object(c["h"])("thead",null,[Object(c["h"])("tr",{style:{"text-align":"center"}},[Object(c["h"])("th",{style:{width:"100px"}},"刪除"),Object(c["h"])("th",null,"品名"),Object(c["h"])("th",{style:{width:"150px"}},"數量/單位"),Object(c["h"])("th",{style:{width:"100px"}},"單價")])],-1),i={key:0,class:"fas fa-spinner fa-pulse"},d=Object(c["g"])(" x "),u={class:"input-group input-group-sm"},b={class:"input-group mb-3"},m={class:"text-end"},h=Object(c["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),f={class:"text-end"},O={class:"col-md-6"},j={class:"mb-3"},p=Object(c["h"])("label",{for:"email"},"E-mail",-1),g={class:"mb-3"},v=Object(c["h"])("label",{for:"name"},"收件人姓名",-1),y={class:"mb-3"},x=Object(c["h"])("label",{for:"tel"},"收件人電話",-1),V={class:"mb-3"},w=Object(c["h"])("label",{for:"address"},"收件人地址",-1),C={class:"mb-3"},k=Object(c["h"])("label",{for:"message",class:"form-label"},"留言",-1),L={class:"text-end"};function S(e,t,a,S,I,U){var q=this,A=Object(c["A"])("Loading"),E=Object(c["A"])("Field"),F=Object(c["A"])("ErrorMessage"),$=Object(c["A"])("Form");return Object(c["t"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(A,{active:I.isLoading},null,8,["active"]),Object(c["h"])("div",n,[Object(c["h"])("div",r,[Object(c["h"])("div",l,[Object(c["h"])("table",o,[s,Object(c["h"])("tbody",null,[I.cart.carts?(Object(c["t"])(!0),Object(c["e"])(c["a"],{key:0},Object(c["y"])(I.cart.carts,(function(t){return Object(c["t"])(),Object(c["e"])("tr",{key:t.id},[Object(c["h"])("td",null,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return U.removeCartItem(t.id)},disabled:I.loadingStatus.loadingItem===t.id},[I.loadingStatus.loadingItem===t.id?(Object(c["t"])(),Object(c["e"])("i",i)):Object(c["f"])("",!0),d],8,["onClick","disabled"])]),Object(c["h"])("td",null,Object(c["D"])(t.product.title),1),Object(c["h"])("td",null,[Object(c["h"])("div",u,[Object(c["h"])("div",b,[Object(c["L"])(Object(c["h"])("input",{min:"1",type:"number",onChange:function(a){return e.updateCart(t)},disabled:t.id===I.loadingStatus.loadingItem,"onUpdate:modelValue":function(e){return t.qty=e},class:"form-control"},null,40,["onChange","disabled","onUpdate:modelValue"]),[[c["G"],t.qty,void 0,{number:!0}]])])])]),Object(c["h"])("td",m,Object(c["D"])(t.product.price),1)])})),128)):Object(c["f"])("",!0)]),Object(c["h"])("tfoot",null,[Object(c["h"])("tr",null,[h,Object(c["h"])("td",f,Object(c["D"])(I.cart.total),1)])])])]),Object(c["h"])("div",O,[Object(c["h"])($,{onSubmit:U.submitOrder,ref:"form"},{default:Object(c["K"])((function(e){var a,n=e.errors;return[Object(c["h"])("div",j,[p,Object(c["h"])(E,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":n["email"]}],placeholder:"請輸入您的 Email",rules:"email|required",modelValue:I.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return I.form.user.email=e})},null,8,["class","modelValue"]),Object(c["h"])(F,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",g,[v,Object(c["h"])(E,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":n["姓名"]}],placeholder:"請輸入您的姓名",rules:"required",modelValue:I.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return I.form.user.name=e})},null,8,["class","modelValue"]),Object(c["h"])(F,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",y,[x,Object(c["h"])(E,{id:"tel",name:"電話",type:"text",class:["form-control",{"is-invalid":n["電話"]}],placeholder:"請輸入您的電話",rules:"required|min:8|max:10",modelValue:I.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return I.form.user.tel=e})},null,8,["class","modelValue"]),Object(c["h"])(F,{name:"電話",class:"invalid-feedback"})]),Object(c["h"])("div",V,[w,Object(c["h"])(E,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":n["地址"]}],placeholder:"請輸入您的地址",rules:"required",modelValue:I.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return I.form.user.address=e})},null,8,["class","modelValue"]),Object(c["h"])(F,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",C,[k,Object(c["L"])(Object(c["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=function(e){return I.form.message=e})},null,512),[[c["G"],I.form.message]])]),Object(c["h"])("div",L,[Object(c["h"])("button",{type:"submit",class:"btn btn-success",disabled:0===(null===(a=q.cart.carts)||void 0===a?void 0:a.length)}," 送出訂單 ",8,["disabled"])])]})),_:1},8,["onSubmit"])])])])],64)}a("99af");var I={name:"Cart",data:function(){return{loadingStatus:{loadingItem:""},isLoading:!1,cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},created:function(){this.getCart()},methods:{getCart:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ccyy915","/cart");this.$http.get(t).then((function(t){t.data.success?(e.cart=t.data.data,e.isLoading=!1):alert(t.data.message)}))},removeCartItem:function(e){var t=this;this.isLoading=!0,this.loadingStatus.loadingItem=e;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ccyy915","/cart/").concat(e);this.$http.delete(a).then((function(e){e.data.success?(alert(e.data.message),t.getCart()):alert(e.data.message),t.loadingStatus.loadingItem="loading",t.isLoading=!1}))},submitOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ccyy915","/order"),a=this.form;this.$http.post(t,{data:a}).then((function(t){console.log(t),t.data.success?(alert(t.data.message),e.$refs.form.resetForm(),e.getCart()):alert(t.data.message),e.isLoading=!1}))}}};I.render=S;t["default"]=I}}]);
//# sourceMappingURL=chunk-0c1ad972.bffc2635.js.map