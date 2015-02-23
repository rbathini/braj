



//loads channel videos in to the div
function SearchYouTube1(channelName, divName) {
    var URL = 'https://gdata.youtube.com/feeds/api/videos?author=' + channelName + '&max-results=50&v=2&alt=jsonc&orderby=published';
    $.ajax({
        url: URL,
        dataType: 'jsonp',
        success: function (data) {

            //var row = "<div style='background-color:#F0F0F0'><center><span><b>" + divName.toUpperCase() + "</b></span></center></div>";
            var row = "<table width='920px'>";
            row += "<tr >";
            for (i = 0; i < 6; i++) {
                if (data.data != null) {

                    // declaration
                    // var url = "/Home/PlayVideo?Video=" + data.data.items[i].id;  
                    var url = "\"javascript: getYoutubeVideo('" + data.data.items[i].id + "');\"";
                    var title = limitVideoTitle(data.data.items[i].title);

                    row += "<td valign='top' align='left' >";
                    row += "<a href=" + url + "><img width='140px' height='90px' src=" + data.data.items[i].thumbnail["sqDefault"] + " /></a>";
                    row += "<br/>";
                    row += "<div class='videoTitle' title='" + data.data.items[i].title + "'>";
                    row += "<a href=" + url + "> " + title + "</a>";
                    row += "</div>";
                    row += "</td>";
                }
            }
            row += "</tr>";
            row += "</table>";
            document.getElementById(divName).innerHTML = row;
        },
        error: function () {
            alert("Error loading youtube video results");
        }
    });
    return false;
}


//loads channel videos in to the div
function SearchYouTube(channelName, divName) {
    var URL = 'https://gdata.youtube.com/feeds/api/videos?author=' + channelName + '&max-results=50&v=2&alt=jsonc&orderby=published';
    $.ajax({
        url: URL,
        dataType: 'jsonp',
        success: function (data) {

            //var row = "<div style='background-color:lightblue'><center><span><b>" + divName.toUpperCase() + "</b></span></center></div>";
            var row = "<table width='100%'>";
            row += "<tr>";
            for (i = 0; i < 6; i++) {
                if (data.data != null) {

                    // declaration
                    var url = "/Home/PlayVideo?Video=" + data.data.items[i].id;
                    var title = limitVideoTitle(data.data.items[i].title);



                    row += "<td valign='top' align='left'>";
                    row += "<a href=" + url + "><img width='140px' height='90px' src=" + data.data.items[i].thumbnail["sqDefault"] + " /></a>";

                    row += "<br/>";
                    row += "<div class='videoTitle' title='" + data.data.items[i].title + "'>";
                    row += "<a href=" + url + "> " + title + "</a>";
                    row += "</div>";
                    row += "</td>";
                }
            }
            row += "</tr>";
            row += "</table>";
            document.getElementById(divName).innerHTML = row;
        },
        error: function () {
            alert("Error loading youtube video results");
        }
    });
    return false;
}


function limitVideoTitle(title) {
    var text = title;

    if (text.length < 50)
        return title;

    text = title.substring(0, 49) + ' ...';

    return text;
}


function getYoutubeVideo(key) {
    $("#videoFrame").attr("src", "http://www.youtube.com/embed/" + key + "?modestbranding=1&rel=0&autoplay=1&ap=%2526fmt%3D18");
    $('#videoPlayer').show();
}


function LoadMoreVideos(channelName, divName) {
    var URL = 'https://gdata.youtube.com/feeds/api/videos?author=' + channelName + '&max-results=50&v=2&alt=jsonc&orderby=published';
    $.ajax({
        url: URL,
        dataType: 'jsonp',
        success: function (data) {

            //var row = "<div style='background-color:#F0F0F0'><center><span><b>" + divName.toUpperCase() + "</b></span></center></div>";
            var row = "<table>";
            row += "<tr style='height: 140px !important;width:1111500px;overflow-x: scroll;z-index:-2000'";

            for (i = 0; i < 14; i++) {
                if (data.data != null) {

                    // declaration
                    var url = "/Home/PlayVideo?Video=" + data.data.items[i].id;
                    var title = limitVideoTitle(data.data.items[i].title);



                    row += "<td valign='top' align='left' >";
                    row += "<a href=" + url + "><img width='140px' height='90px' src=" + data.data.items[i].thumbnail["sqDefault"] + " /></a>";

                    row += "<br/>";
                    row += "<div class='videoTitle' title='" + data.data.items[i].title + "'>";
                    row += "<a href=" + url + "> " + title + "</a>";
                    row += "</div>";
                    row += "</td>";
                }
            }
            row += "</tr>";
            row += "</table>";
            document.getElementById(divName).innerHTML = row;

        },
        error: function () {
            alert("Error loading youtube video results");
        }
    });
    return false;

}