import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetail.css';


const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    
    useEffect( ()=>{
        const url = `http://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, []);
    
    return (
        <div className="details-info">
            <p> <strong>Name:</strong> {friend.name}</p>;
            <p> <strong>username:</strong> {friend.username}</p>;
            <p> <strong>Email:</strong> {friend.email}</p>;
            <p> <strong>Phone:</strong> {friend.phone}</p>;
            <p> <strong>Website:</strong> {friend.website}</p>;
            
            
        </div>
    );
};

export default FriendDetail;