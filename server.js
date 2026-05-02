const express = require("express");
require("dotenv").config();

const server = express();
server.use(express.json());

const PORT = process.env.PORT || 3000;

server.get("/ci-cd", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <title>CI/CD Demo</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .card {
                background: rgba(255, 255, 255, 0.1);
                padding: 40px;
                border-radius: 15px;
                text-align: center;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            h1 {
                font-size: 32px;
                margin-bottom: 10px;
            }
            p {
                font-size: 18px;
                opacity: 0.9;
            }
            .status {
                margin-top: 20px;
                padding: 10px 20px;
                border-radius: 20px;
                background: #00ffcc;
                color: #000;
                display: inline-block;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🚀 CI/CD Running</h1>
            <p>Deploy thành công!</p>
            <p>By Tran Minh Nhat 🤖</p>
            <div class="status">Status: 200 OK</div>
        </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});