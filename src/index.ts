require('dotenv').config();
const express = require('express');
const multer = require('multer');
const Minio = require('minio');
const cors = require('cors');

const app = express();
app.use(cors());

const minioClient = new Minio.Client({
    endPoint: process.env.S3_ADDRESS,
    port: 443,
    useSSL: true,
    accessKey: process.env.S3_KEY_ID,
    secretKey: process.env.S3_KEY_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No video uploaded.');
    }

    const file = req.file.buffer;
    const fileName = `videos/${Date.now()}-${req.file.originalname}.webm`;

    minioClient.putObject(process.env.S3_BUCKET, fileName, file, (err,) => {
        if (err) {
            return res.status(500).send('Error video uploading to Minio.');
        }

        return res.send('Video uploaded successfully.');
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});