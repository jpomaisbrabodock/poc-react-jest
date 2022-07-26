import React, { useState } from 'react';

function App() {
  const [companyName, setCompanyName] = useState<string>('')
  const [companyList, setCompanyList] = useState<Array<string>>(['Asgardu', 'Steam', 'Magazine luiza'])
  
  function addCompany() {
    setCompanyList(state => [...state, companyName])
  }
  
  return (
    <div className="App">
      <h1>Empresas Cadastradas</h1>
      <input type="text" placeholder='Nome da empresa' onChange={(e) => setCompanyName(e.target.value)}/>
      <button onClick={addCompany}>Adicionar empresa</button>
      {companyList.map(company => <li key={company}>{company}</li>)}
    </div>
  );
}

export default App;
