const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController.js')

router.get('/',CategoryController.getAll);
router.get('/:id',CategoryController.getAll);
router.post('/',CategoryController.insert);
router.delete('/:id',CategoryController.delete);

module.exports=router;