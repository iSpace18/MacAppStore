document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-link").forEach(function (menuLink) {
        menuLink.addEventListener("click", function () {
            document.querySelectorAll(".menu-link").forEach(function (link) { return link.classList.remove("is-active"); });
            menuLink.classList.add("is-active");
        });
    });
    document.querySelectorAll(".main-header-link").forEach(function (headerLink) {
        headerLink.addEventListener("click", function () {
            document.querySelectorAll(".main-header-link").forEach(function (link) { return link.classList.remove("is-active"); });
            headerLink.classList.add("is-active");
        });
    });
    var dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("click", function (e) {
            e.stopPropagation();
            dropdowns.forEach(function (d) { return d.classList.remove("is-active"); });
            dropdown.classList.add("is-active");
        });
    });
    document.querySelectorAll(".search-bar input").forEach(function (input) {
        input.addEventListener("focus", function () {
            var header = document.querySelector(".header");
            if (header) {
                header.classList.add("wide");
            }
        });
        input.addEventListener("blur", function () {
            var header = document.querySelector(".header");
            if (header) {
                header.classList.remove("wide");
            }
        });
    });
    document.addEventListener("click", function (e) {
        var container = document.querySelector(".status-button");
        var dd = document.querySelector(".dropdown");
        if (container && dd && !container.contains(e.target)) {
            dd.classList.remove("is-active");
        }
    });
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
        dropdown.addEventListener("click", function (e) {
            var contentWrapper = document.querySelector(".content-wrapper");
            if (contentWrapper) {
                contentWrapper.classList.add("overlay");
            }
            e.stopPropagation();
        });
    });
    document.addEventListener("click", function (e) {
        var dropdown = document.querySelector(".dropdown");
        if (dropdown && !dropdown.contains(e.target)) {
            var contentWrapper = document.querySelector(".content-wrapper");
            if (contentWrapper) {
                contentWrapper.classList.remove("overlay");
            }
        }
    });
    document.querySelectorAll(".status-button:not(.open)").forEach(function (button) {
        button.addEventListener("click", function () {
            var overlayApp = document.querySelector(".overlay-app");
            if (overlayApp) {
                overlayApp.classList.add("is-active");
            }
        });
    });
    document.querySelectorAll(".pop-up .close").forEach(function (closeBtn) {
        closeBtn.addEventListener("click", function () {
            var overlayApp = document.querySelector(".overlay-app");
            if (overlayApp) {
                overlayApp.classList.remove("is-active");
            }
        });
    });
    document.querySelectorAll(".status-button:not(.open)").forEach(function (button) {
        button.addEventListener("click", function () {
            var popUp = document.querySelector(".pop-up");
            if (popUp) {
                popUp.classList.add("visible");
            }
        });
    });
    document.querySelectorAll(".pop-up .close").forEach(function (closeBtn) {
        closeBtn.addEventListener("click", function () {
            var popUp = document.querySelector(".pop-up");
            if (popUp) {
                popUp.classList.remove("visible");
            }
        });
    });
    var toggleButton = document.querySelector(".dark-light");
    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
        });
    }
});
