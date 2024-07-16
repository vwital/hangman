export function createButton(sym, container) {
  let button = document.createElement("button");
  button.className = "buttons__btn";
  button.innerHTML = sym.toUpperCase();
  container.append(button);
}
