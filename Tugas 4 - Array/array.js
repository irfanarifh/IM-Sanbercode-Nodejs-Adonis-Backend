// Soal 1

function dataHandling(data) {
    var kata = ""
    for (let i = 0; i < data.length; i++) {
        kata += `Nomor ID: ${data[i][0]}\n`
        kata += `Nama Lengkap: ${data[i][1]}\n`
        kata += `TTL: ${data[i][2]} ${data[i][3]}\n`
        kata += `Hobi: ${data[i][4]}\n`
        kata += "\n"
    }
    return kata
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
console.log(dataHandling(input))

// Soal 2

function balikKata(data) {
    var kata = ""
    for (let i = data.length - 1; i >= 0; i--) {
        kata += data[i]
    }
    return kata
}

console.log(balikKata("SanberCode"))
console.log(balikKata("racecar"))
console.log(balikKata("kasur rusak"))
console.log(balikKata("haji ijah"))
console.log(balikKata("I am Sanbers"))