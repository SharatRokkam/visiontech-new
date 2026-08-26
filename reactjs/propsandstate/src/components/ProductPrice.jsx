import "./ProductPrice.css";

// In React, props (short for properties) are read-only JavaScript objects used to pass data from a parent component down to a child component

// Object Destructuring - better practice..
// const ProductPrice = ({ brand, price, button }) => {
//   return (
//     <div id="productCard">
//       <h2>{brand}</h2>
//       <p>{price}</p>
//       <button>{button}</button>
//     </div>
//   );
// };

const ProductPrice = (props) => {
  return (
    <div id="productCard">
      <h2>{props.brand}</h2>
      <p>{props.price}</p>
      <button>{props.button}</button>
    </div>
  );
};

export default ProductPrice;
