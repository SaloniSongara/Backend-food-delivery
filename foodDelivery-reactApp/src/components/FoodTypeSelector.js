import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../components/FoodType.css";
import vegImg from "../assets/images/vegFood.jpg";
import nonvegImg from "../assets/images/nonvegFood.jpg";
import chineseImg from "../assets/images/chineseFood.jpg";
import backgroundImage from "../assets/images/categoryBbg.jpg";

function FoodTypeSelector() {
    const sectionStyle = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <>
            <div style={sectionStyle} className='mainContainer'>
                <Card className='cardFP'>
                    <Card.Img className='foodType1' variant="top" src={vegImg} />
                    <Card.Body>
                        <Card.Title>Veg Food..</Card.Title>
                        <Card.Text>
                            "we offer a delicious selection of vegetarian dishes here!"
                        </Card.Text>
                        <Button variant="primary" className='SMbtn'><a href='/category/veg' className='text-white'>See more</a></Button>
                    </Card.Body>
                </Card>

                <Card className='cardFP'>
                    <Card.Img className='foodType1' variant="top" src={nonvegImg} />
                    <Card.Body>
                        <Card.Title>Non-Veg food..</Card.Title>
                        <Card.Text>
                            "we serve delicious non-veg dishes here"
                        </Card.Text>
                        <Button variant="primary" className='SMbtn'><a href='/category/non-veg' className='text-white'>See more</a></Button>
                    </Card.Body>
                </Card>

                <Card className='cardFP'>
                    <Card.Img className='foodType1' variant="top" src={chineseImg} />
                    <Card.Body>
                        <Card.Title>Chinese food..</Card.Title>
                        <Card.Text>
                            "Yes, authentic Chinese food is available here!"
                        </Card.Text>
                        <Button variant="primary" className='SMbtn'><a href='/category/chinese' className='text-white'>See more</a></Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default FoodTypeSelector;