
// loader para estilizar pagina //

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  setTimeout(() => {
    loader.classList.add('fade-out');


    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000); // coincide con el transition: opacity 1s
  }, 3000); // 4 segundos de duración del loader
});


 // funcion glass para el navbar //
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
      header.classList.remove('header-solid');
      header.classList.add('header-glass');
    } else {
      header.classList.remove('header-glass');
      header.classList.add('header-solid');
    }
  });


  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
      header.classList.add('header-glass');
    } else {
      header.classList.add('header-solid');
    }
  });

 //agarramos clases para trabajarlas en js
  const hamburger = document.querySelector(".hamburger input");
  const navLinks = document.querySelector(".nav-links-container");
  const overlay = document.querySelector(".overlay");

  
  
  // Toggle del menú
  const toggleMenu = () => {
    navLinks.classList.toggle("open-menu", hamburger.checked);
    overlay.classList.toggle("show-overlay", hamburger.checked);
  };
  
  // Cierra el menú si se hace scroll
  const closeOnScroll = () => {
    if (!hamburger.checked) return;
    hamburger.checked = false;
    navLinks.classList.remove("open-menu");
    overlay.classList.remove("show-overlay");
  };
  
  // Cierra el menú al hacer clic en un link
  const closeOnClick = (e) => {
    if (!e.target.closest(".nav-link")) return;
    hamburger.checked = false;
    navLinks.classList.remove("open-menu");
    overlay.classList.remove("show-overlay");
  };
  
  // Cierra el menú al hacer clic en el overlay
  const closeOnOverlayClick = () => {
    hamburger.checked = false;
    navLinks.classList.remove("open-menu");
    overlay.classList.remove("show-overlay");
  };
  
  const init = () => {
    hamburger.addEventListener("change", toggleMenu);
    window.addEventListener("scroll", closeOnScroll);
    navLinks.addEventListener("click", closeOnClick);
    overlay.addEventListener("click", closeOnOverlayClick);
  };
  
  init();
  