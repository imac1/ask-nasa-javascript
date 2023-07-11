function getAstroData() {
	const apiKey = "LaOI5HBMpR8b96VO6UGGRek0TxzHNxtia1yff2bi";
	// console.log(apiKey);
	url =
		"https://api.nasa.gov/planetary/apod?api_key=LaOI5HBMpR8b96VO6UGGRek0TxzHNxtia1yff2bi";
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			let apodData = data;
		
			writeToday(apodData);
			return apodData;
		})
		.catch(function (error) {
			console.log(error);
		});
}




function getStartDate() {
	const start_date = document.getElementById("start_date");

	start_date.addEventListener("change", () => {
		console.log(start_date.value);
		return start_date.value;
	});
}

function getEndDate() {
	const end_date = document.getElementById("end_date");

	end_date.addEventListener("change", () => {
		console.log(end_date.value);
		return end_date.value;
	});
}

function getCurrentDate() { 
	const date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();
	let currentDate = `${year}-${'0'+month}-${day}`;
	console.log(currentDate);
	return currentDate;


}

function writeToday(apodObj) {
	if (apodObj) {
		const list = document.getElementById('list');
		const dailyHtml = ` <li class="flex flex-row gap-2 group transition-all duration-300">
		<img src="${apodObj.url}" alt="" id="img" class="w-64 h-64 rounded-md shadow-lg ">
		<article class="hidden group-hover:block  ">
			<h1 class="font-bold text-3xl" id="title">${apodObj.title}</h1>
			<div class="flex flex-row gap-3">
				<h2 class="text-xl" id="auth">${apodObj.copyright}</h2>
				<h2 class="text-xl" id="date">${apodObj.date}</h2>
			</div>
			<div class="content" id="content">${apodObj.explanation}</div>

		</article>
	</li>`
	 return list.insertAdjacentHTML('afterbegin', dailyHtml)
	} else {
		return `please, check your API key validity`
	}

}

function writeAllDays (apodObj, start_date, end_date) {


}

function main() {
	getCurrentDate();
	getAstroData();
	getStartDate();
	getEndDate();
	writeToday();
}
main();
