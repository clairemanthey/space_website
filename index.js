let nav = document.querySelector(".primary-navigation");
let navToggle = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener("click", () => {
  
  let visibility = nav.getAttribute("data-visible")
  
  if(visibility === "false"){
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else{
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);

  }

});

