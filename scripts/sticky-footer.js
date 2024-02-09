// Select the paragraph with id 'sticky-footer'.
let pElem = document.getElementById('filler-text')
// console.log(pElem)

// Get the content of the paragraph.
const pElemInnerText = pElem.innerText

// Log the content to the console.
console.log(pElemInnerText)

const filler = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor quam corrupti autem temporibus veniam fugit impedit facere nisi! Temporibus consectetur assumenda alias aliquam ipsam ex doloremque ipsa ad saepe? Reprehenderit consequatur officiis harum amet, ratione maiores nemo, aliquid sequi doloremque eius voluptates facilis! Quam blanditiis corrupti, tempore autem voluptatem quidem, ut, totam itaque atque nesciunt nulla commodi asperiores doloribus.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor quam corrupti autem temporibus veniam fugit impedit facere nisi! Temporibus consectetur assumenda alias aliquam ipsam ex doloremque ipsa ad saepe? Reprehenderit consequatur officiis harum amet, ratione maiores nemo, aliquid sequi doloremque eius voluptates facilis! Quam blanditiis corrupti, tempore autem voluptatem quidem, ut, totam itaque atque nesciunt nulla commodi asperiores doloribus?.`

// Select the button
const btn = document.getElementById('btn-add-filler-text')
const btnRemove = document.getElementById('btn-remove-filler-text')
// // console.log(btn)

// Attach an event listener to the button.
btn.addEventListener('click', () => {
  // pElemInnerText += filler
  pElem.innerText += filler
})

btnRemove.addEventListener('click', () => {
  pElem.innerText = pElemInnerText
})