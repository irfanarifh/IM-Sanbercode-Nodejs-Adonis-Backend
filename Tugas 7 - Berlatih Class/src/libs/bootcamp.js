import Kelas from "./kelas";

class Bootcamp {
    constructor(name) {
        this._name = name
        this._classes = []
    }

    get name() {
        return this._name
    }

    set name(strname) {
        this._name = strname
    }

    get classes() {
        return this._classes
    }

    createClass(name, level, intructor) {
        const newKelas = new Kelas(name, level, intructor)
        this._classes.push(newKelas)
    }

    register(kelas, student) {
        const getKelas = this._classes.find((value) => value._name === kelas)
        getKelas.addStudent(student)
    }
}

export default Bootcamp