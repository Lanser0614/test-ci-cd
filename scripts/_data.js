const uzPayload = {
  organizationId: "7245b3c7-f70f-4641-af92-64ec4c67f49d",
  order: {
    completeBefore: null,
    deliveryPoint: {
      coordinates: {
        latitude: 41.297058060469,
        longitude: 69.25004560436,
      },
      address: {
        street: {
          name: "улица Бабура",
          city: "Ташкент",
        },
        house: "00",
        flat: "1",
        entrance: null,
        floor: null,
        doorphone: null,
      },
      comment: "  [41.297058060469, 69.25004560436] | website",
    },
    comment: "Ratione duis consequ",
    sourceKey: "bellissimouz",
    orderServiceType: "DeliveryByCourier",
    items: [
      {
        productId: "1050d521-0449-4fe4-96ee-a426277df28c",
        name: "Чеддер донар маленькая",
        type: "Product",
        amount: 2,
        positionId: null,
        price: 69000,
        modifiers: [
          {
            productId: "706f1529-a2b5-401f-917b-db64beb7c826",
            title: {
              ru: "Обычный борт",
            },
            price: 0,
            amount: 1,
            productGroupId: "b8e15d6e-eb6a-4bc4-a20a-1558544680e3",
            type: "bort",
          },
        ],
        comboInformation: null,
      },
    ],
    combos: [],
    payments: [
      {
        sum: 69000,
        paymentTypeId: "09322f46-578a-d210-add7-eec222a08871",
        code: "CASH",
        paymentTypeKind: "Cash",
      },
    ],
    discountsInfo: null,
    iikoCard5Info: {
      coupon: null,
    },
    terminalGroupId: "f6a02f90-5e00-4558-8113-35ba770bd701",
  },
  coupon: null,
  deliveryTerminalId: "f6a02f90-5e00-4558-8113-35ba770bd701",
  source: "web",
  notes: {
    build: "1",
    version: "0.1.0",
    device: {
      brand: "Chrome",
      manufacturer: "138.0.0.0",
      modelName: "Blink",
      year: 2019,
      memory: 4045406208,
      os: "OS X",
      osVersion: "10.15.7",
    },
  },
  utensilsCount: 1,
  loyaltyInfo: null,
};
output.uzPayload = uzPayload;

const kzPayload = {};
output.kzPayload = kzPayload;

switch (local) {
  case "uz":
    output.payload = uzPayload;
    break;
  case "kz":
    output.payload = kzPayload;
    break;
}
