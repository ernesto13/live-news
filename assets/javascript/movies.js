  function movies() {

    //     var API = 'LjggRb0bAnPtUrWRiDSyAL0ZmFxXJ9uu';

    $.ajax({
      url: 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=LjggRb0bAnPtUrWRiDSyAL0ZmFxXJ9uu',
      method: "GET",
      dataType: 'json'
    }).done(function(result) {
      console.log('reviews::: ' + result);

      //       let newsResponse = response.articles;

      //       for (let i = 0; i < newsResponse.length; i++) {


      //         console.log('my data  Name: ' + response.articles[i].source.name);

      //         console.log('my datataddd  author is:   ' + response.articles[i].author);
      //         console.log('Title: ' + response.articles[i].title);

      //         //   for images to load
      //         let showImage = $("<img>");
      //         let staticSource = newsResponse[i].urlToImage;
      //         showImage.addClass('card-img-top mt-3 mb-3');
      //         showImage.attr('src', staticSource);
      //         showImage.addClass('newsImage');


      //         //  for links to be read
      //         let newsLinkDiv = $('<div>');
      //         let newsLink = $("<a>");

      //         newsLink.attr("href", newsResponse[i].url);
      //         newsLink.attr("title");
      //         newsLink.attr('target', '_blank')
      //         newsLink.html('Read More ')
      //         newsLink.addClass('btn btn-primary btn-block mt-3 mb-3');
      //         newsLink.addClass("link");

      //         // for title display
      //         let titleDisplay = newsResponse[i].title;
      //         let title = $("<h6 class='card-title mb-2'>").html(titleDisplay);

      //         // for description
      //         let description = newsResponse[i].description;
      //         let cardDescription = $('<div class="describe lead mb-2">').html(description);

      //         console.log('Description: ' + cardDescription);

      //         //       published date

      //         let datePublished = newsResponse[i].publishedAt;
      //         console.log('Publisssheeed: ' + newsResponse[i].publishedAt);
      //         let publishedDate = $('<h5 class="lead mb-2">').html(datePublished);

      //         //       for source name, usually website
      //         let namedSource = newsResponse[i].source.name;
      //         let sourceNamed = $('<p class="lead mb-2">').html('Source: ' + namedSource)

      //         // div for loop show in html

      //         let newsDiv = $("<div class='news-card card m-3 col-sm-12 col-md-6 col-lg-4 mx-auto'>");
      //         let footerDiv = $("<div class='card-footer'>");


      //         newsDiv.prepend(cardDescription)
      //         newsDiv.prepend(title);
      //         newsDiv.prepend(sourceNamed)
      //         newsDiv.prepend(publishedDate)


      //         newsDiv.prepend(showImage);
      //         //         newsDiv.append(newsLink);
      //         newsLinkDiv.append(newsLink)
      //         newsDiv.append(newsLinkDiv)
      //         //     newsDiv.append(modalButton)
      //         $(".news-div").append(newsDiv);

      //       }
      //     end of for loop

    }).fail(function(err) {
      throw err;
    });
    //   end of top headlines request

  }
  movies();