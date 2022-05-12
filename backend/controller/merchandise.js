const MerchandiseProduct = require("../model/merchandiseProduct");
const MerchandisePurchase = require("../model/merchandisePurchase");
const MerchandisePayment = require("../model/merchandisePayment");
const Razorpay = require("razorpay");
exports.listMerchandiseProducts = async (req, res) => {
  const merchandiseProducts = await MerchandiseProduct.find();
  res.json(merchandiseProducts);
};

exports.getMerchandiseProduct = async (req, res) => {
  const merchandiseProduct = await MerchandiseProduct.findById(
    req.params.productId
  );
  res.json(merchandiseProduct);
};

exports.purchaseInitiliaze = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    userId: req.user.userId || "",
  };
  const merchandiseProduct = await MerchandiseProduct.findById(
    req.params.productId
  );

  if (!merchandiseProduct) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  var options = {
    amount: merchandiseProduct.price * 100,
    currency: "INR",
    receipt: user.email,
  };
  const order = await instance.orders.create(options);

  const merchandisePayment = new MerchandisePayment({
    user: user,
    product: merchandiseProduct._id,
    orderId: order.id,
    amount: merchandiseProduct.price,
    currency: "INR",
    status: "pending",
  });

  await merchandisePayment.save();

  const merchandisePurchase = new MerchandisePurchase({
    user: user,
    merchandiseProductId: merchandiseProduct._id,
    merchandisePaymentId: merchandisePayment._id,
  });

  res.json({
    success: true,
    message: "Payment request sent",
    result: {
      key: process.env.RAZORPAY_KEY_ID,
      paymentId: order.id,
      paymentAmount: merchandiseProduct.price,
      currency: "INR",
      user: user,
      merchandiseProduct: merchandiseProduct,
      merchandisePayment: merchandisePayment,
      merchandisePurchase: merchandisePurchase,
    },
  });
};

exports.purchaseVerify = async (req, res) => {
  let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature !== req.body.razorpay_signature) {
    res.status(400).json({ success: false, message: "Invalid signature" });
    return;
  }

  const merchandisePayment = await MerchandisePayment.findOne({
    orderId: req.body.razorpay_order_id,
  });
  if (!merchandisePayment) {
    res.status(400).json({ success: false, message: "Payment not found" });
    return;
  }

  if (merchandisePayment.status === "success") {
    res
      .status(400)
      .json({ success: false, message: "Payment already successful" });
    return;
  }

  merchandisePayment.status = "success";

  await merchandisePayment.save();

  const merchandisePurchase = await MerchandisePurchase.findOne({
    merchandisePaymentId: merchandisePayment._id,
  });

  if (!merchandisePurchase) {
    res.status(400).json({ success: false, message: "Purchase not found" });
    return;
  }

  merchandisePurchase.isPaid = true;
  merchandisePurchase.token = Math.random().toString().substr(2, 6);

  await merchandisePurchase.save();

  res.json({
    success: true,
    message: "Payment success",
    result: {
      token: merchandisePurchase.token,
    },
  });
};
