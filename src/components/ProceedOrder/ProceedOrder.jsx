// // src/pages/ProceedOrder.js

// import React, { useState } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";

// const ProceedOrder = () => {
//   const [paymentInfo, setPaymentInfo] = useState({
//     name: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const handlePaymentChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
//   };

//   const handleSubmitPayment = (e) => {
//     e.preventDefault();
//     // Add your payment processing logic here
//     console.log("Payment Info Submitted: ", paymentInfo);
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <h2>Payment Information</h2>
//           <Form onSubmit={handleSubmitPayment}>
//             <Form.Group controlId="formName">
//               <Form.Label>Name on Card</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="name"
//                 value={paymentInfo.name}
//                 onChange={handlePaymentChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formCardNumber">
//               <Form.Label>Card Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter card number"
//                 name="cardNumber"
//                 value={paymentInfo.cardNumber}
//                 onChange={handlePaymentChange}
//                 required
//               />
//             </Form.Group>
//             <Row>
//               <Col>
//                 <Form.Group controlId="formExpiryDate">
//                   <Form.Label>Expiry Date</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="MM/YY"
//                     name="expiryDate"
//                     value={paymentInfo.expiryDate}
//                     onChange={handlePaymentChange}
//                     required
//                   />
//                 </Form.Group>
//               </Col>
//               <Col>
//                 <Form.Group controlId="formCvv">
//                   <Form.Label>CVV</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="CVV"
//                     name="cvv"
//                     value={paymentInfo.cvv}
//                     onChange={handlePaymentChange}
//                     required
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Button variant="success" type="submit">
//               Place Order
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProceedOrder;
