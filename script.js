
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Mobile menu
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Premium typing animation
const heroHeading = document.querySelector(".hero h2");

if (heroHeading) {
  const roles = [
    "BTech CSE Student",
    "Python Developer",
    "AI Enthusiast",
    "Aspiring Robotics Engineer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  heroHeading.textContent = "";

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    heroHeading.textContent =
      currentRole.substring(0, charIndex) + " |";

    let speed = deleting ? 45 : 85;

    if (!deleting && charIndex === currentRole.length) {
      deleting = true;
      speed = 1500;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(
  ".section-heading, .glass-card, .skill-card, .project-card, .contact-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Active navigation link
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// Back-to-top smooth behavior
document.querySelectorAll('a[href="#home"]').forEach((link) => {
  link.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
