const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Used to delegate routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(port, () => {
    console.log(`API server now on port ${port}.`);
    console.log(`View the projects here: http://localhost:${port}`);
});