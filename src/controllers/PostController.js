const Post = require('../models/Post');

module.exports = {

    async index(req, res){
        const posts = await Post.find().sort('createdAt');
        return res.json(posts);
    },

    async store(req, res){
        const   { author, place, descriptiom, hashtags} = req.body;
        const   { filename: image } = req.file;

        const post = await Post.create({
            author,
            place,
            descriptiom,
            hashtags,
            image
        });

        return res.json({post});
    }

};