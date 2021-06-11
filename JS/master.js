const navTog = document.querySelector('.nav-tog');
const navLx = document.querySelectorAll('.nav__lk');

navTog.addEventListener('click', () => {

  document.body.classList.toggle('nav-open');
  
});

// Let's set up the back to top button
mybutton = document.getElementById("bckTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 990 || document.documentElement.scrollTop > 990) {

    mybutton.style.display = "block";

  } else {

    mybutton.style.display = "none";

  }

}


function topFunction() {

  document.body.scrollTop = 0; 

  document.documentElement.scrollTop = 0; 

}

navLx.forEach(link => {

  link.addEventListener('click',() => {

    document.body.classList.remove('nav-open'); 
    // Here, is better to delete it, instead of toggling!
  });  

});


