class Trainer {
    constructor(name) {
        this._name = name
        this._password = "123456"
        this._role = "trainer"
        this._isLogin = false
        this._students = []
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get password() {
        return this._password
    }

    set password(value) {
        this._password = value
    }

    get role() {
        return this._role
    }

    set role(value) {
        this._role = value
    }

    get isLogin() {
        return this._isLogin
    }

    set isLogin(value) {
        this._isLogin = value
    }

    addStudent(student) {
        this._students.push(student)
    }
}

export default Trainer