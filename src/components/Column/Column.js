import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
    static propTypes = {
      title: PropTypes.node,
      children: PropTypes.node,
    }

    render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.colFirst}{this.props.colSecond}{this.props.colThird}</h3>
      </section>
    )
  }
}

export default Column;