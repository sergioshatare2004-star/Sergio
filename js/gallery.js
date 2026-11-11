document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('galleryGrid');
  const toggleGalleryBtn = document.getElementById('toggleGalleryBtn');

  if (galleryGrid && toggleGalleryBtn) {
    toggleGalleryBtn.addEventListener('click', () => {
      const isExpanded = galleryGrid.classList.toggle('is-expanded');

      if (isExpanded) {
        toggleGalleryBtn.innerHTML = 'Mostrar menos <i class="fa-solid fa-chevron-up" style="margin-left: 8px; font-size: 12px;"></i>';
      } else {
        toggleGalleryBtn.innerHTML = 'Mostrar más <i class="fa-solid fa-chevron-down" style="margin-left: 8px; font-size: 12px;"></i>';

        // Desplazamiento suave opcional al contraer la galería
        galleryGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
});