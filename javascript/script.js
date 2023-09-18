// Dark mode code start from here....

var light = document.getElementById('light');

light.onclick = function() {
    console.log("u click on me");
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        light.src = "../resources/icons/light.png";
    }else{
        light.src = "../resources/icons/night-mode.png";
    }

}


// Dark mode code End here....
