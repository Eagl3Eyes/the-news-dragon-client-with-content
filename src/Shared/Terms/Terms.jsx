import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt voluptate, aspernatur accusantium consequuntur officia vero dolorum, ex quod in quia alias voluptates! Esse officia corrupti qui eligendi quia vel.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;