import { React } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action';

import classes from './FlterTransplant.module.scss';

const FlterTransplant = ({
  filterTransfersAll,
  filterTransfers,
  filterTransfersZero,
  filterTransfersOne,
  filterTransfersTwo,
  filterTransfersThree,
}) => {
  return (
    <div className={classes.flter_transplant}>
      <div className={classes.flter_transplant__title}>Количество пересадок</div>
      <label className={classes.flter_transplant__item}>
        <input
          className={classes.flter_transplant__checkbox}
          onChange={() => {
            filterTransfersAll();
          }}
          type="checkbox"
          checked={filterTransfers.all}
        />
        <span className={classes.flter_transplant__text}> Все</span>
      </label>

      <label className={classes.flter_transplant__item}>
        <input
          className={classes.flter_transplant__checkbox}
          onChange={() => {
            filterTransfersZero();
          }}
          type="checkbox"
          checked={filterTransfers.zero}
        />
        <span className={classes.flter_transplant__text}> Без пересадок</span>
      </label>

      <label className={classes.flter_transplant__item}>
        <input
          className={classes.flter_transplant__checkbox}
          onChange={() => {
            filterTransfersOne();
          }}
          type="checkbox"
          checked={filterTransfers.one}
        />
        <span className={classes.flter_transplant__text}>1 пересадка</span>
      </label>

      <label className={classes.flter_transplant__item}>
        <input
          className={classes.flter_transplant__checkbox}
          onChange={() => {
            filterTransfersTwo();
          }}
          type="checkbox"
          checked={filterTransfers.two}
        />
        <span className={classes.flter_transplant__text}>2 пересадки</span>
      </label>

      <label className={classes.flter_transplant__item}>
        <input
          className={classes.flter_transplant__checkbox}
          onChange={() => {
            filterTransfersThree();
          }}
          type="checkbox"
          checked={filterTransfers.three}
        />
        <span className={classes.flter_transplant__text}>3 пересадки</span>
      </label>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    filterTransfers: store.filterTransfers,
  };
};

export default connect(mapStateToProps, actions)(FlterTransplant);
