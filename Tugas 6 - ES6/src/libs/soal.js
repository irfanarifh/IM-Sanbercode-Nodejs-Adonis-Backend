const sapa = (params) => {
    const nama = params[0]

    console.log(`halo selamat pagi, ${nama}`)
}

const convert = (params) => {
    const [nama, domisili, umur] = params

    const result = {
        nama,
        domisili,
        umur
    }

    console.log(result)
}

const checkScore = (params) => {
    const arr = params[0].split(",")

    const result = {}
    for (let i = 0; i < arr.length; i++) {
        result[arr[i].split(":")[0]] = arr[i].split(":")[1]
    }

    console.log(result)
}

const filterData = (params) => {
    const [namaKelas] = params

    const data = [
        { name: "Ahmad", kelas: "adonis" },
        { name: "Regi", kelas: "laravel" },
        { name: "Bondra", kelas: "adonis" },
        { name: "Iqbal", kelas: "vuejs" },
        { name: "Putri", kelas: "Laravel" }
    ]

    const result = data.filter((value) => value.kelas.toLowerCase().includes(namaKelas.toLowerCase()))

    console.log(result)
}

export { sapa, convert, checkScore, filterData }