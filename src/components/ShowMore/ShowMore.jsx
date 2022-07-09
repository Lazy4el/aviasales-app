import { React } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action';

import classes from './ShowMore.module.scss';

const ShowMore = (store) => {
  return (
    <div className={classes.show_more}>
      <button
        className={classes.show_more__button}
        onClick={() => {
          store.viewMoreTikets();
        }}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    ticketsCounter: store.ticketsCounter,
  };
};

export default connect(mapStateToProps, actions)(ShowMore);
