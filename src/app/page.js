import Head from 'next/head';
import Quotation from '@/components/Quotation';
import Table from '@/components/Table'
import { getQuotations } from '@/services/quotations';
export default async  function Home() {
  const quotations = await getQuotations()
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1 className='text-3xl font-extrabold uppercase'>Cotizaciones</h1>
        <Table quotations={quotations} />
      </main>

    </>
  );
}

