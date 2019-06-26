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
            unit_price: 60
        },
        {
            item: "LGM",
            description: "LG Monitor",
            quantity: 1,
            unit_price: 300,
            discount: 90

        }
    ],

    discount: 5,
    tax: 12,
    subtotal: 0,
    paid: 0,
    invoice_nr: 0
};

const fs = require("fs");
const PDFdoc = require("pdfkit");
const moment = require('moment');

function createInvoice(invoice, path){
    let doc = new PDFdoc({margin:50});

    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    generateInvoiceTable(doc, invoice);
    generateFooter(doc);

    doc.end();
    doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc){
    doc
        // .image("https://audaciousjin.github.io/docs/visualization/assets/favicon.png")
        .image("/Users/amy/Dropbox/dev/jekyll/blog/docs/design/assets/favicon.png", 40, 35, {width:50})
        .fillColor("#7253EC")
        .fontSize(20)
        .text("Amy Inc.", 100, 80)
        .fontSize(10)
        .text("Doing Good Better", 100,100)
        .text("Amy Inc.", 200, 65, {align:"right"})
        .text("1234 Oxford Road", 200, 80, {align:"right"})
        .text("Vancouver, BC, V3B 0N0", 200, 95, {align:"right"})
        .moveDown();
}

function generateFooter(doc){
    doc
        .fontSize(10)
        .text("Payment is due within 15 days, Thank you for your business", 50, 730, {align:"center", width:500});
}


function generateCustomerInformation(doc, invoice){
    const shipping = invoice.shipping;

    doc
        .fontSize(20)
        .text("Invoice", 50, 170)
        .moveTo(50,190)
        .lineTo(570, 190)
        .lineWidth(5)
        .fill("#7253EC")
        .fontSize(10)
        .text(`Invoice Number: ${invoice.invoice_nr}`, 50, 200)
        .text(`Invoice Date: ${moment().format('LL')}`, 50, 215)
        .text(shipping.name, 300, 200)
        .text(shipping.address, 300, 215)
        .text(shipping.name, 300,200)

        .moveTo(50,230)
        .lineTo(570, 230)
        .lineWidth(5)
        .fill("#7253EC")
        .moveDown()
}

function generateTableRow(doc, y, item, description, unitPrice, quantity, total) {
    let rowLength = 570-50;

    doc
        .fontSize(10)
        .text(item, 50, y)
        .text(description, 50+(rowLength/5), y)
        .text(unitPrice, 50+(rowLength/5)*2, y, { width: (rowLength/5), align: "right" })
        .text(quantity, 50+(rowLength/5)*3, y, { width: (rowLength/5), align: "right" })
        .text(total, 0, y, { align: "right" })

        .moveTo(50,y+15)
        .lineTo(570, y+15)
        .lineWidth(5)
        .fill("#7253EC")
        .font('Helvetica')
}

function generateInvoiceTable(doc, invoice) {
    let i,
        position,
        invoiceTableTop = 330,
        subtotal = 0,
        rowLength = 570-50,
        discount = 0,
        tax = 0;


    doc
        .font('Helvetica-Bold')
        .text("Item", 50, invoiceTableTop)
        .text("Description", 50+(rowLength/5), invoiceTableTop)
        .text("Unit Price", 50+(rowLength/5)*2, invoiceTableTop,{ width: (rowLength/5), align: 'right'})
        .text("Quantity", 50+(rowLength/5)*3, invoiceTableTop, { width: (rowLength/5), align: 'right'})
        .text("Total", 0, invoiceTableTop, { align: "right" })
        .moveTo(50,invoiceTableTop+10)
        .lineTo(570, invoiceTableTop+10)
        .lineWidth(5)
        .fill("#7253EC")
        .font('Helvetica')

    for (i = 0; i < invoice.items.length; i++) {
        const item = invoice.items[i];
        position = invoiceTableTop + (i + 1) * 30;
        generateTableRow(
            doc,
            position,
            item.item,
            item.description,
            item.unit_price,
            item.quantity,
            item.unit_price*item.quantity
        );
        subtotal += item.unit_price*item.quantity;
        discount = subtotal*(invoice.discount/100);
        tax = (subtotal-discount)*(invoice.tax/100)
    }
    doc
        .text("Subtotal:", 280, position+30,{width:90, align:"right"})
        .text(subtotal, 0, position+30,{align:"right"})
        .text("Discount"+" ("+invoice.discount+"%):", 280, position+30+15,{width:90, align:"right"})
        .text("-"+discount, 0, position+30+15,{align:"right"})
        .text("Tax"+" ("+invoice.tax+"%):", 280, position+30+15*2,{width:90, align:"right"})
        .text(Math.round(tax), 0, position+30+15*2,{align:"right"})
        .text("Paid To Date:", 280, position+30+15*3,{width:90, align:"right"})
        .text(invoice.paid, 0, position+30+15*3,{align:"right"})

        .font('Helvetica-Bold')
        .text("Total:", 280, position+30+15*4,{width:90, align:"right"})
        .text(subtotal-discount+tax-invoice.paid, 0, position+30+15*4,{align:"right"})
        .font('Helvetica')
}


const path = "./pdf/invoice.pdf";

createInvoice(invoice,path);
