(()=>{"use strict";var e={497:(e,t,r)=>{var a=r(429);void 0===String.prototype.toTitleCase&&(String.prototype.toTitleCase=function(e){return new a.TitleCaser(e).toTitleCase(this)}),e.exports&&(e.exports={TitleCaser:a.TitleCaser}),"undefined"!=typeof window&&window.document&&(window.TitleCaser=a.TitleCaser)},429:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TitleCaser=void 0;var a=r(485),i=r(858);t.TitleCaser=class{constructor(e={}){this.options=e,this.wordReplacementsList=a.wordReplacementsList}toTitleCase(e){try{if(0===e.trim().length)throw new TypeError("Invalid input: input must not be empty.");if("string"!=typeof e)throw new TypeError("Invalid input: input must be a string.");if(void 0!==this.options&&"object"!=typeof this.options)throw new TypeError("Invalid options: options must be an object.");const{style:t="ap",neverCapitalize:r=[],replaceTermList:o=this.wordReplacementsList,smartQuotes:s=!1}=this.options,n=["nl2br",...r],{articlesList:l,shortConjunctionsList:c,shortPrepositionsList:u,neverCapitalizedList:p,replaceTerms:d,smartQuotes:m}=i.TitleCaserUtils.getTitleCaseOptions(this.options,a.commonAbbreviationList,a.wordReplacementsList),C=o.map((e=>Object.keys(e)[0].toLowerCase())),y=Object.fromEntries(o.map((e=>[Object.keys(e)[0].toLowerCase(),Object.values(e)[0]])));let h=e.trim();h=h.replace(/<\s*br\s*\/?\s*>/gi," nl2br "),h=h.replace(/ {2,}/g,(e=>e.slice(0,1)));const g=h.split(" ");h=g.map(((e,r)=>{switch(!0){case i.TitleCaserUtils.isWordAmpersand(e):case i.TitleCaserUtils.hasHtmlBreak(e):case i.TitleCaserUtils.isWordIgnored(e,n):return e;case C.includes(e.toLowerCase()):return y[e.toLowerCase()];case i.TitleCaserUtils.isWordInArray(e,a.correctTitleCasingList):return i.TitleCaserUtils.correctTerm(e,a.correctTitleCasingList);case i.TitleCaserUtils.hasHyphen(e):return i.TitleCaserUtils.correctTermHyphenated(e,t);case i.TitleCaserUtils.hasSuffix(e,t):return i.TitleCaserUtils.correctSuffix(e,a.correctTitleCasingList);case i.TitleCaserUtils.hasUppercaseIntentional(e):return e;case i.TitleCaserUtils.isShortWord(e,t)&&0!==r:return r>0&&i.TitleCaserUtils.endsWithSymbol(g[r-1],[":","?","!","."])?e.charAt(0).toUpperCase()+e.slice(1):e.toLowerCase();case i.TitleCaserUtils.endsWithSymbol(e):const o=e.split(/([.,\/#!$%\^&\*;:{}=\-_`~()])/g).map(((e,t)=>i.TitleCaserUtils.isWordInArray(e,a.correctTitleCasingList)?i.TitleCaserUtils.correctTerm(e,a.correctTitleCasingList):(t>0&&i.TitleCaserUtils.endsWithSymbol(e),e.charAt(0).toUpperCase()+e.slice(1))));return o.join("");case i.TitleCaserUtils.startsWithSymbol(e):return i.TitleCaserUtils.isWordInArray(e,a.correctTitleCasingList)?i.TitleCaserUtils.correctTerm(e):e;case i.TitleCaserUtils.hasRomanNumeral(e):return e.toUpperCase();case i.TitleCaserUtils.hasNumbers(e):return e;default:return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}})).join(" ");for(const e of a.correctPhraseCasingList)h.toLowerCase().includes(e.toLowerCase())&&(h=h.replace(new RegExp(e,"gi"),e));h=h.replace(/nl2br/gi,"<br>"),s&&(h=i.TitleCaserUtils.convertQuotesToCurly(h));const f=h.split(" ");for(let e=0;e<f.length;e++){const t=e>0?f[e-1]:null;let r=f[e];const a=e<f.length-1?f[e+1]:null,o=r.match(/[.,!?;:]+$/);let s="";o&&(s=o[0],r=r.replace(/[.,!?;:]+$/,""));let n=r.replace(/[.,!?;:]/g,"");a&&a.replace(/[.,!?;:]/g,"");"Us"===n&&(i.TitleCaserUtils.isAcronym(r,t,a)?f[e]=""===s?"US":"US"+s:f[e]=""===s?"Us":"Us"+s)}return h=f.join(" "),h}catch(e){throw new Error(e)}}setReplaceTerms(e){if("object"!=typeof e)throw new TypeError("Invalid argument: replace terms must be an object.");Object.entries(e).forEach((([e,t])=>{const r=a.wordReplacementsList.findIndex((t=>t[e]));-1!==r?a.wordReplacementsList[r][e]=t:a.wordReplacementsList.push({[e]:t})})),this.options.wordReplacementsList=a.wordReplacementsList}addReplaceTerm(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Invalid argument: term and replacement must be strings.");const r=this.wordReplacementsList.findIndex((t=>t[e]));-1!==r?this.wordReplacementsList[r][e]=t:this.wordReplacementsList.push({[e]:t}),this.options.wordReplacementsList=this.wordReplacementsList}removeReplaceTerm(e){if("string"!=typeof e)throw new TypeError("Invalid argument: term must be a string.");const t=this.wordReplacementsList.findIndex((t=>Object.keys(t)[0]===e));if(-1===t)throw new Error(`Term '${e}' not found in word replacements list.`);this.wordReplacementsList.splice(t,1),this.options.wordReplacementsList=this.wordReplacementsList}setStyle(e){if("string"!=typeof e)throw new TypeError("Invalid argument: style must be a string.");this.options.style=e}}},485:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.wordReplacementsList=t.titleCaseStylesList=t.titleCaseDefaultOptionsList=t.ignoredWordList=t.correctTitleCasingList=t.correctPhraseCasingList=t.commonAbbreviationList=t.allowedTitleCaseStylesList=void 0;var a=p(r(247)),i=p(r(607)),o=p(r(818)),s=p(r(515)),n=p(r(668)),l=p(r(1)),c=p(r(561)),u=p(r(529));function p(e){return e&&e.__esModule?e:{default:e}}t.commonAbbreviationList=["a","an","the","as","at","by","for","in","of","on","to","up","yet","so","but","nor","or","and"];const d=function(...e){const t=[];return e.forEach((e=>{Array.isArray(e)?e.forEach((e=>{Object.values(e).forEach((e=>{t.push(...e)}))})):"object"==typeof e&&Object.values(e).forEach((e=>{t.push(...e)}))})),[...new Set(t)]}(a.default,i.default,o.default,s.default,n.default,l.default,c.default,u.default),m=(t.correctTitleCasingList=d,t.wordReplacementsList=[{"e-book":"eBook"},{"e-books":"eBooks"},{"e-commerce":"eCommerce"},{ecom:"eCommerce"},{ecommerce:"eCommerce"},{"a.k.a":"AKA"},{"a.s.a.p":"ASAP"},{"f.a.q":"FAQ"},{"f.a.q.a":"FAQs"},{"f.a.q.s":"FAQs"},{"f.y.i":"FYI"},{"d.i.y":"DIY"},{"t.b.d":"TBD"},{phd:"Ph.D."},{"back-end":"Backend"},{"front-end":"Frontend"},{"full-stack":"Fullstack"},{angularjs:"Angular.js"},{nextjs:"Next.js"},{nodejs:"Node.js"},{nuxtjs:"Nuxt.js"},{reactjs:"React.js"},{vuejs:"Vue.js"},{"cyber-security":"Cybersecurity"},{skoda:"Škoda"},{mcdonalds:"McDonald's"},{sainsburys:"Sainsbury's"},{hersheys:"Hershey's"},{kellogs:"Kellogg's"},{dominos:"Domino's"}],t.titleCaseStylesList=Object.freeze({AP:"ap",APA:"apa",BRITISH:"british",CHICAGO:"chicago",NYT:"nyt",WIKIPEDIA:"wikipedia"}));t.allowedTitleCaseStylesList=Object.values(m),t.titleCaseDefaultOptionsList=Object.freeze({ap:{shortConjunctionsList:["and","but","or","for","nor","yet","so"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","in","of","on","to","up","via"],neverCapitalizedList:[]},apa:{shortConjunctionsList:["and","as","but","by","for","in","nor","of","on","or","so","to","yet"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","for","in","of","on","to","up","via"],neverCapitalizedList:[]},british:{shortConjunctionsList:["and","but","or","for","nor","yet","so"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","in","of","on","to","up","via"],neverCapitalizedList:[]},chicago:{shortConjunctionsList:["and","but","or","for","nor","yet","so"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","for","in","of","on","to","up","with","via"],neverCapitalizedList:["etc."]},nyt:{shortConjunctionsList:["and","but","or","for","nor","yet","so"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","in","of","on","to","up","via"],neverCapitalizedList:[]},wikipedia:{shortConjunctionsList:["and","as","but","for","if","nor","or","so","yet"],articlesList:["a","an","the"],shortPrepositionsList:["as","at","by","in","of","on","to","up","via"],neverCapitalizedList:[]}}),t.ignoredWordList=[],t.correctPhraseCasingList=["The Cybersmile Foundation","CO. by Colgate","The Simpsons"]},858:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TitleCaserUtils=void 0;var a=r(485);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class n{static validateOption(e,t){if(!Array.isArray(t))throw new TypeError(`Invalid option: ${e} must be an array`);if(!t.every((e=>"string"==typeof e)))throw new TypeError(`Invalid option: ${e} must be an array of strings`)}static validateOptions(e){for(const t of Object.keys(e))if("style"!==t)if("wordReplacementsList"!==t){if(!a.titleCaseDefaultOptionsList.hasOwnProperty(t))throw new TypeError(`Invalid option: ${t}`);this.TitleCaseValidator.validateOption(t,e[t])}else{if(!Array.isArray(e.wordReplacementsList))throw new TypeError(`Invalid option: ${t} must be an array`);for(const r of e.wordReplacementsList)if("string"!=typeof r)throw new TypeError(`Invalid option: ${t} must contain only strings`)}else{if("string"!=typeof e.style)throw new TypeError(`Invalid option: ${t} must be a string`);if(!a.allowedTitleCaseStylesList.includes(e.style))throw new TypeError(`Invalid option: ${t} must be a string`)}}static getTitleCaseOptions(e={},t=[]){const r=JSON.stringify({options:e,lowercaseWords:t});if(n.titleCaseOptionsCache.has(r))return n.titleCaseOptionsCache.get(r);const i=o(o(o({},a.titleCaseDefaultOptionsList[e.style||"ap"]),e),{},{smartQuotes:!!e.hasOwnProperty("smartQuotes")&&e.smartQuotes}),s=i.articlesList.concat(t).filter(((e,t,r)=>r.indexOf(e)===t)),l=i.shortConjunctionsList.concat(t).filter(((e,t,r)=>r.indexOf(e)===t)),c=i.shortPrepositionsList.concat(t).filter(((e,t,r)=>r.indexOf(e)===t)),u=[...(i.replaceTerms||[]).map((([e,t])=>[e.toLowerCase(),t])),...a.wordReplacementsList],p={articlesList:s,shortConjunctionsList:l,shortPrepositionsList:c,neverCapitalizedList:[...i.neverCapitalizedList],replaceTerms:u,smartQuotes:i.smartQuotes};return n.titleCaseOptionsCache.set(r,p),p}static isShortConjunction(e,t){const r=[...n.getTitleCaseOptions({style:t}).shortConjunctionsList],a=e.toLowerCase();return r.includes(a)}static isArticle(e,t){return n.getTitleCaseOptions({style:t}).articlesList.includes(e.toLowerCase())}static isShortPreposition(e,t){const{shortPrepositionsList:r}=n.getTitleCaseOptions({style:t});return r.includes(e.toLowerCase())}static isNeverCapitalized(e,t){const r=`${t}_${e.toLowerCase()}`;if(n.isNeverCapitalizedCache.has(r))return n.isNeverCapitalizedCache.get(r);const{neverCapitalizedList:a}=n.getTitleCaseOptions({style:t}),i=a.includes(e.toLowerCase());return n.isNeverCapitalizedCache.set(r,i),i}static isShortWord(e,t){if("string"!=typeof e)throw new TypeError(`Invalid input: word must be a string. Received ${typeof e}.`);if(!a.allowedTitleCaseStylesList.includes(t))throw new Error(`Invalid option: style must be one of ${a.allowedTitleCaseStylesList.join(", ")}.`);return n.isShortConjunction(e,t)||n.isArticle(e,t)||n.isShortPreposition(e,t)||n.isNeverCapitalized(e,t)}static hasNumbers(e){return/\d/.test(e)}static hasUppercaseMultiple(e){let t=0;for(let r=0;r<e.length&&t<2;r++)/[A-Z]/.test(e[r])&&t++;return t>=2}static hasUppercaseIntentional(e){return e.length<=4?/[A-Z]/.test(e.slice(1)):/[A-Z]/.test(e.slice(1))&&/[a-z]/.test(e.slice(0,-1))}static isAcronym(e,t,r){try{if("string"!=typeof e)throw new Error("Input word must be a string.");const a=new Set(["us","usa"]),i=new Set(["the","in","to","from","against","with","within","towards","into","at"]),o=new Set(["policies","government","military","embassy","administration","senate","congress","parliament","cabinet","federation","republic","democracy","law","act","treaty","court","legislation","statute","bill","agency","department","bureau","service","office","council","commission","division","alliance","union","confederation","bloc","zone","territory","province","state","army","navy","forces","marines","airforce","defense","intelligence","security","economy","budget","finance","treasury","trade","sanctions","aid","strategy","plan","policy","program","initiative","project","reform","relations","ambassador","diplomacy","summit","conference","talks","negotiations"]),s=e=>e.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""),n=e=>{const t=e.match(/^(.*?)([.,\/#!$%\^&\*;:{}=\-_`~()]+)$/);return t&&t[1]?t[1]:e};e=n(e=e?s(e.toLowerCase()):""),t=t?s(t.toLowerCase()):"",r=r?s(r.toLowerCase()):"";const l=a.has(e)&&(!t||i.has(t))&&(!r||o.has(r)),c=a.has(t)&&(!r||o.has(r));return l||c}catch(e){return console.error(`An error occurred: ${e.message}`),!1}}static checkIfWordIsAcronym(e,t,r,a){const i=e=>e.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");return r=r?i(r.toLowerCase()):"",t=t?i(t.toLowerCase()):"",a=a?i(a.toLowerCase()):"",!(!["us","usa"].includes(r.toLowerCase())||null!==t&&!e.includes(t.toLowerCase())||null!==a&&!["policies","government","military","embassy","administration","senate","congress","parliament","cabinet","federation","republic","democracy","law","act","treaty","court","legislation","statute","bill","agency","department","bureau","service","office","council","commission","division","alliance","union","confederation","bloc","zone","territory","province","state","army","navy","forces","marines","airforce","defense","intelligence","security","economy","budget","finance","treasury","trade","sanctions","aid","strategy","plan","policy","program","initiative","project","reform","relations","ambassador","diplomacy","summit","conference","talks","negotiations"].includes(a.toLowerCase()))}static hasSuffix(e){return e.length>2&&e.endsWith("'s")}static hasApostrophe(e){return-1!==e.indexOf("'")}static hasHyphen(e){return-1!==e.indexOf("-")||-1!==e.indexOf("–")||-1!==e.indexOf("—")}static hasRomanNumeral(e){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");const t=e.includes("'")?e.split("'"):[e],r=/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;return t.every((e=>r.test(e)))}static hasHyphenRomanNumeral(e){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");const t=e.split("-");for(let e=0;e<t.length;e++)if(!n.hasRomanNumeral(t[e]))return!1;return!0}static hasHtmlBreak(e){return"nl2br"===e}static hasUnicodeSymbols(e){return/[^\x00-\x7F\u00A0-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u02B0-\u02FF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0800-\u083F\u0840-\u085F\u0860-\u087F\u0880-\u08AF\u08B0-\u08FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF]/.test(e)}static hasCurrencySymbols(e){return/[^\x00-\x7F\u00A0-\u00FF\u20AC\u20A0-\u20B9\u20BD\u20A1-\u20A2\u00A3-\u00A5\u058F\u060B\u09F2-\u09F3\u0AF1\u0BF9\u0E3F\u17DB\u20A6\u20A8\u20B1\u2113\u20AA-\u20AB\u20AA\u20AC-\u20AD\u20B9]/.test(e)}static isWordAmpersand(e){return/&amp;|&/.test(e)}static startsWithSymbol(e){if("string"!=typeof e)throw new Error(`Parameter 'word' must be a string. Received '${typeof e}' instead.`);if(0===e.length)return!1;const t=e.charAt(0);return"#"===t||"@"===t||"."===t}static escapeSpecialCharacters(e){return e.replace(/[&<>"']/g,(function(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&#x27;";default:return e}}))}static unescapeSpecialCharacters(e){return e.replace(/&amp;|&lt;|&gt;|&quot;|&#x27;/g,(function(e){switch(e){case"&amp;":return"&";case"&lt;":return"<";case"&gt;":return">";case"&quot;":return'"';case"&#x27;":return"'";default:return e}}))}static endsWithSymbol(e,t=[".",",",";",":","?","!"]){if("string"!=typeof e||!Array.isArray(t))throw new Error("Invalid arguments");return t.some((t=>e.endsWith(t)))||t.includes(e.slice(-2))}static isWordIgnored(e,t=a.ignoredWordList){if(!Array.isArray(t))throw new TypeError("Invalid input: ignoredWords must be an array.");if("string"!=typeof e||""===e.trim())throw new TypeError("Invalid input: word must be a non-empty string.");let r;return r=e.toLowerCase().trim(),t.includes(r)}static isWordInArray(e,t){return!!Array.isArray(t)&&t.some((t=>t.toLowerCase()===e.toLowerCase()))}static convertQuotesToCurly(e){const t={"'":["‘","’"],'"':["“","”"]};let r="";for(let a=0;a<e.length;a++){const i=e[a],o=t[i];if(o){const t=e[a-1],i=e[a+1],s=!t||" "===t||"\n"===t?o[0]:o[1];r+=s,s===o[1]&&/[.,;!?()\[\]{}:]/.test(i)&&(r+=i,a++)}else r+=i}return r}static replaceTerm(e,t){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");if(!t||"object"!=typeof t)throw new TypeError("Invalid input: replaceTermObj must be a non-null object.");let r;if(r=e.toLowerCase(),t.hasOwnProperty(r))return t[r];if(t.hasOwnProperty(e))return t[e];const a=e.toUpperCase();return t.hasOwnProperty(a)?t[a]:e}static correctSuffix(e,t){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");if(!t||!Array.isArray(t)||t.some((e=>"string"!=typeof e)))throw new TypeError("Invalid input: correctTerms must be an array of strings.");if(/'s$/i.test(e)){const r=e.slice(0,-2),a=t.findIndex((e=>e.toLowerCase()===r.toLowerCase()));if(a>=0){return`${t[a]}'s`}return`${r.charAt(0).toUpperCase()+r.slice(1)}'s`}return e}static correctTerm(e,t,r=/[-']/){if("string"!=typeof e||""===e)throw new TypeError("Invalid input: word must be a non-empty string.");if(!t||!Array.isArray(t))throw new TypeError("Invalid input: correctTerms must be an array.");if(!("string"==typeof r||Array.isArray(r)||r instanceof RegExp))throw new TypeError("Invalid input: delimiters must be a string, an array of strings, or a regular expression.");"string"==typeof r?r=new RegExp(`[${r}]`):Array.isArray(r)&&(r=new RegExp(`[${r.join("")}]`));const a=e.split(r),i=a.length;for(let e=0;e<i;e++){const r=a[e].toLowerCase(),i=t.findIndex((e=>e.toLowerCase()===r));i>=0&&(a[e]=t[i])}return a.join(r.source.charAt(0))}static correctTermHyphenated(e,t){const r=e.split("-"),i=e=>e.charAt(0).toUpperCase()+e.slice(1),o=e=>e.charAt(0)+e.slice(1).toLowerCase(),s={ap:(e,t)=>0===t?i(e):o(e),chicago:i,apa:(e,r,a)=>n.isShortWord(e,t)&&r>0&&r<a-1?e.toLowerCase():i(e),nyt:(e,t)=>0===t?i(e):o(e),wikipedia:(e,t)=>0===t?i(e):o(e)},l=s[t]||o,c=r.map(((e,t)=>{let i=e;if(/^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})'s$/i.test(e)){return i.toUpperCase().replace(/'S$/,"'s")}const o=/^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;if(o.test(e))return e.toUpperCase();if(e.includes("'")){const a=e.split("'");return a.every((e=>o.test(e)))?(i=a.map((e=>e.toUpperCase())).join("'"),i):l(i,t,r.length)}const s=e.toLowerCase(),n=a.correctTitleCasingList.findIndex((e=>e.toLowerCase()===s));if(n>=0)i=a.correctTitleCasingList[n];else if(s.endsWith("'s")){const e=s.substring(0,s.length-2),t=a.correctTitleCasingList.findIndex((t=>t.toLowerCase()===e));t>=0&&(i=`${a.correctTitleCasingList[t]}'s`)}return l(i,t,r.length)}));return c.join("-")}}t.TitleCaserUtils=n,s(n,"TitleCaseValidator",void 0),s(n,"titleCaseOptionsCache",new Map),s(n,"isNeverCapitalizedCache",new Map)},247:e=>{e.exports=JSON.parse('{"sports":["FIFA","UEFA","NBA","NFL","MLB","NHL","NASCAR","IOC","FIBA","ATP","WTA","PGA","LPGA","FIA","WADA","ITF","AFL","NRL","ICC","IRB","IHF","FIVB","FINA","UCI","IAAF","ISU","WSF","BWF","WBC","WBO","IBF","IBO","UEFA","CONMEBOL","CONCACAF","CAF","AFC","OFC","CPL","MLS","LaLiga","Bundesliga","Ligue1","Eredivisie","JLeague","KLeague","Ryder Cup","Davis Cup","FedCup","XGames","Olympics","Paralympics","Dakar"],"apple":["Apple","AirDrop","AirPlay","AirPods","AirTags","FinalCut","GarageBand","iBooks","iCloud","iLife","iMac","iMessage","iMovie","iPhoto","iWatch","iWork","LogicPro","macOS","ProTools","QuickTime","iPhone","iPad","iPod","iOS","macOS","tvOS","watchOS"],"corporate":["Deloitte","Devoteam","ExxonMobil","GE","Boeing","Shell","Chevron"],"tech":["Bing","Salesforce","Asus","Acer","Lenovo","Huawei","Xiaomi","Epson","Nvidia","AMD","Qualcomm","Logitech","Panasonic","Sharp","Toshiba","Philips","Fujitsu","Netgear","Lexmark","Razer","SAP","Symantec","Kaspersky","Avast","McAfee","Siemens","Canon","Nikon","Garmin","GoPro","Oculus","Zoom","Slack","Trello","WeChat","Alibaba","Tencent","Baidu","Roku","Fitbit","Dropbox","Reddit","TikTok","Slack","Trello","Uber","Zoom","Reddit","Quora","JIRA","ZoomInfo","HubSpot","Mailchimp","WeChat","Dropbox","Uber","Telegram","Discord","StackOverflow","Quora","Reddit","ZoomInfo","Airbnb","LinkedIn","Snapchat","GitHub","GitLab","Nginx","OpenSSL","Webpack","Unity3D","Figma","JIRA","Kubernetes","TensorFlow","NPM","WooCommerce","WordPress","Slack","Trello","Uber","Zoom","Reddit","Quora","WeChat","Dropbox","Telegram","Discord","StackOverflow","Airbnb","LinkedIn","Snapchat","JIRA","MobX","VMware","Google"],"business":["Visa","Mastercard","Citibank","JPMorgan","Barclay","AMEX","Citigroup","PayPal","BNP","HSBC","Santander","UBS","Allianz","Prudential","Vanguard","BlackRock","CapitalOne","TD","Robinhood","MoneyGram","SoFi","Experian","Equifax","TransUnion","MasterCard","Blockchain","Coinbase","Binance","Kraken","Ethereum","Bitcoin"],"automotive":["BMW","Ford","Mercedes","Nissan","Tesla","Toyota","Audi","Chevrolet","Chrysler","Dodge","Ferrari","Fiat","Honda","Hyundai","Infiniti","Jaguar","Jeep","Kia","Lamborghini","LandRover","Lexus","Maserati","Mazda","McLaren","Mitsubishi","Peugeot","Porsche","Renault","RollsRoyce","Saab","Subaru","Suzuki","Volkswagen","Volvo","Alfa Romeo","Bentley","Bugatti","Cadillac","Citroen","Daewoo","Daihatsu","Datsun","DeLorean","Fiat Chrysler","GMC","Holden","Hummer","Isuzu","Koenigsegg","Lancia","Lincoln","Lotus","Mahindra","Suzuki","Opel","Pagani","Perodua","Proton","Rover","Scania","Skoda","SsangYong","Tata","Vauxhall","VinFast","Yugo","Zenvo"],"media":["Disney","Netflix","YouTube","Instagram","Twitter","Facebook","Spotify","Hulu","TikTok","Snapchat","Vimeo","Twitch","Reddit","HBO","Showtime","Starz","Crunchyroll","Audible","Pixar","DreamWorks","MGM","Lionsgate","Miramax","EpicGames","Ubisoft","Blizzard","Capcom","Bethesda","Sega","Roku","Fandango","IMDb","Shazam","SoundCloud","Vevo","Vine","Zynga","Tidal","Quibi","Crave","Gaia","PlutoTV","Vudu","Kanopy","Mubi","BritBox"],"telecom":["Verizon","Sprint","Nokia","Ericsson","Vodafone","AT&T","Huawei","Xiaomi","Orange","NTT","T-Mobile","Telefonica","Airtel","Telstra","Rogers","Bell","MTN","ZTE","Qualcomm","Motorola","Telus","BT","Swisscom","SoftBank","KDDI"],"entertainment":["Disney","Netflix","YouTube","Instagram","Twitter","Facebook","Spotify","Hulu","TikTok","Snapchat","Vimeo","Twitch","Reddit","Pandora","HBO","Showtime","Starz","Paramount","Peacock","Crunchyroll","Audible","Pixar","DreamWorks","MGM","Lionsgate","Miramax","EpicGames","Ubisoft","Blizzard","Capcom","Bethesda","Sega","Roku","Fandango","IMDb","Shazam","SoundCloud","Vevo","Zynga","Tidal","Oscars"],"retail":["Amazon","eBay","IKEA","Walmart","Zara","Target","Costco","Sephora","Nordstrom","Tesco","Asda","Aldi","Lidl","Carrefour","Uniqlo","H&M","Gap","Cabela’s","BassPro","REI","Ulta","Saks","JCPenney","Belk","Argos","Safeway","Kroger","Publix","HomeDepot","Woolworths","Staples","OfficeMax","B&H","Newegg","MicroCenter","Frys","Monoprix","Waitrose","Morrisons","Ocado","Flipkart","Rakuten","Alibaba","JD","Taobao","Tmall","Guomei","Suning"],"food":["Nestle","Pepsi","Coca-Cola","PepsiCo","Starbucks","KFC","BurgerKing","PizzaHut","TacoBell","Kroger","Costco","Woolworths","Carrefour","Tesco","Aldi","Lidl","Walmart","Safeway","Publix","WholeFoods","RedBull","Monster","Nespresso","Heineken","Budweiser","Corona","Guinness","GeneralMills","Unilever","Kraft","Heinz","Danone","Campbell","Tyson","Conagra","Mondelez","Suntory","Diageo","Pernod"],"pharmaceutical":["Pfizer","Moderna","Gilead","Merck","Novartis","Sanofi","Roche","AbbVie","Amgen","Bayer","Biogen","BristolMyers","Celgene","GSK","Janssen","Lilly","Medtronic","Mylan","NovoNordisk","Regeneron","Teva","AstraZeneca","Boehringer","Daiichi","Eisai","Genentech","Grifols","Ipsen","Mundipharma","Otsuka","Purdue","Sandoz","Servier","SunPharma","Takeda","UCB","Viatris","Wockhardt","Zydus","Alkem"],"nonprofit":["NGO","NPO","NGOs","NPOs","UN","UNESCO","UNICEF","UNHCR","UNODC","UNDP","UNFPA","UNEP","UNRWA"]}')},607:e=>{e.exports=JSON.parse('{"commercial":["Ltd.","LLC","PLC","Co.","Inc.","St.","Ave.","Bldg.","No.","GmbH"],"titles":["CEO","CEOs","CFO","CFOs","CIO","CIOs","CMO","CMOs","COO","COOs","CPO","CPOs","CRO","CROs","CSO","CSOs","CTO","CTOs","EVP","EVPs","HR","HRs","SVP","SVPs","VP","VPs","CMTO","CDO"],"accounting":["AP","COGS","EBIT","EPS","FIFO","GAAP","LIFO","P&L","ROI","SOX","TCO","VAT","EBITDA","NPV","WACC","AR"],"finance":["CAGR","DCF","ETF","IPO","IRR","M&A","NAV","PE","PEG","PPE","ROE","S&P","TVM","VC","FOMC","FX","ETF"],"legal":["AFA","ADR","CCPA","CFAA","CISG","DMCA","EULA","GDPR","HIPAA","NDA","SOW","TOS","LLM","JD","Esq.","AG","SARL","KYC","AML","ph.d.","m.d.","d.d.s.","d.m.d.","d.o.","d.c.","d.v.m.","d.n.p.","d.p.m.","d.s.w.","d.s.n.","d.n.sc.","d.n.a.","d.n.t.","d.n.p.t.","d.n.o.","d.n.m.","d.n.e.","d.n.s.","d.n.p.s."]}')},818:e=>{e.exports=JSON.parse('{"eterms":["eBook","eBooks","eMarket","eMarketplace","eMarketplaces","eMarkets","eReader","eShop","eShops","eStore","eStores","E-commerce","E-com"]}')},515:e=>{e.exports=JSON.parse('{"countries":["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Cote d\'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],"alpha2":["UK"],"alpha3":["USA"]}')},668:e=>{e.exports=JSON.parse('{"advertising":["AdWords","AdSense","AdMob","DoubleClick","SpotX"],"digitalMarketing":["DSP","SSP","CTR","CPA","CPC","CPL","CPM","CRM","SEO","SEM","SMM","A/B","CTOR","KPI","SERP","FAQ","PR"],"general":["B2B","B2C","CMO","USP","PWA","SMO","T&C","TOS","PP","UI","UX","UI/UX"],"blockchain":["PoE","PoW","PoC"],"accessibility":["A11Y"]}')},1:e=>{e.exports=JSON.parse('{"miscellaneous":["w/","w/o","Open Source","Cybersecurity","Ecosystem","Biodiversity","LGBT","LGBTQ+","LGBTQIA+","2SLGBTQ+","BIPOC"]}')},561:e=>{e.exports=JSON.parse('{"terms":["API","APIs","ASCII","CI","CLI","DLL","DNS","EC2","FTP","HTTP","HTTPs","ICMP","IDE","IP","ISP","LPWAN","M2M","MQTT","OOP","REST","SSH","SSL","TCP","UDP","URL","WLAN","WYSIWYG","IMAP","RSS","IaaS","PaaS","SaaS","CaaS","FaaS","XaaS","RaaS","IoE","IoT","LoRa","NB-IoT","RFID","RF","RFI","RFQ","ECMAScript","IO","I/O","DevOps","SecOps","DDoS","VoIP","AI","AR","ML","VR","CI/CD","DevSecOps","UI/UX","UX/UI","UI","UX","MVC","ORM","3G","4G","5G","NumPy","ML","VPN","PKI","WAN","NAT","GPU","SSD","HDD","RAM","Frontend","Backend","Fullstack"],"legal":["DMCA","GDPR","HIPAA","NDA","SOW","TOS"],"languages":["JavaScript","TypeScript","Java","PHP","SQL","CSS",".NET","ES5","ES6","NoSQL","DynamoDB","Terraform","CloudFormation","RDS","Python","Ruby","Go","Swift","Kotlin","Perl"],"formats":["JSON","XML","YAML","GraphQL","WebSocket","RESTful"],"secops":["RaaS","DevSecOps","SecOps","Cybersecurity","DDoS"],"technologies":["AWS","Azure","GCP","VMware","Docker","Ansible","Chef","Puppet","Git","Subversion","Jenkins","CircleCI","Hadoop","Spark","BigQuery","PowerBI","Tableau"],"os":["Android","macOS","Windows","Linux","iOS","Ubuntu","CentOS","Fedora","Debian","SUSE","HarmonyOS","FreeRTOS","BeOS","BSD","Cordova","Flutter"],"programming":["Angular","Bootstrap","CodeIgniter","jQuery","Laravel","Redux","Vue.js","VueX","SCSS","AJAX","GraphQL","HTML","HTML5","MySQL","MongoDB","PostgresQL","SQLite","ASP","ASPX","Elasticsearch","Nginx","OpenSSL","Webpack","Unity3D","Kubernetes","TensorFlow","NPM"]}')},529:e=>{e.exports=JSON.parse('{"timeRelated":["a.m.","p.m.","ca.","cc.","fig.","pl.","pt.","rev.","sr.","v.","vol.","et al.","pp.","p."],"academic":["adj.","adv.","cf.","cm.","co.","corp.","dept.","dist.","ed.","edn.","esp.","etc.","ex.","i.e.","e.g.","op. cit.","vs."]}')}},t={};var r=function r(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}(497);module.exports=r})();