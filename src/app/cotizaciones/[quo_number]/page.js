import { getQuotations } from "@/services/quotations"
import { getQuotation } from '@/services/quotations'
import TableItems from '@/components/TableItems'

export async function generateStaticParams() {
  const quotations = await getQuotations()

  return quotations.map((quotation) => ({
    quo_number: String(quotation.quo_number),
  }))
}

export default async function QuoPage({ params }) {
  const quotation = await getQuotation({ quo_number: params.quo_number })
  const {
    id,
    quo_number,
    company,
    address,
    ruc,
    phone,
    deadline,
    quotation_items
  } = quotation


  return (
    <div>

      <h1>Page
      </h1>
      <TableItems items={quotation_items} />
    </div>
  )
}
