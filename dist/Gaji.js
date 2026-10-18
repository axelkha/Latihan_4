"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// Membuat antarmuka untuk membaca input dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("=== Program Menghitung Gaji Pegawai ===");
// Meminta input jumlah honor dan jumlah hari
rl.question("Masukkan jumlah honor (per hari): ", (inputHonor) => {
    rl.question("Masukkan jumlah hari kerja: ", (inputHari) => {
        // Konversi input string menjadi angka (number)
        const honor = parseFloat(inputHonor);
        const hariKerja = parseFloat(inputHari);
        // Menghitung total tunjangan (20.000 per hari)
        const tunjanganPerHari = 20000;
        const totalTunjangan = tunjanganPerHari * hariKerja;
        // Menghitung Upah sesuai rumus: (honor x jumlah hari kerja) + tunjangan
        const upah = (honor * hariKerja) + totalTunjangan;
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
//# sourceMappingURL=Gaji.js.map