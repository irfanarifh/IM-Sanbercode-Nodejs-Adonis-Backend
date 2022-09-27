const fs = require('fs');
const fsPromises = require('fs/promises')

const path = 'data.json'

class karyawanController {
    static register(req, res) {
        fs.readFile(path, (err, data) => {
            if (err) {
                res.status(400).json({
                    error: "error data tidak terbaca"
                })
            } else {
                let existingData = JSON.parse(data)

                let { users } = existingData

                let { name, role, password } = req.body
                let newKaryawan = { name, role, password, isLogin: false }

                users.push(newKaryawan)

                let newData = { ...existingData, users }

                fs.writeFile(path, JSON.stringify(newData), (err) => {
                    if (err) {
                        res.status(400).json({ error: "error menyimpan data" })
                    } else {
                        res.status(201).json({ message: "berhasil register" })
                    }
                })
            }
        })
    }

    static findAll(req, res) {
        fs.readFile(path, (err, data) => {
            if (err) {
                res.status(400).json({ error: "error membaca data" })
            } else {
                let realData = JSON.parse(data)
                res.status(200).json({
                    message: "berhasil get karyawan",
                    data: realData.users
                })
            }
        })
    }

    static login(req, res) {
        fsPromises.readFile(path).then((data) => {
            let karyawanData = JSON.parse(data)

            let { users } = karyawanData

            let { name, password } = req.body

            let indexEmp = users.findIndex(user => user.name == name)

            if (indexEmp == -1) {
                res.status(404).json({ error: "data tidak ditemukan" })
            } else {
                let karyawan = users[indexEmp]

                if (karyawan.password == password) {
                    karyawan.isLogin = true

                    users.splice(indexEmp, 1, karyawan)
                    console.log(users)
                    return fsPromises.writeFile(path, JSON.stringify(karyawanData))
                } else {
                    res.status(400).json({ error: "password salah" })
                }
            }
        }).then(() => {
            res.status(200).json({ message: "berhasil login" })
        }).catch((err) => {
            console.log(err)
        })
    }

    static addSiswa(req, res) {
        let { name: trainerName } = req.params
        let { class: classes, name } = req.body

        fsPromises.readFile(path).then((value) => {
            let dataJSON = JSON.parse(value)
            let { users } = dataJSON

            let indexAdminLogin = users.findIndex((val) => val.role == "admin")
            if (indexAdminLogin == -1) {
                res.status(400).json({ message: "Tidak Ada Role Admin" })
            } else {
                let admin = users[indexAdminLogin]
                if (admin._isLogin == false) {
                    res.status(400).json({ message: "idak Ada Admin yang Login" })
                } else {
                    let indexJSON = users.findIndex((val) => val.name == trainerName)
                    let siswa = { name, classes }

                    if (indexJSON == -1) {
                        res.status(404).json({ error: "trainer tidak ditemukan" })
                    } else {
                        let trainer = users[indexJSON]
                        if (typeof trainer.students == 'undefined') {
                            trainer.students = []
                        }
                        trainer.students.push(siswa)
                        users.splice(indexJSON, 1, trainer)
                    }

                    return fsPromises.writeFile(path, JSON.stringify(dataJSON)).then(() => {
                        res.status(201).json({ message: "berhasil tambah siswa" })
                    })
                }
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}

module.exports = karyawanController