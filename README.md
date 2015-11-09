# htmlbook-swiper-example
htmlbook-swiper example repo

##Libs
-Swipers  Link : http://www.idangero.us/swiper/#.VkA9PLfhCUk

-FancyBox Link : http://fancybox.net/

-jQuery Link : https://jquery.com/

##Application Specification
1. single page application
2. index function, home function in it
3. 6 page, you can change image OR add image
4. if you want add video to page, use this code
(android use this function, but iOS doesn't have to this)

```javascript
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
```

##Target Platform
1. android
2. iOS
