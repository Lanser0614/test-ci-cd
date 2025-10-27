/*
 * Client created order's iikoId credentials from createOrder.js file
 */
const createdOrderIikoId = output.createdOrderData.iikoId;
const getClientActiveOrders = async () => {
  /*
   * Credentails from _credentials.js file
   */
  const url = output.credentials.GET_CLIENT_ACTIVE_ORDERS_URL;

  /*
   * genHeader() method from _genHeader.js file
   */
  const header = output.genHeader(
    output.credentials.ORDERED_CLIENT_TOKEN,
    output.credentials.REFERER_SOURCE,
  );
  const res = await http.get(url, { headers: header });
  const order = json(res.body).find(
    (order) => order.iikoId == createdOrderIikoId,
  );
  console.log(`Client active order id: ${order.id} | iikoId:  ${order.iikoId}`);
  return order.id;
};

output.clientActiveOrderId = await getClientActiveOrders();
