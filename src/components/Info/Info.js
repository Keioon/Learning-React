import React from 'react';
import { infoData } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const Info = () => (
  <Container>
    <Hero key={infoData}{...infoData}/>
    <p>{infoData.description}</p>
  </Container>
);

export default Info;