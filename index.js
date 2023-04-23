const express = require("express"); // importing express package
const transactionRoute = require("./routes/transactionRoute"); // importing the transactionsRoute
const app = express(); // creating an instance of express

const port = process.env.PORT || 8080; // setting the port to either the environment variable or port 8080

app.use("/api/v1", transactionRoute); // using the router for all routes with prefix /api/v1
app.get("/", (req, res) => {
	// setting up a basic get route for "/"
	res.send("Hello world"); // sending a response of "Hello world"
});

app.listen(port, () => {
	// starting the server and logging a message on successful startup
	console.log(`listening on http://localhost:${port}`);
});
