const galary = $(".img-galary");
const imgs = [
  {
    img: "../images/lion.jpeg",
    title: "Lion",
  },
  {
    img: "../images/cat.jpg",
    title: "Cat",
  },
  {
    img: "../images/goat.jpg",
    title: "Goat",
  },
  {
    img: "../images/bird.jpg",
    title: "Bird",
  },
  {
    img: "../images/panda.jpg",
    title: "Panda",
  },
  {
    img: "../images/rhino.jpg",
    title: "Rhino",
  },
];

for (let i = 0; i < imgs.length; i++) {
  const div = $("<div>");
  div.addClass("item");
  const img = $("<img>");
  const p = $("<p>");
  img.attr("src", imgs[i].img);
  p.text(imgs[i].title);
  div.append(img);
  div.append(p);
  galary.append(div);
}
