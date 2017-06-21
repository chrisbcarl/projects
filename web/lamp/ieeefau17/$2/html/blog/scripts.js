$(document).ready(function(){
    console.log("got to load blog doc ready");

    //blog
    loadcontent("#toc", "html/blog/toc.html");
    loadcontent("#categories", "html/blog/categories.html");
    loadcontent("#authors", "html/blog/authors.html");

    //blog posts
    $(document).on("click", "aprilvolunteer", {elem: "#aprilvolunteer", pagedir: "html/blog/posts/aprilvolunteer.html", authordir: "html/blog/authors/raldirisr.html"}, loadblog);
    $(document).on("click", "#roboticsminutes", {elem: "#roboticsminutes", pagedir: "html/blog/posts/roboticsminutes.html", authordir: "html/blog/authors/garciaw.html"}, loadblog)
    $(document).on("click", "#ilead", {elem: "#ilead", pagedir: "html/blog/posts/ilead.html", authordir: "html/blog/authors/moralese.html"}, loadblog);
    $(document).on("click", "#isense", {elem: "#isense", pagedir: "html/blog/posts/isenes.html", authordir: "html/blog/authors/raldirisr.html"}, loadblog);
    $(document).on("click", "#whyieee", {elem: "#whyieee", pagedir: "html/blog/posts/whyieee.html", authordir: "html/blog/authors/phillipsj.html"}, loadblog);
    $(document).on("click", "#argonlasertag", {elem: "#argonlasertag", pagedir: "html/blog/posts/argonlasertag.html", authordir: "html/blog/authors/phillipsj.html"}, loadblog);
});

function toggle_bg_off() { $("html").removeClass("full").addClass("full-no-image"); }
function toggle_bg_on() { $("html").removeClass("full-no-image").addClass("full"); }

function loadcontent(elem, pagedir){
    $(elem).click(function(){
        console.log(elem + " clicked");
        $("#header").hide();
        $("#content").load(pagedir);
        $("#content").show();
        //toggle_bg_off();
        $(".dropdown-menu li a").removeClass("selected");
        $(elem).addClass("selected");
        if ($(elem).is("a")) {
            $(".navbar-collapse").collapse("hide");
        }
        $(".dropdown-toggle").blur()
    });
}

function loadblog(event){
    // console.log("loading blog");
    console.log(event.data.elem + " clicked");
    $("#header").hide();
    $("#content").load(event.data.pagedir);
    $("#content").show();
    $("#author").load(event.data.authordir);
    //toggle_bg_off();
    $(".dropdown-menu li a").removeClass("selected");
    $(elem).addClass("selected");
    if ($(elem).is("a")) {
        $(".navbar-collapse").collapse("hide");
    }
    $(".dropdown-toggle").blur()
}
