$(document).ready(() => {

  
//   moment js
//   let dateToday =  moment().format("MMMM Do YYYY, h:mm:ss a");
//   console.log('date' + dateToday);
  
  
  //  side bar toggle switch

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  
  function topHeadlines(){

  var API = '7ccecb2a8e6547c3b9e5242259eeda0e';

  $.ajax({
    url: 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=' + API,
    method: "GET",
    dataType: 'json'
  }).then(function(response) {

    let newsResponse = response.articles;

    for (let i = 0; i < newsResponse.length; i++) {


      console.log('my data  Name: ' + response.articles[i].source.name);

      console.log('my datataddd  author is:   ' + response.articles[i].author);
      console.log('Title: ' + response.articles[i].title);

//       console.log('my Array : ' + newsResponse[i]);


      //   for images to load
      let showImage = $("<img>");
      let staticSource = newsResponse[i].urlToImage;
      showImage.addClass('card-img-top mt-3 mb-3');
      showImage.attr('src', staticSource);
      showImage.addClass('newsImage');


      //  for links to be read
      let newsLink = $("<a>");
     
      newsLink.attr("href", newsResponse[i].url);
      newsLink.attr("title");
      newsLink.attr('target', '_blank')
      newsLink.html('Read More ')
      newsLink.addClass('btn btn-primary btn-block mt-3 mb-3');
      newsLink.addClass("link");

      // for title display
      let titleDisplay = newsResponse[i].title;
      let title = $("<h6 class='card-title mb-2'>").html(titleDisplay);

      // for description
      let description = newsResponse[i].description;
      let cardDescription = $('<p class="describe lead mb-2">').html(description)

      console.log('Description: ' + cardDescription);

      //       published date

      let datePublished = newsResponse[i].publishedAt;
      console.log('Publisssheeed: ' + newsResponse[i].publishedAt);
      let publishedDate = $('<h5 class="lead mb-2">').html(datePublished);

      //       for source name, usually website
      let namedSource = newsResponse[i].source.name;
      let sourceNamed = $('<p class="lead mb-2">').html('Source: ' + namedSource)

      // div for loop show in html

      let newsDiv = $("<div class='news-card card m-3 col-sm-12 col-md-6 col-lg-4 mx-auto'>");
      let footerDiv = $("<div class='card-footer'>");




      newsDiv.prepend(cardDescription)
      newsDiv.prepend(title);
      newsDiv.prepend(sourceNamed)
            newsDiv.prepend(publishedDate)


      newsDiv.prepend(showImage);
      newsDiv.append(newsLink);
      //     newsDiv.append(modalButton)
      $(".news-div").append(newsDiv);
      //https://newsapi.org/v2/top-headlines?country=us&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e

      //       for wall street and nytimes 
      //       https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e

      //       for all about bitcoin
      //       https://newsapi.org/v2/everything?q=bitcoin&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e
    }
//     end of for loop

  });
//   end of top headlines request
  
}
  topHeadlines();
  
  
////////////////////////////////////   start of new york times and ws journal api here
  
  
  function wsNyTimes() {
    

  $.ajax({
    url: 'https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e',
    method: "GET",
    dataType: 'json'
  }).then(function(response) {

    let newsResponse = response.articles;

    for (let j = 0; j < newsResponse.length; j++) {


      console.log('my data  Name: ' + response.articles[j].source.name);

      console.log('my datataddd  author is:   ' + response.articles[j].author);
      console.log('Title: ' + response.articles[j].title);

      console.log('my Array : ' + newsResponse[j]);


      //   for images to load
      let showImage = $("<img>");
      let staticSource = newsResponse[j].urlToImage;
      showImage.addClass('card-img-top mt-3 mb-3');
      showImage.attr('src', staticSource);
      showImage.addClass('newsImage');


      //  for links to be read
      let newsLink = $("<a>");
     
      newsLink.attr("href", newsResponse[j].url);
      newsLink.attr("title");
      newsLink.attr('target', '_blank')
      newsLink.html('Read More ')
      newsLink.addClass('btn btn-primary btn-block mt-3 mb-3');
      newsLink.addClass("link");

      // for title display
      let titleDisplay = newsResponse[j].title;
      let title = $("<h6 class='card-title mb-2'>").html(titleDisplay);

      // for description
      let description = newsResponse[j].description;
      let cardDescription = $('<p class="describe lead mb-2">').html(description)

      console.log('Description: ' + cardDescription);

      //       published date

      let datePublished = newsResponse[j].publishedAt;
      console.log('Publisssheeed: ' + newsResponse[j].publishedAt);
      let publishedDate = $('<h5 class="lead mb-2">').html(datePublished);

      //       for source name, usually website
      let namedSource = newsResponse[j].source.name;
      let sourceNamed = $('<p class="lead mb-2">').html('Source: ' + namedSource)

      // div for loop show in html

      let newsDiv = $("<div class='news-card card m-3 col-sm-12 col-md-6 col-lg-4 mx-auto'>");
      let footerDiv = $("<div class='card-footer'>");




      newsDiv.prepend(cardDescription)
      newsDiv.prepend(title);
      newsDiv.prepend(sourceNamed)
      //       newsDiv.prepend(publishedDate)


      newsDiv.prepend(showImage);
      newsDiv.append(newsLink);
      //     newsDiv.append(modalButton)
      $(".news-div").append(newsDiv);
      //https://newsapi.org/v2/top-headlines?country=us&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e

      //       for wall street and nytimes 
      //       https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e

      //       for all about bitcoin
      //       https://newsapi.org/v2/everything?q=bitcoin&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e
    }
//     end of for loop

  });
    
    
    
  }
//   end of ws and ny times function
  
  let wsNyTime = $('#wsNy');
  
  wsNyTime.on('click', function(){
    $('.news-div').empty()
    
    $('.top-headline').html("<h4> New York Times");
    wsNyTimes();
  })
  

  
/////////// news for bitcoin /////////////////////////////
  
  
  function bitCoin() {
    
    
    $.ajax({
    url: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e',
    method: "GET",
    dataType: 'json'
  }).then(function(response) {

    let newsResponse = response.articles;

    for (let k = 0; k < newsResponse.length; k++) {


      console.log('my data  Name: ' + response.articles[k].source.name);

      console.log('my datataddd  author is:   ' + response.articles[k].author);
      console.log('Title: ' + response.articles[k].title);

      console.log('my Array : ' + newsResponse[k]);


      //   for images to load
      let showImage = $("<img>");
      let staticSource = newsResponse[k].urlToImage;
      showImage.addClass('card-img-top mt-3 mb-3');
      showImage.attr('src', staticSource);
      showImage.addClass('newsImage');


      //  for links to be read
      let newsLink = $("<a>");
     
      newsLink.attr("href", newsResponse[k].url);
      newsLink.attr("title");
      newsLink.attr('target', '_blank')
      newsLink.html('Read More ')
      newsLink.addClass('btn btn-primary btn-block mt-3 mb-3');
      newsLink.addClass("link");

      // for title display
      let titleDisplay = newsResponse[k].title;
      let title = $("<h6 class='card-title mb-2'>").html(titleDisplay);

      // for description
      let description = newsResponse[k].description;
      let cardDescription = $('<p class="describe lead mb-2">').html(description)

      console.log('Description: ' + cardDescription);

      //       published date

      let datePublished = newsResponse[k].publishedAt;
      console.log('Publisssheeed: ' + newsResponse[k].publishedAt);
      let publishedDate = $('<h5 class="lead mb-2">').html(datePublished);

      //       for source name, usually website
      let namedSource = newsResponse[k].source.name;
      let sourceNamed = $('<p class="lead mb-2">').html('Source: ' + namedSource)

      // div for loop show in html

      let newsDiv = $("<div class='news-card card m-3 col-sm-12 col-md-6 col-lg-4 mx-auto'>");
      let footerDiv = $("<div class='card-footer'>");




      newsDiv.prepend(cardDescription)
      newsDiv.prepend(title);
      newsDiv.prepend(sourceNamed)
      //       newsDiv.prepend(publishedDate)


      newsDiv.prepend(showImage);
      newsDiv.append(newsLink);
      //     newsDiv.append(modalButton)
      $(".news-div").append(newsDiv);
      //https://newsapi.org/v2/top-headlines?country=us&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e

      //       for wall street and nytimes 
      //       https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e

      //       for all about bitcoin
      //       https://newsapi.org/v2/everything?q=bitcoin&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e
    }
//     end of for loop

  });
    
   
  }
  
    let bitcoin = $('#bitcoin');
  
  bitcoin.on('click', function(){
    $('.news-div').empty()
    
    $('.top-headline').html("<h4> Bitcoin");
    bitCoin();
  })
  
  
//   ///////////////////////for search news 
  
  
  function searchNews(newsSearch) {
    
    
    $.ajax({
    url: 'https://newsapi.org/v2/everything?q=' + newsSearch + '&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e',
    method: "GET",
    dataType: 'json'
  }).then(function(response) {

    let newsResponse = response.articles;

    for (let l = 0; l < newsResponse.length; l++) {


      console.log('my data  Name: ' + response.articles[l].source.name);

      console.log('my datataddd  author is:   ' + response.articles[l].author);
      console.log('Title: ' + response.articles[l].title);

      console.log('my Array : ' + newsResponse[l]);


      //   for images to load
      let showImage = $("<img>");
      let staticSource = newsResponse[l].urlToImage;
      showImage.addClass('card-img-top mt-3 mb-3');
      showImage.attr('src', staticSource);
      showImage.addClass('newsImage');


      //  for links to be read
      let newsLink = $("<a>");
     
      newsLink.attr("href", newsResponse[l].url);
      newsLink.attr("title");
      newsLink.attr('target', '_blank')
      newsLink.html('Read More ')
      newsLink.addClass('btn btn-primary btn-block mt-3 mb-3');
      newsLink.addClass("link");

      // for title display
      let titleDisplay = newsResponse[l].title;
      let title = $("<h6 class='card-title mb-2'>").html(titleDisplay);

      // for description
      let description = newsResponse[l].description;
      let cardDescription = $('<p class="describe lead mb-2">').html(description)

      console.log('Description: ' + cardDescription);

      //       published date

      let datePublished = newsResponse[l].publishedAt;
      console.log('Publisssheeed: ' + newsResponse[k].publishedAt);
      let publishedDate = $('<h5 class="lead mb-2">').html(datePublished);

      //       for source name, usually website
      let namedSource = newsResponse[l].source.name;
      let sourceNamed = $('<p class="lead mb-2">').html('Source: ' + namedSource)

      // div for loop show in html

      let newsDiv = $("<div class='news-card card m-3 col-sm-12 col-md-6 col-lg-4 mx-auto'>");
      let footerDiv = $("<div class='card-footer'>");




      newsDiv.prepend(cardDescription)
      newsDiv.prepend(title);
      newsDiv.prepend(sourceNamed)
      //       newsDiv.prepend(publishedDate)


      newsDiv.prepend(showImage);
      newsDiv.append(newsLink);
      //     newsDiv.append(modalButton)
      $(".news-div").append(newsDiv);
      //https://newsapi.org/v2/top-headlines?country=us&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e

      //       for wall street and nytimes 
      //       https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e

      //       for all about bitcoin
      //       https://newsapi.org/v2/everything?q=bitcoin&apiKey=7ccecb2a8e6547c3b9e5242259eeda0e
    }
//     end of for loop

  });
    
    
    
    
    
  }
  
  
    let searchNewsArticles = $('#search-news');

  searchNewsArticles.on("click", function(e) {
    e.preventDefault();
    
    let searchYourNews = $("#search-news").val().trim();
//     let searchYourNumber = $('#number-giph').val().trim();
//     console.log(searchYourNumber);
    searchNews(searchYourNews);
//     $("#search-giph").val("");
//     $('#number-giph').val('');

  });
  
  
  

});