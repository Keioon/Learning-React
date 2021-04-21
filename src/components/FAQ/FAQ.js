import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { faqData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero key={faqData}/>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
};

export default FAQ;