import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderSuccess.css';
import backgroundImage from "../assets/images/paymentBgC.jpg";

const paymentOptions = [
    { id: 1, name: 'Credit Card', logo: 'creditcard.png', linkeText: 'Enter Details' },
    { id: 2, name: 'Debit Card', logo: 'debitcard.png', linkeText: 'Enter Details' },
    { id: 3, name: 'UPI', logo: 'upi.png', linkeText: 'Enter UPI ID' },
    { id: 4, name: 'Cash On Delivery', logo: 'cod.png', linkeText: 'Enter Address' },
];

function PaymentOptions() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        upiId: '',
        address: ''
    });

    const navigate = useNavigate();

    const resetForm = () => {
        setPaymentDetails({
            cardHolderName: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            upiId: '',
            address: ''
        });
    };

    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
        resetForm();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handlePayment = () => {
        if (selectedOption === 1 || selectedOption === 2) {
            alert(`Payment processed using Card: ${paymentDetails.cardNumber}, Card Holder: ${paymentDetails.cardHolderName}`);
        } else if (selectedOption === 3) {
            alert(`Payment processed using UPI: ${paymentDetails.upiId}`);
        } else if (selectedOption === 4) {
            alert(`Cash on Delivery selected. Address: ${paymentDetails.address}`);
        }
        resetForm();
        navigate('/order-success');
    };

    const sectionStyle = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "40px",
        backgroundAttachment: "fixed",
    };

    return (
        <div style={sectionStyle}>
        <div className="payment-options-container">
            <h3 className="payment-title">PAYMENTS</h3>
            <div className="list-group">
                {paymentOptions.map(option => (
                    <div
                        key={option.id}
                        className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${selectedOption === option.id ? 'active' : ''}`}
                        onClick={() => handleOptionSelect(option.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="d-flex align-items-center">
                            <img src={option.logo} alt={option.name} style={{ width: '30px', marginRight: '15px' }} />
                            {option.name}
                        </div>
                        <span className="text-primary">{option.linkeText}</span>
                    </div>
                ))}
            </div>

            {selectedOption === 1 || selectedOption === 2 ? (
                <div className="payment-form">
                    <h4>Enter Card Details</h4>
                    <input
                        type="text"
                        name="cardHolderName"
                        placeholder="Card Holder Name"
                        value={paymentDetails.cardHolderName}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={paymentDetails.cardNumber}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        name="expiryDate"
                        placeholder="Expiry Date (MM/YY)"
                        value={paymentDetails.expiryDate}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={paymentDetails.cvv}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                </div>
            ) : selectedOption === 3 ? (
                <div className="payment-form">
                    <h4>Enter UPI Details</h4>
                    <input
                        type="text"
                        name="upiId"
                        placeholder="UPI ID"
                        value={paymentDetails.upiId}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                </div>
            ) : selectedOption === 4 ? (
                <div className="payment-form">
                    <h4>Enter Address for Cash on Delivery</h4>
                    <textarea
                        name="address"
                        placeholder="Delivery Address"
                        value={paymentDetails.address}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                </div>
            ) : null}

            <button
                className="btn btn-success mt-4 w-100"
                onClick={handlePayment}
                disabled={!selectedOption || (selectedOption !== 4 && !paymentDetails.cardNumber && !paymentDetails.upiId)}
            >
                {selectedOption ? `PAY USING ${paymentOptions.find(opt => opt.id === selectedOption).name.toUpperCase()}` : 'SELECT A PAYMENT OPTION'}
            </button>
        </div>
     </div>
    );
}

export default PaymentOptions;
