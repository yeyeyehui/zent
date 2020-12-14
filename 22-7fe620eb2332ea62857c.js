(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{552:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return h}));var e=s(19),o=s.n(e),t=s(0),c=s(1),p=s.n(c),r=s(46);function l(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,e)}return s}function u(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?l(Object(s),!0).forEach((function(a){o()(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}function i(n){return Object(t.jsx)(n.tag,u(u({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function d(n){return Object(t.jsx)(i,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function k(n){return Object(t.jsx)(i,{tag:"style",html:n.style})}c.Component;class h extends c.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(r.nc)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return p.a.createElement("div",{className:"zandoc-react-container",key:null},p.a.createElement(k,{style:""}),p.a.createElement(d,{html:'<h2 class="anchor-heading"><a href="#bian-ma-gui-fan">¶</a><a href="javascript:void(0)" id="bian-ma-gui-fan" class="anchor-point"></a>编码规范</h2>\n<p>为了做到代码可切换主题色，需要在开发时遵循一定的规范。zent 提供了一些有用的 SCSS mixin 和 function 来简化代码。</p>\n<h3 class="anchor-heading"><a href="#mixins">¶</a><a href="javascript:void(0)" id="mixins" class="anchor-point"></a>Mixins</h3>\n<p>zent 在 <code>assets/theme/default</code> 内提供了三个非常有用的 mixin。</p>\n<h4 class="anchor-heading"><a href="#theme-color">¶</a><a href="javascript:void(0)" id="theme-color" class="anchor-point"></a>theme-color</h4>\n<p><code>theme-color</code> 是最常用的一个 mixin，通过它可以自动生成向后兼容并且可动态切换主题色的代码。</p>\n<p>它的定义是这样子的：<code>theme-color($property, $category, $index, $opacity: 1)</code>，最后一个参数 <code>$opacity</code> 是可选参数。</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-color</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> primary<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-color</span><span class="token punctuation">(</span>background-color<span class="token punctuation">,</span> stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 设置不透明度</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-color</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> primary<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 class="anchor-heading"><a href="#theme-border">¶</a><a href="javascript:void(0)" id="theme-border" class="anchor-point"></a>theme-border</h4>\n<p><code>border</code> 样式是代码中经常出现的，但是由于 <code>border</code> 是一个有多个参数的简写形式，所以没有办法直接使用 <code>theme-color</code> 来定义。</p>\n<p>一种方案是通过将 <code>border</code> 拆开成 <code>border-style</code>, <code>border-width</code> 以及 <code>border-color</code>，这样子可以使用 <code>theme-color</code> 来定义，但是代码相对繁琐。</p>\n<p><code>theme-border</code> 提供了一种更方便的姿势来定义主题色边框，它的定义：<code>theme-border($width, $style, $category, $index, $opacity: 1)</code>，最后一个参数 <code>$opacity</code> 同样是可选参数。</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">,</span> solid<span class="token punctuation">,</span> stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 设置不透明度</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">,</span> solid<span class="token punctuation">,</span> stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>除了 <code>theme-border</code> 之外，zent 还提供了 4 个变体，分别对应 <code>border-left</code>, <code>border-right</code>, <code>border-top</code> 以及 <code>border-bottom</code>，它们的参数和 <code>theme-border</code> 完全一样。</p>\n<ul>\n<li><code>theme-border-left</code></li>\n<li><code>theme-border-right</code></li>\n<li><code>theme-border-top</code></li>\n<li><code>theme-border-bottom</code></li>\n</ul>\n<h4 class="anchor-heading"><a href="#theme-shadow">¶</a><a href="javascript:void(0)" id="theme-shadow" class="anchor-point"></a>theme-shadow</h4>\n<p><code>theme-shadow</code> 包含三个预定义的阴影类型，分别是 <code>layer</code>, <code>focus</code> 以及 <code>modal</code>。它的定义 <code>theme-shadow($name)</code>。</p>\n<ul>\n<li><code>layer</code> 适用于弹层的阴影，比如 <code>Select</code> 以及 <code>Pop</code> 组件的弹层阴影</li>\n<li><code>focus</code> 适用于输入框有焦点时的高亮描边</li>\n<li><code>modal</code> 适用于对话框类型的阴影，例如 <code>Dialog</code> 就是使用这类阴影</li>\n</ul>\n<h3 class="anchor-heading"><a href="#functions">¶</a><a href="javascript:void(0)" id="functions" class="anchor-point"></a>Functions</h3>\n<p>这些函数主要用于 <code>theme-color</code>, <code>theme-border</code> 以及 <code>theme-shadow</code> 无法覆盖的场景，这类场景需要手动将一个 CSS 属性写两遍，最常见的是自定义 <code>box-shadow</code> 的场景。</p>\n<h4 class="anchor-heading"><a href="#theme-rgb">¶</a><a href="javascript:void(0)" id="theme-rgb" class="anchor-point"></a>theme-rgb</h4>\n<p><code>theme-rgb</code> 返回一个可以通过 CSS Variable 动态覆盖的 RGB 形式的主题色，它的定义：<code>theme-rgb($category, $index)</code>。</p>\n<p>例如 <code>theme-rgb(stroke, 6)</code> 会返回一个类似 <code>rgb(var(--theme-stroke-6, 235, 237, 240))</code> 的结果。</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token variable">$theme-stroke-6</span><span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">theme-rgb</span><span class="token punctuation">(</span>stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 class="anchor-heading"><a href="#theme-rgba">¶</a><a href="javascript:void(0)" id="theme-rgba" class="anchor-point"></a>theme-rgba</h4>\n<p><code>theme-rgba</code> 同 <code>theme-rgb</code> 类似，区别在于它接受一个 $opacity 参数，同时返回 RGBA 形式的主题色，它的定义 <code>theme-rgba($category, $index, $opacity)</code>。</p>\n<p>例如 <code>theme-rgb(stroke, 6, 0.8)</code> 会返回一个类似 <code>rgba(var(--theme-stroke-6, 235, 237, 240), 0.8)</code> 的结果。</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$theme-stroke-6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">theme-rgba</span><span class="token punctuation">(</span>stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>'}))}}}}]);