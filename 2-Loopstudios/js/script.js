const menuButton = document.getElementById('menu-btn')
menuButton.addEventListener('click', navToggle)

function navToggle() {
  const menu = document.getElementById('menu')

   menuButton.classList.toggle('open')
   menu.classList.toggle('flex')
   menu.classList.toggle('hidden')
}