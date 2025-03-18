const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const bookRoutes = require("./routes/books");
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
