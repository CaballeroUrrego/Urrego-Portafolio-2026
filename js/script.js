/**
 * PORTAFOLIO - SEBASTIÁN URREGO
 * Control de posicionamiento inicial en el tope (Navbar)
 */

(function() {
    // 1. Desactivamos la restauración automática del scroll del navegador
    // Esto evita que el navegador te lleve a donde estabas antes de refrescar
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // 2. Función para forzar el inicio en el tope
    const irAlInicio = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant" // Carga inmediata en el borde superior
        });
    };

    // Ejecutamos lo más rápido posible
    irAlInicio();

    // Reforzamos en eventos de carga por seguridad
    document.addEventListener("DOMContentLoaded", irAlInicio);
    window.addEventListener("load", irAlInicio);
})();

// 3. CIERRE AUTOMÁTICO DEL MENÚ (UX Móvil)
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (menuToggle && menuToggle.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(menuToggle);
                bsCollapse.hide();
            }
        });
    });
});

// 4. NAVBAR DINÁMICA (Scroll)
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(15, 23, 42, 0.95)"; 
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.4)";
        } else {
            navbar.style.backgroundColor = "rgba(33, 37, 41, 1)";
            navbar.style.boxShadow = "none";
        }
        navbar.style.transition = "all 0.4s ease";
    }
});