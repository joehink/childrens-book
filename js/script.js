let element;

let leftArrow = $("#leftArrow");
let rightArrow = $("#rightArrow");

// Inititalize flipbook
$("#flipbook").turn({
    width: "100%",
    height: "100%",
    autoCenter: true,
    display: "single"
});

createBookPages()
renderPageAudio()

leftArrow.on("click", function() { 
    $("#flipbook").turn("previous")
})

rightArrow.on("click", function() { 
    $("#flipbook").turn("next")
})


// On last page
$("#flipbook").bind("last", function(event) {
	$("#flipbook").on("click", resetBook)
});


// Event that handles what audio to play on each page
$("#flipbook").bind("turning", function(event, page, view) {
    // Every time a page turns pause all audio and set start time to 0
    resetPageAudio()

    // play audio for this page
    if (page <= 64) {
        document.getElementById("page" + page).play()
    }

    // Ambience Audio
    handleAmbience(page)
});

function createBookPages() {
    for (let i = 2; i < 65; i++) {
        element = $("<div />").css("background-image", "url('images/page" + i + ".jpg')").css("background-size", "cover")
        $("#flipbook").turn("addPage", element)
    }

    // Add blank last page
    element = $("<div />", {"class": "hard"})
    $("#flipbook").turn("addPage", element, 65);
}


function renderPageAudio() {
    for (let i = 0; i < 65; i++) {
        $("#audio-clips").append("<audio class='page-audio' id=" + "'page" + i  + "' src='audio/page" + i + ".mp3' type='audio/mpeg'></audio>")
    }
}

function resetPageAudio() {
    $(".page-audio").each(function() { 
        this.pause();
        this.currentTime = 0;
    });
}

function handleAmbience(page) {
    if (page <= 2) {
        document.getElementById("amb1").pause()
    }
    if (page >= 3 && page <= 5) {
        document.getElementById("amb1").play()
        document.getElementById("amb2").pause()
    } 

    if (page >= 6 && page <= 8) {
        document.getElementById("amb1").pause()
        document.getElementById("amb3").pause()
        document.getElementById("amb2").play()
    }

    if (page >= 9 && page <= 11) {
        document.getElementById("amb2").pause()
        document.getElementById("amb4").pause()
        document.getElementById("amb3").play()
    }

    if (page >= 12 && page <= 18) {
        document.getElementById("amb3").pause()
        document.getElementById("amb5").pause()
        document.getElementById("amb4").play()
    }

    if (page == 19) {
        document.getElementById("amb4").pause()
        document.getElementById("amb6").pause()
        document.getElementById("amb5").play()
    }

    if (page >= 20 && page <= 25) {
        document.getElementById("amb5").pause()
        document.getElementById("amb7").pause()
        document.getElementById("amb6").play()
    }

    if (page >= 26 && page <= 27) {
        document.getElementById("amb6").pause()
        document.getElementById("amb8").pause()
        document.getElementById("amb7").play()
    }

    if (page >= 28 && page <= 31) {
        document.getElementById("amb7").pause()
        document.getElementById("amb9").pause()
        document.getElementById("amb8").play()
    }

    if (page >= 32 && page <= 37) {
        document.getElementById("amb8").pause()
        document.getElementById("amb9").play()
        document.getElementById("amb10").pause()
    }

    if (page >= 38 && page <= 39) {
        document.getElementById("amb9").pause()
        document.getElementById("amb11").pause()
        document.getElementById("amb10").play()
    }

    if (page >= 40 && page <= 43) {
        document.getElementById("amb10").pause()
        document.getElementById("amb12").pause()
        document.getElementById("amb11").play()
    }

    if (page >= 44 && page <= 49) {
        document.getElementById("amb11").pause()
        document.getElementById("amb13").pause()
        document.getElementById("amb12").play()
    }

    if (page >= 50 && page <= 59) {
        document.getElementById("amb12").pause()
        document.getElementById("amb14").pause()
        document.getElementById("amb13").play()
    }

    if (page >= 60) {
        document.getElementById("amb13").pause()
        document.getElementById("amb14").play()
    }
}

function resetBook() {
    $("audio").each(function() { 
        this.pause();
        this.currentTime = 0;
    });
    $("#flipbook").turn("page", 1)
    $("#flipbook").off("click")
}