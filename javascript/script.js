// Dark mode code start from here....

let light = document.getElementById('light');

light.onclick = function() {
    console.log("u click on me");
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        light.src = "./resources/icons/light.png";
    }else{
        light.src = "./resources/icons/night-mode.png";
    }

}
// Dark mode code End here....

let  preloader = document.getElementById('preloader');

function myFunction(){
    setTimeout(() => {
        
        if(preloader.style.display = 'none');
    }, 1500); 
}
// scroll effect on navbar
function scroller() {
    console.log("u scroll");
    
}
