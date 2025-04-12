

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

