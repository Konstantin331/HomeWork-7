const soundOnA = document.getElementById('soundOnA')
const soundOnS = document.getElementById('soundOnS')
const soundOnD = document.getElementById('soundOnD')
const soundOnF = document.getElementById('soundOnF')
const soundOnG = document.getElementById('soundOnG')
const soundOnH = document.getElementById('soundOnH')
const soundOnJ = document.getElementById('soundOnJ')
const soundOnK = document.getElementById('soundOnK')

const playOnA = document.getElementById('playOnA')
const playOnS = document.getElementById('playOnS')
const playOnD = document.getElementById('playOnD')
const playOnF = document.getElementById('playOnF')
const playOnG = document.getElementById('playOnG')
const playOnH = document.getElementById('playOnH')
const playOnJ = document.getElementById('playOnJ')
const playOnK = document.getElementById('playOnK')

document.addEventListener("keydown", function(e){
  if(e.keyCode == 65){
    soundOnA.play();
    soundOnA.currentTime =0;
    playOnA.click();
    playOnA.classList.add("keyPress");
    window.addEventListener ("keyup", () => {playOnA.classList.remove ("keyPress")});
  }
  else if(e.keyCode == 83){
    soundOnS.play();
    soundOnS.currentTime =0;
    playOnS.click();
    playOnS.classList.add("keyPress");
    window.addEventListener ("keyup", () => {playOnS.classList.remove ("keyPress")});

  }
  else if(e.keyCode == 68){
    soundOnD.play();
    soundOnD.currentTime =0;
    playOnD.click();
    playOnD.classList.add("keyPress");
    window.addEventListener ("keyup", () => {playOnD.classList.remove ("keyPress")});
  }
  else if(e.keyCode == 70){
    soundOnF.play();
    soundOnF.currentTime =0;
    playOnF.click();
    playOnF.classList.add("keyPress");
    window.addEventListener ("keyup", () => {playOnF.classList.remove ("keyPress")});
  }
  else if(e.keyCode == 71){
    soundOnG.play();
    soundOnG.currentTime =0;
    playOnG.click();
    playOnG.classList.add("keyPress");
    window.addEventListener ("keyup", () => {playOnG.classList.remove ("keyPress")});
  }
  else if(e.keyCode == 72){
    soundOnH.play();
    soundOnH.currentTime =0;
    playOnH.click();
    playOnH.classList.add("keyPress");
    window.addEventListener ("keyup", () => {playOnH.classList.remove ("keyPress")});
  }
  else if(e.keyCode == 74){
    soundOnJ.play();
    soundOnJ.currentTime =0;
    playOnJ.click();
    playOnJ.classList.add("keyPress");
    window.addEventListener ("keyup", () => {playOnJ.classList.remove ("keyPress")});
  }
  else if(e.keyCode == 75){
    soundOnK.play();
    soundOnK.currentTime =0;
    playOnK.click();
    playOnK.classList.add("keyPress");
    window.addEventListener ("keyup", () => {playOnK.classList.remove ("keyPress")});
  };
});
