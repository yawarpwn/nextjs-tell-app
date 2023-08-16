'use client'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { PDFDownloadLink, PDFViewer, usePDF } from '@react-pdf/renderer';
import PDFQuotation from './PDF/PDFQuotation';
import { Button } from '@nextui-org/button'
// const PDFQuotation = dynamic(() => import('../../components/PDF/PDFQuotation.jsx'), { ssr: false })


export default function Invoice() {
  const [isClient, setIsClient] = useState(false)
  console.log({ PDFQuotation })

  useEffect(() => {
    setIsClient(true)
  }, [])

  const quo = {
    id: '10',
    quo_number: 5000,
    company: 'Neyda y CAra de qlos',
    date: new Date(),
    address: 'Maquinaria 325',
    quotation_items: [
      {
        id: '88',
        description: 'Fibra de vidrio 4mm',
        price: 10,
        qty: 10,
        unit_size: '30x30cm'
      }
    ]
  }

  return (
    <>
      <Button>click</Button>
    </>
  )
}
      // {/* <PDFDownloadLink document={<Layout />} fileName="invoice.pdf"> */}
      // {/*   {({ loading }) => (loading ? 'Loading document...' : 'Download')} */}
      // {/* </PDFDownloadLink> */}
      // {/* <embed src={'.resources/crayola.pdf'} type="application/pdf" /> */}

