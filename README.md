# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
### Links

- Solution URL: [Solution Url](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK/hub/four-card-feature-section-wzBhzXh2gW)
- Live Site URL: [Live Url](https://puppychan.github.io/FourCardFeatureSection-FrontendMentor/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SASS - SCSS

### What I learned
- I learn how to rotate 1 inline svg without changing its position:
  + To keep position after being transformed -> use transform-origin in hover state and transition in original state. (However, the element will not rotate on 1 place when transforming)
    ```css
  .element {
    transition: transform 200ms;
  }
  .element: hover {
    transform: rotate(180deg);
    transform-origin: center;
  }
  ```
  + To keep both the icon stay in 1 place while rotating before and after transforming -> keep both transform-origin and transition in hover state
  ```css
  .element {}
  .element: hover {
    transition: transform 200ms;
    transform: rotate(180deg);
    transform-origin: center;
  }
  ```
- Learn how to use clamp:
 + When you want to specify both max and min value -> use clamp
 ```css
  .element {
    /* max-width: 55px;
    min-width: 40px;
    width: 5%; */
    width: clamp(40px, 5%, 55px);
  }
 ```
### Continued development

I think I will make 4 cards spinnable if I have time.

## Author

- Github - [Nhung Tran](https://github.com/Puppychan)
- Frontend Mentor - [@Puppychan](https://www.frontendmentor.io/profile/Puppychan)
- LinkedIn [Nhung Tran](https://www.linkedin.com/in/nhung-tran-528396210/)

## Acknowledgement
- For keeping position when rotating the icon: https://stackoverflow.com/questions/44509457/hover-rotation-css-keep-position-on-uncover
