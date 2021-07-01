function displayTime() {
  let element = document.getElementById("clock");
  let now = Date();
  element.innerHTML = now;
  setTimeout(displayTime, 1000);
}

async function showExchangeRate () {
  try {
    let data = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');// updated once of day
    let arrCurr = await data.json();
    let table = document.querySelector('table tbody');
    table.innerHTML = "";
    arrCurr.forEach(e => table.innerHTML += '<tr><td>' + e.Cur_Name + '</td><td>' + e.Cur_Scale + " " + e.Cur_Abbreviation + '</td><td>' + e.Cur_OfficialRate +  '</td></tr>');
    setTimeout(showExchangeRate, 3600000); // updated every hour
    displayTime();
  } catch (err) {
    alert("Ошибка чтения файла", err.message); 
  }
  };
  
  window.onload = showExchangeRate;