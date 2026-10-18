import * as readline from 'readline';

// Membuat antarmuka untuk membaca input dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Program Menghitung Gaji Pegawai ===");

// Meminta input jumlah honor dan jumlah hari
rl.question("Masukkan jumlah honor (per hari): ", (inputHonor: string) => {
    rl.question("Masukkan jumlah hari kerja: ", (inputHari: string) => {
        
        // Konversi input string menjadi angka (number)
        const honor: number = parseFloat(inputHonor);
        const hariKerja: number = parseFloat(inputHari);

        // Menghitung total tunjangan (20.000 per hari)
        const tunjanganPerHari: number = 20000;
        const totalTunjangan: number = tunjanganPerHari * hariKerja;

        // Menghitung Upah sesuai rumus: (honor x jumlah hari kerja) + tunjangan
        const upah: number = (honor * hariKerja) + totalTunjangan;

        // Menampilkan hasil
        console.log("\n--- Rincian Gaji ---");
        console.log(`Honor per hari     : Rp ${honor}`);
        console.log(`Jumlah Hari Kerja  : ${hariKerja} hari`);
        console.log(`Total Tunjangan    : Rp ${totalTunjangan} (Rp 20.000 x ${hariKerja} hari)`);
        console.log(`------------------------------`);
        console.log(`Total Upah Diterima: Rp ${upah}`);

        // Menutup readline
        rl.close();
    });
});