---
title: 'The World of Charts in Web Development (Part 2)'
date: 2020-01-21
importance: 8
tags: ['javascript', 'front-end development', 'web development', 'charts']
excerpt: "Let's take a look at some client-side JavaScript libraries that we can use to render different types of charts on our front-end."
image_url: "/charts2/chartjs.jpeg"
---


Do read the <a href="/blog/world-of-charts-1" target="_blank">Part 1</a> before this one, if you haven’t yet.

In Part 1, we discussed about rendering graphs on the server-side v/s client-side, and the 2 ways to render graphs on a web page: <a href="https://www.w3schools.com/graphics/svg_inhtml.asp" target="_blank">SVGs</a> and HTML5 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial" target="_blank">Canvas</a>. Now let’s take a look at some client-side JavaScript libraries that we can use to render different types of charts on our front-end.

Some of these are open source and some proprietary. While open source libraries are free to be used and modified as we like, they are often not as feature-rich as some if its paid counterparts. Open source libraries may also not provide reliable support on issues you may face during development.

If data visualizations is a critical part of your application, then it may make sense to use a paid solution.

D3.js
=====

<a href="https://d3js.org/" target="_blank">D3</a> is probably the most flexible and powerful data visualization JS library ever! It allows great control over the final visual result. It’s also probably the most difficult to get started with.

<img src="/charts2/d3.jpg" />

D3 allows us to programmatically create SVG objects, style them, and add transitions, dynamic effect. One needs to spend quiet some time learning its concepts before being productive in it. There’s a <a href="https://www.udacity.com/course/data-visualization-and-d3js--ud507" target="_blank">course</a> on Udacity that teaches D3Js.

D3 does not use Canvas to render the elements. It strictly uses SVG to give a greater control over everything.

D3 is widely used (89k + stars on Github). In fact there are lots of libraries that use D3 to create new libraries on top of it, making it more accessible.
Following libraries are built using D3:

- <a href="https://github.com/metricsgraphics/metrics-graphics" target="_blank">Metrics Graphics JS</a>
- <a href="http://epochjs.github.io/epoch/">Epoch</a>
- <a href="https://vega.github.io/vega/">Vega</a>
- <a href="http://nvd3.org/index.html">NVD3</a>

Since D3 is a lower level library and intended more as a supporting layer for higher-level visualization tools, you may not use it directly unless what you’re building is very unique and can’t be achieved by simpler higher level libraries.

ChartJs
=======

<a href="https://www.chartjs.org/" target="_blank">ChartJs</a> is a popular JavaScript data visualization library. It uses Html5 Canvas to render elements on the screen. The designs of the charts are simple and responsive with limited options to customize looks and features.

<img src="/charts2/chartjs.jpeg" />

It provides basic data visualization types of charts such as Line, Bar, Doughnut, Pie, Scatter etc. It’s very easy to get started with, takes little time to learn how it works.

The features of the library are simple and will be enough for most use-cases one might come across. Although it is not very customizable for complex custom features.

If you want to use ChartJs with a frontend framework, wrappers for ReactJs, VeuJs, Angular etc are available to make things easy.

Chartist
========

<a href="https://gionkunz.github.io/chartist-js/" target="_blank">Chartist</a> is another open source library that uses SVGs to create responsive data visualizations.
<br /><br />
<img src="/charts2/chartist.png" />

You can use CSS to style the elements the way you want. You can event add some animations using CSS. This makes Chartist more configurable than ChartJs.

Chartist is way simpler to get started with since it follows the principle ‘convention over configuration’ and provides may types of charts out of the box. It also has some wrapper-libraries in React/VueJs to make development easier.

HighCharts
==========

<a href="https://www.highcharts.com/" target="_blank">HighCharts</a> is a popular premium library for creating customizable, interactive charts of any complexity. It is free for personal/non-commercial use, but you’ll need to buy a license for any commercial use.

<img src="/charts2/highcharts.jpg" />

It uses SVG and fallbacks to VML for backward compatibility all the way to IE6/IE8.

It provides rich functionality with minimal configuration. The results are often premium, well tested visualizations. The charts will be mobile-optimized, responsive, browser-compatible, exportable and more.

It is very well documented and any issue you face during development is likely to be solved through its community/support.

AmCharts
========

<a href="https://www.amcharts.com/" target="_blank">AmCharts</a> is a commercial feature-rich JavaScript library. It’a a simple yet powerful and flexible library. It is also free for personal use, but you’ll need to pay for a license for commercial use.

<img src="/charts2/amcharts.png" />

It also uses SVG to render charts in the browser, which makes it highly configurable. It offers a variety of charts out of the box that offer great design and functionality.

It is easy to get started with, with good documentation and customer support.

Fusion Charts
=============

<a href="https://www.fusioncharts.com/" target="_blank">Fusion Charts</a> offers a wide variety of charts out of the box. It has over <a href="https://www.fusioncharts.com/dev/chart-guide/list-of-charts" target="_blank">95+ types</a> of charts to work with. You’ll need to buy a license to use their library.

<img src="/charts2/fusioncharts.jpg" />

It offers great documentation, support for plugins, smart defaults, exportable charts, UX elements for interactivity, browser compatibility and more.

Unlike most other libraries, it also offers official support for server-side rendering of graphs through FusionExport SDK!
  
It has officially-supported plugins for major front-end frameworks such as React and VueJs. It also comes with customer support for solving your problems during development.

Google Charts
=============

<a href="https://developers.google.com/chart" target="_blank">Google Charts</a> are powerful, free and simple to use. Developers can create the most basic charts using Google Charts. It uses SVGs to render charts in the browser.

<img src="/charts2/google-charts.jpg" />


Although suitable for most requirements, it does not offer as extensive set of features as its paid counterparts such as HighCharts. Google Charts have reasonable defaults, but can also be customized in countless ways

Google itself uses this library for its data visualization needs across products.

* * *

Thanks for reading! Let me know if you liked the article in the comments!

Find me at https://virajc.tech
