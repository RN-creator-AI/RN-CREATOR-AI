const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 RN Creator AI Server is Running!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
</body> 
<nav class="navbar">
  <a href="index.html">Home</a>
  <a href="chat.html">AI Chat</a>
  <a href="image.html">AI Image</a>
  <a href="video.html">AI Video</a>
  <a href="seo.html">SEO</a>
</nav>
