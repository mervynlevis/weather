(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{3:function(e,t){e.exports={key:"ba14759b54990c5f13cc72144855167f",base:"https://api.openweathermap.org/data/2.5/"}},31:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(19),s=a.n(i),r=(a(31),a.p+"static/media/branding copy.62c481d4.png"),o=a(0);var l=function(){return Object(o.jsx)("div",{"data-testid":"Nav",className:"Nav",children:Object(o.jsx)("nav",{children:Object(o.jsx)("a",{href:"/",alt:"home link",children:Object(o.jsx)("img",{className:"brandLogo",src:r,alt:"brand logo"})})})})},d=a(9),h=a.n(d),u=a(20),j=a(21),b=a(22),m=a(26),p=a(25),O=a(3),x=a.n(O),v=a(23),g=a.n(v),y=a(5),f=a(24),w=a.n(f),N=a(4),k=a.n(N);var S=function(){var e=(new Date).getFullYear();return Object(o.jsx)("div",{"data-testid":"Footer",className:"footer",children:Object(o.jsxs)("p",{children:["Mervyn Levis ",e," "]})})};var D=function(e){var t=Object(n.useState)(""),a=Object(y.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(""),r=Object(y.a)(s,2),l=r[0],d=r[1],h=Object(n.useState)({}),u=Object(y.a)(h,2),j=u[0],b=u[1],m=function(e){w.a.get("".concat(x.a.base,"weather?q=").concat("[object Object]"!=e?e:c,"&units=metric&APPID=").concat(x.a.key)).then((function(e){b(e.data),i("")})).catch((function(e){console.log(e),b(""),i(""),d({message:"Not Found",query:c})}))},p="white",O=112,v=!0;return Object(n.useEffect)((function(){m("Cork")}),[]),Object(o.jsxs)("div",{"data-testid":"searchedForecast",className:"forecast",children:[Object(o.jsx)("div",{className:"forecast-icon",children:Object(o.jsx)(k.a,{icon:e.icon,color:p,size:O,animate:v})}),Object(o.jsxs)("div",{className:"today-weather",children:[Object(o.jsx)("h3",{children:e.weather}),Object(o.jsxs)("div",{className:"search-box",children:[Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search any city",onChange:function(e){return i(e.target.value)},value:c}),Object(o.jsxs)("div",{className:"img-box",children:[" ",Object(o.jsx)("img",{src:"https://images.avishkaar.cc/workflow/newhp/search-white.png",onClick:m,alt:"search button"})]})]}),Object(o.jsx)("ul",{children:"undefined"!=typeof j.main?Object(o.jsxs)("div",{children:[" ",Object(o.jsxs)("li",{className:"cityHead",children:[Object(o.jsxs)("p",{children:[j.name,", ",j.sys.country]}),Object(o.jsx)("img",{className:"temp",src:"https://openweathermap.org/img/wn/".concat(j.weather[0].icon,".png"),alt:"weather logo"})]}),Object(o.jsxs)("li",{children:["Temperature"," ",Object(o.jsxs)("span",{className:"temp",children:[Math.round(j.main.temp),"\xb0c (",j.weather[0].main,")"]})]}),Object(o.jsxs)("li",{children:["Humidity"," ",Object(o.jsxs)("span",{className:"temp",children:[Math.round(j.main.humidity),"%"]})]}),Object(o.jsxs)("li",{children:["Visibility"," ",Object(o.jsxs)("span",{className:"temp",children:[Math.round(j.visibility)," mi"]})]}),Object(o.jsxs)("li",{children:["Wind Speed"," ",Object(o.jsxs)("span",{className:"temp",children:[Math.round(j.wind.speed)," Km/h"]})]})]}):Object(o.jsxs)("li",{children:[l.query," ",l.message]})})]}),Object(o.jsx)(S,{})]})},F=a.p+"static/media/loader.d4a3a029.gif",C=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t,", ").concat(a," ").concat(n," ").concat(c)},M="white",L=112,W=!0,A=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={lat:void 0,lon:void 0,errorMessage:void 0,temperatureC:void 0,temperatureF:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:"CLEAR_DAY",sunrise:void 0,sunset:void 0,errorMsg:void 0},e.getPosition=function(e){return new Promise((function(t,a){navigator.geolocation.getCurrentPosition(t,a,e)}))},e.getWeather=function(){var t=Object(u.a)(h.a.mark((function t(a,n){var c,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(x.a.base,"weather?lat=").concat(a,"&lon=").concat(n,"&units=metric&APPID=").concat(x.a.key));case 2:return c=t.sent,t.next=5,c.json();case 5:i=t.sent,e.setState({lat:a,lon:n,city:i.name,temperatureC:Math.round(i.main.temp),temperatureF:Math.round(1.8*i.main.temp+32),humidity:i.main.humidity,main:i.weather[0].main,country:i.sys.country,feels_like:Math.round(i.main.feels_like),visibility:i.visibility,wind_speed:i.wind.speed}),t.t0=e.state.main,t.next="Haze"===t.t0?10:"Clouds"===t.t0?12:"Rain"===t.t0?14:"Snow"===t.t0?16:"Dust"===t.t0?18:"Drizzle"===t.t0?20:"Fog"===t.t0?22:"Smoke"===t.t0?24:"Tornado"===t.t0?26:28;break;case 10:return e.setState({icon:"CLEAR_DAY"}),t.abrupt("break",29);case 12:return e.setState({icon:"CLOUDY"}),t.abrupt("break",29);case 14:return e.setState({icon:"RAIN"}),t.abrupt("break",29);case 16:return e.setState({icon:"SNOW"}),t.abrupt("break",29);case 18:return e.setState({icon:"WIND"}),t.abrupt("break",29);case 20:return e.setState({icon:"SLEET"}),t.abrupt("break",29);case 22:case 24:return e.setState({icon:"FOG"}),t.abrupt("break",29);case 26:return e.setState({icon:"WIND"}),t.abrupt("break",29);case 28:e.setState({icon:"CLEAR_DAY"});case 29:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation?this.getPosition().then((function(t){e.getWeather(t.coords.latitude,t.coords.longitude)})).catch((function(t){e.getWeather(53.34,-6.26),alert("Location Services Disabled. Please allow location access to use this app.")})):alert("Geolocation not available"),this.timerID=setInterval((function(){return e.getWeather(e.state.lat,e.state.lon)}),6e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return this.state.temperatureC?Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsxs)("div",{"data-testid":"userLocationWeather",className:"city",children:[Object(o.jsxs)("div",{className:"title",children:[Object(o.jsxs)("h2",{children:[this.state.city,", ",this.state.country]}),Object(o.jsxs)("h3",{children:["Feels Like: ",this.state.feels_like,"\xb0c"]}),Object(o.jsxs)("h4",{children:["Humidity: ",this.state.humidity,"%"]}),Object(o.jsxs)("h4",{children:["Visibility: ",this.state.visibility," mi"]}),Object(o.jsxs)("h4",{children:["Wind Speed: ",this.state.wind_speed," Km/h"]})]}),Object(o.jsxs)("div",{className:"mb-icon",children:[" ",Object(o.jsx)(k.a,{icon:this.state.icon,color:M,size:L,animate:W}),Object(o.jsx)("p",{children:this.state.main})]}),Object(o.jsxs)("div",{className:"date-time",children:[Object(o.jsxs)("div",{className:"dmy",children:[Object(o.jsx)("div",{id:"txt"}),Object(o.jsx)("div",{className:"current-time",children:Object(o.jsx)(g.a,{format:"HH:mm",interval:1e3,ticking:!0})}),Object(o.jsx)("div",{className:"current-date",children:C(new Date)})]}),Object(o.jsx)("div",{className:"temperature",children:Object(o.jsxs)("p",{children:[this.state.temperatureC,"\xb0c"]})})]})]}),Object(o.jsx)(D,{icon:this.state.icon,weather:this.state.main})]}):Object(o.jsx)(c.a.Fragment,{children:Object(o.jsxs)("div",{"data-testid":"LoadingCurrentLocation",className:"loadingPage",children:[Object(o.jsx)("img",{src:F,alt:"loading icon",style:{width:"5%",WebkitUserDrag:"none"}}),Object(o.jsx)("h3",{style:{color:"white",fontSize:"22px",fontWeight:"600"},children:"Detecting your location"}),Object(o.jsx)("h3",{style:{color:"white",marginTop:"10px"},children:"Location will be displayed with weather..."})]})})}}]),a}(c.a.Component);a(64);var P=function(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(A,{})})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root")),I()}},[[65,1,2]]]);
//# sourceMappingURL=main.5b23b53c.chunk.js.map