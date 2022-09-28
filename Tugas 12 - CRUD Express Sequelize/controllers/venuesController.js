const { Venues } = require('../models');

class VenuesController {
    static async index(req, res) {
        const venues = await Venues.findAll()

        res.status(200).json({
            message: "Success",
            data: venues
        })
    }

    static async show(req, res) {
        try {
            let id = req.params.id
            let venues = await Venues.findByPk(id)
            if (venues) {
                res.status(200).json({
                    message: "Success",
                    data: venues
                })
            } else {
                res.status(401).json({
                    status: "Failed",
                    message: "Data tidak ditemukan"
                })
            }
        } catch (error) {
            res.status(401).json({
                status: "Failed",
                message: "data gagal ditampilkan",
                msg: error
            })
        }
    }

    static async store(req, res) {
        try {
            let name = req.body.name
            let address = req.body.address
            let phone = req.body.phone

            const newVenue = await Venues.create({
                name: name,
                address: address,
                phone: phone
            })

            res.status(200).json({
                status: "success",
                message: "Venue berhasil ditambah"
            })
        } catch (error) {
            res.status(401).json({
                status: "Failed",
                message: "gagal menambah Venue",
                msg: error.errors.map((e) => e.message)
            })
        }
    }

    static async update(req, res) {
        try {
            let name = req.body.name
            let address = req.body.address
            let phone = req.body.phone

            await Venues.update(
                {
                    name: name,
                    address: address,
                    phone: phone
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )

            res.status(200).json({
                status: "success",
                message: "Venue berhasil diupdate"
            })
        } catch (error) {
            res.status(401).json({
                status: "Failed",
                message: "gagal mengubah Venue",
                msg: error.errors.map((e) => e.message)
            })
        }
    }

    static async destroy(req, res) {
        try {
            await Venues.destroy({
                where: {
                    id: req.params.id
                }
            })

            res.status(200).json({
                status: "success",
                message: "Venue berhasil dihapus"
            })
        } catch (error) {
            res.status(401).json({
                status: "Failed",
                message: "gagal menghapus Venue",
                msg: error
            })
        }
    }
}

module.exports = VenuesController