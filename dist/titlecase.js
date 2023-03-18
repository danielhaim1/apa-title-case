(()=>{"use strict";var e=["a","an","the","as","at","by","for","in","of","on","to","up","yet","so","but","nor","or","and"],t=["AJAX","CSS","DOM","ES6","HTML","JavaScript","jQuery","MobX","SCSS","TypeScript","Vue.js",".NET","ASP","ASPX","MySQL","PHP","PostgreSQL","Python","SQL","GraphQL","HTML5","API","APIs","ASCII","AWS","CI","CircleCI","CLI","DLL","DNS","EC2","FTP","HTTP","HTTPs","ICMP","IDE","IP","ISP","JSON","JSP","LPWAN","M2M","MQTT","OOP","REST","SSH","SSL","TCP","UDP","URL","WLAN","WYSIWYG","XML","YAML","YML","IMAP","RSS","IaaS","PaaS","SaaS","CaaS","FaaS","XaaS","RaaS","IoE","IoT","LoRa","NB-IoT","RFID","RF","RFI","RFQ","ECMAScript","IO","I/O","DevOps","SecOps","DDoS","VoIP","AI","AR","ML","VR","e-Book","e-Books","eBook","eBooks","eCommerce","eMarket","eMarketplace","eMarketplaces","eMarkets","eReader","eShop","eShops","eStore","eStores","E-commerce","AP","AR","COGS","EBIT","EPS","FIFO","GAAP","LIFO","P&L","ROI","SOX","TCO","VAT","CAGR","DCF","ETF","IPO","IRR","M&A","NAV","PE","PEG","PPE","ROE","S&P","TVM","VC","B2B","B2C","CMO","CPA","CPC","CPL","CPM","CRM","CTA","CTR","SEO","SEM","SMM","USP","A/B","CTA","CTOR","CTR","KPI","PWA","SEM","SERP","SERPs","SMM","SMO","FAQ","FAQA","FAQS","UI","UI/UX","UX","T&C","TOS","PP","CRM","PoE","PoW","PoC","A11Y","SEO","AWS","GCP","BANT","GAP","KPI","MQL","NPS","POS","SPIN","SQL","SWOT","AFA","ADR","CCPA","CFAA","CISG","DMCA","EULA","GDPR","HIPAA","NDA","SOW","TOS","CEO","CEOs","CFO","CFOs","CIO","CIOs","CMO","CMOs","COO","COOs","CPO","CPOs","CRO","CROs","CSO","CSOs","CTO","CTOs","EVP","EVPs","HR","HRs","SVP","SVPs","VP","VPs","NGO","NPO","NGOs","NPOs","UN","UNESCO","UNICEF","UNHCR","UNODC","UNDP","UNFPA","UNEP","IKEA","Facebook","YouTube","Instagram","Twitter","Google","TensorFlow","Microsoft","Amazon","Netflix","LinkedIn","Airbnb","eBay","iPhone","iPad","iPod","PlayStation","PayPal","GitHub","GitLab","Salesforce","CodeIgniter","WordPress","WooCommerce","MongoDB","JIRA","HubSpot","AirDrop","AirPlay","AirPods","AirTags","FinalCut","GarageBand","iBooks","iCloud","iLife","iMac","iMessage","iMovie","iPhoto","iPod","iTunes","iWatch","iWork","iWork","LogicPro","macOS","ProTools","QuickTime","AdWords","AdSense","TikTok","Uber","Dropbox","Slack","Trello","Zoom","Twitch","Snapchat","WhatsApp","Telegram","Discord","Reddit","Quora","StackOverflow","StackExchange","Coca-Cola","NBA","NCAA","NFL","WWE","WWF","FIFA","a.m.","p.m.","ca.","cc.","fig.","pl.","pt.","rev.","sr.","v.","vol.","et al.","pp.","p.","ph.d.","m.d.","d.d.s.","d.m.d.","d.o.","d.c.","d.v.m.","d.n.p.","d.p.m.","d.s.w.","d.s.n.","d.n.sc.","d.n.a.","d.n.t.","d.n.p.t.","d.n.o.","d.n.m.","d.n.e.","d.n.s.","d.n.p.s.","adj.","adv.","cf.","cm.","co.","corp.","dept.","dist.","ed.","edn.","esp.","etc.","ex.","i.e.","e.g.","op. cit.","vs.","Ltd.","Co.","Inc.","St.","Ave.","Bldg.","No.","w/","w/o"],r=[{phd:"ph.d."},{"f.y.i":"FYI"},{"t.b.d":"TBD"},{"a.k.a":"AKA"},{"a.s.a.p":"ASAP"},{"d.i.y":"DIY"},{"f.a.q":"FAQ"},{"f.a.q.s":"FAQs"},{"f.a.q.a":"FAQs"},{angularjs:"Angular.js"},{reactjs:"React.js"},{vuejs:"Vue.js"},{nextjs:"Next.js"},{nuxtjs:"Nuxt.js"},{nodejs:"Node.js"},{"full-stack":"Fullstack"},{"front-end":"Frontend"},{"back-end":"Backend"},{"e-book":"eBook"},{"e-books":"eBooks"},{"e-commerce":"eCommerce"},{ecommerce:"eCommerce"},{ecom:"eCommerce"}],n=Object.freeze({AP:"ap",APA:"apa",BRITISH:"british",CHICAGO:"chicago",NYT:"nyt",WIKIPEDIA:"wikipedia"}),o=Object.values(n),i=Object.freeze({ap:{shortConjunctions:["and","but","or","for","nor","yet","so"],articles:["a","an","the"],shortPrepositions:["as","at","by","in","of","on","to","up","via"],neverCapitalized:[]},apa:{shortConjunctions:["and","as","but","by","for","in","nor","of","on","or","so","to","yet"],articles:["a","an","the"],shortPrepositions:["as","at","by","for","in","of","on","to","up","via"],neverCapitalized:[]},british:{shortConjunctions:["and","but","or","for","nor","yet","so"],articles:["a","an","the"],shortPrepositions:["as","at","by","in","of","on","to","up","via"],neverCapitalized:[]},chicago:{shortConjunctions:["and","but","or","for","nor","yet","so"],articles:["a","an","the"],shortPrepositions:["as","at","by","for","in","of","on","to","up","with","via"],neverCapitalized:["etc."]},nyt:{shortConjunctions:["and","but","or","for","nor","yet","so"],articles:["a","an","the"],shortPrepositions:["as","at","by","in","of","on","to","up","via"],neverCapitalized:[]},wikipedia:{shortConjunctions:["and","as","but","for","if","nor","or","so","yet"],articles:["a","an","the"],shortPrepositions:["as","at","by","in","of","on","to","up","via"],neverCapitalized:[]}}),a=[],s=["The Cybersmile Foundation","CO. by Colgate"];function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=new Map;function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=JSON.stringify({options:e,lowercaseWords:t});if(b.has(n))return b.get(n);var o=p(p({},i[e.style]),e),a=o.articles.concat(t).filter((function(e,t,r){return r.indexOf(e)===t})),s=o.shortConjunctions.concat(t).filter((function(e,t,r){return r.indexOf(e)===t})),c=o.shortPrepositions.concat(t).filter((function(e,t,r){return r.indexOf(e)===t})),l=[].concat(f((o.replaceTerms||[]).map((function(e){var t=u(e,2),r=t[0],n=t[1];return[r.toLowerCase(),n]}))),f(r)),d={articles:a,shortConjunctions:s,shortPrepositions:c,neverCapitalized:f(o.neverCapitalized),replaceTerms:l};return b.set(n,d),d}var m=new Map;function S(e,t){if("string"!=typeof e)throw new TypeError("Invalid input: word must be a string. Received ".concat(c(e),"."));if(!o.includes(t))throw new Error("Invalid option: style must be one of ".concat(o.join(", "),"."));return function(e,t){var r=f(h({style:t}).shortConjunctions),n=e.toLowerCase();return r.includes(n)}(e,t)||function(e,t){return h({style:t}).articles.includes(e.toLowerCase())}(e,t)||function(e,t){return h({style:t}).shortPrepositions.includes(e.toLowerCase())}(e,t)||function(e,t){var r="".concat(t,"_").concat(e.toLowerCase());if(m.has(r))return m.get(r);var n=h({style:t}).neverCapitalized.includes(e.toLowerCase());return m.set(r,n),n}(e,t)}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[".",",",";",":","?","!","]",")","}"];if("string"!=typeof e||!Array.isArray(t))throw new Error("Invalid arguments");return t.some((function(t){return e.endsWith(t)}))||t.includes(e.slice(-2))}function P(e){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");return/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i.test(e)}function v(e,t){return!!Array.isArray(t)&&t.some((function(t){return t.toLowerCase()===e.toLowerCase()}))}function O(e,t){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");if(!t||!Array.isArray(t))throw new TypeError("Invalid input: correctTerms must be an array.");for(var r=e.split(/[-']/),n=r.length,o=function(){var e=r[i].toLowerCase(),n=t.findIndex((function(t){return t.toLowerCase()===e}));n>=0&&(r[i]=t[n])},i=0;i<n;i++)o();return r.join(/[-']/)}function w(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}String.prototype.toTitleCase=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if("string"!=typeof this)throw new TypeError("Invalid input: input must be a string.");if(void 0!==n&&"object"!==I(n))throw new TypeError("Invalid options: options must be an object.");var o,i=n.style,u=void 0===i?"ap":i,f=h(n,e,r),l=(f.articles,f.shortConjunctions,f.shortPrepositions,f.neverCapitalized,f.replaceTerms,r.map((function(e){return Object.keys(e)[0].toLowerCase()}))),p=Object.fromEntries(r.map((function(e){return[Object.keys(e)[0].toLowerCase(),Object.values(e)[0]]}))),d=this.split(" "),y=d.map((function(e,r){switch(!0){case function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;if(!Array.isArray(t))throw new TypeError("Invalid input: ignoredWords must be an array.");if("string"!=typeof e||""===e.trim())throw new TypeError("Invalid input: word must be a non-empty string.");var r=e.toLowerCase().trim();return t.includes(r)}(e):return e;case l.includes(e.toLowerCase()):return p[e.toLowerCase()];case v(e,t):return O(e,t);case function(e){return e.length>"'s".length&&e.endsWith("'s")}(e):return function(e,t){var r="'s";if(e.toLowerCase().endsWith(r)){var n=e.slice(0,-r.length),o=t.findIndex((function(e){return e.toLowerCase()===n.toLowerCase()}));if(o>=0)return t[o]+r}return e}(e,t);case function(e){return-1!==e.indexOf("-")||-1!==e.indexOf("–")||-1!==e.indexOf("—")}(e):return function(e,r){var n=e.split("-"),o=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},i=function(e){return e.charAt(0)+e.slice(1).toLowerCase()},a={ap:function(e,t){return 0===t?o(e):i(e)},chicago:o,apa:function(e,t,n){return S(e,r)&&t>0&&t<n-1?e.toLowerCase():o(e)},nyt:function(e,t){return 0===t?o(e):i(e)},wikipedia:function(e,t){return 0===t?o(e):i(e)}},s=a[r]||i,c=n.map((function(e,r){var o=e,i=e.toLowerCase(),a=t.findIndex((function(e){return e.toLowerCase()===i}));if(a>=0)o=t[a];else if(i.endsWith("'s")){var c=i.substring(0,i.length-2),u=t.findIndex((function(e){return e.toLowerCase()===c}));u>=0&&(o="".concat(t[u],"'s"))}return s(o,r,n.length)}));return c.join("-")}(e,u);case function(e){return/[A-Z]/.test(e.slice(1))&&/[a-z]/.test(e.slice(0,-1))}(e):return e;case S(e,u)&&0!==r:return r>0&&A(d[r-1],[":","?","!","."])?e.charAt(0).toUpperCase()+e.slice(1):e.toLowerCase();case A(e):var n=e.split(/([.,\/#!$%\^&\*;:{}=\-_`~()])/g).map((function(e,r){return v(e,t)?O(e,t):(r>0&&A(e),e.charAt(0).toUpperCase()+e.slice(1))}));return n.join("");case function(e){if("string"!=typeof e)throw new Error("Parameter 'word' must be a string. Received '".concat(c(e),"' instead."));if(0===e.length)return!1;var t=e.charAt(0);return"#"===t||"@"===t||"."===t}(e):return v(e,t)?O(e):e;case P(e):return e.toUpperCase();case function(e){return/\d/.test(e)}(e):return e;default:return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}})),C=y.join(" "),b=w(s);try{for(b.s();!(o=b.n()).done;){var m=o.value;C.toLowerCase().includes(m.toLowerCase())&&(C=C.replace(new RegExp(m,"gi"),m))}}catch(e){b.e(e)}finally{b.f()}return C}catch(e){throw new Error(e)}}})();