/* Copyright (c) 2023 Andrea Buran [www.andreaburan.com]. All rights reserved */

/*
** Menu
*/

const headerNavigationItems = document.querySelector('.header-navigation');
const openMenu = document.querySelector('#menu-open');
const closeMenu = document.querySelector('#menu-close');

const menuEvent = (navigation, close, open) => {
  headerNavigationItems.style.display = navigation;
  closeMenu.style.display = close;
  openMenu.style.display = open;
};

openMenu.addEventListener('click', () => menuEvent('flex', 'block', 'none'));
closeMenu.addEventListener('click', () => menuEvent('none', 'none', 'block'));

window.addEventListener('resize', function() {
  if (window.innerWidth > 767) {
    menuEvent('flex', 'block', 'none');
  } else {
    menuEvent('none', 'none', 'block');
  }
})