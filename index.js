const audioPlayer = document.getElementById("audio");
const button = document.getElementById("button");
const main = document.getElementsByClassName("main")[0];

button.addEventListener("click", () => {
  button.style.visibility = "hidden";
  audioPlayer.play();
  main.classList.add("main2");
  setTimeout(()=>main.classList.add("main3"), 2000);
});
