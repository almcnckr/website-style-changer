function updateTextStyle() {
    var color = document.getElementById("chooseColor").value;
    var font = document.getElementById("chooseFont").value;
    var size = document.getElementById("chooseSize").value;

    if (size >= 0) {
        document.getElementById("headerLabel").style.fontSize = size;
        document.body.style.fontSize = size;
        document.body.style.backgroundColor = color;
        document.body.style.fontFamily = font;
    } else {
        window.alert("Geçersiz değer girdiniz!");
        return;
    }
}