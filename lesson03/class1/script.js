let colors = ['#00FF00', '#FFA07A', '#FF00FF'];

function changeColor() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}
