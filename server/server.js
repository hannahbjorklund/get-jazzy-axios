const express = require('express');

const app = express();
const PORT = 5001;

const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

app.use(express.static('server/public'));
app.use(express.json());

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs
app.get('/song', (req, res) => {
    res.send(songListArray);
});

// POST route
app.post('/artist', (req, res) => {
    res.sendStatus(201);
    let newArtist = req.body;
    console.log(newArtist);
    artistListArray.push(newArtist);
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
