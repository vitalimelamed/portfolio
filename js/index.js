const navbarToggle = document.querySelector('.navbar-toggle');
const navbarList = document.querySelector('.navbar-list');
const navbarLink = document.querySelectorAll('.navbar-brand, .navbar-link');
// open navbar when clicking navbar toggle
  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('navbar-open');
    navbarList.classList.toggle('navbar-show');
});
// close navbar when clicking a link
  navbarLink.forEach( (link) => {
    link.addEventListener('click', () => {
      navbarToggle.classList.remove('navbar-open');
      navbarList.classList.remove('navbar-show');
  });
});
const input = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button[type='submit']');
 
button.addEventListener('click', () => {
    input.for(input =>  input.value = '');
    textarea.for(textarea =>  textarea.value = '');
});
