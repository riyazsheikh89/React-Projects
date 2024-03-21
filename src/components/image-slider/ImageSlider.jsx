import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "./ImageSlider.css"

const ImageSlider = ({ url }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [images, setImages] = useState([]);
    const [errMsg, setErrMsg] = useState(null);
    const [loading, setLoading] = useState(null);

    const fetchImages = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=1&limit=10`);
            const data = await response.json();
            if (data) {
                setImages(data);
            }
        } catch (error) {
            setErrMsg(error.message);
        } finally {
            setLoading(false);
        }
    }

    function handleClickPrevious() {
        setCurrentSlide(currentSlide == 0 ? images.length-1 : currentSlide-1);
    }
    function handleClickNext() {
        setCurrentSlide(currentSlide == images.length-1 ? 0 : currentSlide+1);
    }

    useEffect(() => {
        if (url) {
            fetchImages(url);
        }
    }, [url]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (errMsg) {
        return <div>{errMsg}</div>
    }

    return (
      <div className="wrapper">
        <h1>Image Slider Component</h1>
        <div className="container">
          <BsArrowLeftCircleFill
            onClick={handleClickPrevious}
            className="arrow arrow-left"
          />
          {images && images.length
            ? images.map((image, idx) => (
                <img
                  src={image.download_url}
                  alt={image.download_url}
                  key={image.id}
                  className={currentSlide === idx ? 
                  "current-image" : 
                  "current-image hide-current-image"
                  }
                />
            ))
            : null}
          <BsArrowRightCircleFill
            onClick={handleClickNext}
            className="arrow arrow-right"
          />

          <span className="circle-indicator">
            {images && images.length ?
                images.map((_, index) => (
                    <button 
                        key={index}
                        className={currentSlide == index ?
                        "current-indicator" :
                        "current-indicator inactive-indicator"
                        }
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                )) : null
            }
          </span>
        </div>
      </div>
    );
}

export default ImageSlider;
