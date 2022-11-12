import Link from 'next/link'

export default function Products() {
  return (
    <>
      <h1>Página de Produtos</h1>
      <ul>
        <li>
          <Link href="products/shirt"> 
            <a>Shirt</a>
          </Link>
        </li>
        <li>
          <Link href="products/pants/bluepant">
            <a>Blue Pant</a>
          </Link>
        </li>
        <li>
          <Link href="products/pants/redpant">
            <a>Red Pant</a>
          </Link>
        </li>
      </ul>
    </>
  )
}