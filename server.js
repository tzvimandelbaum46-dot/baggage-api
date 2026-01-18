const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My website is live ✅</title>
        <style>
          body { font-family: Arial, sans-serif; background:#f6f7fb; margin:0; }
          .wrap { max-width: 720px; margin: 80px auto; padding: 24px; }
          .card { background:white; border-radius: 14px; padding: 28px; box-shadow: 0 10px 30px rgba(0,0,0,.08); }
          h1 { margin:0 0 10px; }
          p { margin: 0 0 18px; color:#333; line-height:1.4; }
          button { padding: 12px 16px; border:0; border-radius: 10px; cursor:pointer; font-weight:600; }
          .btn { background:#2b59ff; color:white; }
          .note { margin-top: 14px; font-size: 13px; color:#666; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="card">
            <h1>My website is live ✅</h1>
            <p>If you can see this page, your Render deploy is working.</p>
            <button class="btn" onclick="alert('Button works ✅')">Test Button</button>
            <div class="note">Next step: we can add real pages, forms, etc.</div>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Optional: keep an API route if you already have one
app.get("/health", (req, res) => res.send("OK"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
