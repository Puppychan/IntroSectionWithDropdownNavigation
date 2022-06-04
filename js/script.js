let nameNav = ["feature", "company"];

nameNav.forEach(name => {
    let navElement = document.querySelector(`.body-header-nav-${name}`);
    let subNav = document.querySelector(`.body-header-nav-${name}-subnav`);
    navElement.addEventListener("mouseover", event => subNav.classList.remove("hide"));
    navElement.addEventListener("mouseleave", event => subNav.classList.add("hide"));
});