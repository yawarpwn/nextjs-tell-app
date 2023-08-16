import QuoBankInfo from './PDFBankInfo';
import QuoHeader from './PDFHeader';
import QuoTotal from './PDFTotal';
import QuoTable from './PDFTable'
import QuoCustomer from './PDFCustomer'
import { Document, Page,  StyleSheet } from '@react-pdf/renderer';
import QuoTerms from './PDFTerms';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 1.5,
    flexDirection: 'column'
  },
});

const PDFQuotation = ({quotation}) => {
  return (
    <Document title={`Cotización-${quotation.quo_number}`} >
      <Page size='a4' style={styles.page}>
        <QuoHeader />
        <QuoCustomer quotation={quotation} />
        <QuoTable items={quotation.quotation_items} />
        <QuoTotal items={quotation.quotation_items}  />
        <QuoTerms deadline={quotation.deadline} />
        <QuoBankInfo />
      </Page>
    </Document>
  );
};

export default PDFQuotation;

