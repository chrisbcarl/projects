$(document).ready(function(){
    console.log("got here");
    $("#ieeelogo").click(function(){
        console.log("ieeelogo clicked");
        loadhome();
    });

    $("#ieeefau").click(function(){
        console.log("ieeefau clicked");
    });

    app();

    //lndex
    console.log("started the song and dance");
    forcecontent("html/default.html", "html/header.html");
    console.log("forced content through");

});

function loadcontent(elem, pagedir){
    $(elem).click(function(){
        console.log(elem + " clicked");
        $("#header").hide();
        $("#content").load(pagedir);
        $("#content").show();
        //toggle_bg_off();
        $(".dropdown-toggle").dropdown("toggle");
        $(".dropdown-menu li a").removeClass("selected");
        $(elem).addClass("selected");
        if ($(elem).is("a")) {
            $(".navbar-collapse").collapse("hide");
        }
        $(".dropdown-toggle").blur()
    });
}


function app(){

        //about
        loadcontent("#whoweare", "html/about/whoweare.html");
        loadcontent("#leadership", "html/about/leadership.html");
        loadcontent("#members", "html/about/members.html");

        //blog
        loadcontent("#toc", "html/blog/toc.html");
        loadcontent("#categories", "html/blog/categories.html");
        loadcontent("#authors", "html/blog/authors.html");

        //blog posts
        $("#aprilvolunteer").click(function(){
            console.log("#aprilvolunteer" + " clicked");
            $("#header").hide();
            $("#content").load("html/blog/posts/aprilvolunteer.html");
            $("#content").show();
            $("#author_section").load("html/blog/authors/raldirisr.html");
            //toggle_bg_off();
            $(".dropdown-menu li a").removeClass("selected");
            $(elem).addClass("selected");
            if ($(elem).is("a")) {
                $(".navbar-collapse").collapse("hide");
            }
            $(".dropdown-toggle").blur()
        });

        //events
        loadcontent("#eweek", "html/events/eweek.html");
        loadcontent("#bluemix", "html/events/bluemix.html");
        loadcontent("#southeastcon", "html/events/southeastcon.html");
        loadcontent("#meeting", "html/events/meeting.html");
}

function toggle_bg_off() { $("html").removeClass("full").addClass("full-no-image"); }
function toggle_bg_on() { $("html").removeClass("full-no-image").addClass("full"); }

function loadhome(){
    console.log("we made it bois")
    $("#header").load("html/header.html");
    $("#header").show();
    $("#content").load("html/default.html");
    $("#content").show();
    $(".dropdown-menu li a").removeClass("selected");
}

function forcecontent(dir1, dir2){
    console.log("force loaded content from: " + dir1 + dir2);
    $("#header").load(dir2);
    $("#header").show();
    $("#content").load(dir1);
    $("#content").show();
    //toggle_bg_off();
}
