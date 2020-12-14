(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{619:function(n,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return b}));var t=a(19),p=a.n(t),o=a(0),c=a(1),e=a.n(c),l=a(46);function u(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?u(Object(a),!0).forEach((function(s){p()(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var k=function(){var n=(n,s)=>()=>{l.tb.push(Object(o.jsx)(l.tb,{title:n,position:s,children:n}))};return Object(o.jsxs)("div",{children:[Object(o.jsx)(l.k,{onClick:n("Right Top","right-top"),children:"Right Top"}),Object(o.jsx)(l.k,{onClick:n("Right Bottom","right-bottom"),children:"Right Bottom"}),Object(o.jsx)(l.k,{onClick:n("Left Top","left-top"),children:"Left Top"}),Object(o.jsx)(l.k,{onClick:n("Left Bottom","left-bottom"),children:"Left Bottom"})]})},r=function(){var n=n=>()=>{l.tb.push(Object(o.jsx)(l.tb,{type:n,title:n,children:n}))};return Object(o.jsxs)("div",{children:[Object(o.jsx)(l.k,{onClick:n("info"),children:"Info"}),Object(o.jsx)(l.k,{onClick:n("success"),children:"Success"}),Object(o.jsx)(l.k,{onClick:n("warning"),children:"Warning"}),Object(o.jsx)(l.k,{onClick:n("error"),children:"Error"})]})};function d(n){return Object(o.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function m(n){return Object(o.jsx)(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function g(n){return Object(o.jsx)(d,{tag:"style",html:n.style})}class h extends c.Component{constructor(...n){super(...n),p()(this,"state",{showCode:!1}),p()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return Object(o.jsxs)("div",{className:"zandoc-react-demo",children:[Object(o.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),Object(o.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(o.jsx)("div",{className:"zandoc-react-demo__title",children:Object(o.jsx)("p",{children:a||""})}),Object(o.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(o.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(o.jsx)(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class b extends c.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(l.nc)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}render(){return e.a.createElement("div",{className:"zandoc-react-container",key:null},e.a.createElement(g,{style:""}),e.a.createElement(m,{html:'<h2 class="anchor-heading"><a href="#notice-tong-zhi-ti-xing">¶</a><a href="javascript:void(0)" id="notice-tong-zhi-ti-xing" class="anchor-point"></a>Notice 通知提醒</h2>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),e.a.createElement(h,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Notice</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">showNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> position</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Notice</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notice</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>position<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notice</span></span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'Right Top\'</span><span class="token punctuation">,</span> <span class="token string">\'right-top\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Right</span> <span class="token maybe-class-name">Top</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'Right Bottom\'</span><span class="token punctuation">,</span> <span class="token string">\'right-bottom\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token maybe-class-name">Right</span> <span class="token maybe-class-name">Bottom</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'Left Top\'</span><span class="token punctuation">,</span> <span class="token string">\'left-top\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Left</span> <span class="token maybe-class-name">Top</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'Left Bottom\'</span><span class="token punctuation">,</span> <span class="token string">\'left-bottom\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token maybe-class-name">Left</span> <span class="token maybe-class-name">Bottom</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.a.createElement(k)),e.a.createElement(h,{title:"不同的样式",id:"Demostyle",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Notice</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">showNotice</span> <span class="token operator">=</span> <span class="token parameter">type</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Notice</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notice</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>type<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notice</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'info\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Info</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'success\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Success</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'warning\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Warning</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token known-class-name class-name">Error</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.a.createElement(r)),e.a.createElement(m,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>string</td>\n<td>是</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义类名</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>React.CSSProperties</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>样式</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td><code>info</code>\n, \n<code>success</code>\n,\n<code>warning</code>\n, \n<code>error</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>是否显示关闭按钮，当是\n<code>false</code>\n时不会自动关闭</td>\n<td>boolean</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭按钮点击时的回调</td>\n<td>function</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>autoClose</td>\n<td>是否自动关闭</td>\n<td>boolean</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>timeout</td>\n<td>自动关闭的延迟时间</td>\n<td>number</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>内容</td>\n<td>React.ReactNode</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td>位置</td>\n<td>string</td>\n<td>否</td>\n<td><code>top-right</code></td>\n<td><code>right-top</code>\n, \n<code>right-bottom</code>\n, \n<code>left-top</code>\n, \n<code>left-bottom</code></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);