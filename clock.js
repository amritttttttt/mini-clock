

const clock = document.querySelector("#clock")

setInterval(() => {
  const date = new Date()
  clock.innerHTML = date.toLocaleString()
}, 1000);