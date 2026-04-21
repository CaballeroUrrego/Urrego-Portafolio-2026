// Detecta si el usuario entra desde un móvil
  if (window.innerWidth <= 768) {
    window.addEventListener("load", () => {
      // Espera medio segundo y luego hace scroll suave a "Sobre mí"
      setTimeout(() => {
        document.querySelector("#navbarNav").scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 500);
    });
  }