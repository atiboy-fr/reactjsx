import './App.css';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import products from './product';

const App = () => {
    const firstName = "Atau";

    return (
        <div>
            <div>
                {products.map(product => (
                    <div key={product.id} md={4}>
                        <div style={{ margin: '20px' }}>
                            <Image image={product.imageLink} />
                            <div>
                                <Name name={product.name} />
                                <Price price={product.price} />
                                <Description description={product.description} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <p>Hello, {firstName ? firstName : 'there'}!</p>
                {firstName && <img src={products[0].image} alt="Your Profile" style={{ width: '100px', height: '100px' }} />}
            </div>
        </div>
    );
};

export default App;


