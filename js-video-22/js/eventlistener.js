function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "belajar eventlistener";
    console.log("coba eventlistener");
}

//jika diberi kurung maka secara otomatis tulisannya muncul
// judul.addEventListener("click",coba);

// judul.addEventListener("click",coba());

//judul.onmouseover = coba;
judul.onmouseover = function () {
    console.log("coba function anonymous");
}