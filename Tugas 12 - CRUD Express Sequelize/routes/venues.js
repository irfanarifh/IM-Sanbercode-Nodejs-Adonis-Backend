var express = require('express');
var router = express.Router();

/* GET home page. */
const VenuesController = require('../controllers/venuesController')

router.get('/', VenuesController.index)
router.get('/:id', VenuesController.show)
router.post('/', VenuesController.store)
router.put('/:id', VenuesController.update)
router.delete('/:id', VenuesController.destroy)

module.exports = router;
