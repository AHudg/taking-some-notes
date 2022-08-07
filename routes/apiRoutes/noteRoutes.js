const router = require("express").Router();
const db = require('../../db/db.json');
const { createNewNote } = require("../../lib/notes");

router.get('/notes', (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get reviews`);

    // Send a message to the client
    res.json(db);
});

router.post('/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a review`);
    createNewNote(req.body)
});


module.exports = router;