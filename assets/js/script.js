function updateTimes() {
  document.getElementById("currentDay").innerText = moment().format("dddd, MMMM do");
  const table = document.getElementById("table-body");

  for (let i = 0; i < table.children.length; i++) {
    const row = table.children[i].children[1];
    const rowHour = table.children[i].children[0].dataset.time;
    const currentHour = moment().format("H");
    if (rowHour < currentHour) row.setAttribute("class", "col-9 past");
    if (rowHour == currentHour) row.setAttribute("class", "col-9 present");
    if (parseInt(rowHour) > currentHour) row.setAttribute("class", "col-9 future");
  }
}

function updateTasks() {
  const table = document.getElementById("table-body");
  for (let i = 0; i < table.children.length; i++) {
    const row = table.children[i];
    hour = row.children[0].dataset.time;
    row.children[1].children[0].value = localStorage.getItem(hour);
  }
}

function init() {
  updateTimes();
  setInterval(updateTimes, 600000);
  updateTasks();
  let buttons = document.getElementsByClassName("saveBtn");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", e => {
      e.preventDefault();
      let hour = button.parentElement.parentElement.children[0].dataset.time;
      let newValue = button.parentElement.parentElement.children[1].children[0].value;
      localStorage.setItem(hour, newValue);
    });
  }
  document.getElementById("clear-all-timeblocks").addEventListener("click", e => {
    e.preventDefault();
    localStorage.clear();
    location.reload();
  });
}

init();
