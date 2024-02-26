import { useState } from 'react';
import './Accordian.css';

const Accordian = () => {
    // const [selected, setSelected] = useState(null); // single selection
    const [selected, setSelected] = useState([]); // multiple selection

    const handleSelection = (id) => {
    //   setSelected(selected != id ? id : null);   // for single selection

    const temp = [...selected];
    const isPresent = temp.includes(id);
    if (isPresent) {
        const idx = temp.indexOf(id);
        temp.splice(idx, 1);
        setSelected(temp);
    } else {
        temp.push(id);
        setSelected(temp);
    }
    };
    return (
      <div className="wrapper">
        <h1>Single & Multiselect Accordian</h1>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div
                className="item"
                key={item.id}
                onClick={() => handleSelection(item.id)}
              >
                <div className="title">
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {selected.includes(item.id) ? (
                  <div className="content">{item.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    );
}

export default Accordian;


// Demo data to work with
const data = [
    {
        id: 1,
        question: "Who is the missile man of India?",
        answer: "Avul Pakir Jainulabdeen Abdul Kalam BR was an Indian aerospace scientist and statesman who served as the 11th president of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering."
    },
    {
        id: 2,
        question: "Who is the father of nation?",
        answer: "The Father of the Nation is an honorific title given to a person considered the driving force behind the establishment of a country, state, or nation. Pater Patriae, also seen as Parens Patriae, was a Roman honorific meaning the Father of the Fatherland, bestowed by the Senate on heroes, and later on emperors."
    },
    {
        id: 3,
        question: "Who is the Iron man of India?",
        answer: "Vallabhbhai Jhaverbhai Patel, commonly known as Sardar Vallabhbhai Patel, was an Indian independence nationalist and barrister who served as the first Deputy Prime Minister and Home Minister of India from 1947 to 1950."
    },
]
