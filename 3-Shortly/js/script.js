const hamburgerButton = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("menu")

const input = document.getElementById("link-input")
const linkForm = document.getElementById("link-form")
const errorMessage = document.getElementById("error-message")

function isValidURL(urlString) {
  const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

  return urlRegex.test(urlString)
}

function handleError(error) {
  errorMessage.textContent = error
  input.classList.add('border-red')
}

function createRandomString(length) {
  function randomStringGenerator(length, pendingString = "") {
    const randomNumber = Math.random() + 1
    const randomString = randomNumber.toString(36).substring(7)
    pendingString += randomString
  
    if(pendingString.length < length)
      return randomStringGenerator(length, pendingString)
  
    return pendingString.slice(0, length)
  }

  return randomStringGenerator(length)
}

function createShortenLink() {
  const linkHash = createRandomString(6)

  return `https://rel.ink/${linkHash}`
}

linkForm.addEventListener('submit', function (e) {
  e.preventDefault()

  if(!input.value?.length)
    return handleError("Please enter something.")
  
  if(!isValidURL(input.value))
    return handleError("Please enter a valid URL")

  errorMessage.textContent = ""
  input.classList.remove('border-red')

  const link = createShortenLink()
  console.log(link)

  alert(`Your shorten link is ready!: ${link}`)
})

function navToggle() {
  hamburgerButton.classList.toggle("open")
  mobileMenu.classList.toggle("flex")
  mobileMenu.classList.toggle("hidden")
}
hamburgerButton.addEventListener('click', navToggle)