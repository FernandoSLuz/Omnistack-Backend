const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {

    async index(req, res){
        const posts = await Post.find().sort('createdAt');
        return res.json(posts);
    },

    async store(req, res){
        const   { author, place, descriptiom, hashtags} = req.body;
        const   { filename: image } = req.file;

        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality:70})
            .toFile(path.resolve(req.file.destination, 'resized', image))

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