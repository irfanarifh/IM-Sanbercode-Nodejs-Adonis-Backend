class Karyawan {
    constructor(name, password, role) {
        this._name = name
        this._password = password
        this._role = role
        this._isLogin = false
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
}

export default Karyawan