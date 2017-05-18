var weather_url = "http://api.openweathermap.org/data/2.5/weather?zip=33486,us&appid=";
var weather_key = "4469f2c9ca55b23bbff54608bd5b498e";

var news_url = "https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=";
var news_key = "a0c3e24a619340d681fde23c21b15ab9";

var stock_url = "http://finance.yahoo.com/d/quotes.csv?s=MSFT+AAPL+GOOG+AMZN&f=snol1p2";
var stock_query = ["s", "n", "o", "l1", "p2"];
var stock_file = "http://www.chrisbcarl.com/dev/test/basic_rest/assets/stocks.txt";

$(document).ready(function () {
    var location = window.location.href;
    var directoryPath = location.substring(0, location.lastIndexOf("/")+1);
    AJAX("time", directoryPath + '/php/time.php');
    AJAX("weather", weather_url + weather_key);
    AJAX("news", news_url + news_key);
    AJAX("stocks", directoryPath + '/php/yahoo_finance.php');
    AJAX("stocks", directoryPath + '/php/yahoo_finance.php');
    // $.post(directoryPath + '/php/yahoo_finance.php',
    //         {
    //           'blah': 'blah blah',
    //           'userid': '12345'
    //         }, function(result) {
    //             alert(result);
    //         });
    //0.2 sec interval
    setInterval(function () {
        AJAX("time", directoryPath + '/php/time.php');
    }, 1 * 1000);

    //15 second interval
    setInterval(function () {
        AJAX("stocks", directoryPath + '/php/yahoo_finance.php');
    }, 15 * 1000);

    //15-minute interval
    setInterval(function () {
        AJAX("weather", weather_url + weather_key);
    }, 15 * 60 * 1000);

    //1.5-hr interval
    setInterval(function () {
        AJAX("news", news_url + news_key);
    }, 1.5 * 60 * 60 * 1000);

    //3-hr interval
    setInterval(function () {
        AJAX("events", "");
    }, 3 * 60 * 60 * 1000);



    function AJAX(dom, url)
    {
        // AJAX in the data file
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'text',
            success: function(data) {
                console.log("We connected to the server at " + url + ", no errors.");
                PARSE_JSON(dom, data);
            },
            fail: function(data) {
                console.log("We connected to the server " + url + ", but it returned an error.");
            }
        });
    }

    function PARSE_JSON(dom_id, data) {
        var data = JSON.parse(data);

        if (dom_id == "time") {
            $("#hour").html(data.hour);
            $("#minute").html(data.minute);
            $("#second").html(data.second + " " + data.half);
            $("#month").html(data.month);
            $("#date").html(data.date + data.suffix);
            $("#year").html(data.year);
        }
        else if (dom_id == "weather") {
            $("#weather_main").html(data.weather[0].main);
            $("#weather_description").html(data.weather[0].description);
            var celcius = parseFloat(data.main.temp) - 273;
            $("#weather_temp").html(celcius.toFixed(2) + "&#x2103;");
            $("#weather_humidity").html(data.main.humidity + "% humidity");
            $("#weather_pressure").html(data.main.pressure + " Pa pressure");
        }
        else if (dom_id == "news") {
            var img_tag = "<img class='img-responsive' style='float: left; margin: 0px 10px 10px 0px;' src=\"" + directoryPath + 'assets/ap_logo.png' + "\" width=\"15px\" height=\"15px\"/>";
            $("#article_1").html("<th>" + img_tag + data.articles[0].title + "</tr>");
            $("#article_2").html("<th>" + img_tag + data.articles[1].title + "</tr>");
            $("#article_3").html("<th>" + img_tag + data.articles[2].title + "</tr>");
            $("#article_4").html("<th>" + img_tag + data.articles[3].title + "</tr>");
        }
        else if (dom_id == "events") {

        }
        else if (dom_id == "stocks") {
            $("#stock_1").html  ("<th>"  + data.stocks[0].s  + "</th><th>" + data.stocks[0].n  + "</th><th>$" + data.stocks[0].o + "</th>");
            $("#stock_1").append("<th>$" + data.stocks[0].l1 + "</th><th>" + data.stocks[0].p2 + "</th>");
            $("#stock_2").html  ("<th>"  + data.stocks[1].s  + "</th><th>" + data.stocks[1].n  + "</th><th>$" + data.stocks[1].o + "</th>");
            $("#stock_2").append("<th>$" + data.stocks[1].l1 + "</th><th>" + data.stocks[1].p2 + "</th>");
            $("#stock_3").html  ("<th>"  + data.stocks[2].s  + "</th><th>" + data.stocks[2].n  + "</th><th>$" + data.stocks[2].o + "</th>");
            $("#stock_3").append("<th>$" + data.stocks[2].l1 + "</th><th>" + data.stocks[2].p2 + "</th>");
            $("#stock_4").html  ("<th>"  + data.stocks[3].s  + "</th><th>" + data.stocks[3].n  + "</th><th>$" + data.stocks[3].o + "</th>");
            $("#stock_4").append("<th>$" + data.stocks[3].l1 + "</th><th>" + data.stocks[3].p2 + "</th>");
        }

        console.log(data);
    }

    //http://regexr.com/
    //http://stackoverflow.com/questions/6933096/jquery-creating-two-dimensional-array
    function PARSE_CSV(data, query) {
        var rows = String(data).replace(/\"/g, '').split("\n");
        //rows.pop();

        var obj = {};
        obj.stocks = []

        for(var i = 0; i < rows.length; i++) {
            var value = rows[i].split(',');
            var obj2 = {};
            obj2.symbol = value[0];
            obj2.name = value[1];
            obj2.open = value[2];
            obj2.price = value[3];
            obj2.percent = value[4];
            obj.stocks.push(obj2);
        }
        return obj;
    }

    //http://stackoverflow.com/a/8043056
    function two_digit(n){
        return n > 9 ? "" + n: "0" + n;
    }

});











// DEPRACATED
function getTimeNewMethod()
{
    // For todays date;
    Date.prototype.today = function () {
      return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
    }

    // For the time now
    Date.prototype.timeNow = function () {
       return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    }

    var newDate = new Date();
    var date = "" + newDate.today();
    var time = "" + newDate.timeNow();

    var datetime = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();

    renderHTML("time", datetime);
}





function AJAX_get(dom_id, get_url)
{
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', get_url);
    ourRequest.onload = function() {
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        console.log("We connected to the server at " + get_url + ", no errors.");
        var data = JSON.parse(ourRequest.responseText);
        JSON_to_HTML(dom_id, data)
      } else {
        console.log("We connected to the server " + get_url + ", but it returned an error.");
      }

    };

    ourRequest.onerror = function() {
      console.log("Connection error");
    };

    ourRequest.send();
}

function JSON_to_HTML(dom_id, data) {
    var string = "";

    if (dom_id == "time") {
        for (var i = 0; i < data.length; i++) {
          string += "<p>"+ data[i] + "</p>";
        }
    }
    else if (dom_id == "weather") {
        string += "<p id=weather_main>"+ "weather = " + data.weather[0].main + " - " + data.weather[0].description + "</p>\n";
        var celcius = parseFloat(data.main.temp) - 273;
        string += "<p id=weather_temp>"+ "temp = " + celcius + "</p>\n";
        string += "<p id=weather_humidity>"+ "humidity = " + data.main.humidity + "</p>\n";
        string += "<p id=weather_pressure>"+ "pressure = " + data.main.pressure + "</p>\n";
    } else if (dom_id == "news") {
          for (var i = 0; i < data.articles.length; i++) {
              string += "<p id=article" + i + ">" + "article " + i + " = " + data.articles[i].title + "</p>\n";
          }
    } else if (dom_id == "calendar") {

    }

    //dom_element.insertAdjacentHTML('beforeend', htmlString);
    var element = document.getElementById(dom_id);
    element.innerHTML = string;

    console.log(string);
}


function TIME()
{
    var currentdate = new Date();
    // // For todays date;
    // Date.prototype.today = function () {
    //   return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
    // }
    //
    // // For the time now
    // Date.prototype.timeNow = function () {
    //    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    // }

    var hours = two_digit(currentdate.getHours());
        if (hours / 12 < 1) var half = "AM";
        else var half = "PM";
    var minutes = two_digit(currentdate.getMinutes());
    var seconds = two_digit(currentdate.getSeconds());
    var month = (currentdate.getMonth()+1);
    switch (month) {
        case 1: month = "January"; break;
        case 2: month = "February"; break;
        case 3: month = "March"; break;
        case 4: month = "April"; break;
        case 5: month = "May"; break;
        case 6: month = "June"; break;
        case 7: month = "July"; break;
        case 8: month = "August"; break;
        case 9: month = "September"; break;
        case 10: month = "Octover"; break;
        case 11: month = "November"; break;
        case 12: month = "December"; break;
        default:
    }
    var date = currentdate.getDate();
    var year = currentdate.getFullYear();

    var timedate = [hours, minutes, seconds, month, date, year];
    PARSE_DATA("time", timedate);
}
