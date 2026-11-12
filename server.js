import express from 'express';
import db from './db.js';
import cors from 'cors';
process.localEnvFile();
const app = express();
app.get('/api/notes', (req , res) => {
    try {
        const [rows] = await db.query("SELECT * FROM notes WHERE is_archived = FALSE ORDER BY created_at DESK");
        res.json(rows);
    } catch (err) {
        res.status(400).json({error: err.message});
    };
});
app.get('/api/notes/:note_id', async (req, res) => {
    const note_id = req.params.note_id;
    let query = "SELECT * FROM notes WHERE ID = " + note_id + ".";
    try {
        const [row]
    }
})
app.listen(process.env.PORT || 5000, () => {
    console.log('Listening on port ${process.env.PORT}')
});