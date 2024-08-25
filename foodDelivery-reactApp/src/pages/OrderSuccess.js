import React from 'react';
import './OrderSuccess.css';
import { useNavigate } from 'react-router-dom';

function OrderSuccess({ paymentSuccess = true }) {

    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/home');
    };

    const containerClass = paymentSuccess ? "order-success-card" : "order-fail-card";
    const message = paymentSuccess
        ? { title: "Awesome!", subTitle: "Your order is accepted!", delivery: "Your food will be delivered in 15 minutes." }
        : { title: "Oops!", subTitle: "Your payment failed!", delivery: "Please try again to complete your order." };


    return (
        <div className="order-success-container text-center">
            <div className={containerClass}>
                <div className="checkmark-container">
                    <img src="YummyFood.jpg" alt="Success Checkmark" className="checkmark-icon" />
                </div>
                <h2 className="awesome-message">{message.title}</h2>
                <h3 className="congrats-message">{message.subTitle}</h3>
                <p className="delivery-message">{message.delivery}</p>
                <button className="btn btn-primary mt-3" onClick={handleHome}>
                    {paymentSuccess ? "More Hungry? Let's do it again!" : "Retry Payment"}
                </button>
            </div>
        </div>
    );
}

export default OrderSuccess;