
function f_win(r) {
         alert("Code = " + r.responseCode);
         alert("Response = " + r.response);
         alert("Sent = " + r.bytesSent);
}

function f_fail(error) {
         alert("An error has occurred: Code = " = error.code);
}

//http://docs.phonegap.com/phonegap_file_file.md.html#FileTransfer 
function uploadPhoto(imageURI) {
       var options = new FileUploadOptions();
       options.fileKey="file";
       //options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
       options.fileName="graphic";
       options.mimeType="image/jpeg";
       var params = new Object();

       params.value1 = "key";
       params.value2 = document.getElementById("userkey").value;

       options.params = params;
       var ft = new FileTransfer();
       ft.upload(imageURI, "http://admin.tagvisor.com/editar_imagem", f_win, f_fail, options);
}

function image() { 
alert(1);
      navigator.camera.getPicture(uploadPhoto,
                  function(message) { alert('get picture failed'); },
                     { quality: 50, 
                      destinationType: navigator.camera.DestinationType.FILE_URI
                     }
		//sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY 
      );
} 

/* This gets audio in base64 */
function tryGetFile(name) { 

	var file = name;
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
	
        function onFileSystemSuccess(fileSystem)
	{
             alert("FS: " + fileSystem.name);
             fileSystem.root.getFile(file, {'create':false}, success, fail);
        }

        function success(fileEntry) {
             alert("RESOLVE: " + fileEntry.name);
             var reader = new FileReader();
             reader.onloadend = function(evt) {
                 //alert(evt.target.result); // THIS JUST RETURNS "Object:"
document.getElementById("datastore").value=evt.target.result;
                 for (prop in evt.target.error) {
                        alert(prop + " = " + evt.target.error[prop]); //THIS RETURNS AN ERROR CODE 5
                 }
             };
             reader.readAsDataURL(fileEntry);
        }

       function fail(evt) {
             console.log("ERROR:" + evt);
            for (prop in evt.target) {
                 console.log(prop + " = " + evt.target[prop]);
            }
       } 
}


    function upMedia(dataURI) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=dataURI.substr(dataURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";

            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(dataURI, "http://www.taboca.com", win, fail, options);
        }



 function playAudio(src) {
            my_media = new Media(src, onSuccess = function () { } , onError = function () { } );
            my_media.play();
 }

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
    function onDeviceReady() {
    }

    function rec() { 
	recordAudio();
    } 

    function set(min) { 
        recordAudio();
    //    setTimeout("play()",min*1000*60); 
    } 

    function play() { 
       playAudio("myrecording.mp3");
    } 
    // Record audio
    // 
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src, onSuccess, onError);

        // Record audio
        mediaRec.startRecord();

        // Stop recording after 10 sec
        var recTime = 0;
        var recInterval = setInterval(function() {
            recTime = recTime + 1;
            setAudioPosition(recTime + " sec");
            if (recTime >= 5) {
                clearInterval(recInterval);

function onSuccess(fileEntry) {
    console.log(fileEntry.name);
}


 function onFileSystemSuccess(fileSystem) {
        console.log(fileSystem.name);
    }



                mediaRec.stopRecord();
		tryGetFile(mediaRec.src);
        //window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
//window.resolveLocalFileSystemURI(mediaRec.src, onSuccess, onError);
            }
        }, 1000);
    }

    // PhoneGap is ready
    //

    // onSuccess Callback
    //
    function onSuccess() {
        console.log("recordAudio():Audio Success");
    }

    // onError Callback 
    //
function onError(error) {
    alert('code: '    + error.code    + '\n' + 
          'message: ' + error.message + '\n');
}

// Set audio position
// 
function setAudioPosition(position) {
    document.getElementById('audio_position').innerHTML = position;
}
