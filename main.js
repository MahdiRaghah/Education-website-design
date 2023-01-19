// Change navbar style on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faq answer

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// show/hide navbar on tablets and mobile devices

if (window.width > "1024px") {
  menu.style.display = "none";
  closeMenuBtn.style.display = "none";
  menuBtn.style.display = "none";
} else {
  const menu = document.querySelector(".nav_menu");
  const menuBtn = document.querySelector("#open-menu-btn");
  const closeMenuBtn = document.querySelector("#close-menu-btn");

  menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeMenuBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  });

  const closeNav = () => {
    menu.style.display = "none";
    closeMenuBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  };

  closeMenuBtn.addEventListener("click", closeNav);
}
