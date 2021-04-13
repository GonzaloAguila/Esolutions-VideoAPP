const express = require('express');
const router = express();
const { getCategories, newCategory, getCategory } = require('../controllers/categories');

router.get('/', getCategories);
router.get('/:name', getCategory);
router.post('/newcategory', newCategory);

module.exports = router;
