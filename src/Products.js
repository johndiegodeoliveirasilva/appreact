import React from 'react'
import Product from './Product'
import Title from './Title'

const Products = () => {
  const produtos = [
    { name: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { name: 'Smartphone', propriedades: ['2gb ram', '128gb']}
  ];

  return (
    <section>
      <Title text="Product" />
      {produtos.map((produto) => (
        <Product key={produto.name} {...produto}/>
      ))}
    </section>
  )
}

export default Products