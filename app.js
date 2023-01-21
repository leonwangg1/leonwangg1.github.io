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

  document
    .querySelector(".namecenterpage .a")
    .addEventListener("mouseenter", () => {
      anime({
        targets: ".namecenterpage .square",
        borderRadius: ["0%", "50%"],
        easing: "easeInBounce",
        scale: 2.8,
      });
    });

  document
    .querySelector(".namecenterpage .a")
    .addEventListener("mouseleave", () => {
      anime({
        targets: ".namecenterpage .square",
        borderRadius: ["50%", "0%"],
        easing: "easeOutBounce",
        scale: 1,
      });
    });
});
