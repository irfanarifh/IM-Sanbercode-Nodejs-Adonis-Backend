class Siswa {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(strname) {
        this._name = strname
    }
}

export default Siswa