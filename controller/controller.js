const { PAY_ID, MERCHANT_CODE } = require('../config/config');

const chargeCard = async (req, res) => {
  const samplePaymentRequest = {
    merchant_code: MERCHANT_CODE,
    pay_item_id: PAY_ID,
    transactionReference: 'sample_txn_ref_123',
    amount: 10000,
    currency: 566, // ISO 4217 numeric code of the currency used
    mode: 'TEST',
  };

  const merchantCode = samplePaymentRequest.merchant_code;
  const transactionReference = samplePaymentRequest.transactionReference;
  const amount = samplePaymentRequest.amount;

  try {
    const response = await fetch(
      `https://qa.interswitchng.com/collections/api/v1/gettransaction.json?merchantcode=${merchantCode}&transactionreference=${transactionReference}&amount=${amount}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching transaction details' });
  }
};

module.exports = {
  chargeCard,
};
