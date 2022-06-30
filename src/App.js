import React from 'react';

const App = () => {
  const [active, setActve] = React.useState(false);
  const [data, setData] = React.useState({ name: 'André', year: 30 });

  
  function handleClick() {
    setActve(!active)
  }
  
  return (
    <>
    <p>{data.name}</p>
    <p>{data.year}</p>
    <button onClick={handleClick}>{active ? "Active" : "Inactive"}</button>
    </>
  );
};


export default App;
