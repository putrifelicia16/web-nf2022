function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "yunho") {
        images.src = "images/Yunho.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Yunho.jpg";
        alert("Ini adalah gambar Yunho.jpg");
    } else if (picker == "changmin") {
        images.src = "images/Changmin.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Changmmin.jpg";
        alert("Ini adalah gambar Changmin.jpg");
    } else if (picker == "suho") {
        images.src = "images/Suho.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Suho.jpg";
        alert("Ini adalah gambar Suho.jpg");
    } else if (picker == "d.o") {
        images.src = "images/D.O.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar D.O.jpg";
        alert("Ini adalah gambar D.O.jpg");
    } else if (picker == "minwoo") {
        images.src = "images/Minwoo.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Minwoo.jpg";
        alert("Ini adalah gambar Minwoo.jpg");
    } else if (picker == "junjin") {
        images.src = "images/Junjin.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Junjin.jpg";
        alert("Ini adalah gambar Junjin.jpg");
    } else if (picker == "jiwon") {
        images.src = "images/jiwon.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar jiwon.jpg";
        alert("Ini adalah gambar jiwon.jpg");

    } else {
        alert("Gagal");
    }
}