import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { FAQData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero key={FAQData}/>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
};

export default FAQ;