import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from '../../ui-kit/header/components/header.component';
import Button from '../../ui-kit/button/button.component';
import './invoices.component.css';

class Invoices extends Component {
  componentDidMount() {
    this.props.actions.invoicesFetch();
  }

  render () {
    const { invoices } = this.props;

    return (
      <div className="main">
        <Header title="Invoices" />
        <div className="actions">
          <h2 className="second-title">Actions</h2>
          <Button className="actions-button">
            <Link to="/create" className="actions-link">Add new</Link>
          </Button>
        </div>
        <div className="table-wrapper">
          <h2 className="second-title">Invoices</h2>
          <Scrollbars autoHeight autoHeightMin={300}>
            <table className="table">
              <tbody className="table-body">
                <tr className="table-row">
                  <th className="table-create">Create</th>
                  <th className="table-number">№</th>
                  <th className="table-supply">Supply</th>
                  <th className="table-comment">Comment</th>
                  <th className="table-actions">Actions</th>
                </tr>
                {invoices && invoices.map((invoice, i) => (
                  <tr className="table-row" key={i}>
                    <td className="table-text">{invoice.createdDate}</td>
                    <td className="table-num">{invoice.number}</td>
                    <td className="table-text">{invoice.supplyDate}</td>
                    <td className="table-text">{this.onCutText(invoice.comment, 200)}</td>
                    <td className="table-icons">
                      <div className="icon-delete" onClick={() => this.onRemoveInvoice(invoice.id)}>
                        <svg height="23.333" width="23.332" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.043 11.667L22.609 5.1a2.484 2.484 0 0 0 0-3.502l-.875-.875a2.482 2.482 0 0 0-3.502 0L11.666 7.29 5.099.723a2.482 2.482 0 0 0-3.501 0l-.876.875a2.485 2.485 0 0 0 0 3.502l6.566 6.566-6.566 6.567a2.484 2.484 0 0 0 0 3.501l.876.875a2.482 2.482 0 0 0 3.501 0l6.567-6.565 6.566 6.565a2.484 2.484 0 0 0 3.502 0l.875-.875a2.482 2.482 0 0 0 0-3.501l-6.566-6.566z"/>
                        </svg>
                      </div>
                      <div className="icon-edit" onClick={() => this.onEditInvoice(invoice.id)}>
                        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.453 9.297C1.754 9.996 1 13.703 1 14c0 .521.406 1 1 1 .297 0 4.004-.754 4.703-1.453l5.722-5.722-4.25-4.25-5.722 5.722zM12 1c-.602 0-1.449.199-2.141.891l-.284.284 4.25 4.25.284-.284A3.04 3.04 0 0 0 15 4a3 3 0 0 0-3-3z"/>
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Scrollbars>
        </div>
      </div>
    );
  }

  onCutText = (text, symbols) => {
    if (text.length > symbols) {
      return `${text.substring(0, symbols)}...`;
    }
  
    return text;
  };

  onRemoveInvoice = (id) => {
    if (this.props.actions.invoiceRemoveFetch) {
      this.props.actions.invoiceRemoveFetch(id);
    }
    window.location.reload();
  };

  onEditInvoice = (id) => {
    this.props.history.push(`/edit/${id}`);
  };
}

Invoices.propTypes = {
  invoices: PropTypes.arrayOf(PropTypes.shape({
    createdDate: PropTypes.string,
    number: PropTypes.number,
    supplyDate: PropTypes.string,
    comment: PropTypes.string,
  })),
  actions: PropTypes.shape({
    invoicesFetch: PropTypes.func,
  }),
};

export default withRouter(Invoices);