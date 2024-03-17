function changeBackgroundColor() {
    var colors = ["#ff6347", "#ff69b4", "#00bfff", "#9acd32", "#ffc0cb", "#ff7f50", "#4682b4"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
