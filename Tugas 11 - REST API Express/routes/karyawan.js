var express = require('express');
var router = express.Router();

const userController = require('../controllers/karyawanController')

router.get('/', userController.findAll)
router.post('/:name/siswa', userController.addSiswa)

module.exports = router;
