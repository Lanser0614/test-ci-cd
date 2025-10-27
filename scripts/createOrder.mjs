const createOrder = async () => {
  /*
   * Credentials from _credentials.js file
   */
  const url = output.credentials.CREATE_ORDER_URL;
  const header = output.genHeader(
    output.credentials.ORDERED_CLIENT_TOKEN,
    output.credentials.REFERER_SOURCE,
    local,
  );

  /*
   * Credentials from _data.js file
   */
  const payload = output.payload;

  const res = await http.post(url, {
    headers: header,
    body: JSON.stringify(payload),
  });

  console.log(
    res.status === 200
      ? `Order created=> id: ${json(res.body).data.id} | iikoId: ${json(res.body).data.iikoId}`
      : res.status,
  );

  return {
    organizationId: json(res.body).data.organizationId,
    iikoId: json(res.body).data.iikoId,
    id: json(res.body).data.id,
  };
};
output.createdOrderData = await createOrder();
