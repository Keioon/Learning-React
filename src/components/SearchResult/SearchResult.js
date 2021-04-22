import React from 'react';
//import Search from './Search';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
//import {settings} from '../../data/dataStore';
import styles from '../Column/Column.scss';
import Container from '../Container/Container.js';

class SearchResult extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  render() {
    const {title, cards, icon} = this.props;
    return(
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>  
            {title}
          </h3>
          
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData}/>
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResult;