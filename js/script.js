window.addEventListener('load', ()=>{
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colours = [
      "#febe1f",
      "#8abdd2",
      "#ff800e",
      "#acd366",
      "#003e74",
      "#60c2d3"
  ];

    pads.forEach((pad, index) => {
      pad.addEventListener('click', function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
        bubbles(index);
      });
    });

  const bubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colours[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
