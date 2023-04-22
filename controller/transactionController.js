const { PAY_ID, MERCHANT_CODE } = require("../config/config"); // Importing config variables

const getTransaction = async (req, res) => {
	// Declaring the getTransaction function
	const samplePaymentRequest = {
		// Sample payment request object
		merchant_code: MERCHANT_CODE, // Assigning MERCHANT_CODE from config to merchant_code property
		pay_item_id: PAY_ID, // Assigning PAY_ID from config to pay_item_id property
		transactionReference: "sample_txn_ref_123", // Sample transaction reference
		amount: 10000, // Sample amount
		currency: 566, // ISO 4217 numeric code of the currency used
		mode: "TEST", // Sample mode
	};

	const merchantCode = samplePaymentRequest.merchant_code; // Assigning merchant_code from samplePaymentRequest to merchantCode variable
	const transactionReference = samplePaymentRequest.transactionReference; // Assigning transactionReference from samplePaymentRequest to transactionReference variable
	const amount = samplePaymentRequest.amount; // Assigning amount from samplePaymentRequest to amount variable

	try {
		const response = await fetch(
			// Making a GET request using fetch to the specified endpoint with required parameters and headers
			`https://qa.interswitchng.com/collections/api/v1/gettransaction.json?merchantcode=${merchantCode}&transactionreference=${transactionReference}&amount=${amount}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json", // Specifying the content type of the request body
				},
			}
		);

		const data = await response.json(); // Parsing the response JSON into a JavaScript object and assigning it to the data variable
		res.json(data); // Sending the data as a JSON response
	} catch (error) {
		console.error(error); // Logging the error to the console
		res.status(500).json({ message: "Error fetching transaction details" }); // Sending an error response with a message
	}
};

module.exports = {
	// Exporting the getTransaction function as a module
	getTransaction,
};
