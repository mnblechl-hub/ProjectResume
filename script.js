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

// Force PDF download on click
const pdfLink = document.querySelector('a[href*=".pdf"]');
if (pdfLink) {
  pdfLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    const pdfUrl = pdfLink.getAttribute('href');
    const fileName = pdfLink.getAttribute('download') || 'Megan_Blechl_Resume_Technology_Transformation_Leader.pdf';
    
    // Fetch the PDF and trigger download
    fetch(pdfUrl)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Download failed:', error);
        // Fallback: use native download attribute
        window.location.href = pdfUrl;
      });
  });
}
