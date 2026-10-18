import * as readline from "readline"; //Digunakan untuk mengimpor module readline dari Node.js. 
const rl = readline.createInterface({ //Digunakan untuk membuat interface yang  menghubungkan program dengan terminal. 
    //stdin merupakan standard input, yaitu sumber input dari keyboard/terminal. 
    input: process.stdin, //process.stdin digunakan agar program dapat membaca  input dari user.  
    //stdout merupakan standard output, yaitu output yang ditampilkan ke terminal. 
    output: process.stdout //process.stdout digunakan agar program dapat menampilkan pertanyaan atau output ke terminal. 
}); 
 
rl.question("Masukkan nama Anda: ", (nama: string) => { 
    rl.question("Masukkan usia Anda: ", (inputUsia: string) => { 
        let usia: number = Number(inputUsia); //konversi dari string ke number 
        rl.question("Masukkan kota asal Anda: ", (kota: string) => { 
            console.log("Halo, " + nama); 
            console.log("Usia saya, " + usia) 
            console.log("kota asal saya, " + kota); 
            rl.close(); //memberitahu program bahwa proses input sudah selesai. 
        }); 
    }); 
}); 