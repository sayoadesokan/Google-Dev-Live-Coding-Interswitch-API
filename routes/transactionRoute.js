const express = require("express");
const {
	getTransaction,
	testing,
} = require("../controller/transactionController"); // importing controller functions
const router = express.Router();

// defining a route for getting transaction details
router.get("/transactions", getTransaction);

module.exports = router;

/* COMMENTS:
- Require the Express framework and the transaction controller functions
- Create an instance of the Router object
- Define a GET route at the /transactions endpoint that calls the getTransaction function from the controller
- Export the router so it can be used in other files
*/
