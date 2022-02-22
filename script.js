//handle scroll in nav bar
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.className += " active";
        }
    });
});

function myFunction() {
    let x = document.getElementById("navbar");
    let y = document.getElementById("navigation");
    let z = document.getElementById("ham");
    if (x.className === "nav-menu") {
        x.className += " responsive";
    } else {
        x.className = "nav-menu";
    }
    if (y.className === "nav") {
        y.className += " resp"
    } else {
        y.className = "nav"
    }
    if (z.className === "hamburger") {
        z.className += " ham-resp"
    } else {
        z.className = "hamburger"
    }
}

function myFunction1() {
    let x1 = document.getElementById("navbar");
    let y1 = document.getElementById("navigation");
    let z1 = document.getElementById("ham");
    if (x1.className === "responsive") {
        x1.className.remove("responsive")
    } else {
        x1.className = "nav-menu";
    }
    if (y1.className === "resp") {
        y1.className.remove("resp")
    } else {
        y1.className = "nav"
    }
    if (z1.className === "ham-resp") {
        z1.className.remove("ham-resp")
    } else {
        z1.className = "hamburger"
    }
}

