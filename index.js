const audioPlayer = document.getElementById("audio");
const button = document.getElementById("button");
const main = document.getElementsByClassName("main")[0];

const splide = new Splide( '.splide' , {
  type:"loop",
  pagination:false,
  pauseOnHover:false,
  pauseOnFocus:false,
  direction:"ttb",
  // autoplay:true,
  arrows:false,
  width:"100vw",
  height:"100vh",
  interval:500,
}).mount();

button.addEventListener("click", () => {
  button.style.visibility = "hidden";
  audioPlayer.play();
  main.classList.add("main2");
  setTimeout(()=>main.classList.add("main3"), 2000);
  setTimeout(()=>go(),3000);
  // splide.play();
  // splide.options = {autoplay:true};
});

function go(){
  setTimeout(()=>go(),3000);
  splide.go('+1');
}


