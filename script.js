// Dark mode code start from here....

var light = document.getElementById('light');

light.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        light.src = "./icon/light.png";
    }else{
        light.src = "./icon/night-mode.png";
    }
}
// Dark mode code End here....
