var ee,f,Ne,j,De,fe,Me,Z={},je=[],lt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function O(e,t){for(var n in t)e[n]=t[n];return e}function Fe(e){var t=e.parentNode;t&&t.removeChild(e)}function W(e,t,n){var r,i,o,l={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?ee.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return J(e,l,r,i,null)}function J(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Ne};return i==null&&f.vnode!=null&&f.vnode(o),o}function T(e){return e.children}function E(e,t){this.props=e,this.context=t}function N(e,t){if(t==null)return e.__?N(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?N(e):null}function Ve(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ve(e)}}function oe(e){(!e.__d&&(e.__d=!0)&&j.push(e)&&!K.__r++||fe!==f.debounceRendering)&&((fe=f.debounceRendering)||De)(K)}function K(){for(var e;K.__r=j.length;)e=j.sort(function(t,n){return t.__v.__b-n.__v.__b}),j=[],e.some(function(t){var n,r,i,o,l,a;t.__d&&(l=(o=(n=t).__v).__e,(a=n.__P)&&(r=[],(i=O({},o)).__v=o.__v+1,le(a,o,i,n.__n,a.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l??N(o),o.__h),Je(r,o),o.__e!=l&&Ve(o)))})}function Ie(e,t,n,r,i,o,l,a,s,p){var _,d,u,c,h,P,y,g=r&&r.__k||je,b=g.length;for(n.__k=[],_=0;_<t.length;_++)if((c=n.__k[_]=(c=t[_])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?J(null,c,null,null,c):Array.isArray(c)?J(T,{children:c},null,null,null):c.__b>0?J(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(u=g[_])===null||u&&c.key==u.key&&c.type===u.type)g[_]=void 0;else for(d=0;d<b;d++){if((u=g[d])&&c.key==u.key&&c.type===u.type){g[d]=void 0;break}u=null}le(e,c,u=u||Z,i,o,l,a,s,p),h=c.__e,(d=c.ref)&&u.ref!=d&&(y||(y=[]),u.ref&&y.push(u.ref,null,c),y.push(d,c.__c||h,c)),h!=null?(P==null&&(P=h),typeof c.type=="function"&&c.__k===u.__k?c.__d=s=ze(c,s,e):s=qe(e,c,u,g,h,s),typeof n.type=="function"&&(n.__d=s)):s&&u.__e==s&&s.parentNode!=e&&(s=N(u))}for(n.__e=P,_=b;_--;)g[_]!=null&&(typeof n.type=="function"&&g[_].__e!=null&&g[_].__e==n.__d&&(n.__d=N(r,_+1)),Ze(g[_],g[_]));if(y)for(_=0;_<y.length;_++)Ge(y[_],y[++_],y[++_])}function ze(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?ze(r,t,n):qe(n,r,r,i,r.__e,t));return t}function R(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){R(n,t)}):t.push(e)),t}function qe(e,t,n,r,i,o){var l,a,s;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),l=null;else{for(a=o,s=0;(a=a.nextSibling)&&s<r.length;s+=2)if(a==i)break e;e.insertBefore(i,o),l=o}return l!==void 0?l:i.nextSibling}function at(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||Q(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Q(e,o,t[o],n[o],r)}function pe(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||lt.test(t)?n:n+"px"}function Q(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||pe(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||pe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?de:he,o):e.removeEventListener(t,o?de:he,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function he(e){this.l[e.type+!1](f.event?f.event(e):e)}function de(e){this.l[e.type+!0](f.event?f.event(e):e)}function le(e,t,n,r,i,o,l,a,s){var p,_,d,u,c,h,P,y,g,b,U,x=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(s=n.__h,a=t.__e=n.__e,t.__h=null,o=[a]),(p=f.__b)&&p(t);try{e:if(typeof x=="function"){if(y=t.props,g=(p=x.contextType)&&r[p.__c],b=p?g?g.props.value:p.__:r,n.__c?P=(_=t.__c=n.__c).__=_.__E:("prototype"in x&&x.prototype.render?t.__c=_=new x(y,b):(t.__c=_=new E(y,b),_.constructor=x,_.render=ct),g&&g.sub(_),_.props=y,_.state||(_.state={}),_.context=b,_.__n=r,d=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),x.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=O({},_.__s)),O(_.__s,x.getDerivedStateFromProps(y,_.__s))),u=_.props,c=_.state,d)x.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(x.getDerivedStateFromProps==null&&y!==u&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(y,b),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(y,_.__s,b)===!1||t.__v===n.__v){_.props=y,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(w){w&&(w.__=t)}),_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(y,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(u,c,h)})}_.context=b,_.props=y,_.state=_.__s,(p=f.__r)&&p(t),_.__d=!1,_.__v=t,_.__P=e,p=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(r=O(O({},r),_.getChildContext())),d||_.getSnapshotBeforeUpdate==null||(h=_.getSnapshotBeforeUpdate(u,c)),U=p!=null&&p.type===T&&p.key==null?p.props.children:p,Ie(e,Array.isArray(U)?U:[U],t,n,r,i,o,l,a,s),_.base=t.__e,t.__h=null,_.__h.length&&l.push(_),P&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ut(n.__e,t,n,r,i,o,l,s);(p=f.diffed)&&p(t)}catch(w){t.__v=null,(s||o!=null)&&(t.__e=a,t.__h=!!s,o[o.indexOf(a)]=null),f.__e(w,t,n)}}function Je(e,t){f.__c&&f.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){f.__e(r,n.__v)}})}function ut(e,t,n,r,i,o,l,a){var s,p,_,d=n.props,u=t.props,c=t.type,h=0;if(c==="svg"&&(i=!0),o!=null){for(;h<o.length;h++)if((s=o[h])&&"setAttribute"in s==!!c&&(c?s.localName===c:s.nodeType===3)){e=s,o[h]=null;break}}if(e==null){if(c===null)return document.createTextNode(u);e=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,u.is&&u),o=null,a=!1}if(c===null)d===u||a&&e.data===u||(e.data=u);else{if(o=o&&ee.call(e.childNodes),p=(d=n.props||Z).dangerouslySetInnerHTML,_=u.dangerouslySetInnerHTML,!a){if(o!=null)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(_||p)&&(_&&(p&&_.__html==p.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(at(e,u,d,i,a),_)t.__k=[];else if(h=t.props.children,Ie(e,Array.isArray(h)?h:[h],t,n,r,i&&c!=="foreignObject",o,l,o?o[0]:n.__k&&N(n,0),a),o!=null)for(h=o.length;h--;)o[h]!=null&&Fe(o[h]);a||("value"in u&&(h=u.value)!==void 0&&(h!==e.value||c==="progress"&&!h||c==="option"&&h!==d.value)&&Q(e,"value",h,d.value,!1),"checked"in u&&(h=u.checked)!==void 0&&h!==e.checked&&Q(e,"checked",h,d.checked,!1))}return e}function Ge(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){f.__e(r,n)}}function Ze(e,t,n){var r,i;if(f.unmount&&f.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ge(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){f.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Ze(r[i],t,typeof e.type!="function");n||e.__e==null||Fe(e.__e),e.__e=e.__d=void 0}function ct(e,t,n){return this.constructor(e,n)}function st(e,t,n){var r,i,o;f.__&&f.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],le(t,e=(!r&&n||t).__k=W(T,null,[e]),i||Z,Z,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?ee.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),Je(o,e)}function ae(e,t){var n={__c:t="__cC"+Me++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(oe)},this.sub=function(l){i.push(l);var a=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),a&&a.call(l)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}ee=je.slice,f={__e:function(e,t){for(var n,r,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(o){e=o}throw e}},Ne=0,E.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=O({},this.state),typeof e=="function"&&(e=e(O({},n),this.props)),e&&O(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),oe(this))},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),oe(this))},E.prototype.render=T,j=[],De=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K.__r=0,Me=0;var D,k,ve,F=0,Ke=[],me=f.__b,ye=f.__r,ge=f.diffed,be=f.__c,ke=f.unmount;function I(e,t){f.__h&&f.__h(k,e,F||t),F=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ft(e){return F=1,pt(Ye,e)}function pt(e,t,n){var r=I(D++,2);return r.t=e,r.__c||(r.__=[n?n(t):Ye(void 0,t),function(i){var o=r.t(r.__[0],i);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=k),r.__}function ht(e,t){var n=I(D++,3);!f.__s&&ue(n.__H,t)&&(n.__=e,n.__H=t,k.__H.__h.push(n))}function dt(e,t){var n=I(D++,4);!f.__s&&ue(n.__H,t)&&(n.__=e,n.__H=t,k.__h.push(n))}function Qe(e){return F=5,Y(function(){return{current:e}},[])}function Y(e,t){var n=I(D++,7);return ue(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function vt(e,t){return F=8,Y(function(){return e},t)}function V(e){var t=k.context[e.__c],n=I(D++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(k)),t.props.value):e.__}function mt(){for(var e;e=Ke.shift();)if(e.__P)try{e.__H.__h.forEach(G),e.__H.__h.forEach(ie),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){k=null,me&&me(e)},f.__r=function(e){ye&&ye(e),D=0;var t=(k=e.__c).__H;t&&(t.__h.forEach(G),t.__h.forEach(ie),t.__h=[])},f.diffed=function(e){ge&&ge(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Ke.push(t)!==1&&ve===f.requestAnimationFrame||((ve=f.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(o),Pe&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(i,100);Pe&&(r=requestAnimationFrame(i))})(mt)),k=null},f.__c=function(e,t){t.some(function(n){try{n.__h.forEach(G),n.__h=n.__h.filter(function(r){return!r.__||ie(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],f.__e(r,n.__v)}}),be&&be(e,t)},f.unmount=function(e){ke&&ke(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{G(r)}catch(i){t=i}}),t&&f.__e(t,n.__v))};var Pe=typeof requestAnimationFrame=="function";function G(e){var t=k,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),k=t}function ie(e){var t=k;e.__c=e.__(),k=t}function ue(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ye(e,t){return typeof t=="function"?t(e):t}function yt(e,t){for(var n in t)e[n]=t[n];return e}function $e(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function xe(e){this.props=e}(xe.prototype=new E).isPureReactComponent=!0,xe.prototype.shouldComponentUpdate=function(e,t){return $e(this.props,e)||$e(this.state,t)};var Se=f.__b;f.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Se&&Se(e)};var we=function(e,t){return e==null?null:R(R(e).map(t))},gt={map:we,forEach:we,count:function(e){return e?R(e).length:0},only:function(e){var t=R(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:R},bt=f.__e;f.__e=function(e,t,n){if(e.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}bt(e,t,n)};var Ce=f.unmount;function re(){this.__u=0,this.t=null,this.__b=null}function Xe(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function q(){this.u=null,this.o=null}f.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Ce&&Ce(e)},(re.prototype=new E).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Xe(r.__v),o=!1,l=function(){o||(o=!0,n.__R=null,i?i(a):a())};n.__R=l;var a=function(){if(!--r.__u){if(r.state.__e){var p=r.state.__e;r.__v.__k[0]=function d(u,c,h){return u&&(u.__v=null,u.__k=u.__k&&u.__k.map(function(P){return d(P,c,h)}),u.__c&&u.__c.__P===c&&(u.__e&&h.insertBefore(u.__e,u.__d),u.__c.__e=!0,u.__c.__P=h)),u}(p,p.__c.__P,p.__c.__O)}var _;for(r.setState({__e:r.__b=null});_=r.t.pop();)_.forceUpdate()}},s=t.__h===!0;r.__u++||s||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(l,l)},re.prototype.componentWillUnmount=function(){this.t=[]},re.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(l,a,s){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(p){typeof p.__c=="function"&&p.__c()}),l.__c.__H=null),(l=yt({},l)).__c!=null&&(l.__c.__P===s&&(l.__c.__P=a),l.__c=null),l.__k=l.__k&&l.__k.map(function(p){return o(p,a,s)})),l}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__e&&W(T,null,e.fallback);return i&&(i.__h=null),[W(T,null,t.__e?null:e.children),i]};var Ee=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(q.prototype=new E).__e=function(e){var t=this,n=Xe(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),Ee(t,e,r)):i()};n?n(o):o()}},q.prototype.render=function(e){this.u=null,this.o=new Map;var t=R(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},q.prototype.componentDidUpdate=q.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Ee(e,n,t)})};var et=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,kt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Pt=typeof document<"u",$t=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function nn(e,t,n){return t.__k==null&&(t.textContent=""),st(e,t),typeof n=="function"&&n(),e?e.__c:null}E.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(E.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Re=f.event;function xt(){}function St(){return this.cancelBubble}function wt(){return this.defaultPrevented}f.event=function(e){return Re&&(e=Re(e)),e.persist=xt,e.isPropagationStopped=St,e.isDefaultPrevented=wt,e.nativeEvent=e};var He={configurable:!0,get:function(){return this.class}},Oe=f.vnode;f.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var o in r={},n){var l=n[o];Pt&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in n&&l==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&l===!0?l="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!$t(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&kt.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),r[o]=l)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=R(n.children).forEach(function(a){a.props.selected=r.value.indexOf(a.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=R(n.children).forEach(function(a){a.props.selected=r.multiple?r.defaultValue.indexOf(a.props.value)!=-1:r.defaultValue==a.props.value})),e.props=r,n.class!=n.className&&(He.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",He))}e.$$typeof=et,Oe&&Oe(e)};var Te=f.__r;f.__r=function(e){Te&&Te(e)};function Ct(e){return!!e&&e.$$typeof===et}var rn=T;function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}var A;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(A||(A={}));var Ue=function(e){return e},Ae="beforeunload",Et="popstate";function Rt(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var v=r.location,m=v.pathname,$=v.search,C=v.hash,S=i.state||{};return[S.idx,Ue({pathname:m,search:$,hash:C,state:S.usr||null,key:S.key||"default"})]}var l=null;function a(){if(l)c.call(l),l=null;else{var v=A.Pop,m=o(),$=m[0],C=m[1];if(c.length){if($!=null){var S=_-$;S&&(l={action:v,location:C,retry:function(){w(S*-1)}},w(S))}}else b(v)}}r.addEventListener(Et,a);var s=A.Pop,p=o(),_=p[0],d=p[1],u=We(),c=We();_==null&&(_=0,i.replaceState(X({},i.state,{idx:_}),""));function h(v){return typeof v=="string"?v:Ot(v)}function P(v,m){return m===void 0&&(m=null),Ue(X({pathname:d.pathname,hash:"",search:""},typeof v=="string"?M(v):v,{state:m,key:Ht()}))}function y(v,m){return[{usr:v.state,key:v.key,idx:m},h(v)]}function g(v,m,$){return!c.length||(c.call({action:v,location:m,retry:$}),!1)}function b(v){s=v;var m=o();_=m[0],d=m[1],u.call({action:s,location:d})}function U(v,m){var $=A.Push,C=P(v,m);function S(){U(v,m)}if(g($,C,S)){var L=y(C,_+1),ne=L[0],z=L[1];try{i.pushState(ne,"",z)}catch{r.location.assign(z)}b($)}}function x(v,m){var $=A.Replace,C=P(v,m);function S(){x(v,m)}if(g($,C,S)){var L=y(C,_),ne=L[0],z=L[1];i.replaceState(ne,"",z),b($)}}function w(v){i.go(v)}var _t={get action(){return s},get location(){return d},createHref:h,push:U,replace:x,go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(m){return u.push(m)},block:function(m){var $=c.push(m);return c.length===1&&r.addEventListener(Ae,Be),function(){$(),c.length||r.removeEventListener(Ae,Be)}}};return _t}function Be(e){e.preventDefault(),e.returnValue=""}function We(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function Ht(){return Math.random().toString(36).substr(2,8)}function Ot(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function M(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function H(e,t){if(!e)throw new Error(t)}const tt=ae(null),ce=ae(null),se=ae({outlet:null,matches:[]});function Tt(e){H(!1)}function Ut(e){let{basename:t="/",children:n=null,location:r,navigationType:i=A.Pop,navigator:o,static:l=!1}=e;te()&&H(!1);let a=it(t),s=Y(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=M(r));let{pathname:p="/",search:_="",hash:d="",state:u=null,key:c="default"}=r,h=Y(()=>{let P=ot(p,a);return P==null?null:{pathname:P,search:_,hash:d,state:u,key:c}},[a,p,_,d,u,c]);return h==null?null:W(tt.Provider,{value:s},W(ce.Provider,{children:n,value:{location:h,navigationType:i}}))}function on(e){let{children:t,location:n}=e;return At(_e(t),n)}function te(){return V(ce)!=null}function nt(){return te()||H(!1),V(ce).location}function _n(){te()||H(!1);let{basename:e,navigator:t}=V(tt),{matches:n}=V(se),{pathname:r}=nt(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=Qe(!1);return ht(()=>{o.current=!0}),vt(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let p=Yt(a,JSON.parse(i),r);e!=="/"&&(p.pathname=B([e,p.pathname])),(s.replace?t.replace:t.push)(p,s.state)},[e,t,i,r])}function At(e,t){te()||H(!1);let{matches:n}=V(se),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=nt(),a;if(t){var s;let u=typeof t=="string"?M(t):t;o==="/"||((s=u.pathname)==null?void 0:s.startsWith(o))||H(!1),a=u}else a=l;let p=a.pathname||"/",_=o==="/"?p:p.slice(o.length)||"/",d=Bt(e,{pathname:_});return qt(d&&d.map(u=>Object.assign({},u,{params:Object.assign({},i,u.params),pathname:B([o,u.pathname]),pathnameBase:u.pathnameBase==="/"?o:B([o,u.pathnameBase])})),n)}function _e(e){let t=[];return gt.forEach(e,n=>{if(!Ct(n))return;if(n.type===T){t.push.apply(t,_e(n.props.children));return}n.type!==Tt&&H(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=_e(n.props.children)),t.push(r)}),t}function Bt(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?M(t):t,i=ot(r.pathname||"/",n);if(i==null)return null;let o=rt(e);Wt(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=zt(o[a],i);return l}function rt(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||H(!1),l.relativePath=l.relativePath.slice(r.length));let a=B([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&H(!1),rt(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:Vt(a,i.index),routesMeta:s})}),t}function Wt(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:It(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lt=/^:\w+$/,Nt=3,Dt=2,Mt=1,jt=10,Ft=-2,Le=e=>e==="*";function Vt(e,t){let n=e.split("/"),r=n.length;return n.some(Le)&&(r+=Ft),t&&(r+=Dt),n.filter(i=>!Le(i)).reduce((i,o)=>i+(Lt.test(o)?Nt:o===""?Mt:jt),r)}function It(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zt(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,p=i==="/"?t:t.slice(i.length)||"/",_=Jt({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},p);if(!_)return null;Object.assign(r,_.params);let d=a.route;o.push({params:r,pathname:B([i,_.pathname]),pathnameBase:it(B([i,_.pathnameBase])),route:d}),_.pathnameBase!=="/"&&(i=B([i,_.pathnameBase]))}return o}function qt(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>W(se.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Jt(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gt(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((p,_,d)=>{if(_==="*"){let u=a[d]||"";l=o.slice(0,o.length-u.length).replace(/(.)\/+$/,"$1")}return p[_]=Zt(a[d]||""),p},{}),pathname:o,pathnameBase:l,pattern:e}}function Gt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function Zt(e,t){try{return decodeURIComponent(e)}catch{return e}}function Kt(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?M(e):e;return{pathname:n?n.startsWith("/")?n:Qt(n,t):t,search:Xt(r),hash:en(i)}}function Qt(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yt(e,t,n){let r=typeof e=="string"?M(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=Kt(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function ot(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const B=e=>e.join("/").replace(/\/\/+/g,"/"),it=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,en=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;/**
 * React Router DOM v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ln(e){let{basename:t,children:n,window:r}=e,i=Qe();i.current==null&&(i.current=Rt({window:r}));let o=i.current,[l,a]=ft({action:o.action,location:o.location});return dt(()=>o.listen(a),[o]),W(Ut,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}export{ln as B,on as R,Tt as a,nn as b,T as d,rn as f,ft as l,Qe as s,_n as u,W as v,ht as y};
