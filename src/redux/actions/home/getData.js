import axios from 'axios';

import TYPE from '../../types/home';

export const getData = ({ filterBy = 'search', pageNo = 0, ...rest }) => async (dispatch) => {
  dispatch({ type: TYPE.REQ_DATA });

  let url = `http://hn.algolia.com/api/v1/${filterBy}?page=${pageNo}`;
  if (rest) {
    url = `http://hn.algolia.com/api/v1/${filterBy}?page=${pageNo}&numericFilters=points>0`;
  }

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
