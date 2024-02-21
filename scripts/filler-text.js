/* This function receives two arguments:
  - The id of the paragraph element to which the filler text will be added.
  - The id of the button that will reset the paragraph to its original content.
  It then adds an event listener to the button that, when clicked, adds the 
  filler text to the paragraph.
*/
export function addFillerText(pElemId, btnAddId) {
  // Select the paragraph with id 'pElemId'.
  let pElem = document.getElementById(pElemId);
  // console.log(pElem)

  const filler = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Fugiat dolor quam corrupti autem temporibus veniam fugit impedit facere nisi!
  Temporibus consectetur assumenda alias aliquam ipsam ex doloremque ipsa ad 
  saepe? Reprehenderit consequatur officiis harum amet, ratione maiores nemo, 
  aliquid sequi doloremque eius voluptates facilis! `;

  // Select the button  with id 'btnAddId'.
  const btn = document.getElementById(btnAddId);

  // Attach an event listener to the button.
  btn.addEventListener("click", function () {
    pElem.innerText += filler;
  });
}

/* This function receives two arguments:
  - The id of the paragraph element to which the filler text will be added.
  - The id of the button that will reset the paragraph to its original content.
  It then adds an event listener to the button that, when clicked, resets the 
  filler text in the paragraph.
*/
export function resetFillerText(pElemId, btnResetId) {
  // Select the paragraph with id 'sticky-footer'.
  let pElem = document.getElementById(pElemId);
  // console.log(pElem)

  // Store a copy of the original content of the paragraph.
  const pElemInnerText = pElem.innerText;

  // Select the button
  const btnRemove = document.getElementById(btnResetId);

  btnRemove.addEventListener("click", () => pElem.innerText = pElemInnerText);
}
