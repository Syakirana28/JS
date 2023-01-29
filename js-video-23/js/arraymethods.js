// array bisa berupa string, number, object, function, atau campuran

// array di tandai dengan '[]' sedangkan object di tandai dengan '{}'
let nilai = [
    {nama:"budi", ipa:90, bahasa:70, matematika:70},
    {nama:"joni", ipa:80, bahasa:90, matematika:60},
    {nama:"tejo", ipa:75, bahasa:70, matematika:90},
    {nama:"siti", ipa:90, bahasa:80, matematika:90}
]

let nama = ["budi", "joni", "tejo", "siti"];

//(nama array).push digunakan untuk menambah object di akhir
//nama.push("ani", "roma");

//(nama array).unshift digunakan untuk menambah object di awal
//nama.unshift("bobi", "roki");

//console.log(nama.slice(3, 6));

let mapel = ['ipa', 'bahasa', 'matematika'];

//concat digunakan untuk menggabungkan array
//console.log(nama.concat(mapel));

//console.log(nama.concat(['ips', 'pkn', 'sejarah']));

// (nama array).splice digunakan untuk menghapus object
// console.log(nama.splice(3,4));

// (nama array).pop digunakan untuk mengekstrak object paling akhir
//console.log(nama.pop());

// (nama array).shift digunakan untuk mengekstrak object paling awal
// console.log(nama.shift());

//console.log(nilai[0].nama);
//console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
    
// }

// nama.forEach(function (a) {
//     console.log(a)
// })

//nama.forEach(a => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a);
//     }
// })

//console.log(nilai);

//nilai.filter(a => (a.ipa > 80 && a.matematika > 80 ? console.log(a.nama) : null));

// let siswa  = nilai.map(function (a) {
//     return a.nama;
// })

// let siswa = nilai.map(a => [a.nama, a.ipa, a.bahasa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return a = a + b.ipa;
// }, 0)

let hasil = nilai.reduce((a,b) => (a += b.bahasa, 0));

console.log(hasil);