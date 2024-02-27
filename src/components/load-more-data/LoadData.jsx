import { useEffect, useState } from "react";
import './Style.css';

const LoadData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProductsFromApi() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const data = await response.json();
            console.log(data);
            if (data && data.products && data.products.length > 0) {
                setProducts((prevProducts) => [...prevProducts, ...data.products ]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProductsFromApi();
    }, [count]);

    useEffect(() => {
        if (products && products.length == 100) {
            setDisableButton(true);
        }
    }, [products]);
    

    if (loading) {
        return <div>Loading...</div>
    }
  return (
    <div className="main-container">
      <h1>Load More Data Component</h1>
      <div className="products-container">
        {products && products.length
          ? products.map((item, idx) => (
              <div className="products" key={idx}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-contaner">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load more products...
        </button>
        <p>{disableButton ? "Reached the max products!" : null}</p>
      </div>
    </div>
  );
}

export default LoadData;
