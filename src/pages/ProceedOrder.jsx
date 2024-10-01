import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../app/features/cart/cartSlice";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ProceedOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();

    // Generate a unique order ID
    const orderId = uuidv4();

    // Store payment info in local storage
    localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
    localStorage.setItem("orderId", orderId); // Store the order ID

    // Clear the cart after the order is placed
    dispatch(clearCart());

    alert(`Order placed successfully! Your Order ID is: ${orderId}`);

    // Navigate to the Invoice page with total price
    localStorage.setItem("totalPrice", totalPrice); // Store total price
    navigate("/invoice");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Payment Information</h2>
          <Form onSubmit={handleSubmitPayment}>
            <Form.Group controlId="formName">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={paymentInfo.name}
                onChange={handlePaymentChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handlePaymentChange}
                required
                pattern="[0-9]*" // Accept only digits
                inputMode="numeric" // Numeric keyboard for mobile
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="formExpiryDate">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    name="expiryDate"
                    value={paymentInfo.expiryDate}
                    onChange={handlePaymentChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCvv">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CVV"
                    name="cvv"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentChange}
                    required
                    pattern="[0-9]*" // Accept only digits
                    inputMode="numeric" // Numeric keyboard for mobile
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button 
              variant="success" 
              type="submit" 
              className="mt-3"
            >
              Place Order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProceedOrder;
