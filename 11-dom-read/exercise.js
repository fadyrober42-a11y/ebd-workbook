export function pageHeading() {
  return document.querySelector("h1").textContent;
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map(
    (heading) => heading.textContent
  );
}

export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find(
    (item) => item.querySelector("h3").textContent === name
  );
  if (!card) {
    return null;
  }
  return card.querySelector(".price").textContent;
}

export function soldOutNames() {
  return Array.from(document.querySelectorAll(".sold-out h3")).map(
    (heading) => heading.textContent
  );
}