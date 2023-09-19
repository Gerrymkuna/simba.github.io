// sticky navigation bar//

const header = document.querySelector(".header");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.idIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
});
headerObserver.observe(header);
