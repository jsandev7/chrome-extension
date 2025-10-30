// variables
let myLeads = []

const inputEl = document.querySelector("#input-el");

const ulEl = document.querySelector("#ul-el");

// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

const saveBtn = document.querySelector("#input-btn");

saveBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
}
);

function renderLeads() {
  listItem = ""
  myLeads.forEach(element => {
    listItem += `<li>${element}</li>`
  });
  ulEl.setHTMLUnsafe(listItem)
}
