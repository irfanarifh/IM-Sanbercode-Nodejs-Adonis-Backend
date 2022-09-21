import Karyawan from "./karyawan";
import Trainer from "./trainer";
import Siswa from "./siswa";
import fs from "fs";
import fsPromises from "fs/promises"
import "core-js"

const path = "data.json"

class Bootcamp {
    static register(params) {
        const [name, password, role] = params[0].split(",")
        fs.readFile(path, (err, value) => {
            if (err) {
                console.log(err)
            }

            let dataJSON = JSON.parse(value)
            let karyawan = new Karyawan(name, password, role)
            dataJSON.push(karyawan)
            fs.writeFile(path, JSON.stringify(dataJSON), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Berhasil register")
                }
            })
        })
    }

    static login(params) {
        let [name, password] = params[0].split(",")

        fsPromises.readFile(path).then((value) => {
            let dataJSON = JSON.parse(value)
            let indexJSON = dataJSON.findIndex((val) => val._name == name)

            if (indexJSON == -1) {
                console.log("Data Tidak Ditemukan");
            } else {
                let karyawan = dataJSON[indexJSON]

                if (karyawan._password == password) {
                    karyawan._isLogin = true

                    dataJSON.splice(indexJSON, 1, karyawan)
                    return fsPromises.writeFile(path, JSON.stringify(dataJSON)).then(() => {
                        console.log("Berhasil Login");
                    })
                } else {
                    console.log("Password yang Dimasukkan Salah");
                }
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    static async addSiswa(params) {
        const [name, trainerName] = params[0].split(",")

        await fsPromises.readFile(path).then((value) => {
            let dataJSON = JSON.parse(value)

            let indexAdminLogin = dataJSON.findIndex((val) => val._role == "admin")
            if (indexAdminLogin == -1) {
                console.log("Tidak Ada Role Admin");
            } else {
                let admin = dataJSON[indexAdminLogin]
                if (admin._isLogin == false) {
                    console.log('Tidak Ada Admin yang Login');
                } else {
                    let indexJSON = dataJSON.findIndex((val) => val._name == trainerName)
                    let siswa = new Siswa(name)

                    if (indexJSON == -1) {
                        let trainer = new Trainer(trainerName)
                        trainer._students.push(siswa)
                        dataJSON.push(trainer)
                    } else {
                        let trainer = dataJSON[indexJSON]
                        trainer._students.push(siswa)
                        dataJSON.splice(indexJSON, 1, trainer)
                    }

                    return fsPromises.writeFile(path, JSON.stringify(dataJSON)).then(() => {
                        console.log("Berhasil add siswa");
                    })
                }
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default Bootcamp