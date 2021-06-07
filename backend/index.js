const express = require("express");
const cors = require("cors");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(cors());

app.use("/api", routes);

const port = 5000;
app.listen(port, () => console.log(`Node App running on PORT ${port}...`));
