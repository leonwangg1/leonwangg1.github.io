document.addEventListener("DOMContentLoaded", () => {
  var audio = document.createElement("audio");
  audio.src = "public/music.mp3";
  // audio.setAttribute("autoplay", "autoplay");
  // audio.setAttribute("loop", "loop");
  audio.setAttribute("id", "audio");

  const square = document.querySelector(".namecenterpage .selection");
  const text = document.querySelector(".namecenterpage .a");
  let squareScale = 1;
  console.log("0: " + squareScale);

  // When user hovers over button while not inside button
  square.addEventListener("mouseenter", () => {
    square.style.cursor = "pointer";
    if (squareScale === 1) {
      console.log("1: " + squareScale);
      anime({
        targets: [".namecenterpage .square", ".namecenterpage .a"],
        scale: 1.1,
      });
      squareScale = 1.1;
    }
  });

  // When user leaves button while not inside button
  square.addEventListener("mouseleave", () => {
    if (squareScale === 1.1) {
      console.log("2: " + squareScale);
      anime({
        targets: [".namecenterpage .square", ".namecenterpage .a"],
        scale: 1,
      });
      squareScale = 1;
    }
  });

  // When user clicks on button
  square.addEventListener("click", () => {
    if (squareScale < 2.8) {
      console.log("3: " + squareScale);
      anime({
        targets: document.querySelector(".namecenterpage .a"),
        letterSpacing: 0,
        scale: 5,
      });
      anime({
        targets: ".namecenterpage .square",
        borderRadius: ["0%", "50%"],
        easing: "easeInBounce",
        scale: 2.8,
        // complete: () => {
        // anime({
        //   targets: ".namecenterpage .square",
        //   animation: "pulse 1s infinite",
        // });
        // },
      });
      console.log("play music");
      audio.play();
      squareScale = 2.8;
    }
  });

  // When user leaves button while inside button
  square.addEventListener("mouseleave", () => {
    if (squareScale === 2.8) {
      console.log("4: " + squareScale);
      console.log("stop music");
      audio.pause();
      anime({
        targets: [".namecenterpage .square", ".namecenterpage .a"],
        letterSpacing: "0.7rem",
        borderRadius: ["50%", "0%"],
        easing: "easeOutBounce",
        scale: 1,
      });
      squareScale = 1;
    }
  });
});
