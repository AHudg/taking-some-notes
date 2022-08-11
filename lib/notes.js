const fs = require('fs');
// used to give specific id's to the notes
import { v4 as uuidv4 } from 'uuid';

function createNewNote(body) {
    // Destructure
    const { title, text } = body;

    // If properties are present..
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
            // Convert string into JSON object
            const parsedNotes = JSON.parse(data);

            parsedNotes.push(newNote);

            // Write updated reviews back to the file
            fs.writeFile('./db/db.json',
                JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                  writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated reviews!')
                );

            };
        });
    };
};

function deleteNote(noteId) {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);
        
        const filteredNotes = parsedNotes.filter(element => element.id !== noteId);

            // Write updated reviews back to the file
            fs.writeFile('./db/db.json',
            JSON.stringify(filteredNotes, null, 4),
            (writeErr) =>
                writeErr
                ? console.error(writeErr)
                : console.info('Successfully updated reviews!')
            );
        };
    });
};

module.exports = {
    createNewNote,
    deleteNote,
}