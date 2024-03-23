import { useEffect, useState } from "react";
import "./ScrollBar.css";

const ScrollBar = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState();
    const [scrolledPercentage, setScrolledPercentage] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url)
            const data = await response.json();
            console.log(data.products);

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
            }
                        
        } catch (error) {
            console.log(error);
            setErrMsg(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    const handleScrolledPercentage = () => {
        const howMuchScrolled =  
        document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
      setScrolledPercentage((howMuchScrolled / height) * 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrolledPercentage);

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, []);

    if (loading) {
        return <p>Please wait, loading your data...</p>
    }
    if (errMsg) {
        return <p>Something went wrong: {errMsg}</p>
    }

  return (
    <div className="scroll-indicator-container">
      <div className="top-container">
        <h2>Custom scroll bar/indicator</h2>
        <div className="scroll-bar-container">
          <div className="scroll-bar"
            style={{ width: `${scrolledPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.at.length > 0
          ? data.map((item) => <p key={item.id}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default ScrollBar;
