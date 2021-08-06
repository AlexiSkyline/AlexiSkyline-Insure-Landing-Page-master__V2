const menuHamburger = document.querySelector( '.icon_hamburger' );
const containerMenu = document.querySelector( '.container__menu');

menuHamburger.addEventListener( 'click', () => {
    
    menuHamburger.classList.toggle( 'active' );
    containerMenu.classList.toggle( 'active' );
    
});