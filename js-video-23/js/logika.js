let a = true;
let b = false;
let c = true;
let d = false;

// || = atau
// jika menggunakan || akan bernilai true jika salah satu true
console.log(d || b || a);

// && = and
// jika menggunakan && akan bernilai false jika salah satu false
console.log(a && b && c);

let x = 8;
let y = 7;

//lebih besar
console.log(x > y);
//lebih kecil
console.log(x < y);
//sama dengan
console.log(x == y);
//lebih besar sama dengan
console.log(x >= y);
//lebih kecil sama dengan
console.log(x <= y);

let lima = "5";
let limo = 5;

//false karena satu bertipe string sedangkan satunya bertipe number
//identik = isi dan tipe yang sama
console.log(lima === limo);