/* =============================================================
   CoachMe — Lightbox
   Opens feature & gallery images in a full-screen overlay.
   Shared across all language versions.
   ============================================================= */

'use strict';

(function () {
    const overlay = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    if (!overlay || !lbImg || !closeBtn) return;

    // Open on any feature-card or gallery-item image click
    document.querySelectorAll('.feature-card img, .gallery-item img')
        .forEach(img => {
            img.addEventListener('click', () => {
                lbImg.src = img.src;
                lbImg.alt = img.alt;
                overlay.classList.add('is-open');
            });
        });

    // Close on overlay click (but not on the image itself)
    overlay.addEventListener('click', (e) => {
        if (e.target !== lbImg) overlay.classList.remove('is-open');
    });

    // Close on button click
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('is-open');
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay.classList.remove('is-open');
    });
})();

