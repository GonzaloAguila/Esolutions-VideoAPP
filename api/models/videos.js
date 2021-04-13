const mongoose = require('mongoose');

const video = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    sources: [{ type: String }],
    thumb: {
        type: String,
    },
});

module.exports = Video = mongoose.model('video', video);
