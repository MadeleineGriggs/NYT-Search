
        $("#search").on("click", function(event){
            $(".articles-here").empty();
            event.preventDefault();
            var searchString = $("input[name=search-Term]").val();
            var startDate = $("input[name=start-year]").val();
            var endDate = $("input[name=end-year]").val();
            var recordCount = $("input[name=number-of-records]").val();
            console.log(searchString + startDate + endDate + recordCount);
            doIt(searchString, startDate, endDate, recordCount)
        });


    var var1;
    var var2;

    function doIt(a, b, c, d){
    $.ajax({
      url : 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      method: 'GET',
      data : {"api-key" : "UfytFzKYLYX0qYtegUyshF4EJzvtK0jW", "q" : a, "begin_date" : b + '0101' , "end_date" : c + '1231'},
    }).then(function(response){
        // console.log(response);
        console.log(response.response.docs);
        (response.response.docs).forEach(entry => {
            var title = $("<a>").attr('href', entry.web_url);
            title.text(entry.headline.main);
            $(".articles-here").append(title);
            $(".articles-here").append("<br>")
            console.log(entry.headline.main);
        // let key = entry[0];
        // let value = entry[1];
        // console.log(key + " : " + value);
    })})};