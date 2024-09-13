const themeToggleButton = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if(colorTheme === "dark" || (!colorTheme && window.matchMedia('(preferes-color-scheme: dark)').matches)) {
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')
}

function toggleMode() {
  themeToggleDarkIcon.classList.toggle('hidden')  
  themeToggleLightIcon.classList.toggle('hidden')

  if(colorTheme === 'light' || !document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  }
}
themeToggleButton.addEventListener('click', toggleMode)
