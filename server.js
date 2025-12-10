const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));

// Ping test ke liye simple response
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Download speed test ke liye dummy data (garbage file)
app.get('/download', (req, res) => {
    // 10MB ka garbage data buffer banayenge
    const size = 10 * 1024 * 1024; 
    const buffer = Buffer.alloc(size, 'a');
    res.send(buffer);
});

// Upload speed test ke liye empty receiver
app.post('/upload', express.raw({ limit: '50mb', type: '*/*' }), (req, res) => {
    res.send('received');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});