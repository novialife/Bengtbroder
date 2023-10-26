import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/BeerType.css';
import './styles/Dropdown.css';
import { useState } from 'react';

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
                <img src={image_path} alt=''/>
            </div>
        </button>
    );
}

export function Dropdown() {

    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(!open);
      };
    
      const handleSortByName = () => {
        console.log("Sort by name");
        setOpen(false);
      };
    
      const handleSortByRating = () => {
        console.log("Sort by rating");
        setOpen(false);
      };

      const handleSortByPriceAsc = () => {
        console.log("Sort by price ascending");
        setOpen(false);
      };

      const handleSortByPriceDesc = () => {
        console.log("Sort by price descending");
        setOpen(false);
      };

      const trigger = () => {
        return (
          <button className="trigger-button" onClick={handleOpen}>
            <span>Sort by</span>
            <svg className="arrow" width="30" height="30" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z"></path>
            </svg>
          </button>
        );
      }

      const menu = 
        [
            <button onClick={handleSortByName}>Name</button>,
            <button onClick={handleSortByRating}>Rating</button>,
            <button onClick={handleSortByPriceAsc}>Price: Low to High</button>,
            <button onClick={handleSortByPriceDesc}>Price: High to Low</button>
        ]

      return (
        <div className="dropdown">
            {React.cloneElement(trigger(), { onClick: handleOpen 
            })}
            {open ? (
                <ul className="menu">
                {menu.map((menuItem, index) => (
                    <li key={index} className="menu-item">{menuItem}</li>
                ))}
                </ul>
            ) : null}
        </div>
      );
}