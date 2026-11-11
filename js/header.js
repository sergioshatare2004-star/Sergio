
const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('.main-navigation');

if (menuToggle && mainNavigation) {

    const closeMenu = () => {
        menuToggle.classList.remove('active');
        mainNavigation.classList.remove('open');

        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
    };

    const toggleMenu = () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
            closeMenu();
        } else {
            menuToggle.classList.add('active');
            mainNavigation.classList.add('open');

            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.setAttribute('aria-label', 'Cerrar menú');
        }
    };

    // Abrir y cerrar menú
    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar al seleccionar un enlace
    mainNavigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar con Escape
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    // Cerrar al pasar nuevamente a escritorio
    window.matchMedia('(min-width: 851px)').addEventListener('change', closeMenu);
}
