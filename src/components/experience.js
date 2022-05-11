import React from 'react';
import { experience } from '../content/experience.json';

function Experience() {
  return (
    <div> {
      experience.map((item, i) => (
        <div key={i}>
          <h2>{item.company}</h2>
          <h4>{item.title}</h4>
          <ul>
            {item.duties ? item.duties.split("/").map(duty => <li> {duty} </li>) : ""}
          </ul>
        </div>
      ))
    }
    </div>
  );
}

export default Experience;