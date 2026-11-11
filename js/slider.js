document.addEventListener('DOMContentLoaded', () => {
  // 1. Slider de la imagen en el Hero (Inicio)
  const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.hero-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hero-swiper .swiper-button-next',
      prevEl: '.hero-swiper .swiper-button-prev',
    },
  });

  // 2. Slider de Productos Destacados (Flechas afuera dentro de .slider-container)
  const destacadosSwiper = new Swiper('.destacados-swiper', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.destacados-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#destacados .slider-container .swiper-button-next',
      prevEl: '#destacados .slider-container .swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      650: { slidesPerView: 2 },
      1000: { slidesPerView: 3 },
    },
  });

  // 3. Slider de Catálogo (Flechas afuera dentro de .slider-container)
  const productosSwiper = new Swiper('.productos-swiper', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '#catalogo .slider-container .swiper-button-next',
      prevEl: '#catalogo .slider-container .swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      650: { slidesPerView: 2 },
      1000: { slidesPerView: 4 },
    },
  });

  // 4. Lógica para el Fullscreen / Lightbox Modal con Swiper y Animación en la Galería (#galeria)
  const modal = document.getElementById('imageModal');
  const modalWrapper = document.getElementById('modalSwiperWrapper');
  const closeBtn = document.querySelector('.modal-close');

  const galleryImages = document.querySelectorAll('.gallery-grid img');
  let modalSwiper = null;

  if (modal && modalWrapper) {
    galleryImages.forEach((img, index) => {
      img.style.cursor = 'zoom-in';

      img.addEventListener('click', () => {
        // Limpiamos y rellenamos el wrapper del modal con todas las fotos
        modalWrapper.innerHTML = '';
        galleryImages.forEach(galleryImg => {
          const slide = document.createElement('div');
          slide.className = 'swiper-slide';
          slide.innerHTML = `<img src="${galleryImg.src}" alt="Detalle de galería ampliado">`;
          modalWrapper.appendChild(slide);
        });

        // Mostramos el modal activando la clase de animación (fade in / zoom)
        modal.classList.add('is-open');

        // Inicializamos el Swiper del modal
        modalSwiper = new Swiper('.modal-swiper', {
          initialSlide: index,
          loop: true,
          spaceBetween: 0,
          navigation: {
            nextEl: '.modal-swiper .swiper-button-next',
            prevEl: '.modal-swiper .swiper-button-prev',
          },
        });
      });
    });

    // Función para cerrar el modal con animación fluida
    const closeModal = () => {
      // Quitamos la clase que activa la animación de apertura (fade out)
      modal.classList.remove('is-open');

      // Esperamos a que termine la transición CSS (300ms) antes de destruir el swiper
      setTimeout(() => {
        if (modalSwiper) {
          modalSwiper.destroy(true, true);
          modalSwiper = null;
        }
      }, 300);
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Cerrar si hace clic fuera de la imagen (en el fondo oscuro)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Cerrar presionando la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }
});