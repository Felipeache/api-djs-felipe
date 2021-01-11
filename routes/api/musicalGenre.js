const router = require('express').Router();
const { MusicalGenre } = require('../../db');


router.get('/', async (req, res) => {
    const musical_genres = await MusicalGenre.findAll();
    res.json(musical_genres);
})

router.post('/', async (req, res) => {
    const musical_genre = await MusicalGenre.create(req.body)
    res.json(musical_genre)
})

router.put('/:id', async (req, res) => {
    await MusicalGenre.update(req.body, {
        where: {id: req.params.id}
    })
    res.json({success:'Le genre musical a été modifié'})
})

router.delete('/:id', async (req, res) => {
    await MusicalGenre.destroy(req.body, {
        where: {id: req.params.id}
    });
    res.json({success:'Le genre musical a été effacé'});
})


module.exports = router;
