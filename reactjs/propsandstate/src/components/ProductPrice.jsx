// import "./ProductPrice.css";

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


// import styles from "../styling/ProductPrice.module.css"

import styled from "styled-components";

const ProductPrice = (props) => {

  const Card =  styled.div`
    width : 300px;
    padding : 20px;
    background : lightblue;
    border-radius : 12px;  
  `

  return (
    <Card>
      {/* inline - two curly braces and property name : camelConvention */}
      <h2 style={{color : "red", backgroundColor: "pink"}}>{props.brand}</h2>
      <para className={styles.para}>{props.price}</para>

      <button>{props.button}</button>
    </Card>
  );
};

export default ProductPrice;
