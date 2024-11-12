const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function clock() {
  const date = new Date();
  document.getElementById("hour").innerHTML = ((date.getHours() % 12) == 0?12:(date.getHours() % 12));
  document.getElementById("minute").innerHTML = date.getMinutes()
  document.getElementById("second").innerHTML = date.getSeconds()
  document.getElementById("date").innerHTML = date.getDate() + " , " + month[date.getMonth()] + " " + date.getFullYear()
}

setInterval(clock, 1000)
const font = document.querySelectorAll(".head")

const inSide = () => {
  document.body.style.backgroundColor = "black";
  document.querySelector("#create").style.color = "white"
  font.forEach((element) => {
    element.style.color = "white"
  })
  document.querySelector(".main").style.backgroundColor = "black";

}

const outSide = () => {
  document.body.style.backgroundColor = "white";
  document.querySelector("#create").style.color = "black"
  font.forEach((element) => {
    element.style.color = "black"
  })
  document.querySelector(".main").style.backgroundColor = "#9ac4ff";

}
