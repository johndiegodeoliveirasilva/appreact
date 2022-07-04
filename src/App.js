import React from 'react';

const App = () => {
  const [count, setCont] = React.useState(1);
  const [itens, setItens] = React.useState(['Item 1'])
  
  function handleClick() {
    setCont(count + 1)
    setItens([...itens, 'Item '+ (count + 1)])
  }
  return (
    <>
      { itens.map(item => <li key={item}>{item}</li>)}
      <button onClick={handleClick}>{count}</button>
    </>
  );
};

export default App;
