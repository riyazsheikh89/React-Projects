import { useState } from 'react';
import './Accordian.css';

const Accordian = () => {
    const [multiSelectIsOn, setMultiSelectIsOn] = useState(false);
    const [selected, setSelected] = useState(null); // single selection
    const [multipleSelected, setMultipleSelected] = useState([]); // multiple selection

    const handleSingleSelection = (id) => {
      setSelected(selected != id ? id : null);   // for single selection
    }

    const handleMultipleSelection = (id) => { 
      const temp = [...multipleSelected];
      const isPresent = temp.includes(id);
      if (isPresent) {
          const idx = temp.indexOf(id);
          temp.splice(idx, 1);
          setMultipleSelected(temp);
      } else {
          temp.push(id);
          setMultipleSelected(temp);
      }
    };
    return (
      <div className="wrapper">
        <h1>Single & Multi select Accordian</h1>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div
                className="item"
                key={item.id}
                onClick={() => multiSelectIsOn ? 
                  handleMultipleSelection(item.id) : 
                  handleSingleSelection(item.id)
                }
              >
                <div className="title">
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {multiSelectIsOn
                  ? multipleSelected.includes(item.id) && (
                      <div className="content">{item.answer}</div>
                    )
                  : selected === item.id && (
                      <div className="content">{item.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
        <div className="mode">
          <h3>{multiSelectIsOn ? "Multi select is on" : "Single select is on"}</h3>
          <button onClick={() => setMultiSelectIsOn(!multiSelectIsOn)}>
            Toggle Selection
          </button>
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
