let objek = {
    nama : "smk revit",
    telp : 12145665,
    buah : ['apel', 'jeruk', 'mangga'],
    coba : function () {
        return "coba function dalam objek";
    },

    boleh : true,
    "tulisan saja" : 12345,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulisan saja"]);