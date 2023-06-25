const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
  c16abce7-3d67-404c-9c98-ac456c16dee7
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);