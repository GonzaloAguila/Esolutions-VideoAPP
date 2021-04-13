const Category = require('../models/categories');

const categoriesServices = {
    async getAll() {
        try {
            const allCategories = await Category.find().populate('videos');
            return allCategories;
        } catch (error) {
            return error.response;
        }
    },
    async getOne(name) {
        try {
            const category = await Category.findOne({ name: name.toLowerCase() }).populate('videos');
            return category;
        } catch (error) {
            return error.response;
        }
    },
    async createOne(body) {
        try {
            const newCategory = new Category({
                name: body.name,
            });
            await newCategory.save();
            return newCategory;
        } catch (error) {
            return error.response;
        }
    },
    async checkOne(body) {
        try {
            const category = await Category.findOne({ name: body.name });
            return category ? true : false;
        } catch (error) {
            return error.response;
        }
    },
};
module.exports = categoriesServices;
