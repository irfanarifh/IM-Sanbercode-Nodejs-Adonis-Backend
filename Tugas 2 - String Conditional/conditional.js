// If - Else

var nama = "John"
var peran = "Guard"

if (nama && peran){
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
    if (peran == 'Penyihir') {
        console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
    }else if (peran == 'Guard') {
        console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
    }else if (peran == 'Werewolf') {
        console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
    }
} else {
    if (!nama) {
        console.log("Nama harus diisi!")
    } else {
        console.log("Halo John, Pilih peranmu untuk memulai game!")
    }
}

// Switch Case

var hari = 17; 
var bulan = 8; 
var tahun = 1945;

var bulanString = ""
switch (bulan) {
    case 1: bulanString = "Januari"; break;
    case 2: bulanString = "Februari"; break;
    case 3: bulanString = "Maret"; break;
    case 4: bulanString = "April"; break;
    case 5: bulanString = "Mei"; break;
    case 6: bulanString = "Juni"; break;
    case 7: bulanString = "Juli"; break;
    case 8: bulanString = "Agustus"; break;
    case 9: bulanString = "September"; break;
    case 10: bulanString = "Oktober"; break;
    case 11: bulanString = "November"; break;
    case 12: bulanString = "Desember"; break;
    default: break;
}

console.log(`${hari} ${bulanString} ${tahun}`)