import './App.css';
import Accordian from './components/accordian/Accordian';
import ColorGenerator from './components/random-color-generator/ColorGenerator';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadData from './components/load-more-data/LoadData';

function App() {

  return (
    <div className='projects'>
      <Accordian />
      <ColorGenerator />
      <StarRating totalStars={5} />
      <ImageSlider url={'https://picsum.photos/v2/list'} />
      <LoadData />
    </div>
  )
}

export default App
