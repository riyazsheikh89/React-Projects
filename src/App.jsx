import './App.css';
import menus from './components/tree-view/data';

import Accordian from './components/accordian/Accordian';
import ColorGenerator from './components/random-color-generator/ColorGenerator';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import TreeView from './components/tree-view/TreeView';
// import LoadData from './components/load-more-data/LoadData';
import QrcodeGenerator from './components/qr-code-generator/QrcodeGenerator';
import ThemeChanger from './components/dark-light-mode/ThemeChanger';
import ProfileFinder from './components/github-profile-finder/ProfileFinder';
// import ScrollBar from './components/scroll-bar/ScrollBar';

function App() {

  return (
    <div className='projects'>
      <Accordian />
      <ColorGenerator />
      <StarRating totalStars={5} />
      <ImageSlider url={'https://picsum.photos/v2/list'} />
      {/* <LoadData /> */}
      <TreeView menus={menus} />
      <QrcodeGenerator />
      <ThemeChanger />
      {/* <ScrollBar url={"https://dummyjson.com/products?limit=50"} /> */}
      <ProfileFinder />
    </div>
  )
}

export default App
