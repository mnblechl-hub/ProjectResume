const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Enhance PDF download with proper mime type handling
const pdfLink = document.querySelector('a[href*=".pdf"]');
if (pdfLink) {
  pdfLink.addEventListener('click', (e) => {
    // Allow browser's default download behavior
    // The download attribute will force download, hyperlinks work when opened in PDF reader
    console.log('PDF download initiated');
  });
}
