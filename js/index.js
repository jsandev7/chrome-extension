// variables
let myLeads = []

const inputEl = document.querySelector("#input-el");

const ulEl = document.querySelector("#ul-el");

// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

const saveBtn = document.querySelector("#input-btn");

saveBtn.addEventListener("click", () => {
  if(inputEl.value.length === 0) {
    alert("Warning!\nThe input is empty!")
  } else {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
  }
}
);

function renderLeads() {
  listItem = ""
  myLeads.forEach(element => {
    listItem += `<li>
                      <a 
                        href="${element}" 
                        target="_blank">
                          ${element}
                      </a>
                </li>`
  });
  ulEl.setHTMLUnsafe(listItem)
}
