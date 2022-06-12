import React from 'react'

const Product = ( { name, propriedades }) => {
  return (
    <div style={{ border: '1px solid black', padding: '4px'} }>
      <p>{name}</p>
      <ul>
      { propriedades.map((prop) => <li>{ prop }</li>) }
      </ul>
    </div>
  )
}

export default Product