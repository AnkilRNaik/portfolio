import React from 'react';
import profileImage from '../images/ankil.jpeg';

function Home() {
  const message = "Hello! My name is...Ankil Naik.";
  return (
    <div>
      <img src={profileImage}></img>
      <p>{message}</p>
    </div>
  );
}

export default Home;