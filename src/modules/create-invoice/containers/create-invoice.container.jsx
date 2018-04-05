import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateInvoice from '../components/create-invoice.component';
import { InvoicesSelectors } from '../../../selectors/invoice.selectors';
import { invoiceCreateFetch } from '../../../actions/invoice.action';

const mapStateToProps = state => ({
  numbers: InvoicesSelectors.numbers(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    invoiceCreateFetch,
  }, dispatch),
});

export const CreateInvoiceContainer = connect(mapStateToProps, mapDispatchToProps)(CreateInvoice);