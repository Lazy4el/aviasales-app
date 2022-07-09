import { initialState } from './store';

const reducer = (state = initialState, action) => {
  const { all, zero, one, two, three } = state.filterTransfers;

  switch (action.type) {
    case 'SORT_BY_CHEAPEST':
      return { ...state, sortTab: 'SORT_BY_CHEAPEST' };

    case 'SORT_BY_TIME':
      return { ...state, sortTab: 'SORT_BY_TIME' };

    case 'SORT_BY_OPTIMAL':
      return { ...state, sortTab: 'SORT_BY_OPTIMAL' };

    case 'FILTER_TRANSFERS_ALL':
      return {
        ...state,
        filterTransfers: {
          all: !all,
          zero: !all,
          one: !all,
          two: !all,
          three: !all,
        },
      };

    case 'FILTER_TRANSFERS_ZERO':
      return {
        ...state,
        filterTransfers: {
          ...state.filterTransfers,
          all: !zero && one && two && three,
          zero: !zero,
        },
      };

    case 'FILTER_TRANSFERS_ONE':
      return {
        ...state,
        filterTransfers: {
          ...state.filterTransfers,
          all: zero && !one && two && three,
          one: !one,
        },
      };

    case 'FILTER_TRANSFERS_TWO':
      return {
        ...state,
        filterTransfers: {
          ...state.filterTransfers,
          all: zero && one && !two && three,
          two: !two,
        },
      };

    case 'FILTER_TRANSFERS_THREE':
      return {
        ...state,
        filterTransfers: {
          ...state.filterTransfers,
          all: zero && one && two && !three,
          three: !three,
        },
      };

    case 'TIKETS_LOADING':
      return {
        ...state,
        ticketsLoading: false,
      };

    case 'TIKETS_ADD':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };

    case 'TIKETS_LOADED':
      return {
        ...state,
        ticketsLoading: false,
      };

    case 'TIKETS_ERROR':
      return {
        ...state,
        ticketsError: true,
      };

    case 'VIEW_MORE_TIKETS':
      return {
        ...state,
        ticketsCounter: state.ticketsCounter + 5,
      };

    default:
      return state;
  }
};

export default reducer;
