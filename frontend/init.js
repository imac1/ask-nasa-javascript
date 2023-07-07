
const apiKey = 'LaOI5HBMpR8b96VO6UGGRek0TxzHNxtia1yff2bi';

// Use the apiKey in your code
console.log(apiKey);
url = 'https://api.nasa.gov/planetary/apod?api_key=LaOI5HBMpR8b96VO6UGGRek0TxzHNxtia1yff2bi'


  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

    console.log(authors.copyright);
    const img = document.getElementById('img');
    img.src = authors.url
    })
    .catch(function(error) {
      console.log(error);
    });



// function reload() {
//     document.location.reload();
//   }
  
//   setTimeout(reload, 4000);

