

// https://newsapi.org/docs/get-started
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=7ccecb2a8e6547c3b9e5242259eeda0e';
var req = new Request(url);
fetch(req)
    .then(function (response) {
        console.log(response.json());
    })

