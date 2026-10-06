/* ============================================
   TrustHold Insurance — Main JavaScript
   ============================================ */

/* --- Navigation & Page Routing --- */
function navigate(pageId, pushState = true) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target page
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
  } else {
    document.getElementById('page-home').classList.add('active');
  }
  // Update nav active state
  document.querySelectorAll('[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile menu
  closeMobileMenu();
  // Update URL hash
  if (pushState) {
    history.pushState({ page: pageId }, '', '#' + pageId);
  }
}

// Handle back/forward browser navigation
window.addEventListener('popstate', (e) => {
  const hash = location.hash.replace('#', '') || 'home';
  navigate(hash, false);
});

// Route on load
window.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.replace('#', '') || 'home';
  navigate(hash, false);
});

// Intercept all [data-page] links
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-page]');
  if (link) {
    e.preventDefault();
    navigate(link.dataset.page);
  }
});

/* --- Mobile Menu --- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobileMenu() {
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
}

/* --- FAQ Accordion --- */
document.addEventListener('click', (e) => {
  const q = e.target.closest('.faq-question');
  if (!q) return;
  const answer = q.nextElementSibling;
  const isOpen = q.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-question.open').forEach(oq => {
    oq.classList.remove('open');
    oq.nextElementSibling.classList.remove('open');
  });
  // Toggle clicked
  if (!isOpen) {
    q.classList.add('open');
    if (answer) answer.classList.add('open');
  }
});

/* --- Quote Form --- */
function handleQuoteForm(e) {
  if (e) e.preventDefault();
  const btn = document.getElementById('quote-submit-btn');
  const success = document.getElementById('quote-success');
  if (btn) {
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Get My Free Quote';
      btn.disabled = false;
      if (success) {
        success.style.display = 'flex';
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => { success.style.display = 'none'; }, 5000);
      }
    }, 1400);
  }
}

/* --- Contact Form --- */
function handleContactForm(e) {
  if (e) e.preventDefault();
  const btn = document.getElementById('contact-submit-btn');
  const success = document.getElementById('contact-success');
  if (btn) {
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      if (success) {
        success.style.display = 'flex';
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => { success.style.display = 'none'; }, 5000);
      }
    }, 1200);
  }
}

/* --- Claims Form --- */
function handleClaimsForm(e) {
  if (e) e.preventDefault();
  const btn = document.getElementById('claims-submit-btn');
  const success = document.getElementById('claims-success');
  if (btn) {
    btn.textContent = 'Submitting...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Submit Claim Notice';
      btn.disabled = false;
      if (success) {
        success.style.display = 'flex';
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => { success.style.display = 'none'; }, 6000);
      }
    }, 1500);
  }
}
