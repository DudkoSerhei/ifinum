import React, { Component } from 'react';
import Header from '../../ui-kit/header/components/header.component';
import Button from '../../ui-kit/button/button.component';
import './invoices.component.css';

class Invoices extends Component {
  render () {
    return (
      <div className="main">
        <Header title="Invoices" />
        <div className="actions">
          <h2 className="second-title">Actions</h2>
          <Button>Add new</Button>
        </div>
        <table className="table">
          <tbody className="table-body">
            <tr className="table-row">
              <th className="table-title">Create</th>
              <th className="table-title">№</th>
              <th className="table-title">Supply</th>
              <th className="table-title">Comment</th>
              <th className="table-title">Actions</th>
            </tr>
            <tr className="table-row">
              <td className="table-text">20-03-2018</td>
              <td className="table-number">0000001</td>
              <td className="table-text">20-03-2018</td>
              <td className="table-text">Test invoice</td>
              <td className="table-actions">
                <div className="icon-delete">
                  <svg height="23.333" width="23.332" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.043 11.667L22.609 5.1a2.484 2.484 0 0 0 0-3.502l-.875-.875a2.482 2.482 0 0 0-3.502 0L11.666 7.29 5.099.723a2.482 2.482 0 0 0-3.501 0l-.876.875a2.485 2.485 0 0 0 0 3.502l6.566 6.566-6.566 6.567a2.484 2.484 0 0 0 0 3.501l.876.875a2.482 2.482 0 0 0 3.501 0l6.567-6.565 6.566 6.565a2.484 2.484 0 0 0 3.502 0l.875-.875a2.482 2.482 0 0 0 0-3.501l-6.566-6.566z"/>
                  </svg>
                </div>
                <div className="icon-edit">
                  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.453 9.297C1.754 9.996 1 13.703 1 14c0 .521.406 1 1 1 .297 0 4.004-.754 4.703-1.453l5.722-5.722-4.25-4.25-5.722 5.722zM12 1c-.602 0-1.449.199-2.141.891l-.284.284 4.25 4.25.284-.284A3.04 3.04 0 0 0 15 4a3 3 0 0 0-3-3z"/>
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Invoices;