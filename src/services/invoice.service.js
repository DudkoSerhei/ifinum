export const parseRawInvoice = invoice => ({
  id: invoice.id,
  comment: invoice.comment,
  createdDate: new Date(invoice.date_created).toLocaleDateString(),
  dueDate: new Date(invoice.date_due).toLocaleDateString(),
  supplyDate: new Date(invoice.date_supply).toLocaleDateString(),
  number: invoice.number,
  direction: invoice.direction,
});

export const parseRawInvoices = invoices => (
  invoices.map(invoice => parseRawInvoice(invoice))
);