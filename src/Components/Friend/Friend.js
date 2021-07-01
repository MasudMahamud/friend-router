import React from 'react';
import { useHistory } from 'react-router-dom';
import './Friend.css';
import { Button } from '@material-ui/core';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) =>{
        const url = `/friend/${id}`;
        history.push(url);
    }
    return (
        <div className="friends">
            <h3>Name: {name}</h3>
            <p>Email: {email} </p>
            {/* <p><Link to={`/friend/${id}`}> <button>see more {id} </button> </Link> </p> */}
            <Button variant="contained" color="primary" onClick={() => handleClick(id)}>Details</Button>
        </div>
    );
};

export default Friend;