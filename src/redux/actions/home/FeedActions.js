import axios from 'axios';

import TYPE from '../../types/home';

const BASE_URL = 'https://hn.algolia.com/api/v1/';

export const getFeeds = ({ filterBy = 'search', pageNo = 0 }) => async (
  dispatch
) => {
  dispatch({ type: TYPE.REQ_DATA });

  const url = `${BASE_URL}${filterBy}?page=${pageNo}&numericFilters=points>0`;

  try {
    const res = await axios.get(url);

    dispatch({
      type: TYPE.RES_DATA,
      data: res.data.hits,
    });

    return res;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    // eslint-disable-next-line no-console
    dispatch({
      type: TYPE.ERROR,
      data: true,
    });
  }
};

export const removeFeed = (objectID) => (dispatch) => {
  dispatch({
    type: TYPE.REMOVE_FEED,
    objectID,
  });
};

export const upvoteFeed = (objectID) => (dispatch) => {
  dispatch({
    type: TYPE.UPVOTE_FEED,
    objectID,
  });
};

export const updateError = (error) => (dispatch) => {
  dispatch({
    type: TYPE.ERROR,
    data: error,
  });
};
