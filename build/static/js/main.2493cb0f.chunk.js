(this.webpackJsonpzomato=this.webpackJsonpzomato||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(34),a=n.n(c),i=n(10),r=n(6),l=n(2),o=n(3),j=n(5),d=n(4),h=(n(42),n(0)),b=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this)).handleLogout=function(){s.setState({userdata:""}),localStorage.removeItem("userdata"),localStorage.removeItem("ltk"),s.props.history.push("/")},s.conditionlHeader=function(){if(s.state.userdata.name){var e=s.state.userdata,t=[e.name,e.email,e.phone,e.role];return localStorage.setItem("userdata",t),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("button",{className:"btn btn-info",children:["Hi ",t[0]]}),Object(h.jsx)("button",{onClick:s.handleLogout,className:"btn btn-danger",children:"Logout"})]})}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.b,{to:"/login",className:"btn btn-success",children:"Login"})," \xa0\xa0",Object(h.jsx)(i.b,{to:"/register",className:"btn btn-info",children:"Register"})]})},s.state={userdata:""},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{id:"header",children:[Object(h.jsx)("div",{id:"brand",children:Object(h.jsx)(i.b,{to:"/",children:"EduMato"})}),Object(h.jsx)("div",{className:"social",children:this.conditionlHeader()})]})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://developerjwt.herokuapp.com/api/auth/userinfo",{method:"GET",headers:{"x-access-token":localStorage.getItem("ltk")}}).then((function(e){return e.json()})).then((function(t){e.setState({userdata:t})}))}}]),n}(s.Component),u=Object(r.e)(b),m=function(){return Object(h.jsxs)("div",{style:{width:"100%",display:"inline-block"},children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("center",{children:[Object(h.jsx)("h3",{children:"\xa9 Developer Funnel"}),Object(h.jsx)("a",{href:"www.facebook.com",children:Object(h.jsx)("img",{src:"https://i.ibb.co/wyH9JxS/facebook.png",className:"socialIcon"})}),Object(h.jsx)("a",{href:"www.instagram.com",children:Object(h.jsx)("img",{src:"https://i.ibb.co/w0kZ5Hf/insta.png",className:"socialIcon"})})]})]})},O=(n(49),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).renderCity=function(e){if(e)return e.map((function(e){return Object(h.jsx)("option",{value:e.state_id,children:e.state},e.location_id)}))},s.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(h.jsxs)("option",{value:e.restaurant_id,children:[e.restaurant_name," | ",e.address]},e.restaurant_id)}))},s.handleDetails=function(e){console.log("in search>>>>",s.props),s.props.history.push("/details/".concat(e.target.value))},s.handleRest=function(e){console.log(e.target.value),fetch("".concat("http://localhost:8127/restaurants?city=").concat(e.target.value),{method:"GET"}).then((function(e){return e.json()})).then((function(e){s.setState({restaurants:e})}))},console.log(">>>inside constructor"),s.state={locations:"",restaurants:""},s}return Object(o.a)(n,[{key:"render",value:function(){return console.log(">>>inside render",this.state),Object(h.jsxs)("div",{id:"search",children:[Object(h.jsx)("div",{id:"logo",children:Object(h.jsx)("span",{children:"e!"})}),Object(h.jsx)("div",{id:"heading",children:"Find Th\xe9 Be\u0161t Pla\u010de N\xea\xe4r Yo\xfc"}),Object(h.jsxs)("div",{id:"dropdown",children:[Object(h.jsxs)("select",{onChange:this.handleRest,children:[Object(h.jsx)("option",{children:"-------SELECT CITY-----"}),this.renderCity(this.state.locations)]}),Object(h.jsxs)("select",{className:"restDrop",onChange:this.handleDetails,children:[Object(h.jsx)("option",{children:"-------SELECT RESTAURANTS-----"}),this.renderRestaurants(this.state.restaurants)]})]})]})}},{key:"componentDidMount",value:function(){var e=this;console.log(">>>inside componentDidMount"),fetch("http://localhost:8127/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({locations:t})}))}}]),n}(s.Component)),p=Object(r.e)(O),x=function(e){return Object(h.jsx)("div",{class:"mainTileContainer",children:function(e){var t=e.quickData;if(t)return t.map((function(e){return Object(h.jsx)(i.b,{to:"/list/".concat(e.mealtype_id),children:Object(h.jsxs)("div",{class:"tileContainer",children:[Object(h.jsx)("div",{class:"tileComponent1",children:Object(h.jsx)("img",{src:e.meal_image,alt:"snacks"})}),Object(h.jsxs)("div",{class:"tileComponent2",children:[Object(h.jsx)("div",{class:"componentHeading",children:Object(h.jsx)("p",{children:e.mealtype})}),Object(h.jsx)("div",{class:"componentSubHeading",children:e.content})]})]})},e.mealtype_id)}))}(e)})},v=(n(50),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={MealType:""},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"QuickSearch",children:[Object(h.jsx)("span",{id:"QuickHeading",children:"Quick Searches"}),Object(h.jsx)("span",{id:"QuickSubHeading",children:"Discover Restaurants By Type"}),Object(h.jsx)(x,{quickData:this.state.MealType})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8127/mealType",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({MealType:t})}))}}]),n}(s.Component)),f=function(e){return console.log("in home>>>>>",e),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsx)(p,{}),Object(h.jsx)(v,{})]})},g=(n(51),function(e){return Object(h.jsx)(h.Fragment,{children:function(e){var t=e.restData;return t?t.length>0?t.map((function(e){return Object(h.jsxs)("div",{class:"cardContainer",children:[Object(h.jsxs)("div",{class:"component1",children:[Object(h.jsx)("img",{src:e.restaurant_thumb,alt:e.restaurant_name}),Object(h.jsx)(i.b,{class:"btn btn-danger",to:"/details/".concat(e.restaurant_id),children:"Proceed"})]}),Object(h.jsxs)("div",{class:"component2",children:[Object(h.jsx)("h2",{children:e.restaurant_name}),Object(h.jsx)("p",{children:e.address}),Object(h.jsxs)("p",{children:["Rating: ",e.average_rating," star"]}),Object(h.jsxs)("p",{children:["Cost: Rs ",e.cost,"/2 person"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{class:"label label-primary",children:e.mealTypes[0].mealtype_name}),"\xa0",Object(h.jsx)("span",{class:"label label-danger",children:e.mealTypes[1].mealtype_name})]}),Object(h.jsxs)("div",{className:"cuisine_type",children:[Object(h.jsx)("span",{class:"label label-info",children:e.cuisines[0].cuisine_name}),"\xa0",Object(h.jsx)("span",{class:"label label-success",children:e.cuisines[1].cuisine_name})]})]})]})})):Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"No Data Found"})}):Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"/images/loader.gif",alt:"loader"})})}(e)})}),y=n(11),N=n.n(y),k=(n(22),"http://localhost:8127/filter"),C=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).cuisineFilter=function(t){var n,s=e.props.mealId,c=t.target.value;n=""===c?"".concat(k,"/").concat(s):"".concat(k,"/").concat(s,"?cuisine=").concat(c),N.a.get(n).then((function(t){e.props.restPerCuisine(t.data)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("center",{children:Object(h.jsx)("h3",{children:"Cuisine Filter"})}),Object(h.jsxs)("div",{className:"radioButton",onChange:this.cuisineFilter,children:[Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"1"}),"North Indian"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"2"}),"South Indian"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"3"}),"Chinese"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"4"}),"Fast Food"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"5"}),"Street Food"]})]})]})}}]),n}(s.Component),S=C,I="http://localhost:8127/filter",w=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).costFilter=function(t){var n,s=sessionStorage.getItem("mealId"),c=t.target.value.split("-"),a=c[0],i=c[1];n=""===t.target.value?"".concat(I,"/").concat(s):"".concat(I,"/").concat(s,"?lcost=").concat(a,"&hcost=").concat(i),N.a.get(n).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("center",{children:Object(h.jsx)("h3",{children:"Cost Filter"})}),Object(h.jsxs)("div",{className:"radioButton",onChange:this.costFilter,children:[Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"100-300"}),"100-300"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"301-500"}),"301-500"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"501-700"}),"501-700"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"701-1500"}),"701-1500"]})]})]})}}]),n}(s.Component),_=w,F="http://localhost:8127/filter",D=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).sortFilter=function(t){var n,s=sessionStorage.getItem("mealId"),c=t.target.value;n=""===c?"".concat(F,"/").concat(s):"".concat(F,"/").concat(s,"?sortKey=").concat(c),N.a.get(n).then((function(t){e.props.restPerSort(t.data)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("center",{children:Object(h.jsx)("h3",{children:"Sort Filter"})}),Object(h.jsxs)("div",{className:"radioButton",onChange:this.sortFilter,children:[Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"-1"}),"High To Low"]}),Object(h.jsxs)("label",{class:"radio",children:[Object(h.jsx)("input",{type:"radio",name:"cuisine",value:"1"}),"Low To High"]})]})]})}}]),n}(s.Component),T=D,P=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).setDataPerFilter=function(e){s.setState({restList:e})},s.state={restList:""},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsx)("p",{class:"heading",children:"Listing Page"}),Object(h.jsxs)("div",{id:"main",children:[Object(h.jsxs)("div",{class:"filter",children:[Object(h.jsx)("center",{children:Object(h.jsx)("h2",{children:"Filters"})}),Object(h.jsx)("hr",{}),Object(h.jsx)(S,{mealId:this.props.match.params.id,restPerCuisine:function(t){e.setDataPerFilter(t)}}),Object(h.jsx)(_,{restPerCost:function(t){e.setDataPerFilter(t)}}),Object(h.jsx)(T,{restPerSort:function(t){e.setDataPerFilter(t)}})]}),Object(h.jsx)("div",{class:"content",children:Object(h.jsx)(g,{restData:this.state.restList})})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;sessionStorage.setItem("mealId",t),N.a.get("".concat("http://localhost:8127/filter","/").concat(t)).then((function(t){e.setState({restList:t.data})}))}}]),n}(s.Component),L=n(24),M=n.n(L),B=n(37),R=(n(71),n(15)),E=(n(72),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).orderId=[],e.addItem=function(t){e.orderId.push("".concat(t)),e.props.finalOrder(e.orderId)},e.removeItem=function(t){e.orderId.splice(e.orderId.indexOf(t.toString()),1),e.props.finalOrder(e.orderId)},e.renderCart=function(e){if(e)return e.map((function(e,t){return Object(h.jsxs)("b",{children:[e," \xa0 \xa0"]},t)}))},e.renderMenu=function(t){var n=t.menuData;if(n)return n.map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"col-md-7",children:[Object(h.jsx)("b",{children:t.menu_id})," \xa0",Object(h.jsx)("img",{src:t.menu_image,alt:t.menu_name,style:{height:80,width:80}}),"\xa0 \xa0",t.menu_name,"-Rs.",t.menu_price,Object(h.jsx)("p",{children:t.description})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("button",{className:"cartBtn btn btn-primary",onClick:function(){e.addItem(t.menu_id)},children:Object(h.jsx)("span",{className:"glyphicon glyphicon-plus"})})," \xa0",Object(h.jsx)("button",{className:"cartBtn btn btn-danger",onClick:function(){e.removeItem(t.menu_id)},children:Object(h.jsx)("span",{className:"glyphicon glyphicon-minus"})})]})]},t.menu_id)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return console.log(">>>menu",this.props),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"col-md-12 bg-success",children:[Object(h.jsx)("h2",{children:"Item Added"}),"Item Number ",this.renderCart(this.orderId)," added"]}),Object(h.jsx)("div",{className:"col-md-12 bg-info",children:this.renderMenu(this.props)})]})}}]),n}(s.Component)),A=E,H=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this)).addToCart=function(e){s.setState({userItem:e})},s.proceed=function(){sessionStorage.setItem("menu",s.state.userItem),s.props.history.push("/placeOrder/".concat(s.state.details.restaurant_name))},s.state={details:"",menulist:"",userItem:""},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.details;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsxs)("div",{className:"main",children:[Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("div",{id:"imgDiv",children:Object(h.jsx)("img",{src:t.restaurant_thumb})}),Object(h.jsxs)("div",{id:"textDiv",children:[Object(h.jsx)("h1",{children:this.state.details.restaurant_name}),Object(h.jsx)("i",{className:"fas fa-star checked"}),Object(h.jsx)("i",{className:"fas fa-star checked"}),Object(h.jsx)("i",{className:"fas fa-star checked"}),Object(h.jsx)("i",{className:"fas fa-star checked"}),Object(h.jsx)("i",{className:"far fa-star"}),Object(h.jsx)("span",{children:"289 Customer Reviews"}),Object(h.jsx)("h3",{children:Object(h.jsx)("strike",{children:"Old Price 180"})}),Object(h.jsxs)("h3",{children:["New Price ",t.cost]}),Object(h.jsxs)("h3",{children:["Best Taste of ",t.restaurant_name," At your Door or DineIn"]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"icon",children:[Object(h.jsx)("img",{src:"https://i.ibb.co/0KzLdwC/No-contact-delivery-final-CB432269791.png",alt:"icon"}),Object(h.jsx)("p",{children:"Contact Less Delivery"})]}),Object(h.jsxs)("div",{class:"icon",children:[Object(h.jsx)("img",{src:"https://i.ibb.co/kgcsZ3z/icon-amazon-delivered-CB485933725.png",alt:"icon"}),Object(h.jsx)("p",{children:"Free Home Delivery"})]})]}),Object(h.jsx)("h2",{className:"stock",children:"Available Now"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"btn btn-atc",children:"Back"}),Object(h.jsx)("button",{className:"btn btn-checkout",onClick:this.proceed,children:"Checkout"})]})]})]}),Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)(R.d,{children:[Object(h.jsxs)(R.b,{children:[Object(h.jsx)(R.a,{children:"Details"}),Object(h.jsx)(R.a,{children:"Contact"}),Object(h.jsx)(R.a,{children:"Menu"})]}),Object(h.jsxs)(R.c,{children:[Object(h.jsx)("h2",{children:t.restaurant_name}),Object(h.jsx)("p",{children:"Manali is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"})]}),Object(h.jsxs)(R.c,{children:[Object(h.jsx)("h2",{children:t.address}),Object(h.jsx)("h2",{children:"Contact No: 87665765886"})]}),Object(h.jsx)(R.c,{children:Object(h.jsx)(A,{menuData:this.state.menulist,finalOrder:function(t){e.addToCart(t)}})})]})})]})]})}},{key:"componentDidMount",value:function(){var e=Object(B.a)(M.a.mark((function e(){var t,n,s;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,N.a.get("".concat("http://localhost:8127/restaurant","/").concat(t));case 3:return n=e.sent,e.next=6,N.a.get("".concat("http://localhost:8127/menu","/").concat(t));case 6:s=e.sent,this.setState({details:n.data[0],menulist:s.data});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(s.Component),J=H,z=n(17),G=(n(73),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleSubmit=function(){fetch("http://localhost:8127/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(s.state)}).then(console.log("going for payment"))},s.renderItems=function(e){if(e)return e.map((function(e,t){return Object(h.jsxs)("div",{className:"orderItems",children:[Object(h.jsx)("img",{src:e.img,alt:e.name}),Object(h.jsx)("h3",{children:e.name})]},t)}))},s.handleChange=function(e){s.setState(Object(z.a)({},e.target.name,e.target.value))},s.state={id:Math.floor(1e5*Math.random()),rest_name:s.props.match.params.restName,name:localStorage.getItem("userdata")?localStorage.getItem("userdata").split(",")[0]:"",phone:localStorage.getItem("userdata")?localStorage.getItem("userdata").split(",")[2]:"",email:localStorage.getItem("userdata")?localStorage.getItem("userdata").split(",")[1]:"",cost:0,address:"Hno123",menuItems:""},s}return Object(o.a)(n,[{key:"render",value:function(){return null==localStorage.getItem("ltk")?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsx)("h2",{children:"Login First to Place Booking"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"panel panel-primary",children:[Object(h.jsx)("div",{className:"panel-heading",children:"Place Order"}),Object(h.jsx)("div",{className:"panel-body",children:Object(h.jsx)("form",{action:"http://zompay.herokuapp.com/paynow",method:"POST",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-12",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Phone"}),Object(h.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Address"}),Object(h.jsx)("input",{className:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]})})]}),this.renderItems(this.state.menuItems),Object(h.jsx)("input",{type:"hidden",name:"amount",value:this.state.cost}),Object(h.jsx)("input",{type:"hidden",name:"id",value:this.state.id}),Object(h.jsx)("input",{type:"hidden",name:"hotel_name",value:this.state.rest_name}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("h2",{children:["Total Cost is Rs.",this.state.cost]})})}),Object(h.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,type:"submit",children:"Place order"})]})})})]})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),n=[];t.split(",").map((function(e){return n.push(parseInt(e)),"ok"})),fetch("http://localhost:8127/menuItem",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){var n=[],s=0;t.map((function(e){var t={};return s+=parseInt(e.menu_price),t.name=e.menu_name,t.img=e.menu_image,n.push(t),"ok"})),e.setState({cost:s,menuItems:n})}))}}]),n}(s.Component));var Q=function(e){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("center",{children:Object(h.jsx)("h2",{children:"Orders List"})}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"OrderId"}),Object(h.jsx)("th",{children:"RestName"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Phone"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Cost"}),Object(h.jsx)("th",{children:"Date"}),Object(h.jsx)("th",{children:"Status"}),Object(h.jsx)("th",{children:"BankName"})]})}),Object(h.jsx)("tbody",{children:function(e){var t=e.bookData;if(t)return t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.id}),Object(h.jsx)("td",{children:e.rest_name}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.phone}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.cost}),Object(h.jsx)("td",{children:e.date}),Object(h.jsx)("td",{children:e.bank_status}),Object(h.jsx)("td",{children:e.bank})]},e.id)}))}(e)})]})]})},q=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={orders:"",status:"Pending"},s}return Object(o.a)(n,[{key:"render",value:function(){return null==localStorage.getItem("ltk")?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsx)("h2",{children:"Login First to See Booking"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsx)(Q,{bookData:this.state.orders})]})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.location){var t=this.props.location.search;if(t){var n={date:t.split("&")[2].split("=")[1],bank_status:t.split("&")[0].split("=")[1],bank:t.split("&")[3].split("=")[1]},s=t.split("&")[1].split("=")[1].split("_")[1];fetch("".concat("http://localhost:8127/updateStatus","/").concat(s),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){e.setState({status:"Delivered"})}))}}N.a.get("http://localhost:8127/orders").then((function(t){e.setState({orders:t.data})}))}}]),n}(s.Component),K=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleSubmit=function(){fetch("https://developerjwt.herokuapp.com/api/auth/login",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(s.state)}).then((function(e){return e.json()})).then((function(e){!1===e.auth?s.setState({message:e.token}):(localStorage.setItem("ltk",e.token),s.props.history.push("/"))}))},s.handleChange=function(e){s.setState(Object(z.a)({},e.target.name,e.target.value))},s.state={password:"",email:"aakash@gmail.com",message:""},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"panel panel-success",children:[Object(h.jsx)("div",{className:"panel-heading",children:"Login"}),Object(h.jsxs)("div",{className:"panel-body",children:[Object(h.jsx)("h3",{style:{color:"red"},children:this.state.message}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-12",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange})]})})]}),Object(h.jsx)("button",{className:"btn btn-info",onClick:this.handleSubmit,children:"Login"})]})]})]})]})]})}}]),n}(s.Component),U=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleSubmit=function(){fetch("https://developerjwt.herokuapp.com/api/auth/register",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(s.state)}).then(s.props.history.push("/login"))},s.handleChange=function(e){s.setState(Object(z.a)({},e.target.name,e.target.value))},s.state={name:"Aakash",phone:"987654324",email:"aakash@gmail.com",password:""},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"panel panel-primary",children:[Object(h.jsx)("div",{className:"panel-heading",children:"Register"}),Object(h.jsx)("div",{className:"panel-body",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-12",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Phone"}),Object(h.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange})]})})]}),Object(h.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Register"})]})})]})]})]})}}]),n}(s.Component),Y=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",component:f}),Object(h.jsx)(r.a,{path:"/list/:id",component:P}),Object(h.jsx)(r.a,{path:"/details/:id",component:J}),Object(h.jsx)(r.a,{path:"/placeOrder/:restName",component:G}),Object(h.jsx)(r.a,{path:"/viewBooking",component:q}),Object(h.jsx)(r.a,{path:"/login",component:K}),Object(h.jsx)(r.a,{path:"/register",component:U}),Object(h.jsx)(m,{})]})};a.a.render(Object(h.jsx)(Y,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.2493cb0f.chunk.js.map