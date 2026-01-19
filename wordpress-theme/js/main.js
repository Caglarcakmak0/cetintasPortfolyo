
document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // NAVBAR SCROLL & MOBILE MENU
    // ==========================================
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // SWIPER SLIDER (SECTORS)
    // ==========================================
    if (document.querySelector('.sectors-swiper')) {
        const swiper = new Swiper('.sectors-swiper', {
            slidesPerView: 1,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                }
            },
            navigation: {
                nextEl: '.sectors-nav-next',
                prevEl: '.sectors-nav-prev',
            },
        });
    }

    // ==========================================
    // LEAFLET MAP
    // ==========================================
    const mapContainer = document.getElementById('compactMap');
    if (mapContainer && window.mapLocations) {
        // Initialize map centered on first location (Turkey)
        const map = L.map('compactMap').setView([41.0602, 28.9744], 6);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const markers = {};

        // Add markers
        window.mapLocations.forEach(loc => {
            const marker = L.marker(loc.coordinates).addTo(map);

            const popupContent = `
                <div style="text-align: center; padding: 5px;">
                    <strong>${loc.name}</strong><br />
                    <span style="font-size: 0.9rem; color: #4a90e2">${loc.companyName}</span><br />
                    <span style="font-size: 0.8rem; color: #64748b">${loc.description}</span><br />
                    <span style="font-size: 0.75rem; color: #94a3b8; marginTop: 5px; display: block">${loc.address}</span>
                </div>
            `;

            marker.bindPopup(popupContent);
            markers[loc.id] = marker;
        });

        // Handle sidebar clicks
        const locationItems = document.querySelectorAll('.location-compact');
        locationItems.forEach(item => {
            item.addEventListener('click', function () {
                // Update active state
                locationItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');

                // Get coordinates
                const lat = parseFloat(this.getAttribute('data-lat'));
                const lng = parseFloat(this.getAttribute('data-lng'));
                const id = this.getAttribute('data-id');

                // Fly to location
                map.flyTo([lat, lng], 6, {
                    animate: true,
                    duration: 1
                });

                // Open popup
                if (markers[id]) {
                    markers[id].openPopup();
                }
            });
        });
    }

    // ==========================================
    // GSAP ANIMATIONS (Simple Fade In)
    // ==========================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Generic fade up for sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            gsap.from(section.children, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        });
    }
});
