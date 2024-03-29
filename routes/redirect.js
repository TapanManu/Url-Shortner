const express = require('express');

const router = express.Router();

const Url = require('../models/UrlModel');

router.get('/:code', async (req,res) => {
    try{
        const url = await Url.findOne({
            urlCode : req.params.code
        });
        if(url){
            return res.redirect(url.longUrl);
        }
        else{
            return res.status(404).json('No Url found');
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json('Server Error');
    }
});

module.exports = router;