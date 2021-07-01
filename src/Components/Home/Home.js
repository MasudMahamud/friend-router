import React from 'react';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Home.css';


const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(  ()=>{
        const url = `http://jsonplaceholder.typicode.com/users`
        fetch(url)
        .then(res=> res.json())
        .then(data => setFriends(data) )
    },[]);

    return (
        <div>
            <h2 className="main-title">Friends: {friends.length}</h2>
      {
        friends.map (friend => <Friend friend={friend}></Friend> )
      }
        </div>
    );
};

export default Home;