const keys = document.querySelectorAll(".key");

const startPlaying = function (e) {
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  //   console.log(key, audio);
  if (!key) return;

  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
};

const removeTransition = function (e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
};

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", startPlaying);

// Play on click

const startPlayOnClick = function (e) {
  const closestKey = e.target.closest(".key");
  if (!closestKey) return;

  const key = document.querySelector(
    `.key[data-key='${closestKey.dataset.key}']`
  );
  const audio = document.querySelector(
    `audio[data-key='${closestKey.dataset.key}']`
  );

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
};

window.addEventListener("click", startPlayOnClick);
