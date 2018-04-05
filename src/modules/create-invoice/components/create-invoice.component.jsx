import React, { Component } from 'react';
import Header from '../../ui-kit/header/components/header.component';
import Button from '../../ui-kit/button/button.component';
import InputCalendar from '../../ui-kit/input-calendar/input-calendar.component';
import Input from '../../ui-kit/input/input.component';
import Textarea from '../../ui-kit/textarea/textarea.component';
import './create-invoice.component.css';

class CreateInvoice extends Component {
  render () {
    return (
      <div className="main">
        <Header title="Create Invoice" />
        <form className="form">
          <div className="fields">
            <div className="form-inputs">
              <div className="form-column">
                <h3 className="form-title">Number:</h3>
                <Input
                  placeholder="Input number"
                />
              </div>
              <div className="form-column">
                <h3 className="form-title">Invoice Date:</h3>
                <InputCalendar
                  placeholder="Select date"
                  disableDateBefore={new Date()}
                />
              </div>
              <div className="form-column">
                <h3 className="form-title">Supply Date:</h3>
                <InputCalendar
                  placeholder="Select date"
                  disableDateBefore={new Date()}
                />
              </div>
            </div>
            <div className="form-textarea">
              <h3 className="form-title">Comment:</h3>
              <Textarea
                placeholder="Enter comment"
              />
            </div>
          </div>
          <Button className="form-button">Save</Button>
        </form>
      </div>
    );
  }
}

export default CreateInvoice;