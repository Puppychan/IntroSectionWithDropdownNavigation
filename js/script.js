let nameNav = ["feature", "company"];
let navWrap = document.querySelector(".body-header");
let navContent = document.querySelector(".body-header-nav");
controlNav();
controlSubNav();

// for open nav menu on responsive
function controlNav() {
    let menuIcon = document.querySelector(".body-header-menu");
    menuIcon.addEventListener("click", event => {
        menuIcon.setAttribute("src", menuIcon.getAttribute("src").includes("icon-menu")? "./images/icon-close-menu.svg" : "./images/icon-menu.svg");
        navWrap.classList.toggle("open");
    })
}

// for open sub nav
function controlSubNav() {
    nameNav.forEach(name => {
        let navElement = document.querySelector(`.body-header-nav-${name}`);
        let subNav = document.querySelector(`.body-header-nav-${name}-subnav-wrap`);
        // for hover
        navElement.addEventListener("mouseover", event => subNav.classList.remove("hide"));
        navElement.addEventListener("mouseout", event => subNav.classList.add("hide"));
        // for clicking
        // navElement.addEventListener("click", event => subNav.classList.toggle("hide"));
        
    });
}