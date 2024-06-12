const { Razorpay } = require("../middleware/razorpay.middelware");
const crypto = require("crypto");

const secret_key = "1234567890";

app.post("/order", async (req, res) => {
  // initializing razorpay
  const razorpay = new Razorpay({
    key_id: "rzp_test_duriXqtOASo11b",
    key_secret: "cEzy5mD7Lm9f8B2OFmirCknS",
  });

  // setting up options for razorpay order.
  const options = {
    amount: 200 * 100,
    currency: "INR",
    receipt: "any unique id for every order",
    payment_capture: 1,
  };
  try {
    const response = await razorpay.orders.create(options);
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    res.status(400).send("Not able to create order. Please try again!");
  }
});

app.post("/paymentCapture", (req, res) => {
  // do a validation

  const data = crypto.createHmac("sha256", secret_key);

  data.update(JSON.stringify(req.body));

  const digest = data.digest("hex");

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");

    //We can send the response and store information in a database.

    res.json({
      status: "ok",
    });
  } else {
    res.status(400).send("Invalid signature");
  }
});

// here is the refund route

app.post("/refund", async (req, res) => {
  try {
    //Verify the payment Id first, then access the Razorpay API.
    const razorpay = new Razorpay({
      key_id: "rzp_test_duriXqtOASo11b",
      key_secret: "cEzy5mD7Lm9f8B2OFmirCknS",
    });
    const options = {
      payment_id: req.body.paymentId,

      amount: req.body.amount,
    };

    const razorpayResponse = await razorpay.refund(options);

    //We can send the response and store information in a database

    res.send("Successfully refunded");
  } catch (error) {
    console.log(error);

    res.status(400).send("unable to issue a refund");
  }
});
