import React from 'react';
import { Route, Switch } from 'react-router';
import Invoices from '../../invoices/components/invoices.component';
import CreateInvoice from '../../create-invoice/components/create-invoice.component';
import './page-content.component.css';

const PageContent = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Invoices} />
      <Route path="/create" component={CreateInvoice} />
    </Switch>
  </div>
);

export default PageContent;