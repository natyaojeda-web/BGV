/**
 * Meta Pixel Tracking Events
 * - Lead: Calendly buttons
 * - InitiateCheckout: Hotmart checkout button
 * - Contact: WhatsApp links
 */
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (e) {
    var target = e.target.closest('a, button');
    if (!target) return;
    var href = target.getAttribute('href') || '';

    // Calendly -> Lead
    if (href.indexOf('calendly.com') !== -1) {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead');
      }
    }
    // Hotmart -> InitiateCheckout
    else if (href.indexOf('hotmart.com') !== -1) {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout');
      }
    }
    // WhatsApp -> Contact
    else if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp.com') !== -1) {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact');
      }
    }
  });
});
