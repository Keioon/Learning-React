import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }

  static defaultProps = {
    title: settings.cardCreatorText,
  }

  render(){
    const {title} = this.props;
    return (
      <section className={styles.component}>
        {title}
      </section>
    );
  }
}
export default Card;