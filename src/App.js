import React from 'react';
import Product from './Product';

const App = () => {
  const [datas, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    )
    const json = await response.json();
    setData(json)
    setLoading(false);
  }

  return (
    <>
      <button style={{ margin: '.5rem'}} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '.5rem'}} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '.5rem'}} onClick={handleClick}>
        tablet
      </button>
      {loading && <p>Carregando...</p>}
      {!loading && datas && <Product datas={datas}/>}

    </>
  );
};

export default App;
