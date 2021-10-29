import './App.css';
import ListWellcome from './ListWellcome';
import Counter from './Counter';
import Checkbox from './Checkbox';
import { useState } from 'react'
import SelectPage from './SelectPage';
import Pokemon from './Pokemon';

function App() {
  const [value, setValue] = useState("Wellcome")

  const getPage = () => {
    switch (value) {
      case "Wellcome":
        return <ListWellcome />
      case "Counter":
        return <Counter />
      case "Checkbox":
        return <Checkbox />
      case "Pokemon":
        return <Pokemon />
      default:
        return <div>Not found!</div>

    }
  }
  return (
    <div className="App">    
      <SelectPage value={value} setValue={setValue}/>
      <div>Selector: {value}</div>
      {getPage()}
    </div>
  );
}

export default App;
