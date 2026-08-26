// JSX - JS and HTML in the same file by merging both

import ProductPrice from "./components/ProductPrice";

const App = () => {
  return (
    <div>
      <h1>Props and State</h1>
      <ProductPrice brand="Samsung S25 Ultra" price={125000} button="Buy Now" />
      <ProductPrice brand="Apple Iphone 17 " price={85000} button="Buy Now" />
      <ProductPrice brand="Google Pixel 10" price={75000} button="Buy Now" />
      <ProductPrice brand="Oneplus Nord" price={55000} button="Buy Now" />
    </div>
  );
};

export default App;
