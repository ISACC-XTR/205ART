/****** ADDING FUNCTIONALITY TO THE MENU BUTTON ****/

function showMENU() {
    
    const i = document.getElementById("drop");
    const s = document.querySelector("h1.heading");
    
    if(i.className === "list"){
        
        i.className += " active";
    }
    
    else{
        i.className = "list";
    }
    
}
