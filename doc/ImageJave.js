let F = 0;

let fill = document.getElementById("local");
let close = document.getElementById("closebtn");
let show = document.getElementById("show");
let downl = document.getElementById("download");
let orgback = document.getElementById("Images");
let Image = document.getElementsByClassName("img");
let left = document.getElementById("left");
let right = document.getElementById("right");
let UPL = document.getElementsByClassName("upload");
let UP = document.getElementsByClassName("uploadimage");
let i = 1;
let U = 0;

function ShowImage(obj) {

    document.getElementById("title").innerHTML = obj.alt;

    close.style.display = "block";
    fill.style.display = "block";
    downl.style.display = "block";
    orgback.style.filter = "blur(3px)";
    orgback.style.pointerEvents = "none";

    fill.style.position = "fixed";
    fill.style.top = "10%";
    fill.style.left = "20%";
    fill.style.border = "5px solid white";
    fill.style.width = "850px";
    fill.style.height = "450px";
    fill.style.borderRadius = "5px";

    left.style.display = "block";
    right.style.display = "block";

    show.style.display = "block";
    show.src = obj.src;
    show.alt = obj.alt;
    show.style.width = "100%";
    show.style.height = "450px";
    show.style.position = "absolute";
    show.style.top = "0px";
    show.style.left = "0px";
    show.style.margin = "0px";
    show.style.borderRadius = "0px";
    show.style.filter = "none";
    show.style.border = "none";
    show.style.transform = "scale(1)";
    i = parseInt(obj.alt.split(" ").pop()-1);


};

function fullsreen() {
    if (F == 0) {

        fill.style.position = "absolute";
        orgback.style.display = "none";
        fill.style.top = "1px";
        fill.style.left = "-5px";
        show.style.top = "0%";
        show.style.left = "0%";
        fill.style.width = "100%";
        fill.style.height = "621px";
        show.style.width = "100%";
        show.style.height = "100%";
        left.style.left = "0%";
        right.style.right = "0%";
        F = 1;
        left.style.position = "fixed";
        right.style.position = "fixed";
        UPL[0].style.display = "none";

    }
    else {
        fill.style.position = "fixed";
        fill.style.top = "10%";
        fill.style.left = "20%";
        fill.style.border = "5px solid white";
        fill.style.width = "850px";
        fill.style.height = "450px";
        fill.style.borderRadius = "5px";
        left.style.display = "block";
        right.style.display = "block";
        orgback.style.display = "block";

        show.style.display = "block";
        show.style.width = "100%";
        show.style.height = "450px";
        show.style.position = "absolute";
        show.style.top = "0px";
        show.style.left = "0px";
        show.style.margin = "0px";
        show.style.borderRadius = "0px";
        show.style.filter = "none";
        show.style.border = "none";
        show.style.transform = "scale(1)";
        left.style.left = "-33%";
        right.style.right = "-25%";
        F = 0;
        left.style.position = "absolute";
        right.style.position = "absolute";
        UPL[0].style.display = "block";

    }
}

function Next() {
    i += 1;
    if (i >= Image.length) {
        i = 0;
    }
    show.src = Image[i].src;
    document.getElementById("title").innerHTML = Image[i].alt;

};

function Previous() {
    i = i - 1;
    if (i < 0) {
        i = Image.length - 1;
    }
    show.src = Image[i].src;
    document.getElementById("title").innerHTML = Image[i].alt;


};

function overmessage(a) {
    let C = document.getElementById("clmess");
    if (a == 1) {
        C.style.display = "block";
    }

    else if (a == 2) {
        C.style.display = "none";

    }

};

function Close() {
    UPL[0].style.display = "block";
    fill.style.display = "none";
    orgback.style.filter = "blur(0px)";
    orgback.style.pointerEvents = "fill";
    orgback.style.display = "block";
    F= 0;
};


function downloads(down) {
    down.href = show.src;
    down.download = show.alt;

}


function UploadNow() {

    if (U == 0) {
        UP[0].style.display = "block";
        U = 1;
        let url = document.getElementById("imgURL").focus();

    }
    else {
        UP[0].style.display = "none";
        U = 0;
    }
}

function Submit() {
    
    let url = document.getElementById("imgURL").value;
    let tt =   document.getElementById("imgtitle").value;

    if(url!="" && tt!==""){

        var img = document.createElement('img');
        
        img.src =url;
        img.alt = tt + ` ${Image.length +1}`;
        img.className = "img";
        img.setAttribute("onclick","ShowImage(this)");
        let v = document.createTextNode("onclik='ShowImage(this)'");
        img.appendChild(v);
        document.getElementById('Images').appendChild(img);
        document.getElementsByClassName("Successfully")[0].style.display = "block";
        document.getElementsByClassName("h3")[0].style.display = "block";
    }
    else{
        alert("Please... \nEnter the Image URL and Image Title");
    }
}


function hidenow() {
    UP[0].style.display = "none";
    document.getElementsByClassName("Successfully")[0].style.display = "none";
    document.getElementsByClassName("h3")[0].style.display = "none";
     document.getElementById("imgtitle").value = "";
    document.getElementById("imgURL").value = "";
    U = 0;
    // alert("successfully upload");

}

