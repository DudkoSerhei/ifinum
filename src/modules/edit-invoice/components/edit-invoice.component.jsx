import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../ui-kit/header/components/header.component';
import Button from '../../ui-kit/button/button.component';
import InputCalendar from '../../ui-kit/input-calendar/input-calendar.component';
import Input from '../../ui-kit/input/input.component';
import Textarea from '../../ui-kit/textarea/textarea.component';
import './edit-invoice.component.css';

class EditInvoice extends Component {
  state = {
    number: this.props.invoice.number,
    createdDate: this.props.invoice.createdDate,
    supplyDate: this.props.invoice.supplyDate,
    comment: this.props.invoice.comment,
  };

  render () {
    const { number, createdDate, supplyDate, comment } = this.state;

    return (
      <div className="main">
        <Header title="Edit Invoice" />
        <form className="form" onSubmit={this.onSubmit}>
          <div className="fields">
            <div className="form-inputs">
              <div className="form-column" id="number">
                <h3 className="form-title">Number:</h3>
                <Input
                  placeholder="Input number"
                  value={number}
                  onChange={value => this.onFormItemChange('number', value, 'number')}
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
              />
            </div>
          </div>
          <Button className="form-button">Save</Button>
        </form>
      </div>
    );
  }

  validateForm = () => {
    const { numbers, invoice } = this.props;
    const { number, createdDate, supplyDate, comment } = this.state;

    let isValid = true;

    if (!number) {
      document.getElementById('number').classList.add('field_hasError');
      isValid = false;
    }
    if (numbers.includes(parseInt(number, 10)) && number !== invoice.number) {
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

    const newData = {
      number: parseInt(number, 10),
      date_created: createdDate,
      date_supply: supplyDate,
      comment,
    };

    if (this.validateForm()) {
      this.props.actions.invoiceEditFetch(this.props.invoice.id, newData);
      setTimeout(() => {
        window.location.href = "http://localhost:3000";
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

EditInvoice.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  invoice: PropTypes.shape({
    number: PropTypes.number,
    invoiceDate: PropTypes.instanceOf(Date),
    supplyDate: PropTypes.string,
    comment: PropTypes.string,
  }),
};

export default EditInvoice;