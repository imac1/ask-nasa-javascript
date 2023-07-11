const apiKey = "LaOI5HBMpR8b96VO6UGGRek0TxzHNxtia1yff2bi";


function fetchApodData(startDate, endDate) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayResults(data);
    })
    .catch(error => {
      console.error("Error fetching APOD data:", error);
    });
}


function displayResults(data) {
  const list = document.getElementById("list");
  list.innerHTML = ""; 

  if (data.length === 0) {
    const li = document.createElement("li");
    li.innerText = "No results found.";
    list.appendChild(li);
    return;
  }

  data.forEach(apod => {
    const li = document.createElement("li");
    li.innerHTML = `<li class="flex flex-row gap-2 group transition-all duration-300">
	<img src="${apod.url}" alt="" id="img" class="w-64 h-64 rounded-md shadow-lg ">
	<article class="hidden group-hover:block  ">
	  <h1 class="font-bold text-3xl" id="title">${apod.title}</h1>
	  <div class="flex flex-row gap-3">
		<h2 class="text-xl" id="auth">${apod.copyright}</h2>
		<h2 class="text-xl" id="date">${apod.date}</h2>
	  </div>
	  <div class="content" id="content">${apod.explanation}</div>
	</article>
  </li>`;
    list.appendChild(li);
  });
}


document.getElementById("start_date").addEventListener("change", function() {
  const startDate = this.value;
  const endDate = document.getElementById("end_date").value;

  fetchApodData(startDate, endDate);
});

document.getElementById("end_date").addEventListener("change", function() {
  const startDate = document.getElementById("start_date").value;
  const endDate = this.value;

  fetchApodData(startDate, endDate);
});


const today = new Date().toISOString().split("T")[0];
document.getElementById("start_date").value = today;
document.getElementById("end_date").value = today;

fetchApodData(today, today);
