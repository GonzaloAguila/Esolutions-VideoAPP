const { getAll, getOne, createOne, checkOne } = require('../services/categories');

const categoriesController = {
    async getCategories(req, res) {
        try {
            const allCategories = await getAll();
            if (!allCategories.length) {
                return res.status(400).json({
                    status: 404,
                    message: 'Categorias no encontradas',
                });
            }
            return res.status(200).json({ categories: allCategories });
        } catch (e) {
            console.log(e);
            res.status(500).send('Algo salio mal');
        }
    },
    async getCategory(req, res) {
        try {
            const category = await getOne(req.params.name);
            if (!category) {
                return res.status(400).json({
                    status: 404,
                    message: 'Categoria no encontrada',
                });
            }
            res.status(200).json(category);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    async newCategory(req, res) {
        try {
            if (!req.body.name) {
                return res.status(400).json({
                    status: 400,
                    message: 'Nombre invalido o vacio',
                });
            }
            const checkCategory = await checkOne(req.body);
            if (checkCategory) {
                return res.status(400).json({
                    status: 400,
                    message: 'Categoria ya existe, intente con otro nombre.',
                });
            }
            const newCategory = await createOne(req.body);
            res.status(200).json(newCategory);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
};

module.exports = categoriesController;
