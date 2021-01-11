const router = require('express').Router();
const {Club} = require('../../db');



router.get('/', async (req, res) => {
    const clubs = await Club.findAll();
    res.json(clubs);
})

router.post('/', async (req, res) => {
    const club = await Club.create(req.body)
    res.json(club)
})

router.put('/:id', async (req, res) => {
    await Club.update(req.body, {
        where: {id: req.params.id}
    })
    res.json({success:'Le club a été modifié'})
})

router.delete('/:id', async (req, res) => {
    await Club.destroy({
        where: { id: req.params.id }
    })
    res.json({success: 'Le club a été effacé'})
})


module.exports = router;
