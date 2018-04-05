import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateInvoice from '../components/create-invoice.component';
import { invoiceCreateFetch } from '../../../actions/invoice.action';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    invoiceCreateFetch,
  }, dispatch),
});

export const CreateInvoiceContainer = connect(null, mapDispatchToProps)(CreateInvoice);