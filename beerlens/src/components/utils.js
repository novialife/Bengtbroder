import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



export function Curtain({ title, info }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {info.map((item, index) => (
                    <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function ImageButton(onclick_path, image_path) {
    return (
        <button
            style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                padding: 0
            }}
            onClick={() => console.log({onclick_path})}>
            <div className="icon">
                <img src={image_path} alt="image"/>
            </div>
        </button>
    );
}

export function HoverDropdown({ title, items, toggleImageSrc }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <Dropdown 
        show={isShown} 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="transparent-dropdown" // marginRight for spacing between dropdowns
        >
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ fontSize: '1.5rem' }}>
            <img src={toggleImageSrc} alt={title} style={{ marginRight: '8px', height: '20px', verticalAlign: 'middle' }} />
            {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {items.map((item, index) => (
            <Dropdown.Item key={index} href="#/action">{item}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
        </Dropdown>
    );
}

export const CardComponent = ({ img_path, title, content, price }) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img_path} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button variant="primary">{price}</Button>
      </Card.Body>
    </Card>
);

export const HorizontalScrollComponent = ({ cardData }) => (
<div className="horizontal-scroll">
    {cardData.map((data, idx) => (
        <CardComponent key={idx} img_path={data.img_path} title={data.title} content={data.content} price={data.price} />
    ))}
</div>
);