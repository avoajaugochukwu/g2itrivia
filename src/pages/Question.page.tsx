import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const { number } = useParams();

  console.log(number);

  return (
    <div>
      About.page
      {' '}
      {JSON.stringify(number)}
    </div>
  );
};

export default About;
