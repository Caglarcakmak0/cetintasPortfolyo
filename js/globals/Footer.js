/**
 * Footer Component - Global Component
 */
class Footer {
    init() {
        this.updateCopyrightYear();
    }

    updateCopyrightYear() {
        const yearElements = document.querySelectorAll('.current-year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(element => {
            element.textContent = currentYear;
        });
    }
}
window.Footer = Footer;