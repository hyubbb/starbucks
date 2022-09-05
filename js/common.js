
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});


searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', 'insert');
});


searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});






const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// textContent => 그 요소의 글자 내용을 알아내거나 지정가능하다.
