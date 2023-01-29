let mulai = 1;
let selesai = 10;

while (mulai <= selesai) {
    console.log(mulai);

    mulai++;
}

let start = 101;
let finish = 110;

do {
    console.log(start);
    start++;
} while (start < finish);

let awal = 1;
let akhir = 10;

for (awal; awal < akhir; awal++) {
    console.log(awal);    
}

console.log("-----------------");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("-----------------");

//untuk loop agar angka yang muncul hanya angka ganjil
// bisa digunakan untuk mendapat angka misal 1,5,9
for (let i = 1; i < 10; i = i + 2) {
    console.log(i);
}