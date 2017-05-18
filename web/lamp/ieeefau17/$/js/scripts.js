$(document).ready(function(){
    console.log("starting the whole thing");

    //lndex
    console.log("started the song and dance");
    forcecontent("html/default.html");
    console.log("forced content through");


    setInterval(app(), 3000);
});

function app()
{
    //index
    loadcontent("#ieeelogo", "html/default.html");
    loadcontent("#ieeefau", "html/default.html");

    //about
    loadcontent("#whoweare", "html/about/whoweare.html");
    loadcontent("#members", "html/about/members.html");

    //blog
    loadcontent("#toc", "html/blog/toc.html");

    //blog posts
    $("#aprilvolunteer").click(function(){
        console.log("#aprilvolunteer" + " clicked");
        $("#content").hide();
        $("#content").load("html/blog/posts/aprilvolunteer.html");
        $("#content").show();
        $("#author_section").load("html/blog/authors/raldirisr.html");
        //toggle_bg_off();
        $(".dropdown-toggle").dropdown("toggle");
    });
/*
    loadblog("#aprilvolunteer", "html/blog/posts/aprilvolunteer.html", "html/blog/authors/raldirisr.html");
    loadblog("#ilead", "html/blog/posts/ilead.html", "html/blog/authors/moralese.html");
    loadblog("#isense", "html/blog/posts/isense.html", "html/blog/authors/raldirisr.html");
    loadblog("#roboticsminutes", "html/blog/posts/roboticsminutes.html", "html/blog/authors/garciaw.html");
    loadblog("#whyieee", "html/blog/posts/whyieee.html", "html/blog/authors/phillips.html");
*/

    //events
    loadcontent("#eweek", "html/events/eweek.html");
    loadcontent("#bluemix", "html/events/bluemix.html");
    loadcontent("#southeastcon", "html/events/southeastcon.html");
    loadcontent("#meeting", "html/events/meeting.html");
}
function toggle_bg_off() { $("html").removeClass("full").addClass("full-no-image"); }
function toggle_bg_on() { $("html").removeClass("full-no-image").addClass("full"); }
function loadcontent(elem, pagedir)
{
    $(elem).click(function(){
        console.log(elem + " clicked");
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
        $("#author_section").load(authordir);
        //toggle_bg_off();
        $(".dropdown-toggle").dropdown("toggle");
    });
}
