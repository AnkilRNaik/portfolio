import React from 'react';
import { education } from '../content/education.json';

function Education() {
  let joinDegreeToMajor = "in";
  return (
    <div> {
      education.map((item, i) => (
        <div key={i}>
          <h2>{item.university}</h2>
          <h4>{item.degree} {joinDegreeToMajor} {item.major} - {item.dateGraduated}</h4>
        </div>
      ))
    }
    </div>
  );
}

export default Education;