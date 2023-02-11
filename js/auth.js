const express = require("express");
const app = express();
app.listen(3000);
app.use(express.json());
const { readFile } = require("fs").promises;
require("dotenv").config();
const Moralis = require("moralis").default;
const base58 = require("bs58");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", async (req, res) => {
  res.send(await readFile("./login.html", "utf8"));
});

const init = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });
};
init();

app.post("/requestMessage", async (req, res) => {
  const { address } = req.body;

  const response = await Moralis.Auth.requestMessage({
    network: "solana",
    solNetwork: "devnet",
    address: address,
    domain: "localhost",
    statement: "Sign the message to authenticate",
    uri: "http://localhost:3000/",
    timeout: 60,
  }).catch((e) => {
    res.status(400).json({ e });
  });

  res.status(200).json({ data: response });
});

app.post("/verifySignature", async (req, res) => {
  const { signature, message } = req.body;
  const response = await Moralis.Auth.verify({
    message,
    signature: base58.encode(signature.data),
    network: "solana",
  }).catch((e) => {
    res.status(400).json(e);
  });
  const token = jwt.sign(response.data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10000s",
  });

  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60),
    })
    .json({ data: response.data });
});

app.get("/verifyAuth", (req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.json({ auth: false });
    res.json({ auth: true });
  });
});

app.delete("/logout", async (req, res) => {
  res.clearCookie("token");
  res.json({ auth: false });
});
