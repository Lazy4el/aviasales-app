import { useEffect, React } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action';
import FlightItem from '../FlightItem/FlightItem.jsx';
import { AlertFilter, ErrorDate } from '../Alert/Alert.jsx';
import ShowMore from '../ShowMore/ShowMore.jsx';
import Loader from '../Lodaer/Loader.jsx';

import classes from './FlightList.module.scss';

const FlightList = (store) => {
  const { tickets, sortTab, filterTransfers, ticketsError } = store;

  let filterTikets = [...tickets];
  let selectedFilters = [10];
  let doneFilterTikets;

  for (let filter in filterTransfers) {
    if (filterTransfers['all']) selectedFilters.push(10);
    if (filterTransfers['zero']) selectedFilters.push(0);
    if (filterTransfers['one']) selectedFilters.push(1);
    if (filterTransfers['two']) selectedFilters.push(2);
    if (filterTransfers['three']) selectedFilters.push(3);
    filter;
  }
  selectedFilters = new Set([...selectedFilters]);
  selectedFilters = [...selectedFilters];

  if (ticketsError) return <ErrorDate></ErrorDate>;

  useEffect(() => {
    const { getIdTikets } = actions;
    getIdTikets(store);
  }, []);

  if (!filterTikets.length) return null;

  // Фильтр по табам
  switch (sortTab) {
    case 'SORT_BY_CHEAPEST':
      filterTikets.sort((a, b) => (a.price > b.price ? 1 : -1));
      break;
    case 'SORT_BY_TIME':
      filterTikets.sort((a, b) => {
        const aSum = a.segments[0].duration + a.segments[1].duration;
        const bSum = b.segments[0].duration + b.segments[1].duration;
        return aSum > bSum ? 1 : -1;
      });
      break;
    case 'SORT_BY_OPTIMAL':
      filterTikets.sort((a, b) => {
        const aSum = a.segments[0].duration + a.segments[1].duration;
        const bSum = b.segments[0].duration + b.segments[1].duration;
        return aSum + a.price > bSum + b.price ? 1 : -1;
      });
      break;
    default:
      return filterTikets;
  }

  // Фильтр по Фильтру
  filterTikets = filterTikets.filter((ticket) => {
    const ticketTransfersCount = ticket.segments[0].stops.length + ticket.segments[1].stops.length;
    return selectedFilters.includes(ticketTransfersCount);
  });

  doneFilterTikets = filterTikets.slice(0, store.ticketsCounter).map((element, idx) => {
    return <FlightItem key={idx} elem={element}></FlightItem>;
  });

  // Рендер
  const renderTikets = !filterTikets.length ? <AlertFilter></AlertFilter> : doneFilterTikets;

  const renderButton = filterTikets.length ? <ShowMore></ShowMore> : null;

  const loading = store.ticketsLoading ? <Loader></Loader> : null;
  return (
    <div className={classes.flight_list}>
      {renderTikets}
      {renderButton}
      {loading}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    filterTransfers: store.filterTransfers,
    ticketsError: store.ticketsError,
    tickets: store.tickets,
    sortTab: store.sortTab,
    ticketsCounter: store.ticketsCounter,
    ticketsLoading: store.ticketsLoading,
  };
};
export default connect(mapStateToProps, actions)(FlightList);
