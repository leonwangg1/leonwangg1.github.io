document.addEventListener("DOMContentLoaded", () => {
  var audio = document.createElement("audio");
  audio.src = "public/sussybaka.mp3";
  audio.setAttribute("id", "audio");

  const square = document.querySelector(".namecenterpage .selection");
  const susText = document.querySelector(".namecenterpage .b");
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
      anime({
        targets: ".namecenterpage .b",
        easing: "linear",
        update: function () {
          document.querySelector(".namecenterpage .c").innerHTML = "";
          susText.innerHTML = "👀";
        },
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
      anime({
        targets: ".namecenterpage .b",
        easing: "linear",
        update: function () {
          susText.innerHTML = "oh look its a square";
          document.querySelector(".namecenterpage .c").innerHTML =
            "hopefully nothing breaks 💀";
        },
      });
      squareScale = 1;
    }
  });

  // When user clicks on button
  square.addEventListener("click", () => {
    if (squareScale < 2.8) {
      console.log("3: " + squareScale);
      anime({
        targets: ".namecenterpage .b",
        easing: "linear",
        update: function () {
          susText.innerHTML = "jebaited. its a circle ඞඞඞඞ";
          document.querySelector(".container_mouse").style.display = "block";
          document.querySelector(
            ".intro"
          ).innerHTML = `Hi <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px"></img> I'm`;
          document.querySelector(".credits").innerHTML =
            "Song  :    Shadow (Syn Cole, Alida)";
        },
      });
      anime({
        targets: document.querySelector(".namecenterpage .a"),
        letterSpacing: 0,
        scale: 5,
      });
      // Transition to circle
      anime({
        targets: [".namecenterpage .square", square],
        borderRadius: ["3%", "50%"],
        easing: "easeInBounce",
        scale: 2.8,
        complete: () => {
          anime({
            targets: ".namecenterpage .square",
            animation: "pulse 0.5s infinite",
          });
        },
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

      const computedStyles = window.getComputedStyle(square);
      const borderRadius = computedStyles.getPropertyValue("border-radius");
      // console.log(borderRadius);
      if (borderRadius === "0px" && squareScale > 2.8) {
        anime({
          update: function () {
            console.log("I think you broke it smh");
            susText.innerHTML = "._.";
          },
        });
      } else {
        // Dialogues
        anime({
          targets: ".namecenterpage .b",
          easing: "linear",
          update: function () {
            susText.innerHTML = "🤪🤪🤪";
            document.querySelector(".credits").innerHTML = "";
            document.querySelector(".intro").innerHTML = "";
            document.querySelector(".c").innerHTML = "";
            document.querySelector(".container_mouse").style.display = "none";
          },
          complete: function () {
            setTimeout(function () {
              anime({
                targets: ".namecenterpage .b",
                easing: "linear",
                update: function () {
                  susText.innerHTML = "¯\\_(ツ)_/¯";
                },
                complete: function () {
                  setTimeout(function () {
                    anime({
                      targets: ".namecenterpage .b",
                      easing: "linear",
                      update: function () {
                        susText.innerHTML = "";
                        document.querySelector(".b").innerHTML =
                          "suprised ya 😂😂";
                      },
                    });
                  }, 1000);
                },
              });
            }, 500);
          },
        });
      }

      anime({
        targets: [".namecenterpage .square", ".namecenterpage .a", square],
        animation: "none",
        letterSpacing: "0.7rem",
        borderRadius: ["50%", "3%"],
        easing: "easeOutBounce",
        scale: 1,
      });
      squareScale = 1;
    }
  });
});
