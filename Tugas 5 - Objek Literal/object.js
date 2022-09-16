// Soal 1

function arrayToObject(arr) {
    var now = new Date()
    var thisYear = now.getFullYear() // 2020 (tahun sekarang)

    var obj = {}
    for (let i = 0; i < arr.length; i++) {

        obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: (arr[i][3] && thisYear >= arr[i][3] ? thisYear - arr[i][3] : 'Invalid Birth Year')
        }
        console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]}: `, obj)
    }

    if (!arr || arr.length === 0) {
        console.log("")
    }
}

// Driver Code
var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
arrayToObject(people)

var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]]
arrayToObject(people2)

arrayToObject([])

// Soal 2

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    var result = []
    for (let i = 0; i < arrPenumpang.length; i++) {
        result[i] = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: ((rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * 2000)
        }
    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));

console.log(naikAngkot([]));

// Soal 3

function nilaiTertinggi(siswa) {
    var result = {}
    for (let i = 0; i < siswa.length; i++) {
        if (typeof result[siswa[i].class] !== 'undefined') {
            if (result[siswa[i].class].score < siswa[i].score) {
                result[siswa[i].class] = {
                    name: siswa[i].name,
                    score: siswa[i].score
                }
            }
        } else {
            result[siswa[i].class] = {
                name: siswa[i].name,
                score: siswa[i].score
            }
        }
    }
    return result
}

// TEST CASE
console.log(nilaiTertinggi([
    {
        name: 'Asep',
        score: 90,
        class: 'adonis'
    },
    {
        name: 'Ahmad',
        score: 85,
        class: 'vuejs'
    },
    {
        name: 'Regi',
        score: 74,
        class: 'adonis'
    },
    {
        name: 'Afrida',
        score: 78,
        class: 'reactjs'
    }
]));


console.log(nilaiTertinggi([
    {
        name: 'Bondra',
        score: 100,
        class: 'adonis'
    },
    {
        name: 'Putri',
        score: 76,
        class: 'laravel'
    },
    {
        name: 'Iqbal',
        score: 92,
        class: 'adonis'
    },
    {
        name: 'Tyar',
        score: 71,
        class: 'laravel'
    },
    {
        name: 'Hilmy',
        score: 80,
        class: 'vuejs'
    }
]));