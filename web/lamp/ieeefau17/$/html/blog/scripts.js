$(document).ready(function(){
    console.log("got here");
    $("#ieeelogo").click(function(){
        console.log("ieeelogo" + " clicked");
    });

    $("#ieeefau").click(function(){
        console.log("ieeefau" + " clicked");
    });



    //lndex
    console.log("started the song and dance");
    forcecontent("html/default.html");
    console.log("forced content through");

    //about
    loadcontent("#whoweare", "html/about/whoweare.html");
    loadcontent("#leadership", "html/about/leadership.html");
    loadcontent("#members", "html/about/members.html");

    //blog
    loadcontent("#toc", "html/blog/toc.html");
    loadcontent("#categories", "html/blog/categories.html");
    loadcontent("#authors", "html/blog/authors.html");

    //blog posts
    loadblog("#aprilvolunteer", "html/blog/posts/aprilvolunteer.html", "html/blog/authors/raldirisr.html");
    loadblog("#ilead", "html/blog/posts/ilead.html", "html/blog/authors/moralese.html");
    loadblog("#isense", "html/blog/posts/isense.html", "html/blog/authors/raldirisr.html");
    loadblog("#roboticsminutes", "html/blog/posts/roboticsminutes.html", "html/blog/authors/garciaw.html");
    loadblog("#whyieee", "html/blog/posts/whyieee.html", "html/blog/authors/phillips.html");

    //events
    loadcontent("#eweek", "html/events/eweek.html");
    loadcontent("#bluemix", "html/events/bluemix.html");
    loadcontent("#southeastcon", "html/events/southeastcon.html");
    loadcontent("#meeting", "html/events/meeting.html");
});

function toggle_bg_off() { $("html").removeClass("full").addClass("full-no-image"); }
function toggle_bg_on() { $("html").removeClass("full-no-image").addClass("full"); }
function loadhome(elem)
{
    $(elem).click(function(){
        console.log(elem + " clicked");
        $("#content").hide();
        //toggle_bg_on();
    });
}
function loadcontent(elem, pagedir)
{
    $(elem).click(function(){
        console.log(elem + " clicked");
        $("#content").load(pagedir);
        $("#content").show();
        //toggle_bg_off();
        $(".dropdown-toggle").dropdown("toggle");
    });
}
function forcecontent(pagedir)
{
    console.log("force loaded content from: " + pagedir);
    $("#content").load(pagedir);
    $("#content").show();
    //toggle_bg_off();
}
function loadblog(elem, pagedir, authordir)
{
    console.log("loading blog");
    $(elem).click(function(){
        console.log(elem + " clicked");
        $("#content").load(pagedir);
        $("#content").show();
        $("#author").load(authordir);
        //toggle_bg_off();
        $(".dropdown-toggle").dropdown("toggle");
    });
}
