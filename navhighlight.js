// ================================================
// NAVIGATION HIGHLIGHT
// ================================================

// LINKS
const homeLink = document.querySelector('.home-link');
const pricingLink = document.querySelector('.pricing-link');
const contactLink = document.querySelector('.contact-link');

document.addEventListener('scroll', navHighlight);

function navHighlight() {
  // ============================
  // NAV HEIGHT
  const navHeight = document.querySelector('nav').getBoundingClientRect()
    .height;

  // ============================
  // HOME BREAKPOINT
  const homeTop =
    document.querySelector('#home').getBoundingClientRect().top - navHeight;
  const homeHeight = document.querySelector('#home').getBoundingClientRect()
    .height;
  const homeBreak = homeTop + homeHeight;

  // ============================
  // PRICING BREAKPOINT
  const pricingBreak =
    document.querySelector('#pricing').getBoundingClientRect().top - navHeight;

  // ============================
  // CONTACT BREAKPOINT
  const contactBreak =
    document.querySelector('#contact').getBoundingClientRect().top - navHeight;

  let vertical = window.scrollY;

  // Home Link
  homeBreak > 0
    ? homeLink.classList.add('highlighted')
    : homeLink.classList.remove('highlighted');

  // Pricing Link
  if (pricingBreak < 0 && contactBreak > 0) {
    pricingLink.classList.add('highlighted');
  } else if (pricingBreak > 0 || contactBreak < 0) {
    pricingLink.classList.remove('highlighted');
  }

  // Contact Link
  contactBreak < 0
    ? contactLink.classList.add('highlighted')
    : contactLink.classList.remove('highlighted');
}
