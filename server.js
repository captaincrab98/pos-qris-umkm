const express = require("express");
const app = express();
app.use(express.json());

let transaksi = [];

app.post("/transaksi", (req, res) => {
  const data = {
    ...req.body,
    waktu: new Date().toLocaleString()
  };
  transaksi.push(data);
  res.json({ message: "Tersimpan" });
});

app.get("/transaksi", (req, res) => {
  res.json(transaksi);
});

app.post("/verifikasi-qris", (req, res) => {
  const { merchant } = req.body;

  if (merchant === "Ayam Penyet Cabe Hijau") {
    res.json({ status: "valid" });
  } else {
    res.json({ status: "invalid" });
  }
});

app.use(express.static("public"));

app.listen(3000, () => console.log("Server jalan"));
