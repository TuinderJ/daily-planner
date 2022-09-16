function updateTimes() {
  $("#currentDay")[0].innerText = moment().format("dddd, MMMM do");
  const table = document.getElementById("#table-body");

  for (let i = 0; i < table.children.length; i++) {
    const row = table.children[i].children[1];
    const rowHour = table.children[i].children[0].dataset.time;
    const currentHour = moment().format("H");
    console.log(rowHour);
    console.log(currentHour);
    if (rowHour == 12) {
      row.classList.add("present");
      // row.classList.add("present");
    }
    if (rowHour > currentHour) {
      row.classList.add("future");
    }
  }
}
updateTimes();
setInterval(updateTimes, 600000);
