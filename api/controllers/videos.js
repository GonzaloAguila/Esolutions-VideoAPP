const { getAll, getOne, createOne, checkOne } = require('../services/videos');

const videosController = {
    async getVideos(req, res) {
        try {
            const allVideos = await getAll();
            if (!allVideos.length) {
                return res.status(400).json({
                    status: 404,
                    message: 'Videos no encontrados',
                });
            }
            return res.status(200).json(allVideos);
        } catch(e){
            console.log(e);
            res.status(500).send('Algo salio mal');
        }
    },
    async getVideo(req, res) {
        try {
            const video = await getOne(req.params.id);
            if (!video) {
                return res.status(400).json({
                    status: 404,
                    message: 'Video no encontrado',
                });
            }
            res.status(200).json(video);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    async newVideo(req, res) {
        try {
            if (!req.body.title || !req.body.sources || !req.body.description || !req.body.thumb || !req.body.categoryName) {
                return res.status(400).json({
                    status: 400,
                    message: 'Parametros invalidos. Checkee nuevamente.',
                });
            }
            const checkVideo = await checkOne(req.body.title);
            if (checkVideo) {
                return res.status(400).json({
                    status: 400,
                    message: 'Video ya existe.',
                });
            }
            const newVideo = await createOne(req.body);
            res.status(200).json(newVideo);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
};

module.exports = videosController;
