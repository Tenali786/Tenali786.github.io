let show = 1;
let wall_Path;
let u = document.getElementsByClassName('upload_box');

let cl = document.getElementById('closebtn');
let temp_wallpaper = document.getElementsByClassName("new_upload");
let upload_box = document.getElementsByClassName("upload_box");
let buttons_box = document.getElementsByClassName("buttons");
let changecls = document.getElementById("buttons_id");
let off_linewall = document.getElementById("ofline_wallpaper");
let on_linewall = document.getElementById("online_wallpaper");

function exampal(value) {

    if (value == 'offline') {

        wall_Path = URL.createObjectURL(event.target.files[0]);
        temp_wallpaper[0].style.backgroundImage = `url(${wall_Path})`;
        upload_box[0].style.display = "none";
        cl.style.display = "block";        
        changecls.className = "butts";

    }
    else if(value=='online' && on_linewall.value!=""){

        wall_Path = on_linewall.value;
        temp_wallpaper[0].style.backgroundImage = `url(${wall_Path})`;
        upload_box[0].style.display = "none";
        cl.style.display = "block";
        changecls.className = "butts";
    }

}

function cancel() {
    let temp_wallpaper = document.getElementsByClassName("new_upload");
    temp_wallpaper[0].style.display = 'none';
    show = 1;
}


function showhide(  ) {
    if (show == 1) {

        let temp_wallpaper = document.getElementsByClassName("new_upload");
        temp_wallpaper[0].style.display = 'flex', 'block';
        showagain();
        show = 0;
    }
    else {
        let temp_wallpaper = document.getElementsByClassName("new_upload");
        temp_wallpaper[0].style.display = 'none';
        show = 1;
    }
}

function showagain(){
    upload_box[0].style.display = 'flex','block';
    temp_wallpaper[0].style.backgroundImage = 'url("")';
    on_linewall.value  ="";
    off_linewall.value  ="";
    changecls.className = "buttons";
    cl.style.display = "none";



}

window.onload = function () {
    document.getElementById('searchbox').value = "";

}
function openurl(a = 2) {
    var x = event.key;
    var query = document.getElementById('searchbox').value;
    var off_linewall = 'https://www.google.com/search?q=' + query;
    if (x == "Enter" && query != "") {
        window.open(off_linewall, '_self');


    }
    else if (a == 1) {
        if (query != "") {
            window.open(off_linewall, '_self');

        }

    }
}

function record() {
    var recognition = new on_linewallkitSpeechRecognition();
    recognition.lag = "en-GB";
    recognition.onresult = function (event) {
        var speechText = 'https://www.google.com/search?q=' + event.results[0][0].transcript;

        window.open(speechText, '_self');

    }
    recognition.start();
}


// Set the wallpaper as page body background 
function done() {
    
    if (typeof(wall_Path)!='undefined') {
        document.body.style.backgroundImage = `url(${wall_Path})`;
        temp_wallpaper[0].style.display = 'none';
        show = 1;
    }
    else {
        alert("Please... Select a Image before click on done")
    }
    

}