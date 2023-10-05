import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Ajouter un produit au panier
  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si le produit existe déjà dans le panier, augmentez la quantité
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      // Sinon, ajoutez le produit au panier
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Supprimer un produit du panier
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Calculer le total du panier
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <Container>
      <h1>Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ListGroup>
            {cart.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row>
                  <Col xs={6}>{product.name}</Col>
                  <Col xs={3}>${product.price.toFixed(2)}</Col>
                  <Col xs={3}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Supprimer
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span>Quantité: {product.quantity}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-3">
            <h4>Total: ${calculateTotal().toFixed(2)}</h4>
            <Button variant="primary" size="lg">
              Commander
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
