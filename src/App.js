import React from 'react';

const App = () => {
  const random = Math.random();
  const active = false
  const title = <h1>Esse é um titulo</h1>
  return (
    <>
      {title}
      <p className={active ? 'active': 'inactive'}>{(random * 100)/ 50}</p>
    </>
    );
}

export default App;
