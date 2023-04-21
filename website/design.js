function dropdownMenu() {
    var x = document.getElementById("dropClick");
    if (x.className === "menu") {
        x.className += " responsive";
    }
    else{
        x.className = "menu";
    }
}