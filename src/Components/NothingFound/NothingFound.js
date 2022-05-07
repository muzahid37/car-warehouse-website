import React from 'react';
import { Link } from 'react-router-dom';
import './NothingFound.css'

const NothingFound = () => {
    return (
        <div className='container'>
            <div className="row">
               <div className="nothing-container">
               <img src="https://i.ibb.co/3zHkYBS/images.png" alt="" />
               <h2>sorry nothing found .<Link to="/">Click heare</Link> tor go home</h2>
               </div>
            </div>
            
        </div>
    );
};

export default NothingFound;