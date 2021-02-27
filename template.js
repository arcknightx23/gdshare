const CONFIG = {
    PASSKEY: "this is your passkey", // 管理员网页登录密钥，请自行修改，尽量复杂
    HASHKEY: "this is your hash key", // 用于校验生成的下载链接和分享链接，请自行修改，尽量复杂。修改后之前生成的下载和分享链接都会失效
    RETRY_LIMIT: 5, // 有时调用 google drive api 读取目录时会报错，这里设置最多允许重试的次数
    PAGESIZE: 100, // 读取列表的单页对象数，官方限制最大 1000
    ORDERBY: 'modifiedTime', // 可选值 modifiedTime 或 name，分别表示根据文件修改时间排序和根据文件名排序
    DESC: true, // 可选值 true 或 false，分别表示逆序排列和顺序排列
    AUTH: {
        client_id: "insert_your_client_id", // 这三项是你的google帐号个人授权信息，和goindex相同
        client_secret: "insert_your_client_secret", // 同上必填
        refresh_token: "insert_your_refresh_token", // 同上必填
        expires: 0,
        access_token: "" // 可不填
    }
}

!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";var i=n(1),s=n(10);function r(t,e){return 55296==(64512&t.charCodeAt(e))&&(!(e<0||e+1>=t.length)&&56320==(64512&t.charCodeAt(e+1)))}function o(t){return(t>>>24|t>>>8&65280|t<<8&16711680|(255&t)<<24)>>>0}function a(t){return 1===t.length?"0"+t:t}function h(t){return 7===t.length?"0"+t:6===t.length?"00"+t:5===t.length?"000"+t:4===t.length?"0000"+t:3===t.length?"00000"+t:2===t.length?"000000"+t:1===t.length?"0000000"+t:t}e.inherits=s,e.toArray=function(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var n=[];if("string"==typeof t)if(e){if("hex"===e)for((t=t.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(t="0"+t),s=0;s<t.length;s+=2)n.push(parseInt(t[s]+t[s+1],16))}else for(var i=0,s=0;s<t.length;s++){var o=t.charCodeAt(s);o<128?n[i++]=o:o<2048?(n[i++]=o>>6|192,n[i++]=63&o|128):r(t,s)?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++s)),n[i++]=o>>18|240,n[i++]=o>>12&63|128,n[i++]=o>>6&63|128,n[i++]=63&o|128):(n[i++]=o>>12|224,n[i++]=o>>6&63|128,n[i++]=63&o|128)}else for(s=0;s<t.length;s++)n[s]=0|t[s];return n},e.toHex=function(t){for(var e="",n=0;n<t.length;n++)e+=a(t[n].toString(16));return e},e.htonl=o,e.toHex32=function(t,e){for(var n="",i=0;i<t.length;i++){var s=t[i];"little"===e&&(s=o(s)),n+=h(s.toString(16))}return n},e.zero2=a,e.zero8=h,e.join32=function(t,e,n,s){var r=n-e;i(r%4==0);for(var o=new Array(r/4),a=0,h=e;a<o.length;a++,h+=4){var c;c="big"===s?t[h]<<24|t[h+1]<<16|t[h+2]<<8|t[h+3]:t[h+3]<<24|t[h+2]<<16|t[h+1]<<8|t[h],o[a]=c>>>0}return o},e.split32=function(t,e){for(var n=new Array(4*t.length),i=0,s=0;i<t.length;i++,s+=4){var r=t[i];"big"===e?(n[s]=r>>>24,n[s+1]=r>>>16&255,n[s+2]=r>>>8&255,n[s+3]=255&r):(n[s+3]=r>>>24,n[s+2]=r>>>16&255,n[s+1]=r>>>8&255,n[s]=255&r)}return n},e.rotr32=function(t,e){return t>>>e|t<<32-e},e.rotl32=function(t,e){return t<<e|t>>>32-e},e.sum32=function(t,e){return t+e>>>0},e.sum32_3=function(t,e,n){return t+e+n>>>0},e.sum32_4=function(t,e,n,i){return t+e+n+i>>>0},e.sum32_5=function(t,e,n,i,s){return t+e+n+i+s>>>0},e.sum64=function(t,e,n,i){var s=t[e],r=i+t[e+1]>>>0,o=(r<i?1:0)+n+s;t[e]=o>>>0,t[e+1]=r},e.sum64_hi=function(t,e,n,i){return(e+i>>>0<e?1:0)+t+n>>>0},e.sum64_lo=function(t,e,n,i){return e+i>>>0},e.sum64_4_hi=function(t,e,n,i,s,r,o,a){var h=0,c=e;return h+=(c=c+i>>>0)<e?1:0,h+=(c=c+r>>>0)<r?1:0,t+n+s+o+(h+=(c=c+a>>>0)<a?1:0)>>>0},e.sum64_4_lo=function(t,e,n,i,s,r,o,a){return e+i+r+a>>>0},e.sum64_5_hi=function(t,e,n,i,s,r,o,a,h,c){var u=0,l=e;return u+=(l=l+i>>>0)<e?1:0,u+=(l=l+r>>>0)<r?1:0,u+=(l=l+a>>>0)<a?1:0,t+n+s+o+h+(u+=(l=l+c>>>0)<c?1:0)>>>0},e.sum64_5_lo=function(t,e,n,i,s,r,o,a,h,c){return e+i+r+a+c>>>0},e.rotr64_hi=function(t,e,n){return(e<<32-n|t>>>n)>>>0},e.rotr64_lo=function(t,e,n){return(t<<32-n|e>>>n)>>>0},e.shr64_hi=function(t,e,n){return t>>>n},e.shr64_lo=function(t,e,n){return(t<<32-n|e>>>n)>>>0}},function(t,e){function n(t,e){if(!t)throw new Error(e||"Assertion failed")}t.exports=n,n.equal=function(t,e,n){if(t!=e)throw new Error(n||"Assertion failed: "+t+" != "+e)}},function(t,e,n){"use strict";var i=n(0),s=n(1);function r(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}e.BlockHash=r,r.prototype.update=function(t,e){if(t=i.toArray(t,e),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){var n=(t=this.pending).length%this._delta8;this.pending=t.slice(t.length-n,t.length),0===this.pending.length&&(this.pending=null),t=i.join32(t,0,t.length-n,this.endian);for(var s=0;s<t.length;s+=this._delta32)this._update(t,s,s+this._delta32)}return this},r.prototype.digest=function(t){return this.update(this._pad()),s(null===this.pending),this._digest(t)},r.prototype._pad=function(){var t=this.pendingTotal,e=this._delta8,n=e-(t+this.padLength)%e,i=new Array(n+this.padLength);i[0]=128;for(var s=1;s<n;s++)i[s]=0;if(t<<=3,"big"===this.endian){for(var r=8;r<this.padLength;r++)i[s++]=0;i[s++]=0,i[s++]=0,i[s++]=0,i[s++]=0,i[s++]=t>>>24&255,i[s++]=t>>>16&255,i[s++]=t>>>8&255,i[s++]=255&t}else for(i[s++]=255&t,i[s++]=t>>>8&255,i[s++]=t>>>16&255,i[s++]=t>>>24&255,i[s++]=0,i[s++]=0,i[s++]=0,i[s++]=0,r=8;r<this.padLength;r++)i[s++]=0;return i}},function(t,e,n){"use strict";var i=n(0).rotr32;function s(t,e,n){return t&e^~t&n}function r(t,e,n){return t&e^t&n^e&n}function o(t,e,n){return t^e^n}e.ft_1=function(t,e,n,i){return 0===t?s(e,n,i):1===t||3===t?o(e,n,i):2===t?r(e,n,i):void 0},e.ch32=s,e.maj32=r,e.p32=o,e.s0_256=function(t){return i(t,2)^i(t,13)^i(t,22)},e.s1_256=function(t){return i(t,6)^i(t,11)^i(t,25)},e.g0_256=function(t){return i(t,7)^i(t,18)^t>>>3},e.g1_256=function(t){return i(t,17)^i(t,19)^t>>>10}},function(t,e,n){"use strict";var i=n(0),s=n(2),r=n(3),o=n(1),a=i.sum32,h=i.sum32_4,c=i.sum32_5,u=r.ch32,l=r.maj32,d=r.s0_256,p=r.s1_256,f=r.g0_256,g=r.g1_256,m=s.BlockHash,y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function w(){if(!(this instanceof w))return new w;m.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=y,this.W=new Array(64)}i.inherits(w,m),t.exports=w,w.blockSize=512,w.outSize=256,w.hmacStrength=192,w.padLength=64,w.prototype._update=function(t,e){for(var n=this.W,i=0;i<16;i++)n[i]=t[e+i];for(;i<n.length;i++)n[i]=h(g(n[i-2]),n[i-7],f(n[i-15]),n[i-16]);var s=this.h[0],r=this.h[1],m=this.h[2],y=this.h[3],w=this.h[4],v=this.h[5],_=this.h[6],b=this.h[7];for(o(this.k.length===n.length),i=0;i<n.length;i++){var x=c(b,p(w),u(w,v,_),this.k[i],n[i]),k=a(d(s),l(s,r,m));b=_,_=v,v=w,w=a(y,x),y=m,m=r,r=s,s=a(x,k)}this.h[0]=a(this.h[0],s),this.h[1]=a(this.h[1],r),this.h[2]=a(this.h[2],m),this.h[3]=a(this.h[3],y),this.h[4]=a(this.h[4],w),this.h[5]=a(this.h[5],v),this.h[6]=a(this.h[6],_),this.h[7]=a(this.h[7],b)},w.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(t,e,n){"use strict";var i=n(0),s=n(2),r=n(1),o=i.rotr64_hi,a=i.rotr64_lo,h=i.shr64_hi,c=i.shr64_lo,u=i.sum64,l=i.sum64_hi,d=i.sum64_lo,p=i.sum64_4_hi,f=i.sum64_4_lo,g=i.sum64_5_hi,m=i.sum64_5_lo,y=s.BlockHash,w=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function v(){if(!(this instanceof v))return new v;y.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=w,this.W=new Array(160)}function _(t,e,n,i,s){var r=t&n^~t&s;return r<0&&(r+=4294967296),r}function b(t,e,n,i,s,r){var o=e&i^~e&r;return o<0&&(o+=4294967296),o}function x(t,e,n,i,s){var r=t&n^t&s^n&s;return r<0&&(r+=4294967296),r}function k(t,e,n,i,s,r){var o=e&i^e&r^i&r;return o<0&&(o+=4294967296),o}function S(t,e){var n=o(t,e,28)^o(e,t,2)^o(e,t,7);return n<0&&(n+=4294967296),n}function $(t,e){var n=a(t,e,28)^a(e,t,2)^a(e,t,7);return n<0&&(n+=4294967296),n}function T(t,e){var n=o(t,e,14)^o(t,e,18)^o(e,t,9);return n<0&&(n+=4294967296),n}function q(t,e){var n=a(t,e,14)^a(t,e,18)^a(e,t,9);return n<0&&(n+=4294967296),n}function A(t,e){var n=o(t,e,1)^o(t,e,8)^h(t,e,7);return n<0&&(n+=4294967296),n}function R(t,e){var n=a(t,e,1)^a(t,e,8)^c(t,e,7);return n<0&&(n+=4294967296),n}function E(t,e){var n=o(t,e,19)^o(e,t,29)^h(t,e,6);return n<0&&(n+=4294967296),n}function z(t,e){var n=a(t,e,19)^a(e,t,29)^c(t,e,6);return n<0&&(n+=4294967296),n}i.inherits(v,y),t.exports=v,v.blockSize=1024,v.outSize=512,v.hmacStrength=192,v.padLength=128,v.prototype._prepareBlock=function(t,e){for(var n=this.W,i=0;i<32;i++)n[i]=t[e+i];for(;i<n.length;i+=2){var s=E(n[i-4],n[i-3]),r=z(n[i-4],n[i-3]),o=n[i-14],a=n[i-13],h=A(n[i-30],n[i-29]),c=R(n[i-30],n[i-29]),u=n[i-32],l=n[i-31];n[i]=p(s,r,o,a,h,c,u,l),n[i+1]=f(s,r,o,a,h,c,u,l)}},v.prototype._update=function(t,e){this._prepareBlock(t,e);var n=this.W,i=this.h[0],s=this.h[1],o=this.h[2],a=this.h[3],h=this.h[4],c=this.h[5],p=this.h[6],f=this.h[7],y=this.h[8],w=this.h[9],v=this.h[10],A=this.h[11],R=this.h[12],E=this.h[13],z=this.h[14],P=this.h[15];r(this.k.length===n.length);for(var j=0;j<n.length;j+=2){var D=z,O=P,H=T(y,w),L=q(y,w),N=_(y,w,v,A,R),C=b(y,w,v,A,R,E),B=this.k[j],I=this.k[j+1],W=n[j],U=n[j+1],G=g(D,O,H,L,N,C,B,I,W,U),M=m(D,O,H,L,N,C,B,I,W,U);D=S(i,s),O=$(i,s),H=x(i,s,o,a,h),L=k(i,s,o,a,h,c);var F=l(D,O,H,L),J=d(D,O,H,L);z=R,P=E,R=v,E=A,v=y,A=w,y=l(p,f,G,M),w=d(f,f,G,M),p=h,f=c,h=o,c=a,o=i,a=s,i=l(G,M,F,J),s=d(G,M,F,J)}u(this.h,0,i,s),u(this.h,2,o,a),u(this.h,4,h,c),u(this.h,6,p,f),u(this.h,8,y,w),u(this.h,10,v,A),u(this.h,12,R,E),u(this.h,14,z,P)},v.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(t,e){function n(t){return[...t].reduce((t,e)=>{const n={};return n[e[0]]=e[1],{...t,...n}},{})}async function i(t,e=1048576){const n=[],i=t.getReader(),s=new TextDecoder;let r=0;for(;e&&r<e;){const{done:t,value:e}=await i.read();if(t)break;r+=e.byteLength,n.push(s.decode(e))}const o=n.join("");return e?o.substring(0,e):o}t.exports={parseRoute:function({host:t=".*",path:e=".*",excludePath:n=null,method:i=[".*"],handler:s,protocol:r=".*",handlerName:o,headers:a={},data:h}){const c=[],u=[],l=t.replace(/(:([^.]+))/g,(t,e,n)=>(c.push(n),"([^.]+)")),d=e.replace(/(:([^/]+))/g,(t,e,n)=>"*"===n.slice(-1)?(u.push(n.slice(0,n.length-1)),"(.*)"):(u.push(n),"([^/]*)")),p=new RegExp(`^${l}$`,"i"),f=new RegExp(`^${d}$`,"i"),g=n?new RegExp(`^${n}$`,"i"):null,m=new RegExp(`^${i.join("|")}$`,"i"),y=new RegExp(`^${r}$`,"i");return{hostVariables:c,pathVariables:u,host:p,path:f,excludePath:g,method:m,protocol:y,handler:s,handlerName:o,headers:a,data:h}},parseRequest:function(t){const e=new URL(t.url),s=n(e.searchParams),r=n(t.headers);return r.host&&(e.hostname=r.host),{body:t.body,headers:r,host:e.host,hostname:e.hostname,href:e.href,json:async e=>JSON.parse(await i(t.body,e)),method:t.method,origin:`${e.protocol}//${e.host}`,path:e.pathname,protocol:e.protocol.slice(0,-1),query:s,querystring:e.search.slice(1),search:e.search,text:async e=>{const n=await i(t.body,e);return"application/x-www-form-urlencoded"===t.headers.get("content-type")?decodeURIComponent(n):n}}}}},function(t,e){t.exports=CONFIG},function(t,e,n){const i=n(9),s=n(17),{wtf:r,bad:o,ok:a}=n(21),{ls_drives:h,find:c,get_file_info:u,check_belonging:l,gen_payload:d,get_all_ancestors:p,ls:f,ls_all:g}=n(22),m=n(23),{PASSKEY:y,HASHKEY:w}=n(7),v="application/vnd.google-apps.folder";function _(t){return i.hmac(i.sha256,w).update(t).digest("hex")}function b({expired:t,id:e,name:n}){const i=t?`expired=${t}&id=${e}`:"id="+e;return`/api/download/${n?encodeURIComponent(n):"noname"}?${i}&sig=${_(i)}`}const x=new s;x.use(async(t,e)=>{try{return await e(t)}catch(e){console.error(e.message);const n=e&&e.response&&e.response.data;n&&console.error(JSON.stringify(n)),o(t,e.message)}}),x.use((async function(t,e){if("post"!==t.request.method.toLowerCase())return e(t);try{t.request.body=await t.request.json()}catch(e){console.log("fail to parse request body to json",e),t.request.body={}}const{passkey:n}=t.request.body;if(t.request.path.startsWith("/api/admin")&&n!==y)return o(t,"invalid passkey");return e(t)})),x.post("/api/folder/link",async t=>{const{id:e,nextPageToken:n,root:i,code:s,expired:r,sig:h,name:c}=t.request.body;if(!(e&&i&&s&&h))return o(t,"invalid request");if(_(r?`expired=${r}&root=${i}&code=${s}`:`root=${i}&code=${s}`)!==h)return o(t,"提取码错误");if(!await l({root:i,id:e}))return o(t,"folder id does not belongs to root");const u=b({expired:r,id:e,name:c});a(t,{link:u})}),x.post("/api/folder/links",async t=>{const{id:e,root:n,code:i,expired:s,sig:r}=t.request.body;if(!(e&&n&&i&&r))return o(t,"invalid request");if(_(s?`expired=${s}&root=${n}&code=${i}`:`root=${n}&code=${i}`)!==r)return o(t,"提取码错误");if(!await l({root:n,id:e}))return o(t,"folder id does not belongs to root");let h=await g(e);h=h.filter(t=>t.mimeType!==v);const c=h.map(t=>b({expired:s,...t}));a(t,{links:c})}),x.post("/api/folder/ls",async t=>{const{id:e,nextPageToken:n,root:i,code:s,expired:r,sig:h}=t.request.body;if(!(e&&i&&s&&h))return o(t,"invalid request");if(_(r?`expired=${r}&root=${i}&code=${s}`:`root=${i}&code=${s}`)!==h)return o(t,"提取码错误");if(!await l({root:i,id:e}))return o(t,"folder id does not belongs to root");let c;if(!n&&(c=await u(e),c.mimeType!==v))return o(t,"未找到相关目录");const d=await f(e,n),p=c&&c.name;a(t,{name:p,list:d})}),x.post("/api/file/info",async t=>{const{id:e}=t.request.body;if(!e)return r(t,"invalid id");try{const n=await u(e);a(t,n)}catch(n){console.log("fail to get file",e,n.message),o(t,"获取文件信息失败")}}),x.post("/api/file/link",async t=>{const{code:e,id:n,expired:i,sig:s,name:h}=t.request.body;if(!n||!e||!s)return r(t,"invalid request");if(i&&Date.now()>Number(i))return o(t,"分享链接已过期");if(_(i?`expired=${i}&id=${n}&code=${e}`:`id=${n}&code=${e}`)!==s)return o(t,"提取码错误");const c=b({expired:i,id:n,name:h});a(t,{link:c})}),x.post("/api/admin/ancestors",async t=>{const{id:e}=t.request.body;if(!e)return o(t,"invalid id");const n=await p(e);a(t,n)}),x.post("/api/admin/link",t=>{let{expired:e,id:n,name:i}=t.request.body;if(!n)return o(t,"id can not be empty");const s=b({expired:e,id:n,name:i});a(t,{link:s})}),x.post("/api/admin/links",t=>{const{expired:e,files:n}=t.request.body;if(!Array.isArray(n))return o(t,"files must be an array");const i=n.map(t=>b({expired:e,...t}));a(t,{links:i})}),x.post("/api/admin/all",async t=>{const{id:e,expired:n}=t.request.body;if(!e)return o(t,"id can not be empty");let i=await g(e);i=i.filter(t=>t.mimeType!==v);const s=i.map(t=>b({expired:n,...t}));a(t,{links:s})}),x.post("/api/admin/auth",t=>{const{passkey:e}=t.request.body;if(e!==y)return o(t,"passkey 错误");a(t,"ok")}),x.post("/api/admin/search",async t=>{const{keyword:e,nextPageToken:n,range:i}=t.request.body;if(!e)return o(t,"搜索词不能为空");const s=await c(e,n,i);a(t,s)}),x.post("/api/admin/drives",async t=>{const e=await h();a(t,e)}),x.post("/api/admin/ls",async t=>{const{id:e,nextPageToken:n}=t.request.body;if(!e)return o(t,"invalid folder id");let i;n||(i=await u(e));const s=await f(e,n);s.name=i&&i.name,s.parent=i&&i.parents&&i.parents[0],a(t,s)}),x.post("/api/admin/share",t=>{const{expired:e,id:n,code:i,is_folder:s}=t.request.body;if(!n||!i)return o(t,"id or code can not be empty");let r=s?"root":"id",h=e?`expired=${e}&${r}=${n}`:`${r}=${n}`;h=h+"&sig="+_(h+"&code="+i),a(t,{link:h})}),x.use((t,e)=>{const{method:n,path:i}=t.request;"GET"!==n||i.startsWith("/api")||(t.status=200,t.set("Content-Type","text/html; charset=utf-8"),t.body=m)}),addEventListener("fetch",t=>{if(new URL(t.request.url).pathname.startsWith("/api/download"))return t.respondWith(async function(t){const e=new URL(t.url),[n,i,s]=["expired","id","sig"].map(t=>e.searchParams.get(t));if(!i||!s)return new Response("invalid request",{status:403});if(n&&Date.now()>Number(n))return new Response("link expired",{status:403});if(s!==_(n?`expired=${n}&id=${i}`:"id="+i))return new Response("invalid sig",{status:403});const r=t.headers.get("Range"),o=await d();o.headers.Range=r||"";const{name:a}=await u(i);let h=await fetch(`https://www.googleapis.com/drive/v3/files/${i}?alt=media`,o);return h=new Response(h.body,h),h.headers.set("Content-Disposition",`attachment; filename="${a}"`),h}(t.request));t.respondWith(x.resolve(t))})},function(t,e,n){var i=e;i.utils=n(0),i.common=n(2),i.sha=n(11),i.ripemd=n(15),i.hmac=n(16),i.sha1=i.sha.sha1,i.sha256=i.sha.sha256,i.sha224=i.sha.sha224,i.sha384=i.sha.sha384,i.sha512=i.sha.sha512,i.ripemd160=i.ripemd.ripemd160},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}}},function(t,e,n){"use strict";e.sha1=n(12),e.sha224=n(13),e.sha256=n(4),e.sha384=n(14),e.sha512=n(5)},function(t,e,n){"use strict";var i=n(0),s=n(2),r=n(3),o=i.rotl32,a=i.sum32,h=i.sum32_5,c=r.ft_1,u=s.BlockHash,l=[1518500249,1859775393,2400959708,3395469782];function d(){if(!(this instanceof d))return new d;u.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}i.inherits(d,u),t.exports=d,d.blockSize=512,d.outSize=160,d.hmacStrength=80,d.padLength=64,d.prototype._update=function(t,e){for(var n=this.W,i=0;i<16;i++)n[i]=t[e+i];for(;i<n.length;i++)n[i]=o(n[i-3]^n[i-8]^n[i-14]^n[i-16],1);var s=this.h[0],r=this.h[1],u=this.h[2],d=this.h[3],p=this.h[4];for(i=0;i<n.length;i++){var f=~~(i/20),g=h(o(s,5),c(f,r,u,d),p,n[i],l[f]);p=d,d=u,u=o(r,30),r=s,s=g}this.h[0]=a(this.h[0],s),this.h[1]=a(this.h[1],r),this.h[2]=a(this.h[2],u),this.h[3]=a(this.h[3],d),this.h[4]=a(this.h[4],p)},d.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(t,e,n){"use strict";var i=n(0),s=n(4);function r(){if(!(this instanceof r))return new r;s.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}i.inherits(r,s),t.exports=r,r.blockSize=512,r.outSize=224,r.hmacStrength=192,r.padLength=64,r.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h.slice(0,7),"big"):i.split32(this.h.slice(0,7),"big")}},function(t,e,n){"use strict";var i=n(0),s=n(5);function r(){if(!(this instanceof r))return new r;s.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}i.inherits(r,s),t.exports=r,r.blockSize=1024,r.outSize=384,r.hmacStrength=192,r.padLength=128,r.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h.slice(0,12),"big"):i.split32(this.h.slice(0,12),"big")}},function(t,e,n){"use strict";var i=n(0),s=n(2),r=i.rotl32,o=i.sum32,a=i.sum32_3,h=i.sum32_4,c=s.BlockHash;function u(){if(!(this instanceof u))return new u;c.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function l(t,e,n,i){return t<=15?e^n^i:t<=31?e&n|~e&i:t<=47?(e|~n)^i:t<=63?e&i|n&~i:e^(n|~i)}function d(t){return t<=15?0:t<=31?1518500249:t<=47?1859775393:t<=63?2400959708:2840853838}function p(t){return t<=15?1352829926:t<=31?1548603684:t<=47?1836072691:t<=63?2053994217:0}i.inherits(u,c),e.ripemd160=u,u.blockSize=512,u.outSize=160,u.hmacStrength=192,u.padLength=64,u.prototype._update=function(t,e){for(var n=this.h[0],i=this.h[1],s=this.h[2],c=this.h[3],u=this.h[4],w=n,v=i,_=s,b=c,x=u,k=0;k<80;k++){var S=o(r(h(n,l(k,i,s,c),t[f[k]+e],d(k)),m[k]),u);n=u,u=c,c=r(s,10),s=i,i=S,S=o(r(h(w,l(79-k,v,_,b),t[g[k]+e],p(k)),y[k]),x),w=x,x=b,b=r(_,10),_=v,v=S}S=a(this.h[1],s,b),this.h[1]=a(this.h[2],c,x),this.h[2]=a(this.h[3],u,w),this.h[3]=a(this.h[4],n,v),this.h[4]=a(this.h[0],i,_),this.h[0]=S},u.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h,"little"):i.split32(this.h,"little")};var f=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],g=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],m=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],y=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},function(t,e,n){"use strict";var i=n(0),s=n(1);function r(t,e,n){if(!(this instanceof r))return new r(t,e,n);this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,this._init(i.toArray(e,n))}t.exports=r,r.prototype._init=function(t){t.length>this.blockSize&&(t=(new this.Hash).update(t).digest()),s(t.length<=this.blockSize);for(var e=t.length;e<this.blockSize;e++)t.push(0);for(e=0;e<t.length;e++)t[e]^=54;for(this.inner=(new this.Hash).update(t),e=0;e<t.length;e++)t[e]^=106;this.outer=(new this.Hash).update(t)},r.prototype.update=function(t,e){return this.inner.update(t,e),this},r.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)}},function(t,e,n){const i=n(6),s=n(18),r=n(19),o=n(20);t.exports=class{constructor(){this.routes=[]}get(t,e){const n=i.parseRoute({method:[r.methods.GET,r.methods.HEAD],path:t,handler:e});this.routes.push(n)}post(t,e){const n=i.parseRoute({method:[r.methods.POST],path:t,handler:e});this.routes.push(n)}patch(t,e){const n=i.parseRoute({method:[r.methods.PATCH],path:t,handler:e});this.routes.push(n)}del(t,e){const n=i.parseRoute({method:[r.methods.DELETE],path:t,handler:e});this.routes.push(n)}use(t){const e=i.parseRoute({handler:t,middleware:!0});this.routes.push(e)}add({host:t,path:e,excludePath:n,method:s,handlerName:r,headers:o,protocol:a},h){const c=i.parseRoute({method:s,host:t,path:e,excludePath:n,handler:h,headers:o,handlerName:r,protocol:a});this.routes.push(c)}async resolve(t){const e=new o(t);try{return await s.recurseRoutes(e,this.routes),new Response(e.body,{status:e.status,headers:e.response.headers})}catch(t){return new Response(t.message,{status:500})}}}},function(t,e){function n(t,e){return t.method.test(e.method)&&t.host.test(e.host)&&t.path.test(e.path)&&function(t,e){let n=!0;return Object.keys(t.headers).forEach(i=>{e.headers[i]!==t.headers[i]&&(n=!1)}),n}(t,e)&&function(t,e){return t.protocol.test(e.protocol)}(t,e)&&(!t.excludePath||!t.excludePath.test(e.path))}t.exports={recurseRoutes:async function t(e,i){const[s,...r]=i;if(!s)return new Response("NOT_FOUND",{status:404});if(!n(s,e.request))return t(e,r);e.state.handlers=e.state.handlers||[],e.state.handlers.push(s.handlerName||s.handler.name),e.params=function(t,e){const n={},i=e.host.exec(t.host);e.hostVariables.forEach((t,e)=>{n[t]=i[e+1]});const s=e.path.exec(t.path);return e.pathVariables.forEach((t,e)=>{n[t]=s[e+1]}),n}(e.request,s);try{return s.handler(e,async e=>t(e,r))}catch(t){throw t.route=s.handler.name,t}}}},function(t,e){t.exports={methods:{DELETE:"DELETE",GET:"GET",HEAD:"HEAD",OPTIONS:"OPTIONS",PATCH:"PATCH",POST:"POST"},statusMessages:{404:"Not found",429:"Rate limited"}}},function(t,e,n){const i=n(6);t.exports=class t{constructor(t){this.request=i.parseRequest(t.request),this.event=t,this.state={},this.cloned=!1,this.response={headers:{}},this.body="",this.status=404,this.query=this.request.query}header(t){return this.request.headers[t]}set(t,e){this.response.headers[t]=e}clone(){const e=new t(this.event);return e.cloned=!0,e}}},function(t,e){t.exports={ok:function(t,e={}){t.status=200,t.body=JSON.stringify({data:e})},bad:function(t,e){const n=e||"sorry, please try again later";t.status=200,t.body=JSON.stringify({message:n})},wtf:function(t,e){e=e||"no comment",console.error(new Error("wtf? "+e)),t.status=200,t.body=JSON.stringify({message:"FBI Warning"})}}},function(t,e,n){const{RETRY_LIMIT:i,PAGESIZE:s,AUTH:r,ORDERBY:o,DESC:a}=n(7);async function h(t={},e="GET"){const n=await async function(){const{expires:t,access_token:e,client_id:n,client_secret:i,refresh_token:s}=r;if(t>Date.now())return e;const o={headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:c({client_id:n,client_secret:i,refresh_token:s,grant_type:"refresh_token"})},a=await fetch("https://www.googleapis.com/oauth2/v4/token",o),h=await a.json();return r.access_token=h.access_token,r.expires=Date.now()+1e3*h.expires_in,h.access_token}();return t.authorization="Bearer "+n,{method:e,headers:t}}function c(t){const e=[];for(let n in t)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}async function u(t){let e="https://www.googleapis.com/drive/v3/files/"+t;e+="?"+c({includeItemsFromAllDrives:!0,supportsAllDrives:!0,corpora:"allDrives",fields:"id, name, size, mimeType, createdTime, parents"}),function(t){return t.startsWith("0A")&&19===t.length}(t)&&(e="https://www.googleapis.com/drive/v3/drives/"+t);const n=await h();return(await fetch(e,n)).json()}async function l(t,e,n){const r={includeItemsFromAllDrives:!0,supportsAllDrives:!0,q:`'${t}' in parents and trashed = false`,fields:"nextPageToken, files(id, name, mimeType, modifiedTime, size, md5Checksum, thumbnailLink)",pageSize:Math.min(s,1e3)};r.orderBy=`folder, ${"name"===o?"name":"modifiedTime"} desc`,!1!==a&&"false"!==a||(r.orderBy=r.orderBy.replace(" desc","")),e&&(r.pageToken=e),n&&(r.pageSize=n);const u="https://www.googleapis.com/drive/v3/files?"+c(r),l=await h();let d=0;for(;d<i;){const t=await fetch(u,l),e=await t.json();if(e.files)return e;d++}throw new Error("加载列表失败，请刷新重试")}t.exports={find:async function(t,e,n){let r="https://www.googleapis.com/drive/v3/files";const u={includeItemsFromAllDrives:!0,supportsAllDrives:!0,corpora:"allDrives"},l=n&&n.startsWith("0A")&&19===n.length;if(l&&(u.corpora="drive",u.driveId=n),e&&(u.pageToken=e),t=t.replace(/'/g, "\\'"),t.includes("-")){let e=t.replace(/-/g,"");e=e.split(/\s+/),e=`name contains '${e.join("' AND name contains '")}'`,t=`(${t=`name contains '${(t=t.split(/\s+/)).join("' AND name contains '")}'`}) OR (${e})`}else t=`name contains '${(t=t.split(/\s+/)).join("' AND name contains '")}'`;u.q=`trashed = false AND (${t})`,n&&!l&&(u.q=`'${n}' in parents AND ${u.q}`),u.fields="nextPageToken, files(id, name, mimeType, size, modifiedTime, parents, md5Checksum, thumbnailLink)",u.orderBy=`folder, ${"name"===o?"name":"modifiedTime"} desc`,!1!==a&&"false"!==a||(u.orderBy=u.orderBy.replace(" desc","")),u.pageSize=s,r+="?"+c(u);const d=await h();let p=0;for(;p<i;){const t=await fetch(r,d),e=await t.json();if(e.files)return e;p++}throw new Error("搜索接口返回失败，请重试")},get_file_info:u,ls:l,ls_all:async function(t){let{files:e,nextPageToken:n}=await l(t,null,1e3);for(;n;){const i=await l(t,n,1e3);n=i.nextPageToken,e=e.concat(i.files)}return e},ls_drives:async function(){const t=await h();return(await fetch("https://www.googleapis.com/drive/v3/drives?pageSize=100",t)).json()},check_belonging:async function({id:t,root:e}){if(t===e)return!0;let n=[t];do{if(n=await Promise.all(n.map(async t=>(await u(t)).parents)),n=[].concat(...n).filter(t=>t),n.includes(e))return!0}while(n.length);return!1},get_all_ancestors:async function(t){const e=[];for(;t;){const n=await u(t);e.push(n),t=n.parents&&n.parents[0]}return e},gen_payload:h}},function(t,e){t.exports='<!doctype html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width,initial-scale=1">\n    <title>GDShare</title>\n    <link rel="icon" href="data:,">\n    <link href="https://cdn.jsdelivr.net/gh/iwestlin/gdshare/dist/20201127.css" rel="stylesheet">\n</head>\n<body>\n    <div id="root"></div>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/iwestlin/gdshare/dist/20210227.js"><\/script>\n</body>\n</html>'}]);