const testing = (req, res) => {
  try {
    res.send('Test call is working');
  } catch (error) {
    console.log(error);
  }
};

const chargeCard = async (req, res) => {
  const samplePaymentRequest = {
    merchant_code: 'MX19329',
    pay_item_id: 'Default_Payable_MX19329',
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
  testing,
};
