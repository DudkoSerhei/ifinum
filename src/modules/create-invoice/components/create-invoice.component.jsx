import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { InvoiceUtils } from '../../../utils/invoice.utils';
import Header from '../../ui-kit/header/header.component';
import Button from '../../ui-kit/button/button.component';
import InputCalendar from '../../ui-kit/input-calendar/input-calendar.component';
import Input from '../../ui-kit/input/input.component';
import Textarea from '../../ui-kit/textarea/textarea.component';
import './create-invoice.component.css';

class CreateInvoice extends Component {
  state = {
    number: '',
    createdDate: '',
    supplyDate: '',
    comment: '',
  };

  render () {
    const { number, createdDate, supplyDate, comment } = this.state;

    return (
      <div className="main">
        <Header title="Create Invoice" />
        <form className="form" onSubmit={this.onSubmit}>
          <div className="fields">
            <div className="form-inputs">
              <div className="form-column" id="number">
                <h3 className="form-title">Number:</h3>
                <Input
                  placeholder="Input number"
                  value={number}
                  onChange={value => this.onFormItemChange('number', value, 'number')}
                  type="number"
                />
              </div>
              <div className="form-column" id="invoice">
                <h3 className="form-title">Invoice Date:</h3>
                <InputCalendar
                  placeholder="Select date"
                  disableDateBefore={new Date()}
                  value={createdDate}
                  onChange={value => this.onFormItemChange('createdDate', value, 'invoice')}
                />
              </div>
              <div className="form-column" id="supply">
                <h3 className="form-title">Supply Date:</h3>
                <InputCalendar
                  placeholder="Select date"
                  disableDateBefore={new Date()}
                  value={supplyDate}
                  onChange={value => this.onFormItemChange('supplyDate', value, 'supply')}
                />
              </div>
            </div>
            <div className="form-textarea" id="textarea">
              <h3 className="form-title">Comment:</h3>
              <Textarea
                placeholder="Enter comment"
                value={comment}
                onChange={value => this.onFormItemChange('comment', value, 'textarea')}
                maxLength={500}
              />
            </div>
          </div>
          <Button className="form-button">Save</Button>
        </form>
      </div>
    );
  }

  validateForm = () => {
    const { numbers } = this.props;
    const { number, createdDate, supplyDate, comment } = this.state;

    let isValid = true;

    if (!number) {
      document.getElementById('number').classList.add('field_hasError');
      isValid = false;
    }
    if (number.length > 6) {
      document.getElementById('number').classList.add('field_hasError');
      isValid = false;
    }
    if (numbers.includes(parseInt(number, 10))) {
      document.getElementById('number').classList.add('field_hasError');
      isValid = false;
    }
    if (!createdDate) {
      document.getElementById('invoice').classList.add('field_hasError');
      isValid = false;
    }
    if (!supplyDate) {
      document.getElementById('supply').classList.add('field_hasError');
      isValid = false;
    }
    if (!comment) {
      document.getElementById('textarea').classList.add('field_hasError');
      isValid = false;
    }

    return isValid;
  }

  onSubmit = (e) => {
    const {
      number, createdDate, supplyDate, comment,
    } = this.state;

    e.preventDefault();

    const data = {
      number: parseInt(number, 10),
      createdDate: InvoiceUtils.getFullDate(createdDate),
      supplyDate: InvoiceUtils.getFullDate(supplyDate),
      comment,
    };

    if (this.validateForm()) {
      this.props.actions.invoiceCreateFetch(data);
      setTimeout(() => {
        this.props.history.push('/');
      }, 1000);
    }
  };

  onFormItemChange = (fieldName, value, id) => {
    this.setState({
      [fieldName]: value,
    });
    document.getElementById(id).classList.remove('field_hasError');
  }
}

CreateInvoice.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  history: PropTypes.object,
};

export default withRouter(CreateInvoice);