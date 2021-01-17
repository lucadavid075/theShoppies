import React from 'react'
import {Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const AlertComponent = () => {
     return (
         <Alert className="alert-box">
            You have 5 nominees already click
           <Link to="/nominations"> nominees</Link> to see all of them.
         </Alert>
        );
}

export default AlertComponent