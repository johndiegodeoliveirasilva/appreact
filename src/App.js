import React from 'react';

// Mostre os dados da aplicação, como apresentado no video
// Não utilize CSS externo, use o style para mudar as cores
// Se a situalçai estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  client: 'Luana',
  year: 27,
  purchases: [
    { name: 'Notebook', price: 'R$ 2500' },
    { name: 'Geladeira', price: 'R$ 3000' },
    { name: 'SmartPhone', price: 'R$ 1500'},
  ],
  active: true,
}

const mario = {
  client: 'Mario',
  year: 31,
  purchases: [
    { name: 'Notebook', price: 'R$ 2500' },
    { name: 'Geladeira', price: 'R$ 3000' },
    { name: 'SmartPhone', price: 'R$ 1500' },
    { name: 'Guitarra', price: 'R$ 3500'},
  ],
  active: false,
};

function total_spend(data) {
  return data.purchases.map(function(element){
    return parseInt(element.price.replace('R$ ', ''))
  }).reduce((previousValue, currentValue) => previousValue + currentValue);
}

const App = () => {
  const dada = mario

  return (
    <>
    <p>Name: {dada.client}</p>
    <p>Year: {dada.year}</p>
    <p>Situation: <span style={{color: dada.active ? "green": "red"}}>{dada.active ? "Active": "Inactive" }</span></p>
    <p>Total gasto: {total_spend(dada)}</p>
    {total_spend(dada) > 10000 && <p>Você está gastando muito.</p>}
    </>
  );
}

export default App;
