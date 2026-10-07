const button = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
function setMenuOpen(open) {
  nav.classList.toggle('open', open);
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
button.addEventListener('click', () => setMenuOpen(button.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    button.focus();
  }
});
window.matchMedia('(max-width: 720px)').addEventListener('change', () => setMenuOpen(false));

const projectGrid = document.querySelector('#project-grid');
const pagination = document.querySelector('.project-pagination');

if (projectGrid && pagination) {
  const projects = [...projectGrid.querySelectorAll('.project')];
  const pageSize = 3;
  const pageCount = Math.ceil(projects.length / pageSize);
  const previous = pagination.querySelector('.project-prev');
  const next = pagination.querySelector('.project-next-button');
  const numbers = pagination.querySelector('.project-page-numbers');
  const status = pagination.querySelector('.project-page-status');
  const storageKey = 'portfolio-work-page';
  let currentPage = 1;

  const pageButtons = Array.from({ length: pageCount }, (_, index) => {
    const pageButton = document.createElement('button');
    pageButton.type = 'button';
    pageButton.textContent = index + 1;
    pageButton.setAttribute('aria-label', `Product page ${index + 1}`);
    pageButton.setAttribute('aria-controls', 'project-grid');
    pageButton.addEventListener('click', () => showPage(index + 1, true));
    numbers.append(pageButton);
    return pageButton;
  });

  function showPage(value, userInitiated = false) {
    currentPage = Number.isInteger(value) ? Math.max(1, Math.min(value, pageCount)) : 1;
    const start = (currentPage - 1) * pageSize;
    projects.forEach((project, index) => {
      project.hidden = index < start || index >= start + pageSize;
    });
    pageButtons.forEach((pageButton, index) => {
      if (index + 1 === currentPage) pageButton.setAttribute('aria-current', 'page');
      else pageButton.removeAttribute('aria-current');
    });
    previous.disabled = currentPage === 1;
    next.disabled = currentPage === pageCount;
    status.textContent = `${start + 1}–${Math.min(start + pageSize, projects.length)} of ${projects.length} products`;
    try { sessionStorage.setItem(storageKey, String(currentPage)); } catch { /* Storage is optional. */ }
    if (userInitiated) {
      const url = new URL(location.href);
      url.searchParams.set('work-page', currentPage);
      url.hash = 'work';
      history.replaceState(null, '', url);
      // Keep the new cards in view, including on narrow screens.
      document.querySelector('#work').scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }

  function restorePage() {
    let savedPage = 1;
    try { savedPage = Number(sessionStorage.getItem(storageKey)) || 1; } catch { /* Use the first page. */ }
    const requestedPage = new URL(location.href).searchParams.get('work-page');
    showPage(requestedPage === null ? savedPage : Number(requestedPage));
  }

  previous.addEventListener('click', () => showPage(currentPage - 1, true));
  next.addEventListener('click', () => showPage(currentPage + 1, true));
  restorePage();
  pagination.hidden = pageCount <= 1;
  window.addEventListener('pageshow', restorePage);
  window.addEventListener('popstate', restorePage);
}
