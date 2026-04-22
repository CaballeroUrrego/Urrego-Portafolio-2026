/**
 * PORTAFOLIO - SEBASTIÁN URREGO
 * Control de Navegación, UX y Barra de Progreso
 */

(function () {
  // 1. Desactivamos la restauración automática del scroll
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // 2. Función para forzar el inicio en el tope
  const irAlInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  irAlInicio();
  document.addEventListener("DOMContentLoaded", irAlInicio);
  window.addEventListener("load", irAlInicio);
})();

// 3. EVENTOS CARGA DOM
document.addEventListener("DOMContentLoaded", () => {
  // CIERRE AUTOMÁTICO DEL MENÚ (UX Móvil)
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle && menuToggle.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(menuToggle);
        bsCollapse.hide();
      }
    });
  });
});

// 4. CONTROL DE SCROLL UNIFICADO (Navbar + Barra de Progreso)
window.addEventListener("scroll", () => {
  // --- Lógica de la Navbar Dinámica ---
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

  // --- Lógica de la Barra de Progreso ---
  const myBar = document.getElementById("myBar");
  if (myBar) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    myBar.style.width = scrolled + "%";
  }
});
