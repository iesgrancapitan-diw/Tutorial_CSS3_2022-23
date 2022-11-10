{
    
    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("cambiar_estado").addEventListener("click", function(){
            var animation = document.getElementById("Animation-play-state");
            if(animation.style.animationPlayState == "paused"){
                animation.style.animationPlayState = "running";
            }else{
                animation.style.animationPlayState = "paused";
            }
        }
        );
    });


}