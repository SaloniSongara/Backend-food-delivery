import React from 'react'

const AboutUs = () => {
    const headingStyle = {
        fontWeight: 'bold',
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '10px',
        fontFamily: 'Arial, sans-serif',
    };

    const textStyle = {
        textAlign: 'center',
        fontSize: '16px',
        fontFamily: 'Arial, sans-serif',
    };

    const containerStyle = {
        padding: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={headingStyle}>
                Welcome to YummyFood
            </div>
            <div style={textStyle}>
                <p>
                    Where deliciousness meets convenience! We are your go-to food delivery service, committed to bringing the best culinary experiences right to your doorstep. Whether you're craving a comforting homemade meal, exploring exotic cuisines, or satisfying late-night hunger pangs, we've got you covered with a wide variety of options that cater to every taste and preference.
                </p>
            </div>
            <div style={headingStyle}>
                Our Story
            </div>
            <div style={textStyle}>
                <p>
                    Founded in 2024, YummyFood was born out of a passion for food and a desire to make it accessible to everyone, everywhere. We recognized the growing need for a reliable and efficient food delivery service that not only provides a diverse selection of dishes but also ensures the quality and freshness of every meal. What started as a small operation has now grown into a trusted platform, connecting thousands of customers with their favorite restaurants and home chefs.
                </p>
            </div>
            <div style={headingStyle}>
                What We Offer
            </div>
            <div style={textStyle}>
                <p>
                    At YummyFood, we believe that food is more than just sustenance; it's an experience. That's why we've partnered with a wide range of restaurants, eateries, and home chefs to offer you a curated selection of dishes from around the world. From traditional Indian delicacies to global favorites, our menu is designed to satisfy your cravings, no matter the occasion. Whether you're in the mood for a hearty breakfast, a quick lunch, or a gourmet dinner, our app makes it easy to find exactly what you're looking for.
                </p>
            </div>
            <div style={headingStyle}>
                Join Us on Our Journey
            </div>
            <div style={textStyle}>
                <p>
                    We are more than just a food delivery service; we are a community of food lovers, united by our shared passion for great food. Whether you're a busy professional, a student, or someone who simply loves the convenience of food delivery, YummyFood is here to make your life a little easier and a lot more delicious.
                </p>
            </div>
            <p style={textStyle}>
                Thank you for choosing YummyFood. We look forward to serving you!
            </p>
        </div>
    )
}

export default AboutUs
