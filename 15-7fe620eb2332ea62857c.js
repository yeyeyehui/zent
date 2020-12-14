(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{627:function(n,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return k}));var s=a(19),t=a.n(s),o=a(0),c=a(1),p=a.n(c),r=a(46);function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,s)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){t()(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function u(n){return Object(o.jsx)(n.tag,l(l({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function d(n){return Object(o.jsx)(u,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function f(n){return Object(o.jsx)(u,{tag:"style",html:n.style})}c.Component;class k extends c.Component{componentDidMount(){var n=location.hash;if(n){var e=document.querySelector('a[href="'.concat(n,'"]'));e&&Object(r.nc)(document.documentElement,0,function n(e,a){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(a+=e.offsetTop),n(e.parentNode,a);return a}(e,-9))}}render(){return p.a.createElement("div",{className:"zandoc-react-container",key:null},p.a.createElement(f,{style:""}),p.a.createElement(d,{html:'<h2 class="anchor-heading"><a href="#i18n">¶</a><a href="javascript:void(0)" id="i18n" class="anchor-point"></a>I18n</h2>\n<p>The default language of Zent is Simplified Chinese, if you want switch to Engilish, you can follow the instruction below.</p>\n<h4 class="anchor-heading"><a href="#i18nprovider">¶</a><a href="javascript:void(0)" id="i18nprovider" class="anchor-point"></a>I18nProvider</h4>\n<p>Zent provides a React Component I18nProvider used to configure the locale text. Components using context, a feature of React, to achieve global effectiveness by wrapping your app.</p>\n<pre><code class="language-jsx"><span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">I18nProvider</span> <span class="token keyword module">as</span> <span class="token maybe-class-name">Provider</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword module">import</span> enUS <span class="token keyword module">from</span> <span class="token string">\'zent/es/i18n/en-US\'</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>enUS<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span></code></pre>\n<p>At present, only Chinese / English language packs are available, corresponding to two files of <code>en-US.js</code> /<code>zh-CN.js</code> in i18n folder.</p>'}))}}}}]);