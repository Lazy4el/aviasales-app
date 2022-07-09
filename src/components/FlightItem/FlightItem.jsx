import { React } from 'react';

import { dateTimeFormat, transferTimeFormat, transfersNumFormat, priceFormat } from '../Helpers/Helpers';
import { baseUrlImageLogo } from '../Constants/Constants';

import classes from './FlightItem.module.scss';

const FlightItem = ({ elem }) => {
  const { price, segments, carrier } = elem;
  const imgAirlineLogo = carrier ? `${baseUrlImageLogo}${carrier}.png` : null;
  return (
    <div className={classes.flight_item}>
      <div className={classes.flight_item__head}>
        <span className={classes.flight_item__title}>{priceFormat(price)} Р</span>
        <img className={classes.flight_item__img} src={imgAirlineLogo} alt={carrier} />
      </div>

      <div className={classes.flight_item__body}>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>
            {segments[0].origin} – {segments[0].destination}
          </span>
          <span className={classes.flight_item__description_text}>
            {transferTimeFormat(segments[0].date, segments[0].duration)}
          </span>
        </div>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>В пути</span>
          <span className={classes.flight_item__description_text}>{dateTimeFormat(segments[0].duration)}</span>
        </div>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>{transfersNumFormat(segments[0].stops.length)}</span>
          <span className={classes.flight_item__description_text}>{segments[0].stops.join(', ')}</span>
        </div>

        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>
            {segments[1].origin} – {segments[1].destination}
          </span>
          <span className={classes.flight_item__description_text}>
            {transferTimeFormat(segments[1].date, segments[1].duration)}
          </span>
        </div>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>В пути</span>
          <span className={classes.flight_item__description_text}>{dateTimeFormat(segments[1].duration)}</span>
        </div>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>{transfersNumFormat(segments[1].stops.length)}</span>
          <span className={classes.flight_item__description_text}>{segments[1].stops.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;
