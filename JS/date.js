const todatyDate = document.querySelector("#date");
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


function getDate() {
	const date = new Date;
	const year = String(date.getFullYear())
	const month = String(date.getMonth()+1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
  const dayOfTheWeek = String(week[date.getDay()]);
	todatyDate.innerText = `${year} / ${month} / ${day} (${dayOfTheWeek})`;
}

getDate();
