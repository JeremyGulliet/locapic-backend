var express = require('express');
var router = express.Router();

const Marker = require('../models/markers');

// route POST pour ajouter un marquer un BDD

router.post('/places', (req, res) => {
    const { nickname, name, latitude, longitude } = req.body;
    const newMarker = new Marker({ nickname, name, latitude, longitude });

    newMarker.save().then(() => {
        res.json({ result: true });
    });
});

// route GET pour récupérer les marqueurs depuis la BDD

router.get('/places/:nickname', (req, res) => {
    Marker.find({ nickname: req.params.nickname }).then(data => {
        res.json({ result: true, places: data })
    })
})

// route DELETE pour supprimer en marquer en BDD

router.delete('/places', (req, res) => {
    Marker.deleteOne({ nickname: req.body.nickname, name: req.body.name })
        .then(data => {
            res.json({ result: true });
        })
})

module.exports = router;
