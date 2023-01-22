document.addEventListener("DOMContentLoaded", () => {
  const names = document.querySelectorAll("h2");

  names.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      anime({
        targets: el,
        letterSpacing: 0,
        scale: 5,
      });
    });

    el.addEventListener("mouseleave", () => {
      anime({
        targets: el,
        letterSpacing: "0.7rem",
        scale: 1,
      });
    });
  });

  const square = document.querySelector(".namecenterpage .a");

  square.addEventListener("mouseenter", () => {
    anime({
      targets: ".namecenterpage .square",
      borderRadius: ["0%", "50%"],
      easing: "easeInBounce",
      scale: 2.8,
      complete: () => {
        // anime({
        //   targets: ".namecenterpage .square",
        //   animation: "pulse 1s infinite",
        // });
      },
    });
  });

  square.addEventListener("mouseleave", () => {
    anime({
      targets: ".namecenterpage .square",
      borderRadius: ["50%", "0%"],
      easing: "easeOutBounce",
      scale: 1,
      // animation: "none",
    });
  });

  // Adjust animation speed to bpm of music
  var playButton = document.querySelector(".namecenterpage .square");
  square.addEventListener("mouseenter", function () {
    console.log("play music");
    // add audio inside audio-player
    var audio = document.createElement("audio");
    audio.src = "public/music.mp3";
    audio.setAttribute("autoplay", "autoplay");
    audio.setAttribute("loop", "loop");
    audio.setAttribute("id", "audio");
    document.getElementsByClassName("audio-player")[0].appendChild(audio);
  });
});
