---
title: 'The World of Charts in Web Development (Part 1)'
date: 2020-01-15
importance: 8
tags: ['javascript', 'front-end development', 'web development', 'charts']
excerpt: 'The best way to make sense of lots of data is through visualizations. In web, we have a ton of libraries to help us build a dynamic chart.'
image_url: '/charts-1.jpeg'
---

The best way to make sense of lots of data is through visualizations. Want to know how the stock price of Facebook has changed over the past 1 year? Why spend time looking at the numbers when there’s a <a href="https://www.smartdraw.com/line-graph/" target="_blank">line chart</a> to look at!

<img src="/charts-1.jpeg" />

<a href="https://en.wikipedia.org/wiki/Chart#Types_of_charts" target="_blank">A variety of chart types</a> exist to satisfy any data visualization needs you might have. As a web developer, you’re sure to have come across a requirement to show a chart on a web-page that represents dynamic data.

Now, you can try to render a chart from some dynamic data all by yourself. But why reinvent the wheel when lots of people have already worked hard to do it for you!

There’s a plethora of chart libraries you can use. Some are paid. Some are open source. Some are highly powerful. Some are minimal but also easy to use. Which one should you use?

But first, let’s understand how a chart can be rendered on a web page?

* * *

Server-side rendered charts
===========================

Although rarely used, we sometimes may need to generate our charts on the server and then deliver them to the user.

A common use case for this is when we want to show some charts in the dynamic emails we send to users through the back-end. Since JavaScript execution is not allowed in the HTML emails, we can generate image files for the charts and render them in emails. (Other use-cases might include creating embedded charts in PDF files, attaching images in emails etc)

There are limited libraries available for server-side chart generation. Different libraries are available for most server-side languages. Separate services like <a href="https://www.image-charts.com/" target="_blank">image charts</a> also exist, which give you a <a href="https://restfulapi.net/" target="_blank">REST API</a> to use.

If you can’t find a server-side library that fits your needs, as a workaround, you can write a script on your server that uses one of the client-side libraries to create the chart in HTML. Then you can convert the html to PDF or an image file on the server.

Client-side rendered charts
===========================

This is the most common use-case. Before learning about libraries that do this, let us first look at how you would implement it yourself.

There are two ways you can render a chart in modern web applications: SVGs and HTML 5 Canvas. Some libraries out there offer both canvas and SVG renders. Others tend to stick with just one of the two options.

Using SVGs
----------

<a href="https://www.w3schools.com/graphics/svg_inhtml.asp" target="_blank">SVG (Scalable Vector Graphics)</a>, is an <a href="https://en.wikipedia.org/wiki/XML" target="_blank">XML</a>-based graphic format with the ability to infinitely scale without losing the image quality. It has a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" target="_blank">DOM</a>, letting you reference any graphical elements individually using JavaScript. Which lets you do cool things such as attach event handlers to an element on the chart. You can also use CSS to style elements.

SVG shines when you want a high quality graphic that is resolution-independent. It does not loose its quality on large resolutions.

While having every element available in the DOM is beneficial, for large data-points, the performance of the SVG-rendered chart falls short. Performance degrades <a href="https://en.wikipedia.org/wiki/Logarithmic_growth" target="_blank">logarithmically</a> as the number of elements increase.

Using HTML5 Canvas
------------------------------------------------------------------------------------------

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial" target="_blank">Canvas</a> is a pixel based element in HTML. The Canvas element is simply a large XY grid of pixels and gives the developer freedom to decide what and how to render things on it using JavaScript.

Canvas uses a “fire and forget” model, there is no DOM that can be referenced once an element has been drawn.

Canvas is quite fast in rendering large number of data points. In fact, people use have <a href="https://tutorialzine.com/2015/02/30-amazing-games-made-only-with-html5" target="_blank">built games</a> with lots of graphics and animations using Canvas. Although as the size of the screen increases, the performance may degrade as more pixels need to be drawn. Which makes its performance resolution-dependant.

When to use which: SVG v/s Canvas
---------------------------------

*   Highly customizable elements for limited data: SVG
*   Zoomable graphics without loosing quality: SVG
*   Visualizations for large amount of data: Canvas
*   When large real-time data processing is required: Canvas

Here’s an in-depth discussion on the pros and cons of both: <a href="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg193983(v=vs.85)#html5-graphic-technologies" target="_blank">SVG vs canvas: how to choose</a>. You don’t need to know this to use any of the libraries, but it’s always good to know how it works underneath in an abstract way.

In Part 2, we discuss popular client-side JavaScript data-visualization libraries.

Thanks for reading! Find me at <a href="https://virajc.tech" target="_blank">virajc.tech</a>.

References:

*   <a href="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg193983(v=vs.85)#html5-graphic-technologies" target="_blank">https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg193983(v=vs.85)#html5-graphic-technologies</a>