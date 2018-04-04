import React from 'react';
import { Route, Switch } from 'react-router';
import { InvoicesContainer as Invoices } from '../../invoices/containers/invoices.container';
import { CreateInvoiceContainer as CreateInvoice } from '../../create-invoice/containers/create-invoice.container';
import './page-content.component.css';

const PageContent = () => (
  <div className="page">
    <Switch>
      <Route exact path="/" component={Invoices} />
      <Route path="/create" component={CreateInvoice} />
    </Switch>
  </div>
);

export default PageContent;