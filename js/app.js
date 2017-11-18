window.onload = function() {
    console.log('DOM is ready...');

    let button = document.querySelector('.hamburger-menu');
    let header = document.querySelector('header');
    let section = document.querySelector('section');

    button.addEventListener('click', () => {
       console.log('Button is clicked'); 
       header.classList.toggle('hide');
       section.classList.toggle('fullpage');
    });
}