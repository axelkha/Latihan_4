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
console.log("=== Program Menghitung Nilai Akhir ===");
// Meminta input dari user secara berurutan
rl.question("Masukkan nilai UTS: ", (inputUts) => {
    rl.question("Masukkan nilai UAS: ", (inputUas) => {
        rl.question("Masukkan nilai UKK: ", (inputUkk) => {
            // Konversi input dari string menjadi angka (tipe data number)
            const uts = parseFloat(inputUts);
            const uas = parseFloat(inputUas);
            const ukk = parseFloat(inputUkk);
            // Menghitung nilai berdasarkan bobot
            const bobotUts = uts * 0.15;
            const bobotUas = uas * 0.15;
            const bobotUkk = ukk * 0.70;
            // Menghitung total nilai akhir
            const nilaiAkhir = bobotUts + bobotUas + bobotUkk;
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
//# sourceMappingURL=Penilaian.js.map