//video file setup function
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent();
    },
    // Update DOM on a Received Event
    receivedEvent: function () {
        if ("Android" === device.platform) {
            /*
            document.addEventListener("deviceready", videoFileSet, false);    
            
            //if has video on html, use this function
            //you have to add plugins
            //cordova plugin add cordova-plugin-file
            //cordova plugin add cordova-plugin-file-transfer
            function videoFileSet() {
                var fileTransfer = new FileTransfer();
                var uri = encodeURI('cdvfile://localhost/temporary/video.mp4');

                fileTransfer.download(
                    "file:///android_asset/www/video/video.mp4",
                    uri,
                    function (entry) {
                        resolveLocalFileSystemURL('cdvfile://localhost/temporary/video.mp4', function (entry1) {
                            var nativePath = entry1.toURL();
                            document.querySelector("#myvideo").src = nativePath;
                        });
                    },
                    function (error) {
                        alert('download error source ' + error.source);
                    }
                );
            }
            */
        } else {
            //not android
        }
    }
};

app.initialize();

//fancybox setup
$(document).ready(function () {
    $(".fancybox").fancybox();
});
