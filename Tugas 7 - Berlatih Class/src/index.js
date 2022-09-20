import Bootcamp from "./libs/bootcamp";
import Student from "./libs/student";

const sanber = new Bootcamp("sanbercode")

sanber.createClass("Laravel", "beginner", "abduh")
sanber.createClass("React", "beginner", "abdul")

console.log(sanber.classes)

let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
names.map((nama, index) => {
    let newStud = new Student(nama)
    let kelas = sanber.classes[index % 2].name
    sanber.register(kelas, newStud)
})
// menampilkan data kelas dan student nya
sanber.classes.forEach(kelas => {
    console.log(kelas)
});