import React from 'react';
import styles from './Column.scss';
//import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator';
//import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card';



class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    icon: PropTypes.node,
    cards: PropTypes.array,
  }



  render() {
    const {title, icon, cards} = this.props;
    return (
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

        {/*}
        <div>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>

        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
          */}
      </section>
    );
  }
}

export default Column;