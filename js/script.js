let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times'); /* Gira os 3 riscos do Header */
  navbar.classList.toggle('active'); /* clicando nos tres riscos, abre o inicio, sobre, contato...*/
}

window.onscroll = () => {
  menu.classList.remove('fa-times'); 
  navbar.classList.remove('active'); 
}