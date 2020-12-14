(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{663:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var s=t(19),e=t.n(s),c=t(0),o=t(1),p=t.n(o),l=t(46);function r(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,s)}return t}function i(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){e()(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}var u=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(l.mb,{href:"https://youzan.com",target:"_blank",children:"Index"}),Object(c.jsx)(l.mb,{href:"https://youzan.com",disabled:!0,children:"Index"})]})};function d(n){return Object(c.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function h(n){return Object(c.jsx)(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function k(n){return Object(c.jsx)(d,{tag:"style",html:n.style})}class m extends o.Component{constructor(...n){super(...n),e()(this,"state",{showCode:!1}),e()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return Object(c.jsxs)("div",{className:"zandoc-react-demo",children:[Object(c.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),Object(c.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(c.jsx)("div",{className:"zandoc-react-demo__title",children:Object(c.jsx)("p",{children:t||""})}),Object(c.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(c.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(c.jsx)(d,{tag:"code",html:s,attributes:{className:"language-jsx"}})})]})}}class b extends o.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(l.nc)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}render(){return p.a.createElement("div",{className:"zandoc-react-container",key:null},p.a.createElement(k,{style:".zent-link {\n    margin-left: 10px;\n  }"}),p.a.createElement(h,{html:'<h2 class="anchor-heading"><a href="#link">¶</a><a href="javascript:void(0)" id="link" class="anchor-point"></a>Link</h2>\n<p>Link is a wrapper around native <code>a</code> tag, with an option to disable it.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),p.a.createElement(m,{title:"Link",id:"Demo1basic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Link</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Index</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n      <span class="token maybe-class-name">Index</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.a.createElement(u)),p.a.createElement(h,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Supports all props in <code>&#x3C;a></code>.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>Link is disabled</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);