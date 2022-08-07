const router = require("express").Router();
const fs = require('fs');
const { createNewNote, deleteNote } = require("../../lib/notes");

// endpoint for the GET fetch request from public/assets/js/index.js 
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received to get reviews`);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);
        // Returns the read file's data
        res.json(parsedNotes)
        };
    });
});

// endpoint for the POST fetch request from public/assets/js/index.js 
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a review`);
    createNewNote(req.body)
    res.json();
});

// endpoint for the DELETE fetch request from public/assets/js/index.js 
router.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request received to add a review`);
    deleteNote(req.params.id);
    res.json();
});


module.exports = router;