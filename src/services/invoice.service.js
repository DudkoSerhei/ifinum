export const parseRawInvoice = invoice => ({
  id: invoice.id,
  comment: invoice.comment,
  createdDate: invoice.date_created,
  dueDate: invoice.date_due,
  supplyDate: invoice.date_supply,
  number: invoice.number,
  direction: invoice.direction,
});

export const parseRawInvoices = invoices => (
  invoices.map(invoice => parseRawInvoice(invoice))
);