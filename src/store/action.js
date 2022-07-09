import Service from '../components/Service/Service.js';

export const sortCheapest = () => ({ type: 'SORT_BY_CHEAPEST' });
export const sortTime = () => ({ type: 'SORT_BY_TIME' });
export const sortOptimal = () => ({ type: 'SORT_BY_OPTIMAL' });

export const filterTransfersAll = () => ({ type: 'FILTER_TRANSFERS_ALL' });
export const filterTransfersZero = () => ({ type: 'FILTER_TRANSFERS_ZERO' });
export const filterTransfersOne = () => ({ type: 'FILTER_TRANSFERS_ONE' });
export const filterTransfersTwo = () => ({ type: 'FILTER_TRANSFERS_TWO' });
export const filterTransfersThree = () => ({ type: 'FILTER_TRANSFERS_THREE' });

export const tiketsLoading = () => ({ type: 'TIKETS_LOADING' });
export const tiketsLoaded = () => ({ type: 'TIKETS_LOADED' });
export const tiketsAdd = (payload) => ({ type: 'TIKETS_ADD', payload });
export const tiketsError = (payload) => ({ type: 'TIKETS_ERROR', payload });

export const viewMoreTikets = () => ({ type: 'VIEW_MORE_TIKETS' });

const getTikets = async (id, dispatch) => {
  try {
    const response = await Service.getTikets(id);
    const tikets = response.tickets;
    const stop = response.stop;
    if (stop) {
      return dispatch.tiketsLoaded(tikets);
    } else if (tikets.length) {
      dispatch.tiketsAdd(tikets);
      getTikets(id, dispatch);
    }
  } catch (e) {
    getTikets(id, dispatch);
  }
};

export const getIdTikets = async (dispatch) => {
  const searchId = await Service.getId();
  const id = searchId.searchId;
  await getTikets(id, dispatch);
};
