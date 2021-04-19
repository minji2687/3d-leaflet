(() => {
  const leaflet = document.querySelector(".leaflet");
  const pages = document.querySelectorAll(".page");
  let pageCount = 0;

  function getTarget(elem, className) {
    while (!elem.classList.contains(className)) {
      elem = elem.parentNode;

      if (elem.nodeName === "BODY") {
        elem = null;
        return;
      }
    }
    return elem;
  }

  function openLeaflet(pageElem) {
    pageElem.classList.add("page-flipped");
    pageCount++;

    if (pageCount === 2) {
      document.body.classList.add("leaflet-opened");
    }
  }
  function closeLeaflet() {
    pageCount = 0;
    pages[2].classList.remove("page-flipped");
    setTimeout(() => {
      pages[0].classList.remove("page-flipped");
    }, 500);
  }

  leaflet.addEventListener("click", (e) => {
    let pageElem = getTarget(e.target, "page");
    if (pageElem) {
      console.log("open");
      openLeaflet(pageElem);
    }
    let closeBtn = getTarget(e.target, "close-btn");
    if (closeBtn) {
      closeLeaflet();
    }
  });
})();
