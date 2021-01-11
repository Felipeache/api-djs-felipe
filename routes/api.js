const router = require('express').Router();

const djsRouter = require('./api/dj')
const musicalGenresRouter = require('./api/musicalGenre')
const clubsRouter = require('./api/club')

router.get('/', (req, res) => {
    res.send("Oops, theres nothing here. You can go to:<br><br> \
            <b>/djs  <br>\
            /musicalgenre <br>\
            /clubs </b>")
})

router.use('/djs', djsRouter);
router.use('/musicalgenre', musicalGenresRouter);
router.use('/clubs', clubsRouter);

module.exports = router;
