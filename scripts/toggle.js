function toggleMenu() {
  const icon = document.getElementById('menu-icon');
  icon.style.display = 'block';
  const openClose = icon.getElementsByTagName('i');
  const close = openClose[0];
  const open = openClose[1];
  const x = document.getElementById('nav-nav');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    close.style.display = 'none';
    open.style.display = 'block';
  } else {
    x.style.display = 'flex';
    close.style.display = 'block';
    open.style.display = 'none';
  }
}

window.addEventListener('resize', (e) => {
  const x = document.getElementById('nav-nav');
  const icons = document.querySelectorAll('#menu-icon i');
  const close = icons[0];
  const open = icons[1];
  const width = window.innerWidth;

  if (width > 500) {
    x.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'none';
  } else {
    x.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
   }
});

window.addEventListener('load', (e) => {
  const mobileMenuIcon = document.getElementById('menu-icon');
  mobileMenuIcon.addEventListener('click', (e) => {
    toggleMenu(e);
  });
  const x = document.getElementById('nav-nav');
  const icons = document.querySelectorAll('#menu-icon i');
  const close = icons[0];
  const open = icons[1];
  const width = window.innerWidth;
  if (width > 500) {
    x.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'none';
   } else {
    x.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
   }
});
