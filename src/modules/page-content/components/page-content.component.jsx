import React from 'react';
import { Route, Switch } from 'react-router';
import { InvoicesContainer as Invoices } from '../../invoices/containers/invoices.container';
import { CreateInvoiceContainer as CreateInvoice } from '../../create-invoice/containers/create-invoice.container';
import { EditInvoiceContainer as EditInvoice } from '../../edit-invoice/containers/edit-invoice.container';
import './page-content.component.css';

const PageContent = () => (
  <div className="page">
    <Switch>
      <Route exact path="/" component={Invoices} />
      <Route path="/create" component={CreateInvoice} />
      <Route path="/edit/:id" component={EditInvoice} />
    </Switch>
  </div>
);

export default PageContent;