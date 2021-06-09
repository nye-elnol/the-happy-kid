const navTog = document.querySelector('.nav-tog');
const navLx = document.querySelectorAll('.nav__lk');

navTog.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLx.forEach(link => {

  link.addEventListener('click',() => {

    document.body.classList.remove('nav-open'); 
    // Here, is better to delete it, instead of toggling!
  });  

});

