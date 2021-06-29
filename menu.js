const body = document.getElementsByTagName('body')[0];
const logo = document.querySelector('.logo_placeholder');
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu_btn');
const menuIcon = document.querySelector('nav a i');
const navLinks = document.querySelectorAll('.menu li a');
const main = document.getElementById('main');

function hideMenu() {
  body.style.overflow = 'auto';
  main.style.filter = 'blur(0)';
  logo.style.filter = 'blur(0)';
  nav.classList.remove('nav');
  menu.style.display = 'none';
  menuBtn.classList.replace('btn_flex_end', 'btn_flex_center');
  menuIcon.classList.add('primary_b');
  menuIcon.innerHTML = 'menu';
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].classList.remove('fw_600');
  }
}

function showMenu() {
  body.style.overflow = 'hidden';
  main.style.filter = 'blur(4px)';
  logo.style.filter = 'blur(4px)';
  nav.classList.add('nav');
  menu.style.display = 'flex';
  menuBtn.classList.replace('btn_flex_center', 'btn_flex_end');
  menuIcon.classList.remove('primary_b');
  menuIcon.innerHTML = 'close';
  menu.style.animation = 'none';
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].classList.add('fw_600');
  }
}

function toggleMenu() {
  if (menu.style.display === 'none') {
    showMenu();
  } else {
    hideMenu();
  }
}

menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('touchstart', toggleMenu);

if (menu.style.display !== 'none' && menu.style.display !== 'inline-flex') {
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', hideMenu);
    navLinks[i].addEventListener('touchstart', hideMenu);
  }
}
