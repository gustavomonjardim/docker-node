const express = require("express");
const db = require("./db");
const app = express();

const port = 3000;

app.get("/", async (req, res) => {
  try {
    let name = req.query.name;
    await db.add(name);
    const rows = await db.list();
    const list = rows.map((row) => `<li>${row.name}</li>`).join("");
    res.status(200).send("<h1>Full Cycle Rocks!</h1><ul>" + list + "</ul>");
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
