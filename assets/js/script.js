function updateTimes() {
  document.getElementById("currentDay").innerText = moment().format("dddd, MMMM do");
  const table = document.getElementById("table-body");

  for (let i = 0; i < table.children.length; i++) {
    const row = table.children[i].children[1];
    const rowHour = table.children[i].children[0].dataset.time;
    const currentHour = 10;
    // const currentHour = moment().format("H");
    if (rowHour < currentHour) {
      row.classList.add("past");
      row.classList.remove("future");
      row.classList.remove("present");
    }
    if (rowHour == currentHour) {
      row.classList.remove("past");
      row.classList.remove("future");
      row.classList.add("present");
    }
    if (parseInt(rowHour) > currentHour) {
      row.classList.remove("past");
      row.classList.remove("present");
      row.classList.add("future");
    }
  }
}
updateTimes();
setInterval(updateTimes, 600000);
