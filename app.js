const express = require("express");
const app = express();
require("dotenv").config();

const mailHandler = require("./routes/mail.routes");

// set json as default
app.use(express.json());

// set json spacing to use tabs
app.set("json spaces", 2);

// single route to send mail to clients
app.use("/mail", mailHandler);

app.listen(2000, async () => {
	console.log("Server is running on port 2000");
});
