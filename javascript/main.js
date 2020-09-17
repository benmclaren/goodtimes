// we grab our main header adn our desktop header
// we insert the contents of our header into the desktop one

const header = document.querySelector('.header')
const desktopHeader = document.querySelector('.header-desktop')

desktopHeader.innerHTML = header.innerHTML

// 1. when the header enters the viewport, hide the desktop header
// 2. when the header leaves then show the header

inView('.header')
  .on('enter', el => desktopHeader.classList.remove("visible"))

  .on('exit', el => desktopHeader.classList.add("visible"))
