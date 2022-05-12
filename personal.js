

const iconHome  = document.querySelector (".fa-bars-staggered")
const iconCloseHeader = document.querySelector('.fa-xmark')
const homePage = document.querySelector('.header')
const menus = document.querySelectorAll("#menu");

const thisHomePage = false;
iconHome.onclick = function () {
    this.thisHomePage = !this.thisHomePage;
    homePage.classList.toggle('active',this.thisHomePage)
    iconCloseHeader.classList.add('active2')
}

menus.forEach ((menu) => {
    menu.onclick = () => {
        homePage.classList.remove('active')
        iconCloseHeader.classList.remove('active2')
    }
})