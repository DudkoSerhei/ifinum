import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditInvoice from '../components/edit-invoice.component';
import { InvoicesSelectors } from '../../../selectors/invoice.selectors';
import { invoiceEditFetch } from '../../../actions/invoice.action';

const mapStateToProps = (state, ownProps) => ({
  invoice: InvoicesSelectors.getById(ownProps.match.params.id)(state),
  numbers: InvoicesSelectors.numbers(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    invoiceEditFetch,
  }, dispatch),
});

export const EditInvoiceContainer = connect(mapStateToProps, mapDispatchToProps)(EditInvoice);