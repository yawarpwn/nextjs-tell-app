'use client'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { PDFDownloadLink, PDFViewer, usePDF } from '@react-pdf/renderer';
const Layout = dynamic(import('../invoice/Layout.jsx'), { ssr: false });
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


export default function Invoice() {
  console.log({ usePDF })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <Layout />
      <h2>Invoice</h2>
      {isClient && (

        <PDFViewer width="100%" height="100%">
          <Document>
            <Page size="A4" >
              <View>
                <Text>Section #1</Text>
              </View>
              <View >
                <Text>Section #2</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}

      {/* <Layout /> */}


      {/* Download */}

    </>

  )
}
      // {/* <PDFDownloadLink document={<Layout />} fileName="invoice.pdf"> */}
      // {/*   {({ loading }) => (loading ? 'Loading document...' : 'Download')} */}
      // {/* </PDFDownloadLink> */}
      // {/* <embed src={'.resources/crayola.pdf'} type="application/pdf" /> */}

