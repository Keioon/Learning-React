import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsFromAllList} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  return {
    cards: getCardsFromAllList(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResult);