$(document).ready(function(){
    //lndex
    console.log("started the song and dance");
    loadhome();
    //forcecontent("html/default.html", "html/header.html");
    console.log("forced content through");

    app();
});

function app(){

    //index
    $("#ieeelogo").click(function(){
        console.log("ieeelogo clicked");
        loadhome();
    });

    //about
    loadcontent("#whoweare", "html/about/whoweare.html");
    loadcontent("#leadership", "html/about/leadership.html");
    loadcontent("#members", "html/about/members.html");

    //blog
    loadcontent("#toc", "html/blog/toc.html");

    //blog posts
    $(document).on("click", "#aprilvolunteer",  {elem: "#aprilvolunteer",   pagedir: "html/blog/posts/aprilvolunteer.html",     authordir: "html/blog/authors/raldirisr.html"}, loadblog);
    $(document).on("click", "#roboticsminutes", {elem: "#roboticsminutes",  pagedir: "html/blog/posts/roboticsminutes.html",    authordir: "html/blog/authors/garciaw.html"}, loadblog)
    $(document).on("click", "#ilead",           {elem: "#ilead",            pagedir: "html/blog/posts/ilead.html",              authordir: "html/blog/authors/moralese.html"}, loadblog);
    $(document).on("click", "#isense",          {elem: "#isense",           pagedir: "html/blog/posts/isense.html",             authordir: "html/blog/authors/raldirisr.html"}, loadblog);
    $(document).on("click", "#whyieee",         {elem: "#whyieee",          pagedir: "html/blog/posts/whyieee.html",            authordir: "html/blog/authors/phillipsj.html"}, loadblog);
    $(document).on("click", "#argonlasertag",   {elem: "#argonlasertag",    pagedir: "html/blog/posts/argonlasertag.html",      authordir: "html/blog/authors/phillipsj.html"}, loadblog);

    //events
    loadcontent("#eweek",           "html/events/eweek.html");
    loadcontent("#bluemix",         "html/events/bluemix.html");
    loadcontent("#southeastcon",    "html/events/southeastcon.html");
    loadcontent("#meeting",         "html/events/meeting.html");
}

function toggle_bg_off() { $("html").removeClass("full").addClass("full-no-image"); }
function toggle_bg_on() { $("html").removeClass("full-no-image").addClass("full"); }
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
function loadhome(){
    console.log("we made it bois")
    //$("#header").load("html/header.html");
    $("#header").show();
    $("#content").load("html/default.html");
    $("#content").show();
    $(".dropdown-menu li a").removeClass("selected");
}
function forcecontent(pagedir){
    console.log("force loaded content from: " + pagedir);
    $("#content").load(pagedir);
    $("#content").show();
    //toggle_bg_off();
}
function forcecontent(dir1, dir2){
    console.log("force loaded content from: " + dir1 + dir2);
    //$("#header").load(dir2);
    $("#header").show();
    $("#content").load(dir1);
    $("#content").show();
    //toggle_bg_off();
}
function loadblog(event){
    // console.log("loading blog");
    console.log(event.data.elem + " clicked");
    $("#header").hide();
    $("#content").load(event.data.pagedir);
    $("#content").show();
    $("#author").load(event.data.authordir);
    $("#author").show();
    $("#toc").load("toc.html");
    $("#toc").show();
    //toggle_bg_off();
    $(".dropdown-menu li a").removeClass("selected");
    $(event.data.elem).addClass("selected");
    if ($(event.data.elem).is("a")) {
        $(".navbar-collapse").collapse("hide");
    }
    $(".dropdown-toggle").blur()
}
