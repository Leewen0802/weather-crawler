(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,a){t.exports=a(35)},30:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),i=(a(29),a(30),a(17)),o=a(18),w=a(22),l=a(19),u=a(23),m=a(10),g=a(5);var h=function(){return r.a.createElement("footer",{className:"footer nes-container is-rounded is-dark"},r.a.createElement("p",null,"Feature Of Project"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/cscolabear/weather-crawler/"},"weather-crawler")," | puppeteer, ci, travis, nodejs"),r.a.createElement("p",null,"Coding by Cola"),r.a.createElement("div",{className:"github-area"},r.a.createElement("a",{href:"https://github.com/cscolabear/weather-crawler",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"nes-octocat animate"}))))},_=function(t){var e=t.city,a=e.checked?"is-checked":"";return r.a.createElement("label",{ref:e.ref,className:"tab-label ".concat(a),onClick:function(){return t.onClick(e.id)}},r.a.createElement("span",null,e.county),r.a.createElement("span",{className:"en-county-name"},"/",e.en_county_name))};var p=function(t){var e=t.allDay,a=t.cityId,n=[];return e.current_title.forEach(function(t,s){n.push(function(t,e,a){return r.a.createElement("div",{className:"tabs__tab-column-row",key:"".concat(e,"-").concat(t.current_title[a])},r.a.createElement("h2",null,r.a.createElement("span",null,t.current_title[a]),r.a.createElement("span",{className:"normal"}," - ",t.rainImg[a].alt)),r.a.createElement("div",{className:"tabs__tab-column-row-detail"},r.a.createElement("div",{className:"two-col"},r.a.createElement("p",null,"\u964d\u96e8\u6a5f\u7387 ",r.a.createElement("span",{className:(n=t.rain[a],n>60?"nes-text is-primary":"")},t.rain[a]," %")),r.a.createElement("p",{className:""},t.temperature[a]," \u02daC")),r.a.createElement("div",{className:"two-col-photo"},r.a.createElement("img",{src:t.rainImg[a].src,alt:t.rainImg[a].alt}))));var n}(e,a,s))}),r.a.createElement("div",{className:"tabs__tab-column"},n)},v=function(t){var e=t.city;return r.a.createElement("div",{className:"tabs__tab-content nes-container is-rounded is-dark"},r.a.createElement("p",{className:"tabs__tab-content__desc"},e.description,r.a.createElement("a",{href:e.target_url,target:"_blank",className:"tab-desc-target-url",rel:"noopener noreferrer"},r.a.createElement("span",{role:"img","aria-label":"hand-single-finger"},"\ud83d\udc49"))),r.a.createElement(p,{allDay:e.all_day,cityId:e.id}))},y=a(9),d=function(t){return t.toLowerCase().replace(/\//gi,"").replace(/\s+/gi,"-")},b=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(w.a)(this,Object(l.a)(e).call(this,t))).default="taipei-city",a.state={data:y.a,current:a.default},Object.keys(a.state.data).forEach(function(t){a.state.data[t].ref=r.a.createRef()}),a.updatedAt=new Date(y.b).toString(),a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"setCurrent",value:function(t){var e=t.length<=0?this.default:t;if(this.state.current!==e){this.setState({current:e});var a=this.state.data[e].ref.current;a&&a.offsetTop&&window.setTimeout(function(){window.scrollTo({top:a.offsetTop,behavior:"smooth"})},350)}}},{key:"routeGenerator",value:function(){var t=this,e=[];return Object.keys(this.state.data).forEach(function(a){var n=function(t,e){var a=t;return a.id=d(t.en_county_name),a.checked=t.id===e,a}(t.state.data[a],t.state.current),s=r.a.createElement(_,{city:n,onClick:function(e){return t.setCurrent(e)}}),c={link:{to:"/".concat(n.id),view:s},content:{path:"/".concat(n.id),view:function(e){var a=e.location,s=d(a.pathname);return t.setCurrent(s),r.a.createElement(v,{city:n})}}};e.push(c)}),e}},{key:"render",value:function(){var t=this.routeGenerator();return r.a.createElement(m.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"weather-crawler"),r.a.createElement("div",{className:"tabs"},t.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:"route-".concat(e.link.to)},r.a.createElement(m.b,{to:e.link.to},e.link.view),0===a?r.a.createElement(g.a,{exact:!0,path:"/",component:t[a].content.view}):"",r.a.createElement(g.a,{path:e.content.path,component:e.content.view}))})),r.a.createElement("span",{className:"mini right"},this.updatedAt),r.a.createElement(h,null)))}}]),e}(n.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(t){t.exports={b:1574481239786,a:{"taipei-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a11/23 11:00",county:"\u81fa\u5317\u5e02",en_county_name:"Taipei City",description:"\u591a\u96f2\uff0c\u6e05\u6668\u3001\u6df1\u591c\u7a0d\u6709\u6dbc\u610f\uff0c\u7559\u610f\u6c23\u6eab\u8b8a\u5316\uff0c\u9069\u6642\u8abf\u6574\u8863\u7269\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u65e5\u767d\u5929","\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929"],temperature:["23 - 28","20 - 23","20 - 26"],rain:["20","10","30"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg",alt:"\u591a\u96f2\u77ed\u66ab\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=63"},"kaohsiung-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a11/23 11:00",county:"\u9ad8\u96c4\u5e02",en_county_name:"Kaohsiung City",description:"\u4eca(23)\u65e5\u70ba\u6674\u6642\u591a\u96f2\u5929\u6c23\uff0c\u65e9\u665a\u6eab\u5ea6\u8f03\u4f4e\uff0c\u8acb\u6ce8\u610f\u4fdd\u6696\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u65e5\u767d\u5929","\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929"],temperature:["26 - 28","22 - 26","22 - 29"],rain:["0","0","10"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg",alt:"\u6674\u6642\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/02.svg",alt:"\u6674\u6642\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg",alt:"\u6674\u6642\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=64"},"new-taipei-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a11/23 11:00",county:"\u65b0\u5317\u5e02",en_county_name:"New Taipei City",description:"\u6e05\u6668\u6709\u5c40\u90e8\u77ed\u66ab\u96e8\uff0c\u767d\u5929\u8f49\u70ba\u591a\u96f2\uff0c\u7559\u610f\u6c23\u6eab\u8b8a\u5316\uff0c\u9069\u6642\u8abf\u6574\u8863\u7269\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u65e5\u767d\u5929","\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929"],temperature:["23 - 28","21 - 23","21 - 27"],rain:["20","10","10"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg",alt:"\u591a\u96f2\u6642\u6674"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=65"},"taichung-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a11/23 11:00",county:"\u81fa\u4e2d\u5e02",en_county_name:"Taichung City",description:"\u6674\u6642\u591a\u96f2\uff0c\u65e9\u665a\u504f\u6dbc\uff0c\u8acb\u6ce8\u610f\u4fdd\u6696\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u65e5\u767d\u5929","\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929"],temperature:["25 - 30","20 - 25","20 - 30"],rain:["0","0","0"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg",alt:"\u6674\u6642\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/02.svg",alt:"\u6674\u6642\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg",alt:"\u6674\u6642\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=66"},"tainan-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a11/23 11:00",county:"\u81fa\u5357\u5e02",en_county_name:"Tainan City",description:"\u3010\u65e9\u665a\u6dbc\uff0c\u65e5\u591c\u6eab\u5dee\u5927\uff0c\u6cbf\u6d77\u7a7a\u66e0\u5730\u5340\u53ef\u80fd\u6709\u8f03\u5f37\u9663\u98a8\u3002\u3011\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u65e5\u767d\u5929","\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929"],temperature:["25 - 28","21 - 25","21 - 28"],rain:["0","0","0"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg",alt:"\u6674\u6642\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/02.svg",alt:"\u6674\u6642\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg",alt:"\u6674\u6642\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=67"},"yilan-county":{public_time:"\u767c\u5e03\u6642\u9593\uff1a11/23 11:00",county:"\u5b9c\u862d\u7e23",en_county_name:"Yilan County",description:"\u4eca\uff0823\uff09\u65e5\u591a\u96f2\u6642\u9670\uff0c\u5c71\u5340\u6709\u77ed\u66ab\u96e8\u7684\u6a5f\u6703\u3002\u6cbf\u6d77\u5730\u5340\u6709\u9577\u6d6a\u767c\u751f\u7684\u6a5f\u6703\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u65e5\u767d\u5929","\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929"],temperature:["24 - 29","20 - 24","20 - 27"],rain:["20","10","20"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/05.svg",alt:"\u591a\u96f2\u6642\u9670"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/05.svg",alt:"\u591a\u96f2\u6642\u9670"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=10002"},"hualien-county":{public_time:"\u767c\u5e03\u6642\u9593\uff1a11/23 11:00",county:"\u82b1\u84ee\u7e23",en_county_name:"Hualien County",description:"\u591a\u96f2\u5230\u6674 \u6709\u5c40\u90e8\u77ed\u66ab\u96e8 \u6cbf\u6d77\u98a8\u5f37\u6d6a\u5927\u4e26\u7559\u610f\u9577\u6d6a\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u65e5\u767d\u5929","\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929"],temperature:["25 - 29","22 - 25","22 - 27"],rain:["30","30","30"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg",alt:"\u591a\u96f2\u77ed\u66ab\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/09.svg",alt:"\u591a\u96f2\u6642\u9670\u77ed\u66ab\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg",alt:"\u591a\u96f2\u77ed\u66ab\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=10015"}}}}},[[24,1,2]]]);
//# sourceMappingURL=main.492c0c71.chunk.js.map