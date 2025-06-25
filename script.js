// initApp keessatti waamichaalee haaraa dabali
function initApp() {
    initMobileMenu();
    initStoryFilters();
    initContactForm();
    initScrollAnimations();
    initActiveNavHighlighting();
    initLoginModal(); // HAARAA
    initGalleryLightbox(); // HAARAA
    console.log("OLMASAN App milkaa'inaan jalqabameera!");
}

/**
 * Hojii Modal (pop-up) seenuu fi galmaa'uu to'ata.
 */
function initLoginModal() {
    const loginTrigger = document.querySelector('.nav-login');
    const modalOverlay = document.getElementById('login-modal');
    const closeModal = document.querySelector('.modal-close');

    if (!loginTrigger || !modalOverlay || !closeModal) return;

    const openModal = () => {
        modalOverlay.classList.add('is-visible');
        modalOverlay.setAttribute('aria-hidden', 'false');
    };

    const closeTheModal = () => {
        modalOverlay.classList.remove('is-visible');
        modalOverlay.setAttribute('aria-hidden', 'true');
    };

    loginTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeModal.addEventListener('click', closeTheModal);

    // Yoo bakka biraa tuqan akka cufamu
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeTheModal();
        }
    });
}

/**
 * Hojii Galarii (lightbox) to'ata.
 * Laayibrarii malee, salphaatti hojjeta.
 */
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const imageUrl = item.getAttribute('href');
            
            // Lightbox uumi
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox-overlay';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${imageUrl}" alt="">
                    <button class="lightbox-close">×</button>
                </div>
            `;
            document.body.appendChild(lightbox);

            // Cufuuf
            lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });
            lightbox.addEventListener('click', (ev) => {
                if (ev.target === lightbox) {
                    document.body.removeChild(lightbox);
                }
            });
        });
    });
}

// Dabalataan CSS xiqqoo lightbox-iif
/*
.lightbox-overlay { 
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.9); z-index: 3000; display: flex; 
    justify-content: center; align-items: center;
}
.lightbox-content { position: relative; max-width: 90%; max-height: 80%; }
.lightbox-content img { display: block; max-width: 100%; max-height: 100%; }
.lightbox-close { 
    position: absolute; top: -40px; right: 0; font-size: 2.5rem; 
    color: #fff; background: none; border: none; cursor: pointer;
}
*/
// Koodii CSS kana gara style.css keetti dabali.