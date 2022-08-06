// Start Home Page
const navlinks = document.querySelector('.nav-links');
const menuicon = document.querySelector('.menu-icon');
const spanone = document.querySelector('.menu-icon span:first-child');
const spantwo = document.querySelector('.menu-icon span:nth-child(2)');
const spanthree = document.querySelector('.menu-icon span:last-child');
const hiddenmenu = document.querySelector('.hidden-menu');

// Managing Hidden Menu
menuicon.addEventListener('click', function () {
  spanone.classList.toggle('rotate-span-one');
  spantwo.classList.toggle('hide-span');
  spanthree.classList.toggle('rotate-span-two');

  //   hiddenmenu.style.cssText = 'display: block; transform: translateX(0)';
  hiddenmenu.classList.toggle('show-toggle');
});
// End Home Page
