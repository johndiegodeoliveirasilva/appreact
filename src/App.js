import React from 'react';
import Header from './Header'
import Home from './Home'
import Products from './Products';
// Replique a interface como a apresentada na aula
// Utilize o array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa para o caminho da URL)

const App = () => {
  let Pagy = Home;
  const { pathname} = window.location
  if (pathname === '/products') {
    Pagy = Products
  } else {
    Pagy = Home;
  }
  return (
    <section>
      <Header />
      <Pagy />
    </section>
  );
};

export default App;
