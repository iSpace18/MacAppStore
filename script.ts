document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".menu-link").forEach(menuLink => {
    menuLink.addEventListener("click", function() {
      document.querySelectorAll(".menu-link").forEach(link => link.classList.remove("is-active"));
      menuLink.classList.add("is-active");
    });
  });

  document.querySelectorAll(".main-header-link").forEach(headerLink => {
    headerLink.addEventListener("click", function() {
      document.querySelectorAll(".main-header-link").forEach(link => link.classList.remove("is-active"));
      headerLink.classList.add("is-active");
    });
  });

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", function(e) {
      e.stopPropagation();
      dropdowns.forEach(d => d.classList.remove("is-active"));
      dropdown.classList.add("is-active");
    });
  });

  document.querySelectorAll(".search-bar input").forEach(input => {
    input.addEventListener("focus", function() {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.add("wide");
      }
    });
    input.addEventListener("blur", function() {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.remove("wide");
      }
    });
  });

  document.addEventListener("click", function(e) {
    const container = document.querySelector(".status-button");
    const dd = document.querySelector(".dropdown");
    if (container && dd && !container.contains(e.target as Node)) {
      dd.classList.remove("is-active");
    }
  });

  document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.addEventListener("click", function(e) {
      const contentWrapper = document.querySelector(".content-wrapper");
      if (contentWrapper) {
        contentWrapper.classList.add("overlay");
      }
      e.stopPropagation();
    });
  });

  document.addEventListener("click", function(e) {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown && !dropdown.contains(e.target as Node)) {
      const contentWrapper = document.querySelector(".content-wrapper");
      if (contentWrapper) {
        contentWrapper.classList.remove("overlay");
      }
    }
  });

  document.querySelectorAll(".status-button:not(.open)").forEach(button => {
    button.addEventListener("click", function() {
      const overlayApp = document.querySelector(".overlay-app");
      if (overlayApp) {
        overlayApp.classList.add("is-active");
      }
    });
  });

  document.querySelectorAll(".pop-up .close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function() {
      const overlayApp = document.querySelector(".overlay-app");
      if (overlayApp) {
        overlayApp.classList.remove("is-active");
      }
    });
  });

  document.querySelectorAll(".status-button:not(.open)").forEach(button => {
    button.addEventListener("click", function() {
      const popUp = document.querySelector(".pop-up");
      if (popUp) {
        popUp.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".pop-up .close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function() {
      const popUp = document.querySelector(".pop-up");
      if (popUp) {
        popUp.classList.remove("visible");
      }
    });
  });

  const toggleButton = document.querySelector(".dark-light");
  if (toggleButton) {
    toggleButton.addEventListener("click", function() {
      document.body.classList.toggle("light-mode");
    });
  }
});