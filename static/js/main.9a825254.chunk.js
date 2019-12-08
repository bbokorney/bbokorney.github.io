(this.webpackJsonpbudget=this.webpackJsonpbudget||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(13),r=a.n(i),l=(a(70),a(5)),s=a(6),c=a(7),d=a(8),u=a(1),m=a(9),g=a(30),h=a(25),p=(a(71),a(58),a(60)),f=a(61),v=a.n(f),b=(a(76),a(64)),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleAmountChange=function(e,t,n){a.setState({amount:t,floatAmount:n})},a.handleDateChange=function(e){a.setState({date:e})},a.handleCategoryChange=function(e){a.setState({category:e.value})},a.handleVendorChange=function(e){a.setState({vendor:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.addTransaction()},a.addTransaction=function(){var e=Object(u.a)(a);e.setState({addingTransaction:!0,transactionAdded:!1,error:""}),window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.append({spreadsheetId:"1H89VCjaXRq5d4XT8J92N7eavaBIvIGSfP240VOMasRo",range:"Transactions",valueInputOption:"USER_ENTERED",resource:e.formatTransactionRow()}).then((function(t){console.log(t),e.setState({addingTransaction:!1,transactionAdded:!0,date:new Date,amount:"",floatAmount:0,category:"",vendor:"",error:""})})).catch((function(t){console.log(t),e.setState({addingTransaction:!1,transactionAdded:!1,error:JSON.stringify(t,null,2)})}))}))},a.formatTransactionRow=function(){return{values:[[a.getFormattedDate(a.state.date),a.state.amount,a.state.category,a.state.vendor]]}},a.state={date:new Date,amount:"",floatAmount:0,category:"",vendor:"",addingTransaction:!1,transactionAdded:!1,error:""},a.categories=[{value:"Grocery",label:"Grocery"},{value:"Restaurant",label:"Restaurant"},{value:"To go food",label:"To go food"},{value:"Gas",label:"Gas"},{value:"Auto insurance",label:"Auto insurance"},{value:"Rent",label:"Rent"}],a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getFormattedDate",value:function(e){var t=e.getFullYear();return(1+e.getMonth()).toString().padStart(2,"0")+"/"+e.getDate().toString().padStart(2,"0")+"/"+t}},{key:"render",value:function(){var e=this.state.addingTransaction;return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"AddTransactionForm-container"},o.a.createElement("label",{className:"AddTransactionForm-label"},"Date:"),o.a.createElement(v.a,{className:"AddTransactionForm-input",selected:this.state.date,onChange:this.handleDateChange,onFocus:function(e){return e.target.readOnly=!0},disabled:e}),o.a.createElement("label",{className:"AddTransactionForm-label"},"Amount:"),o.a.createElement(p.a,{inputType:"tel",className:"AddTransactionForm-input",value:this.state.amount,onChangeEvent:this.handleAmountChange,prefix:"$",allowEmpty:!0,disabled:e}),o.a.createElement("label",{className:"AddTransactionForm-label"},"Category:"),o.a.createElement(b.a,{className:"AddTransactionForm-input",classNamePrefix:"Categories",options:this.categories,onChange:this.handleCategoryChange,isSearchable:!1,disabled:e}),o.a.createElement("label",{className:"AddTransactionForm-label"},"Vendor:"),o.a.createElement("input",{className:"AddTransactionForm-input",type:"text",value:this.state.vendor,onChange:this.handleVendorChange,disabled:e}),o.a.createElement("input",{className:"AddTransactionForm-input",type:"submit",value:"Add Transaction",disabled:e}),this.state.addingTransaction&&o.a.createElement("p",null,"Adding transaction..."),this.state.transactionAdded&&o.a.createElement("p",null,"Transaction added!"),this.state.error&&o.a.createElement("p",null,this.state.error))}}]),t}(n.Component);function I(e){return o.a.createElement("button",{onClick:e.onClick},"Login")}function A(e){return o.a.createElement("button",{onClick:e.onClick},"Logout")}var C=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state)},a.handleUpdate=function(e){var t={};t[e.target.id]=e.target.value,a.setState(t)};var n=a.props.config;return a.state={clientId:n.clientId?n.clientId:"",apiKey:n.apiKey,sheetId:n.sheetId},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,a=this.state;return this.props.isLoggedIn?(e=o.a.createElement(A,{onClick:this.props.handleLogoutClick}),t="You're logged in"):(e=o.a.createElement(I,{onClick:this.props.handleLoginClick}),t="You need to log in"),o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit,className:"AddTransactionForm-container"},o.a.createElement("label",{className:"AddTransactionForm-label"},"Client ID:"),o.a.createElement("input",{className:"AddTransactionForm-input",id:"clientId",type:"text",value:a.clientId,onChange:this.handleUpdate}),o.a.createElement("label",{className:"AddTransactionForm-label"},"API Key:"),o.a.createElement("input",{className:"AddTransactionForm-input",id:"apiKey",type:"text",value:a.apiKey,onChange:this.handleUpdate}),o.a.createElement("label",{className:"AddTransactionForm-label"},"Sheet ID:"),o.a.createElement("input",{className:"AddTransactionForm-input",id:"sheetId",type:"text",value:a.sheetId,onChange:this.handleUpdate}),o.a.createElement("input",{className:"AddTransactionForm-input",type:"submit",value:"Update Configuration"})),o.a.createElement("button",{onClick:this.props.clearConfig},"Clear config"),o.a.createElement("p",null,t),e)}}]),t}(n.Component),y=a(33);function S(e){var t=e.transactions.map((function(e,t){return o.a.createElement("li",{key:t},e.date.concat(e.amount,e.category,e.vendor))}));return o.a.createElement("div",null,o.a.createElement("ul",null,t))}var w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).setupAPIClient=function(e){a.allConfigSet(a.state.config)&&a.configChanged(e,a.state.config)&&window.gapi.load("client:auth2",a.initClient)},a.handleConfigInfoSubmit=function(e){localStorage.setItem("clientId",e.clientId),localStorage.setItem("apiKey",e.apiKey),localStorage.setItem("sheetId",e.sheetId),a.setState({config:e})},a.clearConfig=function(){localStorage.removeItem("clientId"),localStorage.removeItem("apiKey"),localStorage.removeItem("sheetId"),a.setState({config:{clientId:"",apiKey:"",sheetId:""}})},a.allConfigSet=function(e){return e.clientId&&e.apiKey&&e.sheetId&&"null"!==e.clientId&&"null"!==e.apiKey&&"null"!==e.sheeetId&&"undefined"!==e.clientId&&"undefined"!==e.apiKey&&"undefined"!==e.sheeetId},a.configChanged=function(e,t){return!(e||!t)||(!(!e||t)||(e.clientId!==t.clientId||e.apiKey!==t.apiKey||e.sheetId!==t.sheetId))},a.handleLoginClick=function(){window.gapi.auth2.getAuthInstance().signIn(),a.setState({isLoggedIn:!0})},a.handleLogoutClick=function(){window.gapi.auth2.getAuthInstance().signOut(),a.setState({isLoggedIn:!1})},a.initClient=function(){var e=a.state.config,t=Object(u.a)(a);window.gapi.client.init({apiKey:e.apiKey,clientId:e.clientId,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets"}).then((function(){window.gapi.auth2.getAuthInstance().isSignedIn.listen(t.updateSigninStatus),t.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get()),t.loadTransactions()}),(function(e){t.handleError(e)}))},a.handleError=function(e){console.log(e);var t=JSON.stringify(e,null,2);a.setState({errorMessage:t})},a.updateSigninStatus=function(e){e?a.setState({isLoggedIn:!0}):a.setState({isLoggedIn:!1})},a.loadTransactions=function(){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:a.state.config.sheetId,range:"Transactions"}).then((function(e){a.setState({transactions:a.transformResults(e)})})).catch((function(e){a.handleError(e)}))}))},a.transformResults=function(e){var t=e.result.values;return t.slice(1,t.length).map((function(e){return{date:e[0],amount:e[1],category:e[2],vendor:e[3]}}))},a.state={errorMessage:"",isLoggedIn:!1,transactions:[],config:{clientId:a.loadFromConfigWithDefault("clientId",""),apiKey:a.loadFromConfigWithDefault("apiKey"),sheetId:a.loadFromConfigWithDefault("sheetId")}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"loadFromConfigWithDefault",value:function(e,t){var a=localStorage.getItem(e);return a||t}},{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement("h2",{className:"App-header-text"},"Budget")),o.a.createElement("div",null,this.state.errorMessage&&o.a.createElement("label",null,"Error: ",this.state.errorMessage)),o.a.createElement("div",{className:"App-main"},o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/add"},o.a.createElement(E,null)),o.a.createElement(h.a,{path:"/list"},o.a.createElement("div",null,o.a.createElement("h1",null,"Transactions"),o.a.createElement(S,{transactions:this.state.transactions}))),o.a.createElement(h.a,{path:"/settings"},o.a.createElement(C,{clearConfig:this.clearConfig,onSubmit:this.handleConfigInfoSubmit,config:this.state.config,isLoggedIn:this.state.isLoggedIn,handleLoginClick:this.handleLoginClick,handleLogoutClick:this.handleLogoutClick})),o.a.createElement(h.a,{path:"/"},o.a.createElement("h1",null,"Home")))),o.a.createElement("nav",{className:"App-navbar"},o.a.createElement("div",{className:"App-navbar-home App-navbar-item"},o.a.createElement(g.b,{className:"App-navbar-link",to:"/"},o.a.createElement(y.b,{className:"App-navbar-icon"}))),o.a.createElement("div",{className:"App-navbar-add App-navbar-item"},o.a.createElement(g.b,{className:"App-navbar-link",to:"/add"},o.a.createElement(y.d,{className:"App-navbar-icon"}))),o.a.createElement("div",{className:"App-navbar-list App-navbar-item"},o.a.createElement(g.b,{className:"App-navbar-link",to:"/list"},o.a.createElement(y.c,{className:"App-navbar-icon"}))),o.a.createElement("div",{className:"App-navbar-settings App-navbar-item"},o.a.createElement(g.b,{className:"App-navbar-link",to:"/settings"},o.a.createElement(y.a,{className:"App-navbar-icon"}))))))}},{key:"componentDidMount",value:function(){this.setupAPIClient(null)}},{key:"componentDidUpdate",value:function(e,t,a){this.setupAPIClient(t.config)}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");N?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()},58:function(e,t,a){},65:function(e,t,a){e.exports=a(128)},70:function(e,t,a){},71:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.9a825254.chunk.js.map