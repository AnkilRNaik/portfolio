import React from 'react';
import { aboutMeText } from '../content/aboutMe.json';

function AboutMe() {
  return (
    <div>
      <p>{aboutMeText}</p>
    </div>
  );
}

export default AboutMe;