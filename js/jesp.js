// Burger

burger = document.querySelector('.burger')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')
navbar = document.querySelector('.navbar')


burger.addEventListener('click',()=>{

    navlist.classlist.toggle('vclassresp');
    rightnav.classlist.toggle('vclassresp');
    navbar.classlist.toggle('hnavresp');

})



// from anoher website 
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
