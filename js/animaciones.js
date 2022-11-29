document.addEventListener("DOMContentLoaded", function () {

    playStateButton = document.getElementsByClassName("animaciones_play_state_button")[0];
    playStateDiv = document.getElementsByClassName("animaciones_play_state")[0];
    playStateText = document.getElementsByClassName("animaciones_play_state_text")[0];
  
    playStateButton.addEventListener("click", function() {
        if (playStateDiv.style.animationPlayState == "paused") {
            playStateDiv.style.animationPlayState = "running";
            playStateDiv.innerHTML = "running";
            playStateButton.innerHTML = "Pausar";
        } else {
            playStateDiv.style.animationPlayState = "paused";
            playStateDiv.innerHTML = "paused";
            playStateButton.innerHTML = "Reanudar";
        }
    });

  btnFillMode = document.getElementById("btn_fillmode");
  animationFillNone = document.getElementById("animaciones_fill_mode1");
  animationFillFW = document.getElementById("animaciones_fill_mode2");
  animationFillBW = document.getElementById("animaciones_fill_mode3");
  animationFillBoth = document.getElementById("animaciones_fill_mode4");

  btnFillMode.addEventListener("click", function() {
    animationFillNone.classList.toggle("animaciones_toggle_fillMode");
    animationFillFW.classList.toggle("animaciones_toggle_fillMode");
    animationFillBW.classList.toggle("animaciones_toggle_fillMode");
    animationFillBoth.classList.toggle("animaciones_toggle_fillMode");
    this.innerText = "Animación en curso"
    this.disabled = true;

  });

  animationFillNone.addEventListener("animationend", function() {
    btnFillMode.innerText  = "Animación terminada";
      window.setTimeout(() => {
        animationFillNone.classList.toggle("animaciones_toggle_fillMode");
        animationFillFW.classList.toggle("animaciones_toggle_fillMode");
        animationFillBW.classList.toggle("animaciones_toggle_fillMode");
        animationFillBoth.classList.toggle("animaciones_toggle_fillMode");
        btnFillMode.innerText = "Hacer animación";
        btnFillMode.disabled = false;
      }, 3000);
  });
});
