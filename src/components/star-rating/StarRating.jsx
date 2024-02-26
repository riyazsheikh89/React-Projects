import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (currIndex) => {
        setRating(currIndex);
    };
    const handleMouseEnter = (currIndex) => {
        setHover(currIndex);
    };
    const handleMouseLeave = () => {
        setHover(rating);
    };
    return (
      <div className="star-container">
        <h1>Star Rating Component</h1>
        <div className="stars">
        {[...Array(totalStars)].map((_, index) => {
            index += 1; // as it is 0 based index
            return (
              <FaStar
                className={index <= (hover || rating) ? "active": "inactive"}
                key={index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
              />
            );
          })
        }
        </div>
      </div>
    );
}

export default StarRating;
