const mongoose = require('mongoose');

const category = new mongoose.Schema({
    name: {
        type: String,
    },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'video'}],
});

module.exports = Category = mongoose.model('category', category);
