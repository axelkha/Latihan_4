import * as readline from 'readline';

// Membuat antarmuka untuk membaca input dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Program Menghitung Nilai Akhir ===");

// Meminta input dari user secara berurutan
rl.question("Masukkan nilai UTS: ", (inputUts: string) => {
    rl.question("Masukkan nilai UAS: ", (inputUas: string) => {
        rl.question("Masukkan nilai UKK: ", (inputUkk: string) => {
            
            // Konversi input dari string menjadi angka (tipe data number)
            const uts: number = parseFloat(inputUts);
            const uas: number = parseFloat(inputUas);
            const ukk: number = parseFloat(inputUkk);

            // Menghitung nilai berdasarkan bobot
            const bobotUts: number = uts * 0.15;
            const bobotUas: number = uas * 0.15;
            const bobotUkk: number = ukk * 0.70;

            // Menghitung total nilai akhir
            const nilaiAkhir: number = bobotUts + bobotUas + bobotUkk;

            // Menampilkan hasil
            console.log("\n--- Hasil Perhitungan ---");
            console.log(`Nilai UTS (15%) : ${bobotUts}`);
            console.log(`Nilai UAS (15%) : ${bobotUas}`);
            console.log(`Nilai UKK (70%) : ${bobotUkk}`);
            console.log(`Nilai Akhir Keseluruhan : ${nilaiAkhir}`);

            // Menutup readline
            rl.close();
        });
    });
});