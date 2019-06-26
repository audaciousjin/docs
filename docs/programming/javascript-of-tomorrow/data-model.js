const invoice = {
    shipping: {
        name: "Haejin Hwang",
        address:"1234 Oxford Road",
        city: "Vancouver",
        province: "BC",
        country: "CA",
        postal_code: "V3B 0N0"
    },
    items: [
        {
            item: "RP 3",
            description: "Raspberry Pi3",
            quantity: 10,
            unit_price: 60,
            discount: 0,
            total: 600
            //
        },
        {
            item: "LGM",
            description: "LG Monitor",
            quantity: 1,
            unit_price: 300,
            discount:0,
            total: 300
        }
    ],

    subtotal: "sum of total items in array",
    paid: 0,
    invoice_nr: 0
};

