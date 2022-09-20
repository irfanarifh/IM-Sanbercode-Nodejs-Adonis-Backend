class Kelas {
    constructor(name, level, intructor) {
        this._name = name
        this._students = []
        this._level = level
        this._intructor = intructor
    }

    get name() {
        return this._name
    }

    set name(strname) {
        this._name = strname
    }

    get level() {
        return this._level
    }

    set level(strlevel) {
        this._level = strlevel
    }

    get intructor() {
        return this._intructor
    }

    set intructor(strintructor) {
        this._intructor = strintructor
    }

    addStudent(student) {
        this._students.push(student)
    }
}

export default Kelas