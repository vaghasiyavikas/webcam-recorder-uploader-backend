# Backend Node.js Project for Video Upload

This is a Node.js backend project that handles video uploads and stores them in a Minio S3 server. It provides an API endpoint for uploading videos and securely stores the required credentials.

## Prerequisites

- Node.js installed on your machine
- Minio server configured with the appropriate access credentials
- Basic knowledge of Node.js, Express, and Minio

## Installation

1. Clone the repository or download the project files.
2. Run `npm install` to install the required dependencies.
3. Set up the environment variables in a `.env` file in the root directory. Use the provided sample `.env.example` file as a template.
4. Start the server using `npm start` or `node app.js`.

## Environment Variables

- `S3_KEY_ID`: Access key for the Minio S3 server.
- `S3_KEY_SECRET`: Secret key for the Minio S3 server.
- `S3_ADDRESS`: URL for the Minio S3 server.
- `S3_BUCKET`: Bucket name for storing the uploaded videos.

Make sure to set these environment variables before starting the server.

## API Endpoint

- `POST /upload`: This endpoint accepts video uploads and stores them in the Minio S3 server. Make sure to send the video file with the key "video" in the request body.