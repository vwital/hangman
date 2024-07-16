export function createBodyPart(part, insElem) {
  let img = document.createElement("img");
  img.classList.add("body__part");
  img.classList.add("body__" + part);
  img.src = ''
  insElem.append(img);
}
