document.addEventListener("DOMContentLoaded", () => {

  /* ========== DARK MODE ========== */
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    const icon = themeToggle.querySelector("span");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark");
    }

    // Set correct icon on load
    if (body.classList.contains("dark")) {
      icon.textContent = "light_mode";
    } else {
      icon.textContent = "dark_mode";
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        icon.textContent = "light_mode";
        localStorage.setItem("theme", "dark");
      } else {
        icon.textContent = "dark_mode";
        localStorage.setItem("theme", "light");
      }
    });
  }

  /* ========== CONTACT FORM VALIDATION ========== */
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");
  const messageBox = document.getElementById("formMessage");

  if (form && emailInput && messageBox) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

      if (!pattern.test(email)) {
        messageBox.textContent = "❌ Please enter a valid email address";
        messageBox.style.color = "red";
        return;
      }

      messageBox.textContent = "✅ Message sent successfully!";
      messageBox.style.color = "#22c55e";
      form.reset();
    });
  }

  /* ========== DYNAMIC YEAR ========== */
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* ========== SMOOTH SCROLL ========== */
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ========== SCROLL ANIMATIONS ========== */
  const cards = document.querySelectorAll(".product-card");

  if (cards.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "0.6s ease";
      observer.observe(card);
    });
  }

});
