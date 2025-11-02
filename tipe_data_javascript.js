// let a = 12;
// let b = 30;
// let c = 5;
// let d = 10;

// OPRATOR PADA JAVASCRIPT ARITMATIKA PENUGASAN & PERBANDINGANCLEAR

// console.log(a + b);
// console.log((a += 5)); // a = a + 5
// console.log((c -= 3)); // a = a - 3
// console.log((b *= 2));
// console.log((d %= 2));

// console.log(a >= 11 && a <= 25); // AND → true
// console.log(a === "12"); ->false
// console.log(a === 12); // true

// console.log(a != 13); -> true
// console.log(a !== "12"); -> true

// console.log(a > 12); -> false
// console.log(a < 15); -> true

// OPRATOR PADA JAVASCRIPT LOGIKA STRING TYPEOF DAN KONDISIONAL

// let x = 10;
// let y = 5;
// let nama = "John";
// let umur = 25;

// console.log ("HELLO " + nama + ",umur saya " + umur + " tahun.");
// console.log("hello"+". ." + "world");
// console.log(x > 5 && y < 10); -> true (AND)
// console.log(x < 5 && y > 20); -> false (AND)
// console.log(x > 5 || y > 10);

// console.log(x == 10 && x > 5 || y !== "5" >2);
// console.log( x += 5);
// console.log((x += 5) > 10 || (y -= 5) > 20); Jadi kalo ada true dan false maka akan di pilih true

// 1.OPRATOR PADA JAVASCRIPT (TYPEOFF)

// console.log(typeof 123); //  -->number
// console.log(typeof "Halo"); // -->string
// console.log(typeof true); // -->boolean
// console.log(typeof {}); // -->object
// console.log(typeof undefined); //  -->undefined
// console.log(typeof null); // -->object (bug bawaan JS)

// 2.OPRATOR PADA JAVASCRIPT KONDISIONAL (TERNARY)
// let umur = 20;

// let status = umur >= 18 ? "Dewasa" : "Anak-anak";
// console.log(status)

// let nilai = 80;

// let hasil = nilai >= 90 ? "lulus" : "tidak lulus";
// console.log(hasil);

// let tinggi = 175;
// let kategori = tinggi >= 170 ? "Tinggi" : "Pendek";
// console.log(kategori);

// 3.OPRATOR PADA JAVASCRIPT (string)
// let nama = "Muhammad";
// let lengkap = nama + " Shahan"; // penggabungan
// console.log(lengkap); // "Muhammad Shahan"

// let salam = "Hello";
// salam += " World"; // sama seperti salam = salam + " World"
// console.log(salam); // "Hello World"

// 4. OPRATOR LOGIKA PADA JAVASCRIPT
// let x = 10;
// let y = 5;

// console.log(x > 5 && y < 10); // AND → true
// console.log(x > 15 || y < 10); // OR → true
// console.log(!(x == 10)); // NOT → false

// tipe data pada javascript (string)
//  console.log("Hello, World! pada hari jum\'at"); // menggunakan tanda kutip ganda pake  backslash
// let nama = "John Doe";
// let umur = 30;
// let gabung = `nama saya ${nama}, umur saya ${umur} tahun.`; // menggunakan backtick
// console.log(gabung);

// TIPE DATA PADA JAVASCRIPT (BOOLEEAN)

// 1.OPRATOR (AND) && HANYA AKAN TRUE JIKA KEDUANYA TRUE MAKA SELAINNYA AKAN FALSE
// let login = true;
// let premium = false;

// if (login && premium) {
//   console.log("Akses premium");
// } else {
//   console.log("Akses ditolak");
// }
// // Output: Akses ditolak (karena salah satu false)

// 2.OPRATOR (OR) || AKAN TRUE JIKA SALAH SATU ADA TRUE MAKA SELAINNYA AKAN FALSE
// let login = false;
// let premium = true;

// if (login || premium) {
//   console.log("Akses diberikan");
// } else {
//   console.log("Akses ditolak");
// }
// Output: Akses diberikan (karena ada satu yang true)

// 3.OPRATOR (NOT) ! AKAN MENGUBAH NILAI BOOLEAN JADI KEBALIKANNYA
// let aktif = false;

// if (!aktif) {
//   console.log("Pengguna tidak aktif");
// };
// Output: Pengguna tidak aktif

// VARIABEL PADA JAVASCRIPT

// var nama = "Shahan";   // cara lama
// let umur = 20;         // bisa diubah nanti
// const negara = "Indonesia"; // tidak bisa diubah

// CONTOH PENGGUNAAN LET DAN CONST

// let nama = "Shahan";
// let umur = 20;
// umur = 21; // nilai umur diubah dari 20 menjadi 21
// let status = "Mahasiswa";
// let negara = "Indonesia";
// negara = "Malaysia"; // akan error karena negara adalah const dan tidak bisa diubah

// console.log("Nama: " + nama);
// console.log("Umur: " + umur + " tahun");
// console.log("Status: " + status);
// console.log("Negara: " + negara);
