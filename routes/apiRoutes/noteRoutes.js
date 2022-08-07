const router = require("express").Router();
const fs = require('fs');
const { createNewNote, deleteNote } = require("../../lib/notes");

router.get('/notes', (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get reviews`);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);
        res.json(parsedNotes)
        };
    });
});

router.post('/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a review`);
    createNewNote(req.body)
    res.json();
});

router.delete('/notes/:id', (req, res) => {
    // Log that a DELETE request was received
    console.info(`${req.method} request received to add a review`);
    deleteNote(req.params.id);
    res.json();
});


module.exports = router;