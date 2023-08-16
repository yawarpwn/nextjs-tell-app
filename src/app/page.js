import Head from 'next/head';
import Invoice from '@/components/invoice';
export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>PDF</h1>
        <Invoice />
      </main>

    </>
  );
}

