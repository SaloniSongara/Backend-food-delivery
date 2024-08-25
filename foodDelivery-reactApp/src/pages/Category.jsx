import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ItemsContext } from '../context/ContextProvider';
import backgroundImage from "../assets/images/bgFD.jpg";

function FoodCard({ item, isSelected, toggleSelect }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="card-img-top" src={item.imageUrl} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <div className='AI-P-button'>
                    <Button
                        className={isSelected ? 'selecteditem' : 'notselected'}
                        onClick={() => toggleSelect(item)}
                    >
                        {isSelected ? 'Selected' : 'Add item'}
                    </Button>
                    <Button className='pricebtn'>Rs.{item.price}</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

function Category() {
    const { selectedItems, setSelectedItems } = useContext(ItemsContext);
    const { slug } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                let response;
                if (slug === 'veg') {
                    response = await axios.get('http://localhost:8081/food/veg');
                } else if (slug === 'non-veg') {
                    response = await axios.get('http://localhost:8081/food/non-veg');
                } else if (slug === 'chinese') {
                    response = await axios.get('http://localhost:8081/food/chinese');
                }
                console.log(response);
                console.log(response.data);

                if (response) {
                    setItems(response.data);
                }
            } catch (error) {
                console.error('Error fetching the food items:', error);
            }
        };

        fetchItems();
    }, [slug]);

    const toggleSelect = (item) => {
        setSelectedItems((prevSelectedItems) => {
            const found = prevSelectedItems.find((element) => element.id === item.id);
            if (found) {
                return prevSelectedItems.filter(element => element.id !== item.id);
            } else {
                return [...prevSelectedItems, item];
            }
        });
    };

    const sectionStyle = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <>
            <div style={sectionStyle}>
                <div className='d-flex flex-wrap gap-2 justify-content-center mt-4'>
                    {items.map((item) => (
                        <FoodCard
                            key={item.id}
                            item={item}
                            isSelected={!!selectedItems.find((element) => element.id === item.id)}
                            toggleSelect={toggleSelect}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Category;
