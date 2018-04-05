import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InvoicesSelectors } from '../../../selectors/invoice.selectors';
import { invoicesFetch, invoiceRemoveFetch } from '../../../actions/invoice.action';
import Invoices from '../components/invoices.component';

const mapStateToProps = state => ({
  invoices: InvoicesSelectors.all(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    invoicesFetch,
    invoiceRemoveFetch,
  }, dispatch),
});

export const InvoicesContainer = connect(mapStateToProps, mapDispatchToProps)(Invoices);