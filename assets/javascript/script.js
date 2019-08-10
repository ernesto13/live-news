$(document).ready(() => {
  
//   for side bar
  
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

  const API = '7ccecb2a8e6547c3b9e5242259eeda0e';

  $.ajax({
    url: 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=' + API,
    method: "GET",
    dataType: 'json'
  }).then(function(response) {
    //     console.log('News here: ' + response);


    let newsResponse = response.articles;

    for (let i = 0; i < newsResponse.length; i++) {

     
      console.log('my data  Name: ' + response.articles[i].source.name);

      console.log('my datataddd  author is:   ' + response.articles[i].author);
      console.log('Title: ' + response.articles[i].title);

      console.log('my Array : ' + newsResponse[i]);


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
      newsLink.html('Read More')
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

      let newsDiv = $("<div class='news-card card m-2 col-sm-12 col-md-6 col-lg-5 mx-auto'>");
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


  });
  //     end of for loop

 
});