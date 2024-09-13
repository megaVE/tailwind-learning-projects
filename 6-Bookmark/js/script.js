console.log("JavaScript working")

const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

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
