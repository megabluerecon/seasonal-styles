$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);
        season = season.toLowerCase();
        switch(season){
            case "spring":
                $("#logo").attr("src", "images/spring.gif");
                $("#logo").hide().fadeIn(3000);
                $("html").css("background-color","#2B7129");
                $("h3").text("Clean out your closet and welcome our Spring collection!");
                $("#wear").attr("src", "images/spring-wear.jpg");
                $("#wear").hide().fadeIn(3000);
            break;

            case "summer":
                $("#logo").attr("src", "images/summer.gif");
                $("#logo").hide().fadeIn(3000);
                $("html").css("background-color","#EBA52B");
                $("h3").text("Dash into summer with this collection!");
                $("#wear").attr("src", "images/summer-wear.jpg");
                $("#wear").hide().fadeIn(3000);
            break;

            case "fall":
                $("#logo").attr("src", "images/fall.gif");
                $("#logo").hide().fadeIn(3000);
                $("html").css("background-color","#A81124");
                $("h3").text("Fall in love with our Fall collection <3");
                $("#wear").attr("src", "images/fall-wear.jpg");
                $("#wear").hide().fadeIn(3000);
            break;

            case "winter":
                $("#logo").attr("src", "images/winter.gif");
                $("#logo").hide().fadeIn(3000);
                $("html").css("background-color","#005393");
                $("h3").text("Embrace the snow with this collection!");
                $("#wear").attr("src", "images/winter-wear.jpg");
                $("#wear").hide().fadeIn(3000);
            break;

            default:
                $("#logo").attr("src", "images/four-seasons.gif");
                $("html").css("background-color","#ccc");
                $("h3").text("Outfitter for All Seasons!");
                $("#wear").attr("src", "images/300x400.png");
        } 
    });
});
