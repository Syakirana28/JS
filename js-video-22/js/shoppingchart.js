let tblmenu = [
    {
        idmenu:1, 
        idkategori:16, 
        menu:"Apel", 
        gambar:"apel.jpg", 
        harga:3000
    },
    {
        idmenu:2, 
        idkategori:16, 
        menu:"Anggur", 
        gambar:"anggur.jpg", 
        harga:4000
    },
    {
        idmenu:3, 
        idkategori:13, 
        menu:"Bakso", 
        gambar:"Bakso.jpg", 
        harga:10000
    },
    {
        idmenu:4, 
        idkategori:13, 
        menu:"Nasi Padang", 
        gambar:"nasi padang.jpg", 
        harga:10000
    },
    {
        idmenu:5, 
        idkategori:14, 
        menu:"Es teh", 
        gambar:"Es teh.jpg", 
        harga:3000
    },
]

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
                <div class="images">
                    <img src="images/${kolom.gambar}" alt="">                    
                </div>
                <div class="titel">
                    <h2>${kolom.menu}</h2>
                </div>
                <div class="deskripsi">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="harga">
                    <h2>Rp. ${kolom.harga}</h2>
                </div>
            </div>`;
})

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;