---
layout: default
title: Design
nav_order: 3
---

# Random Visualization
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

In the fifth grade, my teacher used to give unique homework; `to make booklets on given topics`. In the beginning, mine was nothing but mediocre. However, the more I worked on, the more I got fascinated by the process of digesting a certain subject and explaining it my own way. Especially, I was shy and not so much of a conversationalist back then, I realized visual aids significantly enhanced my communication skills.

When I made a career transition to a science and technology research institute two years ago, I realized sometimes I spoke a different language with some colleagues with engineering backgrounds. Whenever that happened, we drew our rough ideas and thoughts which I enjoyed so much. 

Let me share some of my works in the following areas: 

- Illustrator
- Data Visualization
- Web Design(e.g. CSS, UX/UI)

## Illustrator
### Favicon for this blog 
{: .d-inline-block }

I found a nice Jekyll them, Just the Docs! It seems very ideal for archiving my daily life and learning. As much as I love the theme, I also wanted to customize it so that `it feels more like my own space`. I decided to design a tiny little favicon.ico! Here comes my flow of thoughts :) 

![]({{site.url}}{{site.baseurl}}{% link /docs/design/assets/icon-flow.png %})

- <strong>Tips for Illustrator</strong> 
    1. <span style="color:#7253ed">Join</span> &nbsp; work like a charm when combining paths seamlessly 
    1. <span style="color:#7253ed">command+2</span>: &nbsp; lock an object 
    1. <span style="color:#7253ed">option+contrl+2</span>: &nbsp; unlock all objects 
    1. <span style="color:#7253ed">command+b</span>: &nbsp; paste behind the copied graphic. 
   1. <span style="color:#7253ed">*.ico</span>: &nbsp; you can simply convert png to ico by changing a file name/extension (Mac) 
    
  When to use paste behind? To imitate neon lights, differentially blurred objects have to be merged. Most important thing is that the objects have to be merged orderly; we have to bring less blurred object forward and send more blurred one backward. `command+b` pasted a copied object behind the original one, which makes the orderly arrangement of objects easier.
    

- <strong>Tips for Jekyll & Github Pages</strong>  
    1. <span style="color:#7253ed">Custom domain</span> &nbsp; CNAME file must include "www." to avoid redirected loop errors 
    1. <span style="color:#7253ed">PATH</span> &nbsp; when an image doesn't show up or CSS fails to load, check out PATHs 
    1. <span style="color:#7253ed"> command+shift+r </span> &nbsp; deleted cached data in a Chrome browser

```javascript
[o] `<img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/icon-flow.png %}">`

[x] `<img src={{site.baseurl}}{% link docs/design/assets/icon-flow.png %}>`
```
 
{:.space100}

### Research areas of previous workplace
When I started my new internship at a research institue, I visualized our research team's topics for fun :) I still consider myself as a novice Illustrator design. They're the earlist works that I did using Illustrator. It took weeks but I really enjoyed the entire process.  

<div class="columnContainer">
    
<div class="itemContainer" style="flex-basis:50%">
<img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/researchField.png %}">
</div>

<div class="itemContainer" style="flex-basis:25%">
    <img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/research2.png %}">
</div>

<div class="itemContainer" style="flex-basis:25%">
    <img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/research3.png %}">
</div>
    
</div>

{:.space100}

### Crisis Development Model 
_As my first job in Canada_, I am going to help people with developmental disabilities use assistive apps in iPad. Working with the neurotypical naturally entails more frequent occurrence of crises. So, my company organized a workshop regarding non-violent crisis management skills. I visualized **the Crisis Prevention Institute (CPI) Crisis Development Model** as I have to know it by heart to cope with such situation in a professional manner.

<div class="columnContainer">    

 <div class="itemContainer" style="flex-basis:50%">
 <img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/nonviolent/step1.png %}">
 
 </div>
 <div class="itemContainer" style="flex-basis:50%">
 <img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/nonviolent/step2.png %}">
 </div>
 
</div>

<div class="columnContainer">    

 <div class="itemContainer" style="flex-basis:50%">
 <img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/nonviolent/step3.png %}">
  </div>
  
 <div class="itemContainer" style="flex-basis:50%">
 <img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/nonviolent/step4.png %}">
 </div>
 
</div>  

{:.space300}
  
## Web design(e.g. CSS, UX/UI)
### Flexbox
based on Jonas' [Advanced CSS and Sass](https://www.udemy.com/advanced-css-and-sass/)
{:.no_toc .text-delta}

What makes me irritating all the time is "LAYOUT". For instance, when I want to put three images in the same row. They have to be vertically aligned center. Answer is in **Flexbox**! [answer also in CodePen](https://codepen.io/audaciousjin/pen/orGVeE)

How can you use flexbox? Just add "display: flex;" to a container <div> which wraps items/images/children.  

- <strong>FLEXBOX PROPERTY</strong>     
    - **Container**
    <br>
        <img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/flex/flex-con.png %}">
    <br>    
        1. <span style="color:#7253ed">**flex-direction** | row(default), column, row-reverse, column-reverse </span>: &nbsp; display items as a row or column? reverse order can be applied. 
        1. <span style="color:#7253ed">**flex-wrap** | nowrap(default), wrap, wrap-reverse </span>: &nbsp; depending on a size of a screen, flex container responsively wrap the items.  
        1. <span style="color:#7253ed">**justify-content** | flex-start(default), flex-end, center, space-between, space-around, space-evenly </span>: &nbsp; when flex-direction is row, justify-content aligns items horizontally left(flex-start), right(flex-end), centered(center). or spreads your items evenly across the entire width(space-between, space-around)  
        1. <span style="color:#7253ed">**align-content** | stretch(default), flex-start, flex-end, center, baseline </span>: &nbsp; different from the previous scenario, what if your flex-direction is column? how would you align the vertically/column arranged items left, right, centered? align-content is the answer :) Make sure to add a wrap otherwise, align-content won't work.  
        1. <span style="color:#7253ed">**align-items** | stretch(default), flex-start, flex-end, center, space-between, space-around</span>: &nbsp; align items in relation with other items. For instance, if you have three images with different heights, you might want to stretch two images' heights to a height of the tallest images - choose "stretch"". Or you just want them to be vertically center aligned - choose "center". <br><br> 
        

   - **Items**
       <img src="{{site.url}}{{site.baseurl}}{% link docs/design/assets/flex/flex-item.png %}">   
        - Once global rules are determined by container CSS, you can customize individual item's CSS rules
        ; size in relation to a screen width (flex-basis)
        align (self-align), order (order), size in relation to other items (grow). <br><br>    
        
<!--           
   - **Flexbox Cheat Sheet**
   ![image](https://user-images.githubusercontent.com/31587077/60154084-294abe00-979b-11e9-80f2-1d401741dc33.png)
-->

{:.space100}

## Data visualization
### RShiny & Highchart
`COMING SOON`

{:.space300}
