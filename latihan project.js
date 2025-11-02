// // // Mini Project: Kalkulator Nilai Siswa

// // // 1. Input data
// // let nama = prompt("Masukkan nama siswa:");
// // let tugas = Number(prompt("Masukkan nilai tugas:"));
// // let uts = Number(prompt("Masukkan nilai UTS:"));
// // let uas = Number(prompt("Masukkan nilai UAS:"));

// // // 2. Cek tipe data
// // console.log("Tipe data nama:", typeof nama);
// // console.log("Tipe data tugas:", typeof tugas);
// // console.log("Tipe data UTS:", typeof uts);
// // console.log("Tipe data UAS:", typeof uas);

// // // 3. Validasi nilai (0–100)
// // let validasi =
// //   tugas > 0 && tugas <= 100 && uts > 0 && uts <= 100 && uas > 0 && uas <= 100;

// // // 4. Hitung rata-rata
// // let rataRata = (tugas + uts + uas) / 3;

// // // 5. Tentukan status kelulusan (pakai operator kondisional)
// // let status = rataRata >= 75 ? "Lulus 🎉" : "Tidak Lulus 😔";

// // // 6. Output hasil
// // if (validasi) {
// //   alert(`Nama: ${nama}\nRata-rata: ${rataRata.toFixed(2)}\nStatus: ${status}`);
// // } else {
// //   alert("Nilai tidak valid! Harus di antara 0 sampai 100.");
// // }



// // mini project kelulusan kehadiran mahasiswa
// // 1.input data
// let nama = prompt("masukkan nama mahasiswa:");
// let hadir = Number(prompt("masukkan jumlah kehadiran:"));
// let totalpertemuan = Number(prompt("masukkan tital pertemuan:"));

// // 2.cek tipe data
// console.log("tipe data nama:", typeof nama);
// console.log("tipe data hadir:", typeof hadir);
// console.log("tipe data totalpertemuan:", typeof totalpertemuan);

// // 3.validasi kehadiran
// let validasi =
//   hadir > 0 && hadir <= 40 && totalpertemuan > 0 && totalpertemuan <= 40;

// // 4. hitung presentase kehadiran
// let presentase = (hadir / totalpertemuan) *100;

// // 5.tentukan status kelulusan
// let status = presentase >= 75 ? "lulus" : "tidak lulus";

// // 6.output hasil]
// if (validasi) {
//   alert(
//     `Nama: ${nama}\nPresentase kehadiran: ${(presentase).toFixed(0)}%\nStatus: ${status}`
//   );
// } else {
//   alert("Jumlah kehadiran tidak valid! Harus di antara 0 sampai 40.");
// }

// // evaluasi project
// // ---- pengunaan Number pada prompt agar inputan bisa di proses perhitungan matematika yang benar (Number) bukan number karna jadi nya nan
// // ----ke istiqomahan dalam penulisan besar kecil huruf tulisan
// // ---- penggunaan tofixed pada presentase agar hasil perhitungan tidak terlalu panjang angka di belakang koma 
