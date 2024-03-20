const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?cs=srgb&dl=pexels-toni-cuenca-585752.jpg&fm=jpg"/>';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vero";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/28.jpg" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Mar 28, 2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
