const Video = require('../models/videos');

const videosServices = {
    async getAll() {
        try {
            const allvideos = await Video.find();
            return allvideos;
        } catch (error) {
            return error.response;
        }
    },
    async getOne(id) {
        try {
            const video = await Video.findById({ _id: id });
            return video;
        } catch (error) {
            return error.response;
        }
    },
    async createOne(body) {
        try {
            const newVideo = new Video({
                title: body.title,
                description: body.description,
                sources: [body.sources[0], body.sources[1]],
                thumb: body.thumb,
            });
            await newVideo.save();
            await Category.findOneAndUpdate({ name: body.categoryName }, { $push: { videos: newVideo } });
            return newVideo;
        } catch (error) { 
            return error.response;
        }
    },
    async checkOne(title) {
        try {
            const video = await Video.findOne({ title });
            return video ? true : false;
        } catch (error) {
            return error.response;
        }
    },
};
module.exports = videosServices;
