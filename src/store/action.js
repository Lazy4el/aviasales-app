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
export const tiketsError = () => ({ type: 'TIKETS_ERROR' });

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
    if (e === true) return dispatch.tiketsError();
    getTikets(id, dispatch);
  }
};

export const getIdTikets = async (dispatch) => {
  const searchId = await Service.getId();
  const id = searchId.searchId;
  await getTikets(id, dispatch);
};
