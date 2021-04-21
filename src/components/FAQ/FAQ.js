import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { faqData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero key={faqData} {...faqData}/>
    <p>{faqData.description}</p>
  </Container>
);

export default FAQ;