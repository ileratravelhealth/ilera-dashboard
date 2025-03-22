import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import dotenv from 'dotenv';
import {isDev} from "./src/Utils/BaseUrl.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = isDev ? process.env.VITE_LOCAL_PORT : process.env.VITE_PROD_PORT;
console.warn('isDev', isDev)
app.listen(PORT, () => {
    console.log(`Server is running on port 46.101.79.101:${PORT}`);
});
// http://13.43.16.29:5000