const getDeliveryAuthToken = async () => {
  /*
   * Credentails from _credentials.js file
   */
  const url = output.credentials.DELIVERY_AUTH_URL;
  const header = {
    Cookie: output.credentials.DELIVERY_AUTH_USING_COOKIE,
    "Content-Type": "application/json",
  };
  const payload = {
    client_id: output.credentials.DELIVERY_CLIENT_ID,
    client_secret: output.credentials.DELIVERY_CLIENT_SECRET,
    audience: output.credentials.DELIVERY_AUDIENCE,
    grant_type: "client_credentials",
  };

  const res = await http.post(url, {
    headers: header,
    body: JSON.stringify(payload),
  });
  return json(res.body).access_token;
};

const assignOrderToCourier = async (courierId, orderId) => {
  const url = output.credentials.ASSIGN_ORDER_TO_COURIER_URL;
  const authToken = await getDeliveryAuthToken();
  const header = output.genHeader(
    `Bearer ${authToken}`,
    output.credentials.DISPATCH_REFERER,
    null,
    output.credentials.DISPATCH_ORIGIN,
  );
  const payload = {
    courierId: courierId,
    deliveryIds: [orderId],
  };

  const res = await http.post(url, {
    headers: header,
    body: JSON.stringify(payload),
  });

  console.log(res.status == 200 ? "Order assign to courier" : res.status);
};

/*
 * Credential clientActiveOrderId from clientActiveOrder.js file
 */
await assignOrderToCourier(
  output.credentials.COURIER_ID,
  output.clientActiveOrderId,
);
