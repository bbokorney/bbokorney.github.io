(this.webpackJsonpbudget=this.webpackJsonpbudget||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(13),l=n.n(i),r=(n(70),n(5)),c=n(6),s=n(7),u=n(8),d=n(1),m=n(9),g=n(30),h=n(25),p=(n(71),n(58),n(60)),f=n(61),v=n.n(f),b=(n(76),n(64)),E=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleAmountChange=function(e,t,a){n.setState({amount:t,floatAmount:a})},n.handleDateChange=function(e){n.setState({date:e})},n.handleCategoryChange=function(e){n.setState({category:e.value})},n.handleVendorChange=function(e){n.setState({vendor:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.addTransaction()},n.addTransaction=function(){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.append({spreadsheetId:"1H89VCjaXRq5d4XT8J92N7eavaBIvIGSfP240VOMasRo",range:"Transactions",valueInputOption:"USER_ENTERED",resource:n.formatTransactionRow()}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}))},n.formatTransactionRow=function(){return{values:[[n.getFormattedDate(n.state.date),n.state.amount,n.state.category,n.state.vendor]]}},n.state={date:new Date,amount:"",floatAmount:0,category:"",vendor:""},n.categories=[{value:"Grocery",label:"Grocery"},{value:"Restaurant",label:"Restaurant"},{value:"To go food",label:"To go food"},{value:"Gas",label:"Gas"},{value:"Auto insurance",label:"Auto insurance"},{value:"Rent",label:"Rent"}],n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getFormattedDate",value:function(e){var t=e.getFullYear();return(1+e.getMonth()).toString().padStart(2,"0")+"/"+e.getDate().toString().padStart(2,"0")+"/"+t}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"AddTransactionForm-container"},o.a.createElement("label",{className:"AddTransactionForm-label"},"Date:"),o.a.createElement(v.a,{className:"AddTransactionForm-input",selected:this.state.date,onChange:this.handleDateChange,onFocus:function(e){return e.target.readOnly=!0}}),o.a.createElement("label",{className:"AddTransactionForm-label"},"Amount:"),o.a.createElement(p.a,{inputType:"tel",className:"AddTransactionForm-input",value:this.state.amount,onChangeEvent:this.handleAmountChange,prefix:"$",allowEmpty:!0}),o.a.createElement("label",{className:"AddTransactionForm-label"},"Category:"),o.a.createElement(b.a,{className:"AddTransactionForm-input",classNamePrefix:"Categories",options:this.categories,onChange:this.handleCategoryChange,isSearchable:!1}),o.a.createElement("label",{className:"AddTransactionForm-label"},"Vendor:"),o.a.createElement("input",{className:"AddTransactionForm-input",type:"text",value:this.state.vendor,onChange:this.handleVendorChange}),o.a.createElement("input",{className:"AddTransactionForm-input",type:"submit",value:"Add Transaction"}))}}]),t}(a.Component);function I(e){return o.a.createElement("button",{onClick:e.onClick},"Login")}function C(e){return o.a.createElement("button",{onClick:e.onClick},"Logout")}var y=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state)},n.handleUpdate=function(e){var t={};t[e.target.id]=e.target.value,n.setState(t)};var a=n.props.config;return n.state={clientId:a.clientId?a.clientId:"",apiKey:a.apiKey,sheetId:a.sheetId},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,n=this.state;return this.props.isLoggedIn?(e=o.a.createElement(C,{onClick:this.props.handleLogoutClick}),t="You're logged in"):(e=o.a.createElement(I,{onClick:this.props.handleLoginClick}),t="You need to log in"),o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit,className:"AddTransactionForm-container"},o.a.createElement("label",{className:"AddTransactionForm-label"},"Client ID:"),o.a.createElement("input",{className:"AddTransactionForm-input",id:"clientId",type:"text",value:n.clientId,onChange:this.handleUpdate}),o.a.createElement("label",{className:"AddTransactionForm-label"},"API Key:"),o.a.createElement("input",{className:"AddTransactionForm-input",id:"apiKey",type:"text",value:n.apiKey,onChange:this.handleUpdate}),o.a.createElement("label",{className:"AddTransactionForm-label"},"Sheet ID:"),o.a.createElement("input",{className:"AddTransactionForm-input",id:"sheetId",type:"text",value:n.sheetId,onChange:this.handleUpdate}),o.a.createElement("input",{className:"AddTransactionForm-input",type:"submit",value:"Update Configuration"})),o.a.createElement("button",{onClick:this.props.clearConfig},"Clear config"),o.a.createElement("p",null,t),e)}}]),t}(a.Component),S=n(33);function w(e){var t=e.transactions.map((function(e,t){return o.a.createElement("li",{key:t},e.date.concat(e.amount,e.category,e.vendor))}));return o.a.createElement("div",null,o.a.createElement("ul",null,t))}var A=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setupAPIClient=function(e){n.allConfigSet(n.state.config)&&n.configChanged(e,n.state.config)&&window.gapi.load("client:auth2",n.initClient)},n.handleConfigInfoSubmit=function(e){localStorage.setItem("clientId",e.clientId),localStorage.setItem("apiKey",e.apiKey),localStorage.setItem("sheetId",e.sheetId),n.setState({config:e})},n.clearConfig=function(){localStorage.removeItem("clientId"),localStorage.removeItem("apiKey"),localStorage.removeItem("sheetId"),n.setState({config:{clientId:"",apiKey:"",sheetId:""}})},n.allConfigSet=function(e){return e.clientId&&e.apiKey&&e.sheetId&&"null"!==e.clientId&&"null"!==e.apiKey&&"null"!==e.sheeetId&&"undefined"!==e.clientId&&"undefined"!==e.apiKey&&"undefined"!==e.sheeetId},n.configChanged=function(e,t){return!(e||!t)||(!(!e||t)||(e.clientId!==t.clientId||e.apiKey!==t.apiKey||e.sheetId!==t.sheetId))},n.handleLoginClick=function(){window.gapi.auth2.getAuthInstance().signIn(),n.setState({isLoggedIn:!0})},n.handleLogoutClick=function(){window.gapi.auth2.getAuthInstance().signOut(),n.setState({isLoggedIn:!1})},n.initClient=function(){var e=n.state.config,t=Object(d.a)(n);window.gapi.client.init({apiKey:e.apiKey,clientId:e.clientId,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets"}).then((function(){window.gapi.auth2.getAuthInstance().isSignedIn.listen(t.updateSigninStatus),t.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get()),t.loadTransactions()}),(function(e){t.handleError(e)}))},n.handleError=function(e){console.log(e);var t=JSON.stringify(e,null,2);n.setState({errorMessage:t})},n.updateSigninStatus=function(e){e?n.setState({isLoggedIn:!0}):n.setState({isLoggedIn:!1})},n.loadTransactions=function(){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:n.state.config.sheetId,range:"Transactions"}).then((function(e){n.setState({transactions:n.transformResults(e)})})).catch((function(e){n.handleError(e)}))}))},n.transformResults=function(e){var t=e.result.values;return t.slice(1,t.length).map((function(e){return{date:e[0],amount:e[1],category:e[2],vendor:e[3]}}))},n.state={errorMessage:"",isLoggedIn:!1,transactions:[],config:{clientId:n.loadFromConfigWithDefault("clientId",""),apiKey:n.loadFromConfigWithDefault("apiKey"),sheetId:n.loadFromConfigWithDefault("sheetId")}},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"loadFromConfigWithDefault",value:function(e,t){var n=localStorage.getItem(e);return n||t}},{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement("h2",{className:"App-header-text"},"Budget")),o.a.createElement("div",null,this.state.errorMessage&&o.a.createElement("label",null,"Error: ",this.state.errorMessage)),o.a.createElement("div",{className:"App-main"},o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/add"},o.a.createElement(E,null)),o.a.createElement(h.a,{path:"/list"},o.a.createElement("div",null,o.a.createElement("h1",null,"Transactions"),o.a.createElement(w,{transactions:this.state.transactions}))),o.a.createElement(h.a,{path:"/settings"},o.a.createElement(y,{clearConfig:this.clearConfig,onSubmit:this.handleConfigInfoSubmit,config:this.state.config,isLoggedIn:this.state.isLoggedIn,handleLoginClick:this.handleLoginClick,handleLogoutClick:this.handleLogoutClick})),o.a.createElement(h.a,{path:"/"},o.a.createElement("h1",null,"Home")))),o.a.createElement("nav",{className:"App-navbar"},o.a.createElement("div",{className:"App-navbar-home"},o.a.createElement(g.b,{to:"/"},o.a.createElement(S.b,null))),o.a.createElement("div",{className:"App-navbar-add"},o.a.createElement(g.b,{to:"/add"},o.a.createElement(S.d,null))),o.a.createElement("div",{className:"App-navbar-list"},o.a.createElement(g.b,{to:"/list"},o.a.createElement(S.c,null))),o.a.createElement("div",{className:"App-navbar-settings"},o.a.createElement(g.b,{to:"/settings"},o.a.createElement(S.a,null))))))}},{key:"componentDidMount",value:function(){this.setupAPIClient(null)}},{key:"componentDidUpdate",value:function(e,t,n){this.setupAPIClient(t.config)}}]),t}(a.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");T?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()},58:function(e,t,n){},65:function(e,t,n){e.exports=n(128)},70:function(e,t,n){},71:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.4951fdcd.chunk.js.map