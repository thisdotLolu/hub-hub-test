import './App.css';
import { useState } from 'react';
import Switch from './Switch';


const state= 'list' || 'grid'

const color= 'red' || 'blue'


function App() {
  const[toggled,setToggled] = useState(false);


  return (
    <div className={`App ${toggled ? '':'darkBg'}`}>
    <Switch
    state={state}
    color={color}
    toggled={toggled}
    setToggled={setToggled}
    />
    </div>
  );
}

export default App;
