import React from 'react';

const App = () => {
  const random = Math.random();

  const active = false;

  const title = <h1>Esse é um titulo</h1>;

  const styleH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  }

  function showName(sobrenome) {
    return 'André' + sobrenome;
  }

  return (
    <>
      {title}
      {showName()}
      <h1 style={styleH1}>asdad</h1>
      <p className={active ? 'active': 'inactive'}>{(random * 100)/ 50}</p>
    </>
  );
}

export default App;
