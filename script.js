document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("main section");

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach((section) => {
    observer.observe(section);
  });

  const topo = document.createElement("button");

  topo.innerHTML = "↑";
  topo.setAttribute("aria-label", "Voltar ao topo");

  topo.style.position = "fixed";
  topo.style.bottom = "25px";
  topo.style.right = "25px";
  topo.style.width = "45px";
  topo.style.height = "45px";
  topo.style.border = "none";
  topo.style.borderRadius = "50%";
  topo.style.background = "#6d302b";
  topo.style.color = "#f1ede4";
  topo.style.fontSize = "1.4rem";
  topo.style.cursor = "pointer";
  topo.style.opacity = "0";
  topo.style.pointerEvents = "none";
  topo.style.transition = "0.3s ease";
  topo.style.zIndex = "1000";

  document.body.appendChild(topo);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      topo.style.opacity = "1";
      topo.style.pointerEvents = "auto";
    } else {
      topo.style.opacity = "0";
      topo.style.pointerEvents = "none";
    }
  });

  topo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const rodape = document.querySelector(".rodape p");

  if (rodape) {
    const anoAtual = new Date().getFullYear();

    rodape.innerHTML =
      `&copy; ${anoAtual} Novas.Produções. Todos os direitos reservados.`;
  }

});