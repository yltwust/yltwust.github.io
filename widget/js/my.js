jq('#dot').udraggable({
    containment : 'window'
});

var isDev4 = appcan.locStorage.val("isDev4");

appcan.button("#dot img", "btn-act", function() {
    $(".menu").toggleClass("hide");
    if (isDev4 == 0) {
        if ($(".menu").css("display") != "none") {
            $("#dot img").attr("src", "../../css/res/common/btn-act.png")
        } else {
            $("#dot img").attr("src", "../../css/res/common/btn.png")
        }
    } else if (isDev4 == 1) {
        if ($(".menu").css("display") != "none") {
            $("#dot img").attr("src", "../../../css/res/common/btn-act.png")
        } else {
            $("#dot img").attr("src", "../../../css/res/common/btn.png")
        }
    }

})

appcan.button(".source", "btn-act", function() {
    // appcan.window.open("source","source.html");
    var titHeight = appcan.locStorage.val("titHeight");
    // appcan.window.openPopover("source","0","source_content.html",'',0,titHeight,'','','','')
    // appcan.window.publish("changeHeader","source");

    var page = appcan.locStorage.val("index")
    if (page != null) {
        appcan.window.openPopover("source" + page, "0", "source" + page + "_content.html", '', 0, titHeight, '', '', '', '')
    } else {
        appcan.window.openPopover("source", "0", "source_content.html", '', 0, titHeight, '', '', '', '')
    }
    // if (page == "2") {
    // appcan.window.openPopover("source2", "0", "source2_content.html", '', 0, titHeight, '', '', '', '')
    // } else if (page == "1") {
    // appcan.window.openPopover("source1", "0", "source1_content.html", '', 0, titHeight, '', '', '', '')
    // } else if (page == "0") {
    // appcan.window.openPopover("source0", "0", "source0_content.html", '', 0, titHeight, '', '', '', '')
    // } else {
    // appcan.window.openPopover("source", "0", "source_content.html", '', 0, titHeight, '', '', '', '')
    // }
})
appcan.button(".return", "btn-act", function() {
    // appcan.window.open("scrawlapi","api.html");
    var single = appcan.locStorage.val("single")
    if(single=="1"){
        appcan.window.closePopover("source")
    }else{
        appcan.window.publish("close", 0);
    }
    // appcan.window.close(-1);
})