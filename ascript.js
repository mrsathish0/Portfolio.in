document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Safely update YEAR only (no DOM breaking)
  const yearSpan = document.querySelector('[data-year]');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});