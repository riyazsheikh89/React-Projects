import './App.css';
import Accordian from './components/accordian/Accordian';
import ColorGenerator from './components/random-color-generator/ColorGenerator';
import StarRating from './components/star-rating/StarRating';

function App() {

  return (
    <div className='projects'>
      <Accordian />
      <ColorGenerator />
      <StarRating totalStars={5} />
    </div>
  )
}

export default App
