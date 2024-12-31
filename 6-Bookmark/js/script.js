console.log("JavaScript working")

const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const button = document.querySelector('#menu-btn')
const menu = document.querySelector('#menu')
const logo = document.querySelector('#logo')

button.addEventListener('click', navToggle)

function onTabClick(e) {
  tabs.forEach(tab => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })

  panels.forEach(panel => panel.classList.add('hidden'))

  e.target.classList.add(
    'border-softRed',
    'border-b-4'
  )

  const classString = e.target.getAttribute('data-target')

  const currentPannel = document.getElementById('panels').getElementsByClassName(classString)[0]
  currentPannel.classList.remove('hidden')
}

tabs.forEach(tab => tab.addEventListener('click', onTabClick))

function navToggle() {
  button.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}