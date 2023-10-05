import React, { useState } from 'react';
import './menu-component.css';

const MenuComponent = () => {
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);

  const increaseQuantity1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const decreaseQuantity1 = () => {
    if (quantity1 > 0) {
      setQuantity1(quantity1 - 1);
    }
  };

  const increaseQuantity2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const decreaseQuantity2 = () => {
    if (quantity2 > 0) {
      setQuantity2(quantity2 - 1);
    }
  };

  const increaseQuantity3 = () => {
    setQuantity3(quantity3 + 1);
  };

  const decreaseQuantity3 = () => {
    if (quantity3 > 0) {
      setQuantity3(quantity3 - 1);
    }
  };

  const increaseQuantity4 = () => {
    setQuantity4(quantity4 + 1);
  };

  const decreaseQuantity4 = () => {
    if (quantity4 > 0) {
      setQuantity4(quantity4 - 1);
    }
  };

  return (
    <div className="menu-container">
      <span className="mu-subtitle">Discover</span>
      <h1 className="mu-subtitle">OUR MENU</h1>
      <div className="menu">
        <div className="menu-item">
          <img src={process.env.PUBLIC_URL + "images/home/slider/M1.jpg"} alt="Food 1" />
          <h3>SEFFA</h3>
          <p>Un plat sucré-salé à base de vermicelles ou de semoule de blé dur, cuits à la vapeur et décorés de poudre de cannelle, des raisins secs ou des abricots séchés et des amandes entières ou effilées ou des noix et souvent saupoudré de sucre glace.</p>
          <span>Prix : $15.95</span>
          <div className="quantity">
            <button onClick={decreaseQuantity1}>-</button>
            <span>{quantity1}</span>
            <button onClick={increaseQuantity1}>+</button>
          </div>
          <button>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src={process.env.PUBLIC_URL + "images/home/slider/M2.jpg"} alt="Food 2" />
          <h3>COUSCOUS</h3>
          <p>Il s’agit de la semoule de blé cuite dans un couscoussier à la vapeur et d’un corps gras qui peut être soit du beurre ou généralement de l’huile d’olive.
          contient une sélection très raffinée de légumes tels que : les carottes, les potirons et les tomates. Il y a également des épices comme le safran, le gingembre, le ras-el-hanout. Vous pouvez y mettre des pommes de terre ou des patates douces ou encore des fèves.
          </p>
          <span>Prix : $12.95</span>
          <div className="quantity">
            <button onClick={decreaseQuantity2}>-</button>
            <span>{quantity2}</span>
            <button onClick={increaseQuantity2}>+</button>
          </div>
          <button>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src={process.env.PUBLIC_URL + "images/home/slider/M3.jpg"} alt="Food 3" />
          <h3>PASTILLA</h3>
          <p>un plat traditionnel constitué d'une enveloppe en feuilles de brick, une base d'oignons, de persil, de coriandre, d'œuf dur et d'amandes, ce mélange de sucré et de salé est parfumé à la cannelle.</p>
          <span>Prix : $18.95</span>
          <div className="quantity">
            <button onClick={decreaseQuantity3}>-</button>
            <span>{quantity3}</span>
            <button onClick={increaseQuantity3}>+</button>
          </div>
          <button>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src={process.env.PUBLIC_URL + "images/home/slider/M4.jpg"} alt="Food 4" />
          <h3>BRIOUAT</h3>
          <p>DLe triangle aux amandes est la variété sucrée ; il est préparé à base d'amandes grillées, sucre, eau de fleur d'oranger et cannelle, le tout enveloppé dans une feuille de brik (warqa au Maroc), en forme de triangle et enrobé de miel.</p>
          <span>Prix : $18.95</span>
          <div className="quantity">
            <button onClick={decreaseQuantity4}>-</button>
            <span>{quantity4}</span>
            <button onClick={increaseQuantity4}>+</button>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
