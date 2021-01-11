const router = require('express').Router();
const { DjModel } = require('../../db');


router.get('/', async (req, res) => {
    const djs = await DjModel.findAll();
    res.json(djs);
})

router.post('/', async (req, res) => {
    const dj_ = await DjModel.create(req.body)
    res.json(dj_)
})

router.put('/:id', async (req, res) => {
    await DjModel.update(req.body, {
        where: {id: req.params.id}
    })
    res.json({success:'Le Dj a été modifié'})
})

router.delete('/:id', async (req, res) => {
    await DjModel.destroy(req.body, {
        where: {id: req.params.id}
    });
    res.json({success:'Le Dj a été effacé'});
})


module.exports = router;
