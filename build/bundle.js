var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function i(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let s;function d(t){s=t}const p=[],m=[],h=[],$=[],g=Promise.resolve();let y=!1;function b(t){h.push(t)}let _=!1;const x=new Set;function v(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];d(e),w(e.$$)}for(p.length=0;m.length;)m.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];x.has(e)||(x.add(e),e())}h.length=0}while(p.length);for(;$.length;)$.pop()();y=!1,_=!1,x.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const k=new Set;function E(t,e){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,g.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(c,u,f,l,i,p,m=[-1]){const h=s;d(c);const $=u.props||{},g=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:m};let y=!1;if(g.ctx=f?f(c,$,(t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&i(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),y&&E(c,t)),e}):[],g.update(),y=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();u.intro&&((_=c.$$.fragment)&&_.i&&(k.delete(_),_.i(x))),function(t,n,c){const{fragment:u,on_mount:a,on_destroy:f,after_update:l}=t.$$;u&&u.m(n,c),b(()=>{const n=a.map(e).filter(r);f?f.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(b)}(c,u.target,u.anchor),v()}var _,x;d(h)}function A(e){let n,o,r,c,s,d,p;return{c(){n=f("main"),o=f("h1"),r=l("Hello "),c=l(e[0]),s=l("!"),d=l(" "),p=f("p"),p.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',i(o,"class","svelte-1tky8bj"),i(n,"class","svelte-1tky8bj")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),u(n,o),u(o,r),u(o,c),u(o,s),u(n,d),u(n,p)},p(t,[e]){1&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(c,t[0])},i:t,o:t,d(t){t&&a(n)}}}function S(t,e,n){let{name:o}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),j(this,t,S,A,c,{name:0})}}({target:document.body,props:{name:"world!!!!"}})}();
//# sourceMappingURL=bundle.js.map
