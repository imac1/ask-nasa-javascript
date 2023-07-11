const dailyHtml = `<li class="flex flex-row gap-2 group transition-all duration-300">
		<img src="${apodObj.url}" alt="" id="img" class="w-64 h-64 rounded-md shadow-lg ">
		<article class="hidden group-hover:block  ">
		  <h1 class="font-bold text-3xl" id="title">${apodObj.title}</h1>
		  <div class="flex flex-row gap-3">
			<h2 class="text-xl" id="auth">${apodObj.copyright}</h2>
			<h2 class="text-xl" id="date">${apodObj.date}</h2>
		  </div>
		  <div class="content" id="content">${apodObj.explanation}</div>
		</article>
	  </li>`;

      apodObjArray.forEach((apodObj) => {
        const dailyHtml = `<li class="flex flex-row gap-2 group transition-all duration-300">
          <img src="${apodObj.url}" alt="" id="img" class="w-64 h-64 rounded-md shadow-lg ">
          <article class="hidden group-hover:block  ">
            <h1 class="font-bold text-3xl" id="title">${apodObj.title}</h1>
            <div class="flex flex-row gap-3">
              <h2 class="text-xl" id="auth">${apodObj.copyright}</h2>
              <h2 class="text-xl" id="date">${apodObj.date}</h2>
            </div>
            <div class="content" id="content">${apodObj.explanation}</div>
          </article>
        </li>`;
        list.insertAdjacentHTML('afterbegin', dailyHtml);
      });