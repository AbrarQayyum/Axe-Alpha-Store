import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Invoice = () => {
  const orderId = localStorage.getItem("orderId");
  const totalPrice = localStorage.getItem("totalPrice"); // Fetch total price directly from local storage

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ textAlign: "center" }}>Invoice</h2>
            <p style={{ textAlign: "center" }}>Thank you for shopping with Axe Alpha!</p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>Your Order ID: {orderId}</p>
            <h4 style={{ textAlign: "center", marginTop: "20px" }}>Total Amount: RS{totalPrice}.00</h4>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <Button variant="primary" onClick={() => window.location.reload()}>
                Back to Shop
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Invoice;
