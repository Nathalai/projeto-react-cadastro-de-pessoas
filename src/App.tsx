import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { PersonType } from './components/'

function App() {
  const [personType, setPersonType] = React.useState('');
  const onChangePersonType = (newPersonType: string) => setPersonType(newPersonType);

  return (
    <div className="App">      
      <p>
        PersonType do App: {personType}
      </p>
      < PersonType onChange={onChangePersonType} />
    </div>
  );
}

export default App;
