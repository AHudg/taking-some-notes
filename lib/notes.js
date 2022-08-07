const fs = require('fs');
const uuid = require('../helpers/uuid');

function createNewNote(data) {
    // Destructure
    const { title, text } = data;

    // If properties are present..
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
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

module.exports = {
    createNewNote,
}