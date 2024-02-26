import './App.css';
import Accordian from './components/accordian/Accordian';
import ColorGenerator from './components/random-color-generator/ColorGenerator';

function App() {

  return (
    <div className='projects'>
      <Accordian />
      <ColorGenerator />
    </div>
  )
}

export default App
