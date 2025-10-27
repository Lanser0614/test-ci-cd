const getAuthToken = async () => {
  /*
   *  Credentails from _credentials.js file
   */
  const url = output.credentials.IIKO_AUTH_URL;

  /*
   * genHeader method from _genHeader file
   */
  const header = output.genHeader(output.credentials.IIKO_AUTH_USING_TOKEN);

  /*
   *  Credentails from _credentials.js file
   */
  const res = await http.post(url, {
    headers: header,
    body: JSON.stringify({ apiLogin: output.credentials.IIKO_API_LOGIN }),
  });

  return json(res.body).token;
};

const updateOrderStatus = async (organizationId, orderId) => {
  /*
   *  Credentails from _credentials.js file
   */
  const url = output.credentials.IIKO_ORDER_STATUS_UPDATE_URL;
  const header = output.genHeader(`Bearer ${await getAuthToken()}`);
  const res = await http.post(url, {
    headers: header,
    body: JSON.stringify({
      organizationId: organizationId,
      orderId: orderId,
      deliveryStatus: "Waiting",
    }),
  });

  console.log(res.status === 200 ? "Order status changed!!!" : json(res.body));
};

/*
 *  Credentails from _credentials.js file
 */
await updateOrderStatus(
  output.createdOrderData.organizationId,
  output.createdOrderData.iikoId,
);
